import Header from "@/components/header";
import SejarahJumbotron from "./jumbotron";
import Footer from "@/components/footer";
import Ketua from "./ketua";

export default function Sejarah() {
  return (
    <main className=" min-h-[100vh]  bg-sejarah-hero-image bg-no-repeat bg-contain w-full">
      <Header />
      <SejarahJumbotron/>
      <Ketua/>
      <Footer/>
    </main>
  );
}
