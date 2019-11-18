//all component logic
import React from 'react';


const Header = () => <header>This is my header</header>
const Footer = () => <footer>&copy; Julie Erlemeier</footer>


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      words: '',
      clicks: 0,
    }
  }

  handleInput = (e) => {
    const input = e.target.value;
    this.setState({ words: input });
  }

  handleClick = (e) => {
    e.preventDefault();
    this.setState({ clicks: this.state.clicks + 1})
  }

  render() {
    return (
      <div>
        <Header />
        <h3>{this.state.words}</h3>
        <h4>{this.state.clicks}</h4>
        <input type="text" onChange={this.handleInput} />
        <button onClick={this.handleClick}>Click Me</button>
        <Footer />
      </div>
    )
  }
}

export default App;