import Nav from "./Nav";

export default function Menu() {
  return (
    <div className="menu">
      <div className="logo">
        <img
          className="logo"
          src="/placeholders/logo.png"
          alt="logo da Casa São Camillo de Lelis"
        />
        <h1>Casa São Camillo de Lelis</h1>
      </div>
      <Nav />
    </div>
  );
}
