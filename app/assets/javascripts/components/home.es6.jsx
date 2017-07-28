class Home extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row text-center">
          <div className="col-md-12">Home jsx</div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <_Button/>
          </div>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  signedIn: React.PropTypes.bool
};
