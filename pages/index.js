import { About } from "../components/About";
import { Banner } from "../components/Banner";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Project } from "../components/Project";
import ScrollToTop, {
  ScrollToTopButton,
} from "../components/ScrollOnTopButton";
import { Services } from "../components/Services";

export default function Home() {
  return (
    <div>
      <ScrollToTop />

      <Banner />
      <About />
      <Services />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}
