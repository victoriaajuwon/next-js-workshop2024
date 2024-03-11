import { fetchAlbumById, fetchAlbumPhotosById } from "@/actions/albumActions";
import AlbumForm from "@/components/AlbumForm";
import PhotoList from "@/components/PhotoList";
import UploadForm from "@/components/UploadForm";
import Link from "next/link";

export default async function AlbumEditPage(props) {
  const { albumId } = props.params;
  const photos = await fetchAlbumPhotosById(props.params.albumId);
  const album = await fetchAlbumById(props.params.albumId);
  const linkRoot = `/albums/${albumId}`;

  return (
    <div className="Page AlbumEditPage">
      <header>
        <AlbumForm title={album.title} albumId={albumId} />
        <Link href={linkRoot}>Back to View</Link>
      </header>
      <PhotoList
        photos={photos}
        linkRoot={linkRoot}
        isEditMode={true}
        coverId={album.cover_id}
      />
      <UploadForm albumId={albumId} />
    </div>
  );
}
