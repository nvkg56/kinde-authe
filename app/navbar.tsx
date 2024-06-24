// NavigationBar.tsx
import React from "react";
import Link from "next/link";

const NavigationBar: React.FC = () => {
  return (
    <>
      <nav>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li style={{ display: "inline", marginRight: "20px" }}>
            <Link href="/">Home</Link>
          </li>
          <li style={{ display: "inline" }}>
            <Link href="/dashboard">Dashboard</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavigationBar;
