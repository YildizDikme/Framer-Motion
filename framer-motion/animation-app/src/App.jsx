import "./index.css";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import ImageLayout from "./components/ImageLayout";
import TextSection from "./components/TextSection";
import VideoSection from "./components/VideoSection";
import Footer from "./components/Footer";
import StarsCanvas from "./components/StarsCanvas";
import TextImage from "./components/TextImage";

function App() {
  return (
    <>
      <StarsCanvas></StarsCanvas>
      <Header></Header>
      <Banner></Banner>
      <ImageLayout></ImageLayout>
      <TextImage></TextImage>
      <VideoSection></VideoSection>
      <TextSection></TextSection>
      <Footer></Footer>
    </>
  );
}

export default App;
