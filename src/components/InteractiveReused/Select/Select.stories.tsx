import Select, { SelectProps } from "./Select";
import "../../../index.css";

export default {
  title: "Select",
  component: Select,
  argTypes: {
    variant: {
      type: "string",
      description: "select style variant",
      defaultValue: "primary",
      options: ["primary"],
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

const Template = (arg: SelectProps) => <Select {...arg}>Select</Select>;

export const SelectStory = Template.bind({});