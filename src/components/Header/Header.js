import { UserButton } from "@clerk/clerk-react";
import "./Header.css";

const Header = () => {
  return (
    <h1
      style={{
        display: "flex",
        justifyContent: "space-around",
      }}
      onClick={() => window.scroll(0, 0)}
      className="header"
    >
      🎬 Binge Browse{" "}
      <span>
        <UserButton size={100} showName />
      </span>
    </h1>
  );
};

export default Header;
