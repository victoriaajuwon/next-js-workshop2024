import AlbumForm from "../components/AlbumForm";
import customViewports from "./customViewports";

const album = {
  id: 1,
  user_id: 1,
  title: "Some travel pictures!",
  is_public: 1,
  cover_id: 2,
  album_id: 1,
  url: "https://francisbourgouin.nyc3.digitaloceanspaces.com/photos/IMG_1126.jpg",
};

export default {
  title: "Components/Album/Form",
  component: AlbumForm,
  parameters: {
    viewport: {
      viewports: customViewports,
    },
    layout: "padded",
  },
};

export const Default = {
  args: { ...album },
};
