import "./page.css"

export default function Home() {
  return (
    <main>
      <div className="Navbar">Navbar</div>
      <div className="Countdown">Countdown</div>
      <div className="Rounds">
        <div className="Round">
          Round 1 Info
        </div>
        <div className="Round">
          Round 2 Info
        </div>
        <div className="Round">
          Round 3 Info
        </div>
      </div>
      <div className="Registration">Registration link</div>
      <div className="Footer">Footer</div>
    </main>
  );
}
