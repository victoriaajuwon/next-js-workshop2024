import { createUploadthing } from "uploadthing/next";
import { cookies } from "next/headers";

const f = createUploadthing();

const auth = (req) => ({ id: "fakeId" }); // Fake auth function

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  photoUploader: f({ image: { maxFileSize: "4MB", maxFileCount: 10 } })
    // Set permissions and file types for this FileRoute
    .middleware(async ({ req }) => {
      // This code runs on your server before upload
      const userId = cookies().get("userId")?.value;
      // If you throw, the user will not be able to upload
      if (!userId) throw new Error("Unauthorized");
      if (process.env.IS_DEMO.toLowerCase() === "true")
        throw new Error("DEMO MODE, SORRY NO UPLOAD");

      // Whatever is returned here is accessible in onUploadComplete as `metadata`
      return { userId: userId };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      // This code RUNS ON YOUR SERVER after upload
      console.log("Upload complete for userId:", metadata.userId);

      console.log("file url", file.url);

      // !!! Whatever is returned here is sent to the clientside `onClientUploadComplete` callback
      return { uploadedBy: metadata.userId };
    }),
};
