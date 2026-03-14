export type ArtifactCategory =
  | "Game"
  | "Visualization"
  | "Tool"
  | "Creative"
  | "Education"
  | "Productivity";

export type ArtifactTool = "Claude" | "ChatGPT" | "Gemini" | "Copilot" | "Other";

export interface Artifact {
  id: string;
  title: string;
  description: string;
  category: ArtifactCategory;
  tool: ArtifactTool;
  thumbnail?: string;
  /** If set, clicking the card opens this URL in a new tab */
  externalUrl?: string;
  /** If set, clicking the card opens an embedded iframe view */
  embedUrl?: string;
  /** Raw HTML content to render in iframe via srcdoc */
  embedHtml?: string;
  tags: string[];
  createdAt: string;
}

export const artifacts: Artifact[] = [
  {
    id: "claude-artifact-demo",
    title: "Claude Artifact Demo",
    description:
      "An interactive artifact built with Claude — demonstrating real-time AI-generated UI components.",
    category: "Tool",
    tool: "Claude",
    tags: ["claude", "artifact", "interactive"],
    createdAt: "2026-03-14",
    // Replace embedHtml with your actual Claude artifact script
    embedHtml: `<iframe src="https://claude.site/public/artifacts/2089a777-d7f6-421c-a56a-60daf39499d1/embed" title="Claude Artifact" width="100%" height="600" frameborder="0" allow="clipboard-write" allowfullscreen></iframe>`,
  },
//   {
//     id: "data-viz-example",
//     title: "Interactive Data Visualization",
//     description:
//       "A dynamic chart built using AI-assisted code generation, showcasing real-time data rendering.",
//     category: "Visualization",
//     tool: "ChatGPT",
//     tags: ["chart", "data", "d3"],
//     externalUrl: "https://observablehq.com",
//     createdAt: "2026-03-10",
//   },
//   {
//     id: "ai-game-demo",
//     title: "AI-Generated Mini Game",
//     description:
//       "A simple browser game entirely generated through AI prompting — playable right in the browser.",
//     category: "Game",
//     tool: "Claude",
//     tags: ["game", "interactive", "canvas"],
//     createdAt: "2026-03-08",
//     embedHtml: `<!DOCTYPE html>
// <html>
// <head>
//   <style>
//     body { font-family: Inter, sans-serif; display: flex; align-items: center; justify-content: center; height: 100vh; margin: 0; background: #0f172a; color: #e2e8f0; }
//     .placeholder { text-align: center; padding: 2rem; }
//   </style>
// </head>
// <body>
//   <div class="placeholder">
//     <h2>Mini Game</h2>
//     <p>Paste your game HTML here.</p>
//   </div>
// </body>
// </html>`,
//   },
];
