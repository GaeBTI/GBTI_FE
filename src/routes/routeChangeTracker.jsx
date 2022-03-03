import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ReactGA from "react-ga";
const RouteChangeTracker = () => {
  const location = useLocation();
  const navigate = useNavigate();
  ReactGA.set({ page: location.pathname });
  ReactGA.pageview(location.pathname);

  return <div></div>;
};

export default RouteChangeTracker;
