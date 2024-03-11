import { fetchPhotosByUser } from "@/actions/photoActions";
import PhotoList from "@/components/PhotoList";

export default async function PhotosPage(props) {
  const photos = await fetchPhotosByUser();
  const linkRoot = "/photos";
  return (
    <div className="Page PhotosPage">
      <h1>Some Photos</h1>
      <PhotoList photos={photos} linkRoot={linkRoot} />
    </div>
  );
}
