import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import HowToDownload from "./components/HowToDownload";
import Navbar from "./components/Navbar";
import VideoDownloader from "./components/VideoDownloader";
import WebsiteFeature from "./components/WebsiteFeature";
import Contact from "./components/Contact"

const Home = () => (
  <>
    <Navbar />
    <VideoDownloader />
    <WebsiteFeature />
    <HowToDownload />
    <FAQ />
    <Footer />
  </>
);

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default App;
