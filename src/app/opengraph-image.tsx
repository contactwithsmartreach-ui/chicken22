import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const alt = "L'ÉLIXIR — 3D Gastronomy Salon | Michelin Three-Star Experience";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#520f02",
          padding: "60px 70px",
          fontFamily: "sans-serif",
          color: "white",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background Ambient Radial Glows */}
        <div
          style={{
            display: "flex",
            position: "absolute",
            top: "-120px",
            left: "-120px",
            width: "650px",
            height: "650px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(228, 61, 18, 0.45) 0%, rgba(82, 15, 2, 0) 70%)",
          }}
        />
        <div
          style={{
            display: "flex",
            position: "absolute",
            bottom: "-120px",
            right: "-120px",
            width: "650px",
            height: "650px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(239, 177, 29, 0.4) 0%, rgba(82, 15, 2, 0) 70%)",
          }}
        />

        {/* Top Header Row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            zIndex: 10,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              backgroundColor: "rgba(104, 20, 3, 0.8)",
              border: "1.5px solid rgba(239, 177, 29, 0.5)",
              padding: "8px 22px",
              borderRadius: "999px",
            }}
          >
            <div
              style={{
                display: "flex",
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                backgroundColor: "#EFB11D",
              }}
            />
            <span
              style={{
                fontSize: "14px",
                fontWeight: 700,
                color: "#EFB11D",
                letterSpacing: "1.5px",
              }}
            >
              MICHELIN THREE-STAR SALON • PARIS 75008
            </span>
          </div>

          <span
            style={{
              fontSize: "20px",
              fontWeight: 700,
              color: "#EFB11D",
              letterSpacing: "2px",
            }}
          >
            L'ÉLIXIR
          </span>
        </div>

        {/* Center Main Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "18px",
            zIndex: 10,
            maxWidth: "960px",
          }}
        >
          {/* Logo & Brand Title */}
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "68px",
                height: "68px",
                borderRadius: "20px",
                backgroundColor: "#681403",
                border: "2px solid rgba(239, 177, 29, 0.6)",
                fontSize: "34px",
              }}
            >
              🍷
            </div>
            <span
              style={{
                fontSize: "64px",
                fontWeight: 800,
                color: "#ffffff",
                letterSpacing: "-1.5px",
              }}
            >
              L'ÉLIXIR
            </span>
          </div>

          <div
            style={{
              display: "flex",
              fontSize: "44px",
              fontWeight: 300,
              color: "#FFF4D0",
              letterSpacing: "-1px",
              lineHeight: 1.15,
            }}
          >
            <span>Where Haute Cuisine Meets&nbsp;</span>
            <span style={{ fontWeight: 800, color: "#EFB11D", fontStyle: "italic" }}>
              3D Digital Artistry
            </span>
          </div>

          <div
            style={{
              display: "flex",
              fontSize: "20px",
              color: "#EBE9E1",
              opacity: 0.9,
              lineHeight: 1.45,
            }}
          >
            An avant-garde multi-sensory fine dining odyssey in Paris, orchestrated with synchronized 3D spatial projections and alchemical gastronomy.
          </div>
        </div>

        {/* Bottom Feature Badges */}
        <div style={{ display: "flex", gap: "16px", zIndex: 10 }}>
          <div
            style={{
              display: "flex",
              backgroundColor: "#681403",
              border: "1px solid rgba(239, 177, 29, 0.4)",
              padding: "10px 24px",
              borderRadius: "999px",
              fontSize: "15px",
              fontWeight: 600,
              color: "#EFB11D",
            }}
          >
            ★ 3 Michelin Stars
          </div>
          <div
            style={{
              display: "flex",
              backgroundColor: "#681403",
              border: "1px solid rgba(239, 177, 29, 0.4)",
              padding: "10px 24px",
              borderRadius: "999px",
              fontSize: "15px",
              fontWeight: 600,
              color: "#FFF4D0",
            }}
          >
            ✨ 12-Course Sensory Journey
          </div>
          <div
            style={{
              display: "flex",
              backgroundColor: "#681403",
              border: "1px solid rgba(239, 177, 29, 0.4)",
              padding: "10px 24px",
              borderRadius: "999px",
              fontSize: "15px",
              fontWeight: 600,
              color: "#FFF4D0",
            }}
          >
            🍷 1,200+ Vintage Cellar
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}