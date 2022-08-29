import React from "react";
import "./AppLayout.css";

export default function AppLayout({ children }) {
  return (
    <div className="app-layout">
      <div className="app-top-bar">ToDo</div>
      <div className="app-page-container">{children}</div>
    </div>
  );
}
