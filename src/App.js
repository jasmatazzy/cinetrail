import Header from "./components/Header";

function App() {
  const globalStyles = {
    fontFamily: "Roboto, Arial, Helvetica, sans-serif"
  }
  return (
    <div className="App" style={globalStyles}>
      <Header />
    </div>
  )
}

export default App;
