import { ImageResponse } from "next/og";
import { MARK_DATA_URI } from "./_brand";

export const alt = "Ripely — farm data, joined up";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0E3A2B",
          color: "#FFFFFF",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img width="66" height="57" src={MARK_DATA_URI} alt="" />
          <div style={{ fontSize: 40, fontWeight: 700, letterSpacing: "-0.01em" }}>Ripely</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 22,
              letterSpacing: "0.2em",
              color: "#A8CE3C",
              textTransform: "uppercase",
            }}
          >
            Farm data, joined up
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 64,
              fontWeight: 700,
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
              marginTop: 22,
              maxWidth: 1000,
            }}
          >
            The savings are hiding in the gaps between your systems.
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#A9BFB2" }}>ripely.uk</div>
      </div>
    ),
    { ...size }
  );
}
