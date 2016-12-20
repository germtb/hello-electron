
const React = require('react');
var ReactDOM = require('react-dom');;

class Hello extends React.Component {

	constructor(props) {
    super(props);
    this.state = { date: new Date() };
		setInterval(() => {
			this.setState({ date: new Date() })
		}, 100);
  }

	// componentDidMount() {
		// var xmlHttp = new XMLHttpRequest();
		// var response = 0;
		// this.props.toWhat = response;
		// setState({ foo: 10 })
	// }

  render() {
    return React.createElement('div', null, `Time: ${this.state.date}`);
  }
}

ReactDOM.render(
	React.createElement(Hello, {toWhat: 'World WORRRRLDD'}, null),
	document.getElementById('root')
);
