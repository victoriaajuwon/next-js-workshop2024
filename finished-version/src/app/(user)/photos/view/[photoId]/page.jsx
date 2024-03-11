import PhotoView from "@/components/PhotoView";

import { fetchPhotosByUser } from "@/actions/photoActions";

export default async function PhotoPage(props) {
  const { photoId } = props.params;

  const photos = await fetchPhotosByUser();
  const currentIndex = photos.findIndex((photo) => photo.id === Number(photoId));

  return (
    <div className="PhotoPage">
      <PhotoView photoId={photoId} photos={photos} currentIndex={currentIndex} />
    </div>
  );
}
