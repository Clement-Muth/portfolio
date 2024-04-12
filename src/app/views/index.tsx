import AboutMe from "~/app/views/aboutMe";
import ContactMe from "~/app/views/contactMe";
import Hero from "~/app/views/hero";

const Home = () => {
  return (
    <div className="flex flex-col justify-center gap-32 w-full lg:w-[1024px]">
      <Hero />
      <AboutMe />
      <ContactMe />
    </div>
  );
};

export default Home;
