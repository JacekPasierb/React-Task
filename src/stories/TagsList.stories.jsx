import React from "react";
import { Provider } from "react-redux";
import { TagsList } from "../components/TagsList/TagsList";
import { store } from "../redux/store";

export default {
  title: "Components/TagsList",
  component: TagsList,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
  argTypes: {
    isLoading: { control: "boolean" }, // Definiowanie typu kontrolki dla args
    isError: { control: "text" }, // Definiowanie typu kontrolki dla args
    tags: { control: "object" }, // Definiowanie typu kontrolki dla args
    total: { control: "number" }, // Definiowanie typu kontrolki dla args
  },
};

export const Default = () => <TagsList />;
export const Loading = () => <TagsList isLoading={true} tags={null}/>;
export const Error = () => <TagsList isError="Błąd wczytywania danych" />;
export const Empty = () => <TagsList tags={[]} total={0}/>;
export const Filled = () => (
  <TagsList
    tags={[
      { name: "Tag 1", count: 10 },
      { name: "Tag 2", count: 20 },
      // Dodaj więcej tagów tutaj, aby zasymulować wypełnioną listę tagów
    ]}
    total={100}
  />
);
