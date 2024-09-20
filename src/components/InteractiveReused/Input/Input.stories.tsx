import Input, { InputProps } from "./Input";
import "../../../index.css";

export default {
  title: "Input",
  component: Input,
  argTypes: {
    variant: {
      type: "string",
      description: "input style variant",
      defaultValue: "primary",
      options: ["primary", "secondary"],
      control: {
        type: "radio",
      },
    },
  },
};

const Template = (arg: InputProps) => <Input {...arg} />;
export const InputStory = Template.bind({});