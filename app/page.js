import Navbar from "./components/Navbar";
import Converter from "./components/Converter";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen justify-center items-center">
      <Navbar />
      <Converter />
      <Footer />
    </main>
  );
}
