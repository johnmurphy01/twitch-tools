import React, { useState } from "react";

const DeathCounterManagement: React.FC = () => {
  return (
    <div style={{ backgroundColor: "#ddd", display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <button
        className="btn btn-lg btn-success"
        style={{ borderRadius: "5em", fontSize: "4.25rem", lineHeight: "1.5", paddingTop: 0 }}
        onClick={async () => {
          await fetch(new URL("api/death-counter", process.env.BASE_URL).toString());
        }}
      >
        +1
      </button>
    </div>
  );
};

export default DeathCounterManagement;
