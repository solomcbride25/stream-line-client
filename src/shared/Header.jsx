function Header() {
  return (
    <header>
      <header className="navbar">
        <h1 className="logo">
          <a href="#">StreamLine</a>
        </h1>
        <nav>
          <ul className="nav-menu">
            <li className="nav-item">
              <a href="#">STREAM SEARCH</a>
              <p>Search All Platforms</p>
              <p>Streaming Playlist Curator</p>
            </li>
            <li className="nav-item">
              <a href="#">COMMUNITY</a>
              <p>Discussion Board</p>
              <p>Find Friends</p>
            </li>
            <li className="nav-item">
              <a href="#">NEWS</a>
              <p>Hollywood Feed</p>
              <p>Subscription Rate Hikes</p>
            </li>
            <li className="nav-item">
              <a href="#">ACCOUNT</a>
              <p>Sign In</p>
              <p>Your reviews/change profile</p>
              <p>Your Services/Subscription Management</p>
            </li>
          </ul>
        </nav>
      </header>
    </header>
  );
}

export default Header;
