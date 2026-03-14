import { ArtifactCategory, ArtifactTool } from "../data/artifacts";

const CATEGORIES: ArtifactCategory[] = [
  "Game",
  "Visualization",
  "Tool",
  "Creative",
  "Education",
  "Productivity",
];

const TOOLS: ArtifactTool[] = ["Claude", "ChatGPT", "Gemini", "Copilot", "Other"];

interface FilterBarProps {
  selectedCategory: ArtifactCategory | "All";
  selectedTool: ArtifactTool | "All";
  onCategoryChange: (cat: ArtifactCategory | "All") => void;
  onToolChange: (tool: ArtifactTool | "All") => void;
}

export default function FilterBar({
  selectedCategory,
  selectedTool,
  onCategoryChange,
  onToolChange,
}: FilterBarProps) {
  return (
    <div className="filter-bar">
      <div className="filter-group">
        <label htmlFor="category-select">Category</label>
        <select
          id="category-select"
          className="filter-select"
          value={selectedCategory}
          onChange={(e) =>
            onCategoryChange(e.target.value as ArtifactCategory | "All")
          }
        >
          <option value="All">All Categories</option>
          {CATEGORIES.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>
      <div className="filter-group">
        <label htmlFor="tool-select">AI Tool</label>
        <select
          id="tool-select"
          className="filter-select"
          value={selectedTool}
          onChange={(e) =>
            onToolChange(e.target.value as ArtifactTool | "All")
          }
        >
          <option value="All">All Tools</option>
          {TOOLS.map((tool) => (
            <option key={tool} value={tool}>
              {tool}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
