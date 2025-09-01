"use client";

import Image from "next/image";

export default function ReactPhotoAlbumImage(
  { alt = "", title, sizes },
  { photo, width, height }
) {
  return (
    <div
      style={{
        width: "100%",
        position: "relative",
        aspectRatio: `${width} / ${height}`,
      }}
    >
      <Image
        fill
        src={photo}
        alt={alt}
        title={title}
        sizes={sizes}
        placeholder="blur"
        // placeholder={"blurDataURL" in photo ? "blur" : undefined}
        loading="lazy"
      />
    </div>
  );
}
