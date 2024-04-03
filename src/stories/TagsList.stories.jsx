import React from "react";
import { Provider } from "react-redux";
import { TagsList } from "../components/TagsList/TagsList";
import { store } from "../redux/store";

export default {
  title: "Components/TagsList",
  component: TagsList,
  decorators: [
    (Story, { args }) => (
      <Provider store={store}>
        <Story {...args} />
      </Provider>
    ),
  ],
};

const Template = (args) => <TagsList {...args} />;

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
  
};