function Circle(props){
  var style = {
    backgroundColor: "white",
    border: "1px solid black",
    borderRadius: "100%",
    paddingTop: "98%"
  }

  return (
    <div stle = {style}></div>
  )
}

ReactDOM.render(
  <Circle/>,
  document.getElementById('root')
);
