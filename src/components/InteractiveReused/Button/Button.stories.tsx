import Button from "./Button";
import "../../../index.css";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    variant: {
      type: "string",
      description: "button style variant",
      defaultValue: "primary",
      options: ["primary", "secondary", "blueButton", "searchButton"],
      control: {
        type: "radio",
      },
    },
    size: {
      type: "string",
      description: "button style variant",
      defaultValue: "primary",
      options: ["sm", "md", "neutral"],
      control: {
        type: "radio",
      },
    },
    children: {
      type: "string",
      name: "label",
      default: "Click me",
    },
  },
};

const Template = (arg: unknown[]) => <Button {...arg}>Add</Button>;

export const ButtonStory = Template.bind({});