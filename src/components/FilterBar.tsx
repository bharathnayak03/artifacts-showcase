import { ArtifactCategory } from "../data/artifacts";

const CATEGORIES: ArtifactCategory[] = [
  "Game",
  "Visualization",
  "Tool",
  "Creative",
  "Education",
  "Productivity",
];

interface FilterBarProps {
  selectedCategory: ArtifactCategory | "All";
  onCategoryChange: (cat: ArtifactCategory | "All") => void;
}

export default function FilterBar({
  selectedCategory,
  onCategoryChange,
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
    </div>
  );
}
