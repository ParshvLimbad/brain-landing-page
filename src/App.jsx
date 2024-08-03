import SectionOne from "./SectionOne";
import "./App.css";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
import SectionFour from "./SectionFour";
import Footer from "./Footer";

function App() {
  return (
    <main className="h-screen bg-white">
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <Footer />
    </main>
  );
}

export default App;
