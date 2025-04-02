import "./App.css";
import axios from "axios";

function App() {
  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => console.log(response.data))
    .catch();
  return (
    <>
      <h1>Hello</h1>
    </>
  );
}

export default App;
