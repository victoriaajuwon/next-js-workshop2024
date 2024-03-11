"use client";
import { createAlbum } from "@/actions/albumActions";
import UploadForm from "@/components/UploadForm";
import { useState } from "react";

export default function NewAlbumPage(props) {
  const [albumId, setAlbumId] = useState(undefined);
  const [title, setTitle] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    createAlbum(title)
      .then((row) => setAlbumId(row.id))
      .catch(console.log);
  };

  const handleChange = (event) => setTitle(event.target.value);

  return (
    <div className="Page NewAlbumPage">
      <h1>{albumId ? title : "New Album"}</h1>
      {!albumId && (
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Enter the album name"
            type="text"
            name="title"
            value={title}
            onChange={handleChange}
          />
          <button>Save</button>
        </form>
      )}
      {albumId && <UploadForm albumId={albumId} isRedirect />}
    </div>
  );
}
