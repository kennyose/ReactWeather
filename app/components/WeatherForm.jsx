var React = require('react');
// import { Button } from 'react-bootstrap';
// var react-bootstrap = require('react-bootstrap'); 

var WeatherForm = React.createClass({
    onFormSubmit: function(e) {
			e.preventDefault();

			var location = this.refs.location.value;

			if(location.length > 0) {
				this.refs.location.value = "";
				this.props.onSearch(location);
			}
		},

		render: function () {

			const divStyle = {
  				color: 'blue'
			};
			return (
				<div style={divStyle}>
					<form onSubmit={this.onFormSubmit}>
						<input type="text" ref= "location"/>
						<button>Get location</button>
					</form>
				</div>
			);
		}
});

module.exports = WeatherForm;