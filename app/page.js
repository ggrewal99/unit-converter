import Navbar from "./components/Navbar";
import Converter from "./components/Converter";

export default function Home() {
  return (
    <main className="flex min-h-screen justify-center items-center">
      <Navbar />
      <Converter />
    </main>
  );
}
