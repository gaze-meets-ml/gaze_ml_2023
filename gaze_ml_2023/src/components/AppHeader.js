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
          to="/"
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
          href: "/gaze_ml_2023/about",
        },
        {
          id: "presentation",
          text: "Presentation",
          href: "/gaze_ml_2023/presentation",
        },
        {
          id: "Speakers",
          text: "Speakers",
          href: "/gaze_ml_2023/speakers",
        },
        {
          id: "Sponsors",
          text: "Sponsors",
          href: "/gaze_ml_2023/sponsors",
        },
        {
          id: "Blog",
          text: "Blog",
          href: "/gaze_ml_2023/blog",
        },
        {
          id: "FAQs",
          text: "FAQs",
          href: "/gaze_ml_2023/faqs",
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
