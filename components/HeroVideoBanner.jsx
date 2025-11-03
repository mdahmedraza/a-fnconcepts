import React from "react";

export default function Home() {
  return (
    <div>
      {/* ==== HERO SECTION WITH BACKGROUND VIDEO ==== */}
      <section style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: -1,
          }}
        >
          <source src="https://cdn.coverr.co/videos/coverr-a-woman-and-her-dog-1920x1080.mp4" type="video/mp4" />
        </video>

        {/* Text Overlay */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            color: "white",
            textAlign: "center",
            top: "50%",
            transform: "translateY(-50%)",
          }}
        >
          <h1 style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "1rem" }}>
            Build a future you believe in
          </h1>
          <button
            style={{
              background: "rgba(255,255,255,0.2)",
              border: "1px solid white",
              color: "white",
              padding: "10px 20px",
              borderRadius: "25px",
              cursor: "pointer",
              fontSize: "1rem",
            }}
          >
            Apply Now →
          </button>
        </div>
      </section>

      {/* ==== NEXT CONTENT SECTION ==== */}
      <section
        style={{
          backgroundColor: "white",
          padding: "100px 20px",
          textAlign: "left",
          color: "#333",
        }}
      >
        <h2>Shape the future of technology</h2>
        <p style={{ maxWidth: "600px", lineHeight: "1.6" }}>
          As a global company with unparalleled scale, a track record of pioneering innovation,
          and a huge and influential client base, we offer associates a chance to drive change
          and improve the lives of millions of people around the world.
        </p>

        <div style={{ marginTop: "40px" }}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Bey4XXJAqS8"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </div>
  );
}
