import { FlipWords } from "@/components/ui/flip-words";

export default function Hero() {
  const words = ["Ayush", "a Developer", "an AI Engineer", "a System Designer"];

  return (
    <div className="h-160 flex justify-center items-center px-4">
      <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        I'm
        <FlipWords words={words} /> <br />
        It's good to see you here!
      </div>
    </div>
  );
}
