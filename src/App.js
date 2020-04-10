import React, { Component } from 'react';
import './App.css';
import QuestionList from './components/QuestionList';

class App extends Component {

  state = {
    questionInput: "",
    answers: []

  };

  handleChange = event => {
    this.setState({
      questionInput: event.target.value
    });
  }

  handleSubmit = event => {
      event.preventDefault();
      const question = this.state.questionInput;
      fetch(`https://8ball.delegator.com/magic/JSON/${question}`)
        .then(response => response.json())
        .then((result) => {
          this.setState({
            questionInput: "",
            answers: [...this.state.answers, result]
        });
      });
  };

  render() {
    
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
            <input 
            type="text"
            placeholder="Type in a question here"
            onChange={this.handleChange}
            />
          <button type="submit">Submit</button>
        </form>
        <QuestionList
        answers={this.state.answers}
        />
      </div>
    );
  };
}

export default App;