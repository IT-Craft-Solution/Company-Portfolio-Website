import Hero from "../components/Hero";
import Services from "../components/home/Services";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Stats from "../components/home/Stats";
import RecentWork from "../components/home/RecentWork";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Services />
      <WhyChooseUs />
      <Stats />
      <RecentWork />
    </div>
  );
}
