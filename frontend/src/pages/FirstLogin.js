import React from "react";
import { useNavigate } from "react-router-dom";

export default function FirstLogin() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full flex items-center justify-center" style={{ backgroundColor: "#F1FFF2" }}>
      {/* Fixed 430x932 frame to match design */}
      <div
        className="relative rounded-[40px] overflow-hidden shadow-md"
        style={{ width: 430, height: 932, backgroundColor: "#F1FFF2" }}
      >
        {/* Logo / Image - 223x114 at y=336 centered */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ position:'absolute', left:'50%', top:'33%', transform:'translate(-50%, -50%)', width:223, height:114 }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/kuritext.png`}
            alt="Kuri Text"
            style={{ width: "100%", height: "100%", objectFit: "contain", mixBlendMode: "multiply" }}
          />
        </div>

        {/* Subtitle text at y=462, width=236 centered */}
        <p
          className="absolute left-1/2 -translate-x-1/2 text-center text-sm"
          style={{ position:'absolute', left:'53%', top:'49%', transform:'translate(-50%, -50%)', width: 236, color: "#4B4544" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
        </p>

        {/* Log In button (dark mode) at y=530, 207x45 */}
        <button
          onClick={() => navigate("/login")}
          className="absolute left-1/2 -translate-x-1/2 font-semibold"
          style={{
            left: '50%',
            transform: 'translate(-50%, -50%)',
            top: '67%',
            width: '207px',
            height: '45px',
            backgroundColor: 'rgb(0, 208, 158)',
            color: 'rgb(9, 47, 48)',
            borderRadius: '30px',
            position: 'absolute'
          }}
        >
          Log In
        </button>

        {/* Sign Up button (light) at y=587, 207x45 */}
        <button
        onClick={() => navigate("/signup")}
          className="absolute left-1/2 -translate-x-1/2 font-semibold"
          style={{
            top: '78%',
            width: '207px',
            height: '45px',
            backgroundColor: 'rgb(223, 247, 226)',
            color: 'rgb(14, 62, 62)',
            borderRadius: '30px',
            position: 'absolute',
            left: '50%',
            transform: 'translate(-50%, -50%)'
          }}
        >
          Sign Up
        </button>

        {/* Forgot Password at y=644 centered */}
        <p
          className="absolute left-1/2 -translate-x-1/2 text-sm cursor-pointer"
          style={{ 
            top: '84%',
            color: 'rgb(9, 47, 48)',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            position: 'absolute'
          }}
        >
          Forgot Password?
        </p>
      </div>
    </div>
  );
}
