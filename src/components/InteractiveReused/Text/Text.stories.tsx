import Text, { TextProps } from "./Text";
import "../../../index.css";

export default {
  title: "Text",
  component: Text,
  argTypes: {
    variant: {
      type: "string",
      description: "text style variant",
      defaultValue: "primary",
      options: ["normal", "priceUp", "priceDown", "dark", "blue"],
      control: {
        type: "radio",
      },
    },
    size: {
      type: "string",
      description: "text style variant",
      defaultValue: "primary",
      options: ["normal", "middle", "big"],
      control: {
        type: "radio",
      },
    },
    children: {
      type: "string",
      name: "label",
      default: "Modal opened",
    },
  },
};

const Template = (arg: TextProps) => <Text {...arg}>Text</Text>;

export const TextStory = Template.bind({});
