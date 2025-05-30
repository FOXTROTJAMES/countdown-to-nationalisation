import Image from "next/image";
import CountdownOperators from "./countdown";
import NationalizedOperators from "./natinlised";
import Footer from "./footer";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">

      <h1 className="text-center">Countdown to Nationalisation</h1>
      
      <Image
        src="/960-640-great-british-railways.jpg"
        alt="Railway Image"
        width={500}
        height={300}
      />
      
     
      <CountdownOperators />
      <NationalizedOperators />
      <Footer />

    </div>
  );
}
