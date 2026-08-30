import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "L'ÉLIXIR — 3D Gastronomy Salon | Michelin Three-Star Experience";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #520f02 0%, #681403 35%, #8b1e06 70%, #3d0a00 100%)",
          padding: "60px 70px",
          color: "white",
          fontFamily: "Georgia, serif",
          position: "relative",
        }}
      >
        {/* Ambient Glows */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            left: "-100px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "rgba(228, 61, 18, 0.35)",
            filter: "blur(90px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-100px",
            right: "100px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "rgba(239, 177, 29, 0.3)",
            filter: "blur(90px)",
          }}
        />

        {/* Left Content Column */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
            maxWidth: "640px",
            zIndex: 10,
          }}
        >
          {/* Top Badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 20px",
              borderRadius: "50px",
              backgroundColor: "rgba(239, 177, 29, 0.15)",
              border: "1px solid rgba(239, 177, 29, 0.4)",
              color: "#EFB11D",
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "2px",
              textTransform: "uppercase",
              width: "fit-content",
              fontFamily: "sans-serif",
            }}
          >
            ★ Michelin Three-Star Experience
          </div>

          {/* Title & Slogan */}
          <div style={{ display: "flex", flexDirection: "column", marginTop: "20px" }}>
            <div
              style={{
                fontSize: "72px",
                fontWeight: 700,
                color: "#EFB11D",
                letterSpacing: "4px",
                lineHeight: 1.1,
                marginBottom: "12px",
              }}
            >
              L'ÉLIXIR
            </div>
            <div
              style={{
                fontSize: "36px",
                fontWeight: 400,
                color: "#FFFFFF",
                lineHeight: 1.25,
              }}
            >
              Where Haute Cuisine Meets{" "}
              <span style={{ color: "#EFB11D", fontStyle: "italic" }}>
                3D Digital Artistry
              </span>
            </div>
            <div
              style={{
                fontSize: "16px",
                color: "rgba(235, 233, 225, 0.8)",
                marginTop: "16px",
                lineHeight: 1.5,
                fontFamily: "sans-serif",
                fontWeight: 300,
              }}
            >
              An avant-garde multi-sensory fine dining odyssey orchestrated with synchronized spatial projections and alchemical gastronomy.
            </div>
          </div>

          {/* Bottom Stats */}
          <div
            style={{
              display: "flex",
              gap: "36px",
              paddingTop: "24px",
              borderTop: "1px solid rgba(255, 255, 255, 0.2)",
              fontFamily: "sans-serif",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "24px", fontWeight: 700, color: "#EFB11D" }}>
                3 Stars
              </span>
              <span style={{ fontSize: "11px", color: "rgba(255, 255, 255, 0.6)", letterSpacing: "1px" }}>
                MICHELIN GUIDE
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "24px", fontWeight: 700, color: "#EFB11D" }}>
                12 Courses
              </span>
              <span style={{ fontSize: "11px", color: "rgba(255, 255, 255, 0.6)", letterSpacing: "1px" }}>
                SENSORY JOURNEY
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "24px", fontWeight: 700, color: "#EFB11D" }}>
                Paris 75008
              </span>
              <span style={{ fontSize: "11px", color: "rgba(255, 255, 255, 0.6)", letterSpacing: "1px" }}>
                PRIVATE SALON
              </span>
            </div>
          </div>
        </div>

        {/* Right Glass Showcase Card */}
        <div
          style={{
            width: "380px",
            height: "440px",
            borderRadius: "28px",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            border: "1.5px solid rgba(239, 177, 29, 0.4)",
            padding: "24px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.7)",
            zIndex: 10,
          }}
        >
          {/* Card inner image banner */}
          <div
            style={{
              width: "100%",
              height: "220px",
              borderRadius: "18px",
              background: "linear-gradient(135deg, #1e0703 0%, #E43D12 50%, #EFB11D 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                fontSize: "48px",
                filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.5))",
              }}
            >
              🍷 ✨ 🍽️
            </div>
          </div>

          {/* Card info */}
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <div
              style={{
                padding: "4px 12px",
                borderRadius: "12px",
                backgroundColor: "rgba(239, 177, 29, 0.2)",
                color: "#EFB11D",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "1px",
                width: "fit-content",
                fontFamily: "sans-serif",
              }}
            >
              HAUTE CUISINE
            </div>
            <div style={{ fontSize: "22px", fontWeight: 700, color: "#FFFFFF" }}>
              A5 Wagyu Striploin
            </div>
            <div style={{ fontSize: "13px", color: "rgba(235, 233, 225, 0.75)", fontFamily: "sans-serif" }}>
              Bone Marrow Jus & 3D Projection Symphony
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderTop: "1px solid rgba(255, 255, 255, 0.15)",
              paddingTop: "12px",
            }}
          >
            <span style={{ fontSize: "12px", color: "#EFB11D", fontFamily: "sans-serif", letterSpacing: "1px" }}>
              CHEF LUCIEN VANCE
            </span>
            <span style={{ fontSize: "24px", fontWeight: 700, color: "#EFB11D" }}>
              $128
            </span>
          </div>
        </div>

        {/* Bottom Gold Accent Bar */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "8px",
            background: "linear-gradient(90deg, #EFB11D, #FFA2B6, #EFB11D)",
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}