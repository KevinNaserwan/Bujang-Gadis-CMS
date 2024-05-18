import Header from "@/components/header";
import Footer from "@/components/footer";
import VisiMisiJumbotron from "./jumbotron";
import Visi from "./visi";
import Misi from "./misi";

export default function VisiMisi() {
  return (
    <main
      rel="preload"
      className="bg-sejarah-hero-image lg:bg-none bg-no-repeat bg-contain w-full"
    >
      <Header />
      <VisiMisiJumbotron />
      <Visi />
      <Misi />
      <Footer />
    </main>
  );
}
