"use server";
import { revalidatePath } from "next/cache";
import { client } from "./globals";
import { cookies } from "next/headers";

export const fetchPhotosByUser = async () => {
  const userId = cookies().get("userId")?.value;

  if (!userId) {
    return null;
  }

  const sql = "SELECT * FROM photos WHERE user_id = ?";
  const args = [userId];

  const result = await client.execute({ sql, args });

  return result.rows;
};

export const addPhoto = async (albumId, userId, photoUrl) => {
  const sql = `
    INSERT INTO 
      photos (album_id, user_id, url, title )
    VALUES
      (?, ?, ?, ?)
    RETURNING
      *
    `;
  const args = [albumId, userId, photoUrl, ""];

  const result = await client.execute({ sql, args });

  revalidatePath(`/albums`);
  return result.rows[0];
};
export const updatePhoto = async (photoId, title) => {
  const sql = `
    UPDATE
      photos
    SET
      title = ?
    WHERE
      id = ?
    `;
  const args = [title, photoId];

  const result = await client.execute({ sql, args });

  revalidatePath("/albums");
  return result.rows[0];
};
export const deletePhoto = async (photoId) => {
  const sql = `
    DELETE FROM
      photos
    WHERE
      id = ?
    `;
  const args = [photoId];

  const result = await client.execute({ sql, args });

  revalidatePath("/albums");
  return result.rows[0];
};
