import logo from "../assets/logo.svg";

export function Header() {
  return (
    <div className="fixed w-screen py-4 lg:py-12">
      <header className="container bg-transparent mx-auto">
        <img src={logo} alt="analytics-logo" />
      </header>
    </div>
  );
}
