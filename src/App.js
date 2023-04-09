import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { data } from "./data";

function App() {
  return (
    <>
      <Navbar />
      <Hero data={data} />
    </>
  );
}

export default App;

