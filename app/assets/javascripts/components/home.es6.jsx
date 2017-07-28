class Home extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row text-center">
          <div className="col-md-12">Home jsx</div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <_Button destination="/polls/new" name="Create Poll"/>
          </div>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  signedIn: React.PropTypes.bool
};
