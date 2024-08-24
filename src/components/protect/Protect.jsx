import React, { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";

const Protect = ({ userData }) => {
  const navigate = useNavigate();
  const navigateHandler = (path) => {
    navigate(path);
  };

  useEffect(() => {
    try {
      if (Object.keys(userData).length <= 0) {
        navigateHandler("/");
      }
    } catch (err) {
      navigateHandler("/");
    }
  }, []);

  return (
    <section>
      <Outlet />
    </section>
  );
};

export default Protect;
