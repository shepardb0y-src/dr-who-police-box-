import React, { Component } from "react";
import Counter from "./components/Counter";
import Jeporady from "./components/Jeporady";
// [
//   {
//   "id": 78173,
//   "answer": "John Mayer",
//   "question": "A singer-songwriter:\"Gravity\",\"Belief\",\"Waiting On The World To Change\"",
//   "value": 800,
//   "airdate": "2007-05-08T12:00:00.000Z",
//   "created_at": "2014-02-11T23:37:31.048Z",
//   "updated_at": "2014-02-11T23:37:31.048Z",
//   "category_id": 10264,
//   "game_id": null,
//   "invalid_count": null,
//   "category": {
//   "id": 10264,
//   "title": "name that tune-ster",
//   "created_at": "2014-02-11T23:37:30.340Z",
//   "updated_at": "2014-02-11T23:37:30.340Z",
//   "clues_count": 5
//   }
//   }
//   ]

// i discovered my game propertu hasa the regular state not the changened on
class App extends Component {
  state = {
    baseURL: "http://jservice.io/",
    apiKey: "/api/random",
    visible: true,
    game: [],
  };
  handleClick = (e) => {
    console.log("in here");
    this.setState(
      {
        searchURL: this.state.baseURL + this.state.apiKey,
        // this.state.query +
        // this.state.id +
        // this.state.question +
        // this.state.category,
      },
      () => {
        // fetch request default value is an HTTP Request
        fetch(this.state.searchURL) /// Returns a Promise under the hood with fecth API
          .then((response) => response.json()) //reurns second Promise
          .then((res) => {
            //turn object json file into array you have to turn state into a variable then push the data index i want into the varaibale then we finally set the state to game :data
            let temp = this.state.game;
            temp.push(res[0]);
            this.setState({ game: temp });
          }) //date rpresents the data from the api retuning then we changed the state of the app so the child components can catch the data in to the  new movieinfo:datta property so we can then use props to display the data on the child node with {this.props.movieInfo.Title}
          .catch((error) => console.error(error));
        //response Paramater will represent the Promise we get back from out fecth
      }
    );
  };

  handleSubmit = (e) => {
    console.log("submit");
    e.preventDefault();

    this.setState({
      visible: false,
    });
  };

  render() {
    const buttonText = this.state.visible ? "hide" : "show";
    console.log(this.state.toggle);
    console.log(this.state.game[0]?.category.title);
    return (
      <>
        <h1>Welcome to Jeporady</h1>
        <button onClick={this.handleClick}>Random Trivia Question </button>

        <div>
          {this.state.game.map((item) => {
            return (
              <div className="question-box">
                <h1>Category:{this.state.game[0]?.category.title}</h1>
                <h2>Question:{this.state.game[0].question} </h2>
                <h2>Points:</h2>
                <Jeporady game={this.state.game} />
                <Counter />
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default App;
