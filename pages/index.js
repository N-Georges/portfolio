import { About } from "../components/About";
import { Banner } from "../components/Banner";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { Project } from "../components/Project";
import { Services } from "../components/Services";

export default function Home() {
  return (
    <div>
      <Banner />
      <About />
      <Services />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}
