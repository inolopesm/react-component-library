import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "./Button";

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

export const Contained: ComponentStory<typeof Button> = () => (
  <Button variant="contained">Button</Button>
);

export const Outlined: ComponentStory<typeof Button> = () => (
  <Button variant="outlined">Button</Button>
);
