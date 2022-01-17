class DivFour extends React.Component {
  render() {
    return (
      <div>
        <h3 onClick={this.props.changeIt}>{this.props.tardis.name}</h3>
      </div>
    );
  }
}
