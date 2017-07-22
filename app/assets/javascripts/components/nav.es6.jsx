class Nav extends React.Component {
  render() {
    let navLi;
    if (this.props.signedIn) {
      navLi = (
        <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <a className="nav-link" rel="nofollow" data-method="delete" href="/users/sign_out">Logout</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/users/edit">Account</a>
        </li>
        </ul>
      )
    } else {
      navLi = (
        <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <a className="nav-link" href="/users/sign_up">Register</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/users/sign_in">Login</a>
        </li>
        </ul>
      )
    }
    return (
      <nav className="navbar navbar-expand-md navbar-light bg-faded">
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="/">React Poll</a>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
          { navLi }
      </div>
      </nav>
    );
  }
}

Nav.propTypes = {
  signedIn: React.PropTypes.bool
};
