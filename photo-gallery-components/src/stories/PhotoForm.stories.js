import PhotoForm from "../components/PhotoForm";
import customViewports from "./customViewports";

const photo = {
  id: 42,
  album_id: 2,
  user_id: 1,
  url: "https://francisbourgouin.nyc3.digitaloceanspaces.com/photos/IMG_6521.jpg",
  title: "Some Photo",
  is_public: 0,
  cover_id: 38,
};

export default {
  title: "Components/Photo/Form",
  component: PhotoForm,
  parameters: {
    viewport: {
      viewports: customViewports,
    },
    layout: "padded",
  },
};

export const Default = {
  args: { ...photo },
};
