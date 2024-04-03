import React from "react";
import { Provider } from "react-redux";
import { TagsList } from "../components/TagsList/TagsList";
import { store } from "../redux/store";

interface StoryProps {
  isLoading: boolean;
  error: string | null;
  tags: object;
}

export default {
  component: TagsList,
  title: "Components/Tags",
  decorators: [
    (Story: React.ComponentType) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
  argTypes: {
    isLoading: { control: "boolean" },
    error: { control: "text" },
    tags: { control: "object" },
  },
};

const Template: React.FC<StoryProps> = ({ isLoading, error, tags, ...args }) => (
  isLoading && !error ? (
    <p>Wczytywanie Listy Tagów...</p>
  ) : error ? (
    <p>Wystąpił błąd podczas wczytywania listy tagów: {error}</p>
  ) : (
    <TagsList {...args} />
  )
);

export const Basic = Template.bind({});
Basic.args = {
  isLoading: false,
  error: null,
  tags: {},
};

export const TagsListIsLoading = Template.bind({});
TagsListIsLoading.args = {
  isLoading: true,
  error: null,
  tags: {}, 
};

export const TagsListIsError = Template.bind({});
TagsListIsError.args = {
  isLoading: false,
  error: "true",
  tags: {}, 
};
