import {
  TitleWrapper,
  Heading,
  HeroText,
  HeroDescription,
  HeroSection,
} from "./styles";
import walking from "./../../public/walking.png";
import Image from "next/image";

const Header = () => {
  return (
    <TitleWrapper>
      <HeroSection>
        <Heading>
          <text>Byrårackor.se</text>
        </Heading>
        <Image src={walking} width="150px" height="120px" alt="standing dog" />
      </HeroSection>

      <HeroDescription>
        <HeroText>
          Här kan du se hundvänliga kontor i Göteborg för dig som vill kunna ta
          med din hund på jobbet, eller om du hitta ett ställe där det redan
          finns en gosig kontorskompis.
        </HeroText>
      </HeroDescription>
    </TitleWrapper>
  );
};

export default Header;
