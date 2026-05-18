function App() {
  return (
    <div>
      <header className="hero">
        <h1>Cat Rescue Trinidad</h1>
        <p>Helping stray and abandoned cats find safe homes.</p>

        <button>Adopt a Cat</button>
      </header>

      <section className="cats">
        <div className="card">
          <img
            src="https://placekitten.com/300/200"
            alt="cat"
          />
          <h2>Milo</h2>
          <p>Friendly and playful rescue cat.</p>
        </div>

        <div className="card">
          <img
            src="https://placekitten.com/301/200"
            alt="cat"
          />
          <h2>Luna</h2>
          <p>Calm indoor cat looking for a home.</p>
        </div>

        <div className="card">
          <img
            src="https://placekitten.com/302/200"
            alt="cat"
          />
          <h2>Simba</h2>
          <p>Young kitten rescued from the streets.</p>
        </div>
      </section>
    </div>
  );
}

export default App;
