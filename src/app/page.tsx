import Hero from "@/components/Molecules/hero";
import Nav from "@/components/Molecules/nav";
import Servicepage from "@/components/Molecules/servicep";
import ContactPage from "@/components/Molecules/contact";

export default function Home() {
  return (
    <main className="min-h-screen absolute">
      <Nav className="h-[50px] text-accent z-50 absolute top-0 " />
      <Hero text="SEA Salon" text2="Beauty and Elegance Redefined" className="relative bottom-0" />
      <div className="relative -bottom-0">
        <Servicepage />
      </div>
      <div className="relative top-0">

        <ContactPage thomas="08123456789" sekar="08164829372" />
      </div>

    </main>
  );
}
