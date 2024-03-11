import { fetchAlbumById, fetchAlbumPhotosById } from "@/actions/albumActions";
import PhotoList from "@/components/PhotoList";
import Link from "next/link";

export default async function AlbumPage(props) {
  const { albumId } = props.params;
  const photos = await fetchAlbumPhotosById(props.params.albumId);
  const album = await fetchAlbumById(props.params.albumId);
  const linkRoot = `/albums/${albumId}`;

  console.log(album);
  return (
    <div className="Page AlbumPage">
      <header>
        <h1>{album.title}</h1>
        <Link href={`${linkRoot}/edit`}>Edit Album</Link>
      </header>
      <PhotoList photos={photos} linkRoot={linkRoot} isEditMode={false} />
    </div>
  );
}
