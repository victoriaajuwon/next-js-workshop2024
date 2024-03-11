import { fetchAlbumsByUser } from "@/actions/albumActions";
import AlbumList from "@/components/AlbumList";

export default async function GalleriesPage(props) {
  const albums = await fetchAlbumsByUser();

  console.log(albums);
  return (
    <div className="Page AlbumsPage">
      <h1>Your Albums</h1>
      <AlbumList albums={albums} />
    </div>
  );
}
