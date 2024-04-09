import Header from "@/components/header";
import SejarahJumbotron from "./jumbotron";
import Footer from "@/components/footer";
import Ketua from "./ketua";
import BujangGadis from "./bujanggadis";
import Simbol from "./simbol";

export default function Sejarah() {
  return (
    <main className="bg-sejarah-hero-image bg-no-repeat bg-contain w-full">
      <Header />
      <SejarahJumbotron/>
      <Ketua/>
      <BujangGadis/>
      <Simbol/>
      <Footer/>
    </main>
  );
}
