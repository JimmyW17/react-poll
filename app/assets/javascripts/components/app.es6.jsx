class App extends React.Component {
  constructor() {
    super()
    this.state = {
      showHome: true,
      homeActive: "active",
      signedIn: false
    }
  }

  componentWillMount() {
    if (this.props.page === 'home') {
      this.setState({showHome: true, homeActive: "active"})
    }
    if (this.props.signed_in) {
      this.setState({signedIn: true})
    }
  }

  render() {
    return (
      <div>
        <Nav signedIn={this.state.signedIn}/>
        <Home signedIn={this.state.signedIn}/>
      </div>
    )
  }
}
