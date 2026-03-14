const GITHUB_AVATAR = "https://avatars.githubusercontent.com/u/3942885?v=4";
const GITHUB_URL = "https://github.com/bharathnayak03";

export default function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="profile">
          <img src={GITHUB_AVATAR} alt="Bharath Nayak" className="avatar" />
          <div>
            <h1>Bharath Nayak</h1>
            <p className="subtitle">AI Artifacts Showcase</p>
            <p className="meta">
              Bangalore &middot;{" "}
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </p>
          </div>
        </div>
        <p className="header-desc">
          A collection of interactive artifacts, tools, and visualizations
          built with AI assistants.
        </p>
      </div>
    </header>
  );
}
