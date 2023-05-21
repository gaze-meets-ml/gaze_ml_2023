import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

function Header({ brand, navigation, position }) {
  return (
    <header style={{ position, marginTop: "20px", padding: "0 40px" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link
          to="/home"
          style={{
            fontWeight: "bold",
            fontSize: "24px",
            backgroundImage:
              "linear-gradient(to right, red, black, purple, green, blue, indigo, violet)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {brand.appName}
        </Link>
        <nav style={{ marginLeft: "10px", display: "flex" }}>
          {navigation.menuItems.map((menuItem) => (
            <div key={menuItem.id} style={{ marginLeft: "10px" }}>
              <a href={menuItem.href}>{menuItem.text}</a>
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function AppHeader() {
  const location = useLocation();

  const options = {
    brand: {
      appName: "NeurIPS 2023 Gaze Meets ML Workshop",
    },
    navigation: {
      menuItems: [
        {
          id: "about",
          text: "About",
          href: "/about",
        },
        {
          id: "presentation",
          text: "Presentation",
          href: "/presentation",
        },
        {
          id: "Speakers",
          text: "Speakers",
          href: "/speakers",
        },
        {
          id: "Sponsors",
          text: "Sponsors",
          href: "/sponsors",
        },
        {
          id: "Blog",
          text: "Blog",
          href: "/blog",
        },
        {
          id: "FAQs",
          text: "FAQs",
          href: "/faqs",
        },
      ],
      selectedId:
        location.pathname === "/" ? "home" : location.pathname.slice("/")[1],
    },
    position: "sticky",
  };

  return (
    <div>
      <Header {...options} />
    </div>
  );
}
