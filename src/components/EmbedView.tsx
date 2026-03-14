import { Artifact } from "../data/artifacts";

interface EmbedViewProps {
  artifact: Artifact;
  onBack: () => void;
}

export default function EmbedView({ artifact, onBack }: EmbedViewProps) {
  return (
    <div className="embed-view">
      <div className="embed-header">
        <button className="back-btn" onClick={onBack}>
          &larr; Back
        </button>
        <h2>{artifact.title}</h2>
      </div>
      <div className="embed-container">
        {artifact.embedHtml ? (
          <iframe
            srcDoc={artifact.embedHtml}
            title={artifact.title}
            sandbox="allow-scripts allow-same-origin"
            className="embed-iframe"
          />
        ) : artifact.embedUrl ? (
          <iframe
            src={artifact.embedUrl}
            title={artifact.title}
            sandbox="allow-scripts allow-same-origin"
            className="embed-iframe"
          />
        ) : null}
      </div>
    </div>
  );
}
