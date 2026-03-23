import { Container } from "@/components/Container";
import Heading from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import { FlipWords } from "@/components/ui/flip-words";

export default function Home() {
  const words = [
    "Ayush",
    "An AI Engineer",
    "A Full Stack Developer",
    "A Problem Solver",
  ];
  return (
    <Container>
      <span className="text-4xl">👋</span>
      <Heading className="font-black">
        Hey! I&apos;m <FlipWords words={words} />
      </Heading>
      <Paragraph className="max-w-xl mt-4">
        I build
        <Highlight>developer-focused</Highlight> AI systems and automation tools
        that solve real-world problems.
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        Currently transitioning from full-stack engineering to{" "}
        <Highlight>AI system design — focusing on LLMs</Highlight>, automation,
        and scalable architectures.
      </Paragraph>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        What I&apos;ve been working on
      </Heading>
      <Products />
      <TechStack />
    </Container>
  );
}
