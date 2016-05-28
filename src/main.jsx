var React = require('react');
var ReactDOM= require('react-dom');
var ListManager =require('./components/ListManager.jsx');

ReactDOM.render(<ListManager title="Ingredients" headingColor="#028090"/>, document.getElementById('ingredients'));
ReactDOM.render(<ListManager title="toDo" headingColor="#00A896"/>, document.getElementById('todo'));
ReactDOM.render(<ListManager title="Xmas" headingColor="#05668D"/>, document.getElementById('Xmas'));
ReactDOM.render(<ListManager title="Watever" headingColor="#d90429"/>, document.getElementById('Watever'));
