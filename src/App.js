import "./App.css";
import illistration from "./images/illustration-sign-up-desktop.svg";

function App() {
  return (
    <div className="App">
      <div>
        <div>
          <h1>Stay updated!</h1>
          <p>Join 60,000+ product managers receiving monthly updates on:</p>
          <ul>
            <li>Product discovery and building what matters</li>
            <li>Measuring to ensure updates are a success</li>
            <li>And much more!</li>
          </ul>
        </div>
        <div>
          <p>Email address</p>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="email@company.com"
          />
          <button type="submit">Subscribe to monthly newsletter</button>
        </div>
      </div>
      <div>
        <img src={illistration} />{" "}
      </div>
    </div>
  );
}

export default App;
