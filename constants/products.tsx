import sidefolioAceternity from "../public/images/sidefolio-aceternity-2.png";
import sidefolioAceternity2 from "../public/images/sidefolio-aceternity-2.png";
import sidefolioAlgochurn from "../public/images/sidefolio-algochurn.png";
import sidefolioAlgochurn2 from "../public/images/sidefolio-algochurn.png";
import sidefolioMoonbeam from "../public/images/sidefolio-moonbeam.png";
import sidefolioMoonbeam2 from "../public/images/sidefolio-moonbeam-2.png";
import sidefolioTailwindMasterKit from "../public/images/sidefolio-tailwindmasterkit.png";
import sidefolioTailwindMasterKit2 from "../public/images/sidefolio-tailwindmasterkit-2.png";

export const products = [
  {
    href: "#",
    title: "AI Coding Copilot",
    description:
      "Exploring AI-assisted development workflows using Claude, OpenCode, and MCP concepts.",
    thumbnail: sidefolioAceternity,
    images: [sidefolioAceternity, sidefolioAceternity2],
    stack: ["Nextjs", "Nodejs", "Claude", "MCP"],
    slug: "ai-copilot",
    content: (
      <div>
        <p>
          Exploring how AI can assist real-world development workflows using
          tools like Claude and OpenCode. Focused on understanding how context,
          prompts, and tool integrations can improve developer productivity.
        </p>
        <p>
          Experimenting with prompt chaining, debugging assistance, and early
          agent-like workflows. Currently learning how to evolve from simple
          prompting to structured AI systems with memory and tool access.
        </p>
      </div>
    ),
  },
  {
    href: "#",
    title: "Intelligent Uptime Monitor",
    description:
      "A developer-focused uptime monitoring system with intelligent alerting and future AI insights.",
    thumbnail: sidefolioAlgochurn,
    images: [sidefolioAlgochurn, sidefolioAlgochurn2],
    stack: ["Nextjs", "Nodejs", "PostgreSQL", "Docker"],
    slug: "uptime-monitor",
    content: (
      <div>
        <p>
          Building a SaaS product to monitor application uptime with real-time
          alerts and performance tracking. Designed backend pipelines to
          continuously check service health and notify users on failures.
        </p>
        <p>
          Planning an AI layer to detect anomalies, reduce alert noise, and
          provide smarter insights. Focused on turning a simple monitoring tool
          into an intelligent decision-making system.
        </p>
      </div>
    ),
  },
  {
    href: "#",
    title: "AI Automation Workflows",
    description:
      "Designing automation pipelines combining APIs, logic, and AI-driven decision making.",
    thumbnail: sidefolioMoonbeam,
    images: [sidefolioMoonbeam, sidefolioMoonbeam2],
    stack: ["n8n", "APIs", "AI", "Automation"],
    slug: "ai-automation",
    content: (
      <div>
        <p>
          Building automation workflows using tools like n8n to connect APIs,
          business logic, and AI models. Designed systems for notifications,
          data processing, and event-driven actions.
        </p>
        <p>
          Exploring how AI can act as a decision layer inside workflows,
          enabling smarter automation. Goal is to build autonomous systems that
          reduce manual operations.
        </p>
      </div>
    ),
  },
  {
    href: "#",
    title: "RAG Knowledge Assistant",
    description:
      "Learning Retrieval-Augmented Generation to build context-aware AI systems.",
    thumbnail: sidefolioTailwindMasterKit,
    images: [sidefolioTailwindMasterKit, sidefolioTailwindMasterKit2],
    stack: ["LangChain", "Vector DB", "OpenAI", "Nodejs"],
    slug: "rag-assistant",
    content: (
      <div>
        <p>
          Studying how RAG (Retrieval-Augmented Generation) works to improve LLM
          reliability. Learning embeddings, vector search, and document-based
          question answering systems.
        </p>
        <p>
          Goal is to build AI applications that are grounded in real data and
          reduce hallucinations. Currently experimenting with document ingestion
          and semantic search pipelines.
        </p>
      </div>
    ),
  },
];
