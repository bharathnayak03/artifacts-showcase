import { useState, useMemo, useEffect, useCallback } from "react";
import Header from "./components/Header";
import FilterBar from "./components/FilterBar";
import ArtifactCard from "./components/ArtifactCard";
import EmbedView from "./components/EmbedView";
import {
  artifacts,
  Artifact,
  ArtifactCategory,
} from "./data/artifacts";
import { Analytics } from "@vercel/analytics/react";
import "./App.css";

function getArtifactIdFromHash(): string | null {
  const hash = window.location.hash;
  const match = hash.match(/^#\/artifact\/(.+)$/);
  return match ? match[1] : null;
}

function App() {
  const [selectedCategory, setSelectedCategory] = useState<
    ArtifactCategory | "All"
  >("All");
  const [viewingArtifact, setViewingArtifact] = useState<Artifact | null>(
    () => {
      const id = getArtifactIdFromHash();
      return id ? artifacts.find((a) => a.id === id) ?? null : null;
    }
  );

  const navigateToArtifact = useCallback((artifact: Artifact) => {
    window.location.hash = `#/artifact/${artifact.id}`;
    setViewingArtifact(artifact);
  }, []);

  const navigateHome = useCallback(() => {
    window.location.hash = "";
    setViewingArtifact(null);
  }, []);

  useEffect(() => {
    const onHashChange = () => {
      const id = getArtifactIdFromHash();
      if (id) {
        const found = artifacts.find((a) => a.id === id) ?? null;
        setViewingArtifact(found);
      } else {
        setViewingArtifact(null);
      }
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const filtered = useMemo(() => {
    return artifacts.filter((a) => {
      if (selectedCategory !== "All" && a.category !== selectedCategory)
        return false;
      return true;
    });
  }, [selectedCategory]);

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
      <>
        <EmbedView
          artifact={viewingArtifact}
          onBack={navigateHome}
        />
        <Analytics />
      </>
    );
  }

  return (
    <div className="app">
      <Header />
      <main className="main">
        <FilterBar
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
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
                  onClick={navigateToArtifact}
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
      <Analytics />
    </div>
  );
}

export default App;
