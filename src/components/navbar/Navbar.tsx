import "./Navbar.scss";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.svg" alt="logo" />
        <span>PankrAdmin</span>
      </div>
      <div className="icons">
        <img src="/search.svg" alt="search icon" className="icon" />
        <img src="/app.svg" alt="app icon" className="icon" />
        <img src="/expand.svg" alt="expand icon" className="icon" />

        <div className="notification">
          <img src="/notifications.svg" alt="notification icon" />
          <span>1</span>
        </div>

        <div className="user">
          <img src="https://avatars.githubusercontent.com/u/54899954?v=4" alt="user icon" />
          <span>Pancratzia</span>
        </div>

        <img src="/settings.svg" alt="settings icon" className="icon" />
      </div>
    </div>
  )
}

export default Navbar