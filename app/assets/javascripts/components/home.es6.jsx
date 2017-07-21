class Home extends React.Component {
  render () {
    return (
      <div>
        <div>Logged In: {this.props.loggedIn}</div>
      </div>
    );
  }
}

Home.propTypes = {
  loggedIn: React.PropTypes.bool
};
