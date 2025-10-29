import React, { useState } from "react";
import axios from "../api";
import { useNavigate } from "react-router-dom";

export default function Signup() {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phonenumber, setPhoneNumber] = useState("");
    const [dob, setDob] = useState("");
    const [password, setPassword] = useState("");
    const [cfmpassword, setCfmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false); //  toggle state

    

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            await axios.post("/register", { name, email, password,dob,phonenumber });
            alert("Registered successfully! You can log in now.");
            window.location.href = "/login";
        } catch (err) {
            alert(err.response?.data?.message || "Error occurred");
        }
    };

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
            <div
                style={{
                    width: "340px",
                    height: "100vh",
                    alignSelf: "stretch",
                    background: "#00D09E",
                    borderRadius: "35px",
                    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                    boxSizing: "border-box",
                }}>
                <div
                    style={{
                        alignSelf: "stretch",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        marginTop: 50,
                        marginBottom: 50,
                    }}>
                    <span
                        style={{
                            color: "#093030wh",
                            fontSize: 30,
                            fontWeight: "bold",
                        }} >
                        {"Create Account"}
                    </span>
                </div>
                <div
                    style={{
                        alignSelf: "stretch",
                        display: "flex",
                        flexDirection: "column",
                        borderRadius: 35,
                        paddingTop: 20,
                        //overflowY: 'auto',
                        width: "340px",
                        background: "#F1FFF2",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        boxSizing: "border-box",
                        height: "84vh", // allows scrolling within screen height
                        scrollBehavior: "smooth",
                        overflow: "scroll", // keep this
                        scrollbarWidth: "none",
                      }}>
                    <span
                        style={{
                            color: "#093030",
                            fontSize: 15,
                            marginBottom: 8,
                            marginLeft: 52,
                            marginRight: 52,
                        }} >
                        {"Username"}
                    </span>
                    <input
                        placeholder={"your name"}
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        style={{
                            color: "#093030",
                            fontSize: 16,
                            marginBottom: 23,
                            marginLeft: 36,
                            marginRight: 36,
                            alignSelf: "stretch",
                            background: "#DFF7E2",
                            borderRadius: 18,
                            border: "none",
                            paddingTop: 13,
                            paddingBottom: 13,
                            paddingLeft: 34,
                            paddingRight: 68,
                            outline: "none",
                        }}
                    />
                    <span
                        style={{
                            color: "#093030",
                            fontSize: 15,
                            marginBottom: 8,
                            marginLeft: 52,
                            marginRight: 52,
                        }} >
                        {"Email"}
                    </span>
                    <input
                        placeholder={"example@example.com"}
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        style={{
                            color: "#093030",
                            fontSize: 16,
                            marginBottom: 23,
                            marginLeft: 36,
                            marginRight: 36,
                            alignSelf: "stretch",
                            background: "#DFF7E2",
                            borderRadius: 18,
                            border: "none",
                            paddingTop: 13,
                            paddingBottom: 13,
                            paddingLeft: 34,
                            paddingRight: 68,
                            outline: "none",
                        }}
                    /><span
                        style={{
                            color: "#093030",
                            fontSize: 15,
                            marginBottom: 8,
                            marginLeft: 52,
                            marginRight: 52,
                        }} >
                        {"Phone Number"}
                    </span>
                    <input
                        placeholder={"1234567890"}
                        value={phonenumber}
                        onChange={(event) => setPhoneNumber(event.target.value)}
                        style={{
                            color: "#093030",
                            fontSize: 16,
                            marginBottom: 23,
                            marginLeft: 36,
                            marginRight: 36,
                            alignSelf: "stretch",
                            background: "#DFF7E2",
                            borderRadius: 18,
                            border: "none",
                            paddingTop: 13,
                            paddingBottom: 13,
                            paddingLeft: 34,
                            paddingRight: 68,
                            outline: "none",
                        }}
                    /><span
                        style={{
                            color: "#093030",
                            fontSize: 15,
                            marginBottom: 8,
                            marginLeft: 52,
                            marginRight: 52,
                        }} >
                        {"Date of Birth"}
                    </span>
                    <input
                        placeholder={"DD/MM/YYYY"}
                        value={dob}
                        onChange={(event) => setDob(event.target.value)}
                        style={{
                            color: "#093030",
                            fontSize: 16,
                            marginBottom: 23,
                            marginLeft: 36,
                            marginRight: 36,
                            alignSelf: "stretch",
                            background: "#DFF7E2",
                            borderRadius: 18,
                            border: "none",
                            paddingTop: 13,
                            paddingBottom: 13,
                            paddingLeft: 34,
                            paddingRight: 68,
                            outline: "none",
                        }}
                    />
                    <span
                        style={{
                            color: "#093030",
                            fontSize: 15,
                            marginBottom: 3,
                            marginLeft: 52,
                            marginRight: 52,
                        }} >
                        {"Password"}
                    </span>
                    <div
                        style={{
                            alignSelf: "stretch",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            background: "#DFF7E2",
                            borderRadius: 18,

                            marginBottom: 30,
                            marginLeft: 36,
                            marginRight: 36,
                        }}>
                        <input
                            type={showPassword ? "text" : "password"} // toggle between text/password
                            placeholder={"your password"}
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            style={{
                                //letterSpacing: 3,
                                color: "#0E3E3E",
                                fontSize: 16,
                                alignSelf: "stretch",
                                background: "#DFF7E2",
                                borderRadius: 18,
                                border: "none",
                                paddingTop: 13,
                                paddingBottom: 13,
                                paddingLeft: 34,
                                paddingRight: 1,
                                width: 190,
                                outline: "none",
                            }}
                        />
                        <img
                            src={
                                showPassword
                                    ? "https://cdn-icons-png.flaticon.com/512/159/159078.png" // open eye
                                    : "https://cdn-icons-png.flaticon.com/512/565/565655.png" // closed eye
                            }
                            alt="Toggle visibility"
                            onClick={() => setShowPassword(!showPassword)} // toggle action
                            style={{

                                borderRadius: 40,
                                width: 24,
                                height: 22,
                                marginTop: 2,
                                marginBottom: 2,
                                marginRight: 15,
                                objectFit: "fill",
                            }}
                        />
                    </div>
                    <span
                        style={{
                            color: "#093030",
                            fontSize: 15,
                            marginBottom: 3,
                            marginLeft: 52,
                            marginRight: 52,
                        }} >
                        {"Confirm Password"}
                    </span>
                    <div
                        style={{
                            alignSelf: "stretch",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            background: "#DFF7E2",
                            borderRadius: 18,

                            marginBottom: 30,
                            marginLeft: 36,
                            marginRight: 36,
                        }}>
                        <input
                            type={showPassword ? "text" : "password"} // toggle between text/password
                            placeholder={"your password"}
                            value={cfmpassword}
                            onChange={(event) => setCfmPassword(event.target.value)}
                            style={{
                                //letterSpacing: 3,
                                color: "#0E3E3E",
                                fontSize: 16,
                                alignSelf: "stretch",
                                background: "#DFF7E2",
                                borderRadius: 18,
                                border: "none",
                                paddingTop: 13,
                                paddingBottom: 13,
                                paddingLeft: 34,
                                paddingRight: 1,
                                width: 190,
                                outline: "none",
                            }}
                        />
                        <img
                            src={
                                showPassword
                                    ? "https://cdn-icons-png.flaticon.com/512/159/159078.png" // open eye
                                    : "https://cdn-icons-png.flaticon.com/512/565/565655.png" // closed eye
                            }
                            alt="Toggle visibility"
                            onClick={() => setShowPassword(!showPassword)} // toggle action
                            style={{

                                borderRadius: 40,
                                width: 24,
                                height: 22,
                                marginTop: 2,
                                marginBottom: 2,
                                marginRight: 15,
                                objectFit: "fill",
                            }}
                        />
                    </div>
                    <div
  style={{
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    margin:10,
    marginLeft:20
  }}
>
  <input
    type="checkbox"
    id="agree"
    style={{
        marginLeft:36,
        
      width: 18,
      
      height: 18,
      cursor: "pointer",
      accentColor: "#2ECC71", // ✅ nice green checkbox
    }}
  />
  <label
    htmlFor="agree"
    style={{
        justifyContent: "center",
        //alignItems: "center",
        //textAlign: "center",
      fontSize: 13,
      color: "#555",
    }}
  >
    By continuing, you agree to<br></br>{" "}
    <a
      href="/terms"
      style={{ color: "#007bff", textDecoration: "none", fontWeight: "bold" }}
    >
      Terms of Use
    </a>{" "}
    and{" "}
    <a
      href="/privacy"
      style={{ color: "#007bff", textDecoration: "none", fontWeight: "bold" }}
    >
      Privacy Policy
    </a>
    .
  </label>
</div>

                    <div
                        style={{
                            alignSelf: "stretch",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            marginBottom: 19,
                        }}>
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
                            onClick={handleSignup}>
                            <span
                                style={{
                                    color: "#093030",
                                    fontSize: "14px",
                                    fontWeight: "bold",
                                }} >
                                {"Sign Up"}
                            </span>
                        </button>
                    </div>

                    <div
                        style={{
                            alignSelf: "stretch",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}>
                        <span
                            style={{
                                color: "#093030",
                                fontSize: 13,
                                marginBottom:"50px"
                            }} >

                            Already have an account?{" "}
                            <span
                                onClick={() => navigate("/login")}
                                style={{
                                    color: "#007bff",
                                    cursor: "pointer",
                                    fontWeight: "bold",
                                    textDecoration: "underline",
                                }}
                            >
                                Login
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}