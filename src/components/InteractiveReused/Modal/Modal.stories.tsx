import Modal, { ModalProps } from "./Modal";
import "../../../index.css";

export default {
  title: "Modal",
  component: Modal,
  argTypes: {
    variant: {
      type: "string",
      description: "button style variant",
      defaultValue: "primary",
      options: ["briefcase", "add"],
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

const Template = (arg: ModalProps) => <Modal {...arg}>Add</Modal>;

export const ModalStory = Template.bind({});
