class _Button extends React.Component {
  render () {
    return (
      // <div className="text-center">
      //   <button className="btn btn-success">Create Poll</button>
      // </div>
      <form action={this.props.destination} className="text-center">
        <input type="submit" value={this.props.name} className="btn btn-success"/>
      </form>
    )
  }
}

_Button.propTypes = {
  destination: React.PropTypes.string,
  name: React.PropTypes.string
};
