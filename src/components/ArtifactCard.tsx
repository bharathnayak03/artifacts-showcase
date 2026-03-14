import { Artifact } from "../data/artifacts";

const TOOL_COLORS: Record<string, string> = {
  Claude: "#d97706",
  ChatGPT: "#10a37f",
  Gemini: "#4285f4",
  Copilot: "#6e40c9",
  Other: "#64748b",
};

const CATEGORY_ICONS: Record<string, string> = {
  Game: "\u{1F3AE}",
  Visualization: "\u{1F4CA}",
  Tool: "\u{1F527}",
  Creative: "\u{1F3A8}",
  Education: "\u{1F4DA}",
  Productivity: "\u{26A1}",
};

interface ArtifactCardProps {
  artifact: Artifact;
  onClick: (artifact: Artifact) => void;
}

export default function ArtifactCard({ artifact, onClick }: ArtifactCardProps) {
  const hasEmbed = artifact.embedUrl || artifact.embedHtml;

  const handleClick = () => {
    if (artifact.externalUrl && !hasEmbed) {
      window.open(artifact.externalUrl, "_blank", "noopener,noreferrer");
    } else {
      onClick(artifact);
    }
  };

  return (
    <div className="artifact-card" onClick={handleClick}>
      <div className="card-header">
        <span className="category-icon">
          {CATEGORY_ICONS[artifact.category] || "\u{1F4E6}"}
        </span>
        <span
          className="tool-badge"
          style={{ backgroundColor: TOOL_COLORS[artifact.tool] || "#64748b" }}
        >
          {artifact.tool}
        </span>
      </div>
      <h3 className="card-title">{artifact.title}</h3>
      <p className="card-desc">{artifact.description}</p>
      <div className="card-footer">
        <div className="card-tags">
          {artifact.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
        <span className="card-action">
          {hasEmbed ? "View \u2192" : "Open \u2197"}
        </span>
      </div>
    </div>
  );
}
