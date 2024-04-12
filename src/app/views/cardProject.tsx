import { Card, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Link } from "@nextui-org/link";
import type { StaticImageData } from "next/image";
import ImageNext from "next/image";
import LinkNext from "next/link";

export interface CardProjectProps {
  name: string;
  description: string;
  href: string;
  desktopImage: StaticImageData;
  mobileImage: StaticImageData;
}

const CardProject = ({ desktopImage, href, mobileImage, name, description }: CardProjectProps) => {
  return (
    <div className="flex flex-col md:flex-row gap-5">
      <Card as="article" className="bg-white w-full h-auto" radius="lg">
        <CardBody>
          <div className="flex flex-1 justify-between items-center px-3">
            <div>
              <h3 className="text-3xl">{name}</h3>
              <p className="text-md mt-3">{description}</p>
            </div>
            <div className="shadow-lg rounded-full">
              <Link as={LinkNext} href={href} target="_blank">
                <div className="flex w-14 h-14 overflow-hidden justify-center items-center bg-white rounded-full img-container">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                    <title>arrow</title>
                    <path d="M9 6c0 .56.45 1 1 1h5.59L4.7 17.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L17 8.41V14c0 .55.45 1 1 1s1-.45 1-1V6c0-.55-.45-1-1-1h-8c-.55 0-1 .45-1 1z" />
                  </svg>
                </div>
              </Link>
            </div>
          </div>
          <div className="flex justify-center bg-[#f5f5f5] px-6 py-4 md:px-12 md:py-8 max-h-[400px] rounded-lg">
            <Image
              as={ImageNext}
              {...desktopImage}
              alt="desktop project illustration"
              className="shadow-lg"
              width={540}
              height={307}
            />
          </div>
        </CardBody>
      </Card>
      <Card as="article" className="max-w-[335px] w-full bg-white" radius="lg">
        <CardBody>
          <div className="bg-[#f5f5f5] p-2 items-center h-full rounded-xl">
            <Image
              {...mobileImage}
              alt="mobile project illustration"
              width={299}
              height={424}
              style={{ objectFit: "cover", objectPosition: "top" }}
            />
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default CardProject;
