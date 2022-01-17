class DivOne extends React.Component {
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
  render() {
    return <div></div>;
  }
}
