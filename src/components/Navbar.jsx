function Navbar() {
  return (
    <header className="header">
      <nav className="nav">
        <img className="nav-logo" src={`${import.meta.env.BASE_URL}react-logo.png`} alt="React logo" />
        <span>ReactFacts</span>
      </nav>
    </header>
  )
}

export { Navbar }