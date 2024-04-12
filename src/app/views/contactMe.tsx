import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import Link from "next/link";
import Balancer from "react-wrap-balancer";

const ContactMe = () => {
  return (
    <Card className="py-6" radius="md">
      <CardBody className="items-center justify-center">
        <Balancer as="h3" className="text-5xl font-semibold max-w-md text-center">
          Do you want to work with me?
        </Balancer>
      </CardBody>
      <CardFooter className="items-center justify-center mt-5">
        <Button
          as={Link}
          href="mailto:clementmuth@gmail.com"
          target="_blank"
          size="lg"
          className="relative flex mt- h-[58px] bg-yellow items-center pr-1.5 py-4 !pl-8 rounded-full cursor-pointer"
        >
          <span className="mr-6 font-semibold">Contact me</span>
          <div className="flex bg-white justify-center items-center p-3 w-12 h-12 rounded-full">
            <div className="flex bg-black justify-center items-center w-4 h-4 rounded-full">
              <svg viewBox="0 0 24 24" fill="white" width="10px" height="10px">
                <title>click</title>
                <path d="m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" strokeWidth="5px" />
              </svg>
            </div>
          </div>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ContactMe;
