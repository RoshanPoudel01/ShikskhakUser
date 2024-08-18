import { Flex, Image, Text } from "@chakra-ui/react";
import AirbnbLogo from "@shikshak/assets/images/svgs/logos/Airbnb.svg";
import AmazonLogo from "@shikshak/assets/images/svgs/logos/Amazon.svg";
import FacebookLogo from "@shikshak/assets/images/svgs/logos/Facebook.svg";
import GoogleLogo from "@shikshak/assets/images/svgs/logos/GoogleLogo.svg";
import GrabLogo from "@shikshak/assets/images/svgs/logos/Grab.svg";
import NetflixLogo from "@shikshak/assets/images/svgs/logos/Netflix.svg";
const Section2 = () => {
  return (
    <Flex py={20} align={"center"} flexDir={"column"} justify={"center"}>
      <Text textAlign={"center"} fontSize={"24px"}>
        Trusted by 5,000+ Companies Worldwide
      </Text>
      <Flex columnGap={8} align={"center"} justify={"center"} flexWrap={"wrap"}>
        <Image src={GoogleLogo} alt={"Google Logo"} boxSize={24} />
        <Image src={NetflixLogo} alt={"Netflix Logo"} boxSize={24} />
        <Image src={AirbnbLogo} alt={"Airbnb Logo"} boxSize={24} />
        <Image src={AmazonLogo} alt={"Amazon Logo"} boxSize={24} />
        <Image src={FacebookLogo} alt={"Facebook Logo"} boxSize={24} />
        <Image src={GrabLogo} alt={"Grab Logo"} boxSize={24} />
      </Flex>
    </Flex>
  );
};

export default Section2;
