import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar logo="Linkey" />
      <Header />
      <Banner />
      <Footer />
    </div>
  );
}
