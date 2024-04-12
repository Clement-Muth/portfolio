import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Link } from "@nextui-org/link";

const Bio = () => {
  return (
    <Card fullWidth className="bg-white p-6 justify-around items-center" radius="md">
      <CardBody className="gap-4">
        <h2 className="text-xl">Bio</h2>
        <p className="leading-5 text-gray-700">
          I am a web developer with over 7 years of experience, 3 years of entrepreneurship, and 2 years of
          self-employment as an auto-entrepreneur. I have created numerous personal and professional web
          applications. I founded my communication agency specializing in eco-friendly development,
          performance-oriented, and SEO-focused (Azinove), as well as my freelance web development business as
          an auto-entrepreneur. I specialize in the React / NextJS / Typescript frameworks for web
          applications and React Native for mobile applications. I use Firebase, AWS, Node.js, and Express on
          a daily basis as backend technologies. I also enjoy crafting my creations into beautiful designs, so
          I have a good foundation in UX/UI for web/mobile applications.
          <br />
          <br />
          Looking forward to getting in touch with you!
        </p>
      </CardBody>
      <CardFooter>
        <Button
          as={Link}
          href="https://www.linkedin.com/in/clement-muth/"
          className="bg-yellow"
          target="_blank"
          isBlock
          showAnchorIcon
          fullWidth
        >
          See all my Experience
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Bio;
