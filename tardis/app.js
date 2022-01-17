// import DivOne from "./components/DivOne";

class App extends React.Component {
  state = {
    tardis: {
      name: "Tardis and Relative Dimension in Space",
      caps: false,
    },
  };
  handlechangeIt = (text) => {
    console.log("in here");
    if (this.state.tardis.caps) {
      this.setState({
        tardis: {
          name: "tardis and relative dimension in space",
          caps: false,
        },
      });
    } else {
      this.setState({
        tardis: {
          name: "Tardis And Relative Dimension In Space",
          caps: true,
        },
      });
    }
  };

  //   handleChangeIt = (e) => {
  //     e.preventDefault();
  //     const newItem = {

  //     };
  render() {
    return (
      <div>
        <DivOne />
        <DivTwo />
        <DivThree
          tardis={this.state.tardis}
          handlechangeIt={this.handlechangeIt}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(".container"));
