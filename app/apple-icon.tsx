import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

const leaf = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 108'>
<defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>
<stop offset='0%' stop-color='#A8CE3C'/><stop offset='100%' stop-color='#3FA24B'/></linearGradient></defs>
<path d='M60 82 C 38 88, 18 78, 13 55 C 30 52, 47 60, 60 82 Z' fill='url(#g)' opacity='0.92'/>
<path d='M60 82 C 82 88, 102 78, 107 55 C 90 52, 73 60, 60 82 Z' fill='url(#g)' opacity='0.78'/>
<path d='M60 8 C 74 32, 76 58, 60 84 C 44 58, 46 32, 60 8 Z' fill='url(#g)'/></svg>`;

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
        <img
          width="118"
          height="106"
          src={`data:image/svg+xml,${encodeURIComponent(leaf)}`}
          alt=""
        />
      </div>
    ),
    { ...size }
  );
}
