import "./App.css";
import Card from "./components/Card";

function App() {

  const AboutMe = {
    name: "Suhail",
    age: 24,
    qualification: "graduation"
  }
  const Table = [1, 2, 3, 4, 5, 6]
  const F22labs = "Shabaz alam"

  return (
    <>
      <h1 className="text-3xl font-bold ">Props in React</h1>
      {/* <Card company={F22labs} /> */}
      <Card company="Suhail" work="technical" workinOn="solution" />
      <Card company="ZOHO" work="Devlopment" workinOn="Selling" />
      <Card company="ZOHO" work="Devlopment"  />
    </>
  );
}

export default App;
