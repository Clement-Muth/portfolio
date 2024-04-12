import AboutMe from "~/app/views/aboutMe";
import ContactMe from "~/app/views/contactMe";
import Hero from "~/app/views/hero";

const Home = () => {
  return (
    <div className="flex flex-col w-[1024px] gap-32">
      <Hero />
      <AboutMe />
      <ContactMe />
    </div>
  );
};

export default Home;
