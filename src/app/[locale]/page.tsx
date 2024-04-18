import Hero from "@/components/Hero";
import About from "@/components/About";
import Statistics from "@/components/Statistics";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center w-full">
      <Hero />
      <About />
      <Statistics />
    </main>
  );
}
