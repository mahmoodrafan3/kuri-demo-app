import React, { useEffect,useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Home1() {
  const [active, setActive] = useState("home");
  const [value, setValue] = useState(0);
    const [user, setUser] = useState(null);
  
    useEffect(() => {
      axios
        .get("http://localhost:5000/auth/user", { withCredentials: true })
        .then((res) => setUser(res.data))
        .catch(() => setUser(null));
    }, []);
  
    const handleLogout = () => {
      window.open("http://localhost:5000/auth/logout", "_self");
    };

  const navItems=[
    { id: "home", src: "/icon-home.png" },
    { id: "stats", src: "/icon-stats.png" },
    { id: "transfer", src: "/icon-transfer.png" },
    { id: "layers", src: "/icon-layers.png" },
    { id: "profile", src: "/icon-profile.png" },
  ];
  return (
    <div //bg white
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#000000ff",
        //minHeight: "100vh",
        width: "100%",
        height: "100vh", // keeps it centered on screen
        //padding: "40px",
        boxSizing: "border-box",
      }}>
      <div //mobile layout
        style={{
          width: "430px",
          height: "932px", //fixed height instead of 100vh
          //alignSelf: "stretch",
          background: "#00D09E",
          borderRadius: 40,
          boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          overflow: "hidden",
          boxSizing: "border-box",
        }}>
          
        <div //header
          style={{
            alignSelf: "stretch",
          
            display: "flex",
            flexDirection: "row", // 👈 horizontal layout
            alignItems: "center",
            justifyContent: "space-between", // spacing between items
            marginTop: 40,
            //marginBottom: 10,
            paddingLeft: 20,
            paddingRight: 20,
          }}>
          {/* Profile Image + Text (left section) */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 15, // space between image and text
            }}
          >
            <img  
              src={user ? user.avatar : "/Profile.png"}
              alt="Profile"
              style={{
                width: 59,
                height: 55,
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}>
              <span
                style={{
                  color: "#093030",
                  fontSize: 20,
                  fontWeight: "bold",
                }}
              >
                Hi, { user ? user.name : "User" }
              </span>
              <span
                style={{
                  color: "#093030",
                  fontSize: 14,
                  fontWeight: "bold",
                }}
              >
                Good Morning
              </span>
            </div>

          </div>

          {/* Notification Icon (right side) */}
          <img
            src="/Icon-Notification.png" // notification bell
            alt="Notification"
            style={{
              width: 30,
              height: 30,
              cursor: "pointer",
            }}
          />
        </div>
        <div //container-1
          style={{
            position: "relative",
            height: 155,
            background: "#DFF7E2",
            marginTop: 16,
            marginBottom: 25,
            marginLeft: 20,
            marginRight: 13,
            borderRadius: 31,
            width: "400px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "sans-serif",
          }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: "80%",
              //borderBottom: "4px solid #9BD6A3",

              //gap: 20,
            }}>
            {/* Left Side - Total Limit */}
            <div
              style={{
                //flex: 1,
                background: "#DFF7E2",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                //padding: 10,
                //borderRight: "1px solid #9BD6A3",
              }}
            >
              <span style={{ color: "#093030", fontSize: 18 }}>Total Limit</span>
              <span style={{ color: "#093030", fontWeight: "bold", fontSize: 24 }}>
                $5,000
              </span>
              <span style={{ color: "#2A7A3A", fontSize: 13, marginTop: 4 }}>
                Increase Your Limit
              </span>
            </div>
            {/* Right Side - Available Limit */}
            <div
              style={{
                position: "relative",
                bottom: 6,   // move down
                left: 42, // move left/right
                //flex: 1,
                background: "#C8F0CC",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                //padding: 10,
                borderLeft: "4px solid #9BD6A3",
                borderRadius: 31,

                width: 201,
                height: 121,
              }}
            >
              <span style={{ color: "#093030", fontSize: 18 }}>Available Limit</span>
              <span style={{ color: "#093030", fontWeight: "bold", fontSize: 24 }}>
                $5,000
              </span>
            </div>
          </div>
          <div>
            {/* Footer Text */}
            <span
              style={{
                color: "#093030",
                fontSize: 16,
                fontWeight: "bold",
                //marginTop: 5,
              }}
            >
              Grow Together, Save Together
            </span>
          </div>

        </div>


        <div //container-2
          style={{
            alignSelf: "stretch",
            display: "flex",
            flexDirection: "column",
            paddingTop: 40,
            width: "430px",
            height: "640px",
            background: "#F1FFF2",
            alignItems: "center",
            justifyContent: "top",
            boxSizing: "border-box",

            // Different corner radius values
            borderTopLeftRadius: 50,
            borderTopRightRadius: 50,
            borderBottomLeftRadius: 35,
            borderBottomRightRadius: 35,
          }}>
          <div //container-2-bar
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              width: 365,
              height: 41,
              borderRadius: 15,
              background: "#ACE9BD",
              gap: 80,
              marginBottom: 20,
            }}>
            <img
              src="/search-icon.png"
              alt="search"
              style={{
                width: 33,
                height: 30,
                cursor: "pointer",
              }}
            />
            <span style={{ color: "#093030", fontWeight: "bold", fontSize: 18 }}>
              List of Groups
            </span>
            <img
              src="/Filter-icon.png"
              alt="filter"
              style={{
                width: 24,
                height: 24,
                cursor: "pointer",
              }}
            />
          </div>
          <div //scrollable area
          style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "top",
              width: 350,
              height: 500,
              padding: 10,
              overflowY: "auto",
              borderRadius: 15,
              //background: "#ACE9BD",
              //gap: 5,
            }}
          >
            <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              width: 350,
              height: 68,
              borderRadius: 15,
              background: "#81DD9B",
              gap: 80,
              marginBottom: 20,
            }}>

            </div>
            <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              width: 350,
              height: 68,
              borderRadius: 15,
              background: "#81DD9B",
              gap: 80,
              marginBottom: 20,
            }}>

            </div>
            <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              width: 350,
              height: 68,
              borderRadius: 15,
              background: "#81DD9B",
              gap: 80,
              marginBottom: 20,
            }}>

            </div>
            <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              width: 350,
              height: 68,
              borderRadius: 15,
              background: "#81DD9B",
              gap: 80,
              marginBottom: 20,
            }}>

            </div>

          </div>
        </div>
        {/* 🔽 Bottom Navigation Bar 🔽 */}
<div
  style={{
    position: "absolute",
    bottom: 125,
    width: 430,
    height: 60,
    background: "#DFF7E2",
    // Different corner radius values
            borderTopLeftRadius: 70,
            borderTopRightRadius: 70,
            borderBottomLeftRadius: 40,
            borderBottomRightRadius: 40,
    display: "flex",
    justifyContent: "center",
    gap:35,
    alignItems: "center",
    padding: "12px 0",
    boxShadow: "0 -2px 8px rgba(0, 0, 0, 0.1)",
  }}
>
  {navItems.map((item) => (
    <div
      key={item.id}
      onClick={() => setActive(item.id)} // 👈 click to activate
      style={{
        background: active === item.id ? "#00D09E" : "transparent", // highlight active
        borderRadius: 18,
        padding: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        transition: "0.3s ease",
      }}
    >
      <img
        src={item.src}
        alt={item.id}
        style={{
          width: 24,
          height: 24,
          filter: active === item.id ? "brightness(0) invert(1)" : "none",
        }}
      />
    </div>
  ))}
</div>

      </div>
    </div>
  );
}
