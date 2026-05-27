import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Dra. Victoria A. Gómez | Psicóloga Clínica";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  const portrait = await readFile(
    join(process.cwd(), "public", "victoria-og-preview.jpg"),
  );
  const portraitSrc = `data:image/jpeg;base64,${Buffer.from(portrait).toString(
    "base64",
  )}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "stretch",
          justifyContent: "space-between",
          background:
            "linear-gradient(115deg, #fffaf4 0%, #f6eee3 48%, #e7d6c1 100%)",
          color: "#302923",
          overflow: "hidden",
          position: "relative",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: 66,
            top: 58,
            width: 136,
            height: 136,
            borderRadius: "999px",
            background: "rgba(184, 148, 109, 0.16)",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 358,
            bottom: -92,
            width: 260,
            height: 260,
            borderRadius: "999px",
            background: "rgba(63, 51, 43, 0.08)",
          }}
        />

        <div
          style={{
            width: 690,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "74px 64px 64px 76px",
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 22,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#8b6b4b",
              marginBottom: 28,
              fontFamily: "Arial, sans-serif",
            }}
          >
            Psicologia Clínica
          </div>

          <div
            style={{
              fontSize: 70,
              lineHeight: 0.98,
              color: "#302923",
              maxWidth: 590,
              display: "flex",
            }}
          >
            Dra. Victoria A. Gómez
          </div>

          <div
            style={{
              width: 112,
              height: 2,
              background: "#b8946d",
              marginTop: 30,
              marginBottom: 28,
            }}
          />

          <div
            style={{
              fontSize: 29,
              lineHeight: 1.32,
              color: "#5f5147",
              maxWidth: 590,
              fontFamily: "Arial, sans-serif",
              display: "flex",
            }}
          >
            Atendimento psicológico no Brasil e internacionalmente para pessoas,
            casais e famílias.
          </div>

          <div
            style={{
              display: "flex",
              gap: 14,
              marginTop: 36,
              fontSize: 18,
              color: "#6f5b48",
              fontFamily: "Arial, sans-serif",
            }}
          >
            <div
              style={{
                padding: "12px 18px",
                borderRadius: 999,
                background: "rgba(255, 255, 255, 0.64)",
                border: "1px solid rgba(216, 194, 163, 0.72)",
                display: "flex",
              }}
            >
              CRP 01/19626
            </div>
            <div
              style={{
                padding: "12px 18px",
                borderRadius: 999,
                background: "rgba(255, 255, 255, 0.64)",
                border: "1px solid rgba(216, 194, 163, 0.72)",
                display: "flex",
              }}
            >
              Português | Español
            </div>
          </div>
        </div>

        <div
          style={{
            width: 454,
            height: 570,
            margin: "30px 44px 30px 0",
            borderRadius: 34,
            padding: 12,
            background: "rgba(255, 255, 255, 0.58)",
            border: "1px solid rgba(255, 255, 255, 0.82)",
            boxShadow: "0 34px 90px rgba(83, 61, 40, 0.18)",
            position: "relative",
            display: "flex",
          }}
        >
          <img
            src={portraitSrc}
            alt=""
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center 25%",
              borderRadius: 24,
            }}
          />
        </div>
      </div>
    ),
    size,
  );
}
