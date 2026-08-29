import { ImageResponse } from "next/og";

export const alt = "Ripely — farm data, joined up";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const leaf = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 108'>
<defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>
<stop offset='0%' stop-color='#A8CE3C'/><stop offset='100%' stop-color='#3FA24B'/></linearGradient></defs>
<path d='M60 82 C 38 88, 18 78, 13 55 C 30 52, 47 60, 60 82 Z' fill='url(#g)' opacity='0.92'/>
<path d='M60 82 C 82 88, 102 78, 107 55 C 90 52, 73 60, 60 82 Z' fill='url(#g)' opacity='0.78'/>
<path d='M60 8 C 74 32, 76 58, 60 84 C 44 58, 46 32, 60 8 Z' fill='url(#g)'/></svg>`;

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
          <img
            width="60"
            height="54"
            src={`data:image/svg+xml,${encodeURIComponent(leaf)}`}
            alt=""
          />
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
