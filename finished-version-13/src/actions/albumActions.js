"use server";
import { redirect } from "next/navigation";
import { client } from "./globals";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

export const fetchAlbumsByUser = async () => {
  const userId = cookies().get("userId")?.value;

  if (!userId) {
    return null;
  }

  const sql = `
  SELECT *, photos.url 
    FROM albums 
    JOIN photos ON albums.cover_id = photos.id 
    WHERE albums.user_id = ?
  `;
  const args = [userId];

  const result = await client.execute({ sql, args });
  console.log(result.rows);

  return result.rows;
};

export const fetchAlbumById = async (albumId) => {
  const userId = Number(cookies().get("userId")?.value);

  const sql = "SELECT * FROM albums WHERE id = ?";
  const args = [albumId];

  const result = await client.execute({ sql, args });

  if (result.rows[0].user_id !== userId) {
    return redirect("/");
  }

  return result.rows[0];
};

export const fetchAlbumPhotosById = async (albumId) => {
  const userId = Number(cookies().get("userId")?.value);

  const sql =
    "SELECT * FROM photos JOIN albums ON albums.id = photos.album_id WHERE album_id = ?";
  const args = [albumId];

  const result = await client.execute({ sql, args });

  if (result.rows[0].user_id !== userId) {
    return redirect("/");
  }

  return result.rows;
};

export const setAlbumCover = async (albumId, photoId) => {
  const sql = `
    UPDATE
      albums
    SET
      cover_id = ?
    WHERE
      id = ?
    `;
  const args = [photoId, albumId];

  const result = await client.execute({ sql, args });
  revalidatePath("/albums");
  return result.rows[0];
};

export const setAlbumTitle = async (albumId, title) => {
  const sql = `
  UPDATE
    albums
  SET
    title = ?
  WHERE
    id = ?
  `;
  const args = [title, albumId];

  const result = await client.execute({ sql, args });
  revalidatePath("/albums");
  return result.rows[0];
};

export const createAlbum = async (title) => {
  const userId = Number(cookies().get("userId")?.value);
  const sql = `
  INSERT INTO 
    albums (user_id, title, is_public, cover_id )
  VALUES 
    (?, ?, ?,?)
  RETURNING *
  `;
  const args = [userId, title, false, null];

  const result = await client.execute({ sql, args });

  return result.rows[0];
};
