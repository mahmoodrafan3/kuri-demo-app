import React, { useEffect, useState } from "react";
import axios from "axios";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";

export default function Home() {
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

  return (
    <div className="h-screen flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">Home Page</h1>
        {user ? (
          <>
            <img src={user.avatar} alt="avatar" className="w-20 h-20 rounded-full mb-2" />
            <p className="text-lg">{user.name}</p>
            <p className="text-sm text-gray-600">{user.email}</p>
            <button
              onClick={handleLogout}
              className="mt-4 bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-900"
            >
              Logout
            </button>
          </>
        ) : (
          <p>Loading user...</p>
        )}
      </div>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(e, newValue) => setValue(newValue)}
      >
        <BottomNavigationAction label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction label="Profile" icon={<AccountCircleIcon />} />
        <BottomNavigationAction label="Alerts" icon={<NotificationsIcon />} />
      </BottomNavigation>
    </div>
  );
}
