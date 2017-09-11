function Cell(props) {
  var stle = {
    height: 50,
    width: 50,
    border: "1px solid black",
    backgroundColor: "yellow"
  }
  return (
    <div style = {style}>
      <Circle/>
    </div>
  )
}

function Circle(props){
  var style = {
    backgroundColor: "white",
    border: "1px solid black",
    borderRadius: "100%",
    paddingTop: "98%"
  }

  return (
    <div style = {style}></div>
  )
}

ReactDOM.render(
  <Cell/>,
  document.getElementById('root')
);
