import "./App.css";
import Navbar from "./components/navbar/Navbar";
import SectionC from "./components/section/SectionC";
import SectionChoose from "./components/sectionChoose/SectionChoose";
import SectionChooseHead from "./components/sectionChoose/SectionChooseHead";
import SectionArticles from "./components/sectionA/SectionArticles";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <div className="App">
      <div className="header-container container-fluid bg-white p-0">
        <div className="container">
          <header className="header">
            <Navbar />
          </header>
        </div>
      </div>
      <SectionC />
      <section>
        <div className="section-Choose container-fluid">
          <div className="container">
            <div className="d-flex flex-column align-items-center justify-content-center">
              <SectionChooseHead />
              <SectionChoose />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="section-article container-fluid">
          <div className="container">
            <h1 className="text-center text-sm-start text-md-start h4 py-5">
              Latest articles
            </h1>
            <SectionArticles />
          </div>
        </div>
      </section>
      <footer>
        <div className="section-footer container-fluid">
          <div className="container">
            <Footer />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
