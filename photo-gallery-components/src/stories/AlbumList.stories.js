import AlbumList from "../components/AlbumList";
import customViewports from "./customViewports";

const albums = [
  {
    id: 1,
    user_id: 1,
    title: "Some travel pictures!",
    is_public: 1,
    cover_id: 2,
    album_id: 1,
    url: "https://francisbourgouin.nyc3.digitaloceanspaces.com/photos/IMG_1126.jpg",
  },
  {
    id: 2,
    user_id: 1,
    title: "Some more travel pictures!",
    is_public: 0,
    cover_id: 38,
    album_id: 2,
    url: "https://francisbourgouin.nyc3.digitaloceanspaces.com/photos/IMG_6268.jpg",
  },
];

export default {
  title: "Components/Album/List",
  component: AlbumList,
  parameters: {
    viewport: {
      viewports: customViewports,
    },
    layout: "padded",
  },
};

export const Default = {
  args: {
    albums: albums,
  },
};
