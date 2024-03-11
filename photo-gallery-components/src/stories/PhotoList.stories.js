import PhotoList from "../components/PhotoList";
import customViewports from "./customViewports";

const photos = [
  {
    id: 44,
    album_id: 2,
    user_id: 1,
    url: "https://francisbourgouin.nyc3.digitaloceanspaces.com/photos/IMG_6593.jpg",
    title: "Some Photo",
    is_public: 0,
    cover_id: 38,
  },
  {
    id: 45,
    album_id: 2,
    user_id: 1,
    url: "https://francisbourgouin.nyc3.digitaloceanspaces.com/photos/IMG_6724.jpg",
    title: "Some Photo",
    is_public: 0,
    cover_id: 38,
  },
  {
    id: 46,
    album_id: 2,
    user_id: 1,
    url: "https://francisbourgouin.nyc3.digitaloceanspaces.com/photos/IMG_6843.jpg",
    title: "Some Photo",
    is_public: 0,
    cover_id: 38,
  },
  {
    id: 47,
    album_id: 2,
    user_id: 1,
    url: "https://francisbourgouin.nyc3.digitaloceanspaces.com/photos/IMG_6850.jpg",
    title: "Some Photo",
    is_public: 0,
    cover_id: 38,
  },
  {
    id: 48,
    album_id: 2,
    user_id: 1,
    url: "https://francisbourgouin.nyc3.digitaloceanspaces.com/photos/IMG_6857.jpg",
    title: "Some Photo",
    is_public: 0,
    cover_id: 38,
  },
];

export default {
  title: "Components/Photo/List",
  component: PhotoList,
  parameters: {
    viewport: {
      viewports: customViewports,
    },
    layout: "padded",
  },
};

export const Default = {
  args: { photos, linkRoot: "", isEditMode: false, coverId: 47 },
};
export const Edit = {
  args: { photos, linkRoot: "", isEditMode: true, coverId: 47 },
};
