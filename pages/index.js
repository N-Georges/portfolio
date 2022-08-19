import { About } from "../components/About";
import { Banner } from "../components/Banner";
import { Footer } from "../components/Footer";
import { Services } from "../components/Services";

export default function Home() {
  return (
    <div>
      <Banner />
      <About />
      <Services />
      <Footer />
    </div>
  );
}
