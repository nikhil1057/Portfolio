import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: "#080808",
          borderRadius: 4,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span style={{ fontSize: 18, fontWeight: 700, color: "#eae6e0" }}>N</span>
        <span style={{ fontSize: 18, fontWeight: 700, color: "#e85d2f" }}>T</span>
      </div>
    ),
    { ...size }
  );
}
