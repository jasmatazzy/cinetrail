import Header from "./components/Header/Header";
import Homepage from "./pages/Homepage/Homepage";
import './App.css'
import Footer from "./components/Footer/Footer";

function App() {
  // const globalStyles = {
  //   fontFamily: "Roboto, Arial, Helvetica, sans-serif"
  // }
  return (
    <div className="App">
      <Header />
      <Homepage />
      <Footer />
    </div>
  )
}

export default App;
