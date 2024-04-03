import { Provider } from "react-redux";
import { TagsList } from "../components/TagsList/TagsList";
import { store } from "../redux/store";
import { fetchTags } from "../redux/tags/operations";

export default {
  component: TagsList,
  title: "Components/Tags",
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
  argTypes: {
    // Tutaj możesz definiować kontrolki dla różnych właściwości (props) komponentu
    isLoading: Boolean
  },
};
const Template = (args) => <TagsList {...args} />;

export const Basic = Template.bind({});
Basic.args ={
    isLoading: true,

}