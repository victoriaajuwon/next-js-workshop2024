import UploadForm from "../components/UploadForm";
import customViewports from "./customViewports";

export default {
  title: "Components/Upload",
  component: UploadForm,
  parameters: {
    viewport: {
      viewports: customViewports,
    },
    layout: "padded",
  },
};

export const Default = {
  args: { albumId: 1, isRedirect: false },
};
