class App extends React.Component {
  constructor() {
    super()
    this.state = {
      showHome: true,
      homeActive: "active"
    }
  }

  componentWillMount() {
    if (this.props.page === 'home') {
      this.setState({
        showHome: true,
        homeActive: "active"
      })
    }
  }

  render () {
    const {showHome} = this.state
    return (
      <div>
        <Home />
      </div>
    )
  }
}
