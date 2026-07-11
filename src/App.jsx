import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Perks from "./components/Perks";
import Eligibility from "./components/Eligibility";
import Timeline from "./components/Timeline";
import ApplyForm from "./components/ApplyForm";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Perks />
        <Eligibility />
        <Timeline />
        <ApplyForm />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
