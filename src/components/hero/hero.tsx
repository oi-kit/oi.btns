import type { FC } from "react";
import { Container } from "@/components/layouts";
import { HeroHeading, HeroContent } from "@/components/hero";

const Hero: FC = () => {
  return (
    <Container>
      <HeroHeading />
      <HeroContent />
    </Container>
  );
};

export default Hero;
