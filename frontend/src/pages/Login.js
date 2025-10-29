import React, {useState} from "react";
import axios from "../api";
import { useNavigate } from "react-router-dom";

export default function Login(){
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
  	const [showPassword, setShowPassword] = useState(false); //  toggle  state

	const handleGoogle = () => {
		window.open("https://kuri-backend.onrender.com/auth/google", "_self");
	  };
	
	  const handleLogin = async (e) => {
		e.preventDefault();
		try {
			const res = await axios.post("/login", { email, password }, { withCredentials: true });
			if (res.data) window.location.href = "/home";
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
						{"Welcome"}
					</span>
				</div>
				<div 
					style={{
						alignSelf: "stretch",
						display: "flex",
						flexDirection: "column",
						borderRadius: 35,
						paddingTop: 40,
						
						width: "340px",
          				height: "100vh",
          				background: "#F1FFF2",
						alignItems: "top",
						justifyContent: "top",
						boxSizing: "border-box",
					}}>
					<span 
						style={{
							color: "#093030",
							fontSize: 15,
							marginBottom: 8,
							marginLeft: 52,
							marginRight: 52,
						}} >
						{"Username or email"}
					</span>
					<input
						placeholder={"example@example.com"}
						value={email}
						onChange={(event)=>setEmail(event.target.value)}
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
							width:190,
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
							onClick={handleLogin}>
							<span 
								style={{
									color: "#093030",
									fontSize: "14px",
									fontWeight: "bold",
								}} >
								{"Log In"}
							</span>
						</button>
					</div>
					<div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingBottom: 25,
            
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
							{"Forgot Password?"}
						</span>
					</div>
					
					<div 
						style={{
							alignSelf: "stretch",
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							marginBottom: 15,
						}}>
						<span 
							style={{
								color: "#093030",
								fontSize: 13,
							}} >
							{"or sign up with"}
						</span>
					</div>
					<div 
					onClick={handleGoogle} // <-- your click handler
						style={{
							alignSelf: "stretch",
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							marginBottom: 20,
							cursor: "pointer", // ✅ makes it clickable
						}}>
						<div 
							style={{
								display: "flex",
								alignItems: "center",
								background: "#DFF7E2",
								borderRadius: 30,
								paddingTop: 7,
								paddingBottom: 7,
								paddingLeft: 26,
								paddingRight: 26,
								gap: 27,
							}}>
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/paqV1OPmcb/n5no90ne_expires_30_days.png"} 
								style={{
									borderRadius: 40,
									width: 32,
									height: 32,
									objectFit: "fill",
								}}
                alt="profile"
							/>
							<span 
								style={{
									color: "#000000",
									fontSize: 20,
									fontWeight: "bold",
								}} >
								{"google"}
							</span>
						</div>
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
							}} >
								
							Don’t have an account?{" "}
							<span
      onClick={() => navigate("/signup")}
      style={{
        color: "#007bff",
        cursor: "pointer",
        fontWeight: "bold",
        textDecoration: "underline",
      }}
    >
      Sign Up
    </span>
						</span>
					</div>
				</div>
			</div>
		</div>
	)
}