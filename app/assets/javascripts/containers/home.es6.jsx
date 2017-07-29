class Home extends React.Component {
  constructor() {
    super()
    this.state = {
      signedIn: false
    }
  }

  componentWillMount() {
    if (this.props.signed_in) {
      this.setState({signedIn: true})
    }
  }

  render() {
    return (
      <div className="container-fluid">
        <Nav signedIn={this.state.signedIn}/>
        <_Button destination="/polls/new" name="Create Poll"/>
      </div>
    )
  }
}
