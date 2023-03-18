import { Button } from "ui";

export function Header() {
  return (
    <header
      style={{
        backgroundColor: "#090909",
        color: "white",
        height: "80px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      Logo
      <ul>
        <li>Home</li>
        <li>
          <Button>test</Button>
        </li>
      </ul>
    </header>
  );
}
