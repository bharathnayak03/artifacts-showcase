import { useState, useMemo } from "react";
import Header from "./components/Header";
import FilterBar from "./components/FilterBar";
import ArtifactCard from "./components/ArtifactCard";
import EmbedView from "./components/EmbedView";
import {
  artifacts,
  Artifact,
  ArtifactCategory,
  ArtifactTool,
} from "./data/artifacts";
import "./App.css";

function App() {
  const [selectedCategory, setSelectedCategory] = useState<
    ArtifactCategory | "All"
  >("All");
  const [selectedTool, setSelectedTool] = useState<ArtifactTool | "All">(
    "All"
  );
  const [viewingArtifact, setViewingArtifact] = useState<Artifact | null>(null);

  const filtered = useMemo(() => {
    return artifacts.filter((a) => {
      if (selectedCategory !== "All" && a.category !== selectedCategory)
        return false;
      if (selectedTool !== "All" && a.tool !== selectedTool) return false;
      return true;
    });
  }, [selectedCategory, selectedTool]);

  // Group filtered artifacts by category
  const grouped = useMemo(() => {
    const map = new Map<string, Artifact[]>();
    for (const a of filtered) {
      const list = map.get(a.category) || [];
      list.push(a);
      map.set(a.category, list);
    }
    return map;
  }, [filtered]);

  if (viewingArtifact) {
    return (
      <EmbedView
        artifact={viewingArtifact}
        onBack={() => setViewingArtifact(null)}
      />
    );
  }

  return (
    <div className="app">
      <Header />
      <main className="main">
        <FilterBar
          selectedCategory={selectedCategory}
          selectedTool={selectedTool}
          onCategoryChange={setSelectedCategory}
          onToolChange={setSelectedTool}
        />
        {filtered.length === 0 && (
          <p className="empty">No artifacts match the selected filters.</p>
        )}
        {Array.from(grouped.entries()).map(([category, items]) => (
          <section key={category} className="category-section">
            <h2 className="category-heading">{category}</h2>
            <div className="card-grid">
              {items.map((artifact) => (
                <ArtifactCard
                  key={artifact.id}
                  artifact={artifact}
                  onClick={setViewingArtifact}
                />
              ))}
            </div>
          </section>
        ))}
      </main>
      <footer className="footer">
        <p>
          Built with AI &middot;{" "}
          <a
            href="https://github.com/bharathnayak03"
            target="_blank"
            rel="noopener noreferrer"
          >
            bharathnayak03
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
