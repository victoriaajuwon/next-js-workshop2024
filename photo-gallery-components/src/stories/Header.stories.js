import Header from "../components/Header";
import customViewports from "./customViewports";

const user = {
  id: 1,
  username: "Pequeno Pollo",
  first_name: "Little",
  last_name: "Chicken",
  email: "pock@pock.com",
  profile_url: "",
};

export default {
  title: "Components/Header",
  component: Header,
  parameters: {
    viewport: {
      viewports: customViewports,
    },
    layout: "padded",
  },
};

export const Default = {
  args: { user },
};
