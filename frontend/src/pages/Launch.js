import React from "react";
import { useNavigate } from "react-router-dom";

export default function Launch() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#FFFFFF",
        minHeight: "100vh",
        width: "100%",
        padding: "40px",
        boxSizing: "border-box",
      }}
    >
      {/* Mobile Layout - Fixed width, full screen height */}
      <div
        style={{
          width: "340px",
          height: "100vh",
          background: "#F1FFF2",
          borderRadius: "35px",
          boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          padding: "35px 20px",
          boxSizing: "border-box",
        }}
      >
        {/* Logo */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "20px",
            width: "100%",
          }}
        >
          <img
            src={
              "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/paqV1OPmcb/xufwk3hk_expires_30_days.png"
            }
            style={{
              width: "160px",
              height: "auto",
              objectFit: "contain",
            }}
            alt="Logo"
          />
        </div>

        {/* Subtitle */}
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: "20px",
            padding: "0 8px",
          }}
        >
          <span
            style={{
              color: "#4B4544",
              fontSize: "12px",
              textAlign: "center",
              lineHeight: "18px",
              maxWidth: "240px",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod.
          </span>
        </div>

        {/* Log In button */}
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "10px",
            marginBottom: "10px",
          }}
        >
          <button
            style={{
              width: "100%",
              maxWidth: "140px",
              height: "36px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#00D09E",
              borderRadius: "22px",
              border: "none",
              cursor: "pointer",
            }}
            onClick={() => navigate("/login")}
          >
            <span
              style={{
                color: "#093030",
                fontSize: "14px",
                fontWeight: "bold",
              }}
            >
              Get Start
            </span>
          </button>
        </div>

        {/*//Sign Up button 
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: "12px",
          }}
        >
          <button
            style={{
              width: "100%",
              maxWidth: "140px",
              height: "36px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#DFF7E2",
              borderRadius: "22px",
              border: "none",
              cursor: "pointer",
            }}
            onClick={() => navigate("/signup")}
          >
            <span
              style={{
                color: "#0E3E3E",
                fontSize: "14px",
                fontWeight: "bold",
              }}
            >
              Sign Up
            </span>
          </button>
        </div>

        // Forgot Password 
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            
          }}
        >
          <span
            style={{
              color: "#093030",
              fontSize: "10px",
              fontWeight: "bold",
              cursor: "pointer",
              textDecoration: "underline",
            }}
          >
            Forgot Password?
          </span>
        </div>*/}
      </div>
    </div>
  );
}
