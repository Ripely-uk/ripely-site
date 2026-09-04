import { ImageResponse } from "next/og";
import { MARK_DATA_URI } from "./_brand";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0E3A2B",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img width="112" height="100" src={MARK_DATA_URI} alt="" />
      </div>
    ),
    { ...size }
  );
}
