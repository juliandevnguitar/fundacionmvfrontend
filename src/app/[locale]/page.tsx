import Hero from "@/components/Hero";
import About from "@/components/About";
import Statistics from "@/components/Statistics";
import Funding from "@/components/Funding";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center w-full">
      <Hero />
      <About />
      <Statistics />
      <Funding />
    </main>
  );
}
