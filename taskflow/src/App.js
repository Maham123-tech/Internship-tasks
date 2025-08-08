import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      {/* Top Section */}
      <header className="top-section">
        <h1>My Awesome App</h1>
        <p>Making your life easier, one click at a time.</p>
        <button>Get Started</button>
      </header>

      {/* Features Section */}
      <section className="features">
        <h2>Features</h2>
        <div className="feature-list">
          <div className="feature">
            <span className="icon">🚀</span>
            <h3>Fast Performance</h3>
            <p>Lightning-fast speed for all your tasks.</p>
          </div>
          <div className="feature">
            <span className="icon">🔒</span>
            <h3>Secure</h3>
            <p>Top-notch security to protect your data.</p>
          </div>
          <div className="feature">
            <span className="icon">🎨</span>
            <h3>Beautiful Design</h3>
            <p>Modern and clean design for the best experience.</p>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="reviews">
        <h2>What Our Users Say</h2>
        <div className="review-list">
          <blockquote>“This app changed my life!” – Sarah</blockquote>
          <blockquote>“Super easy to use and really helpful.” – John</blockquote>
          <blockquote>“I can't imagine working without it.” – Emily</blockquote>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing">
        <h2>Pricing Plans</h2>
        <div className="pricing-list">
          <div className="plan">
            <h3>Free</h3>
            <p>$0/month</p>
            <button>Choose</button>
          </div>
          <div className="plan">
            <h3>Pro</h3>
            <p>$9/month</p>
            <button>Choose</button>
          </div>
          <div className="plan">
            <h3>Team</h3>
            <p>$29/month</p>
            <button>Choose</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>Contact us: support@myawesomeapp.com</p>
        <div className="social-icons">
          <a href="#">👍</a>
          <a href="#">🐦</a>
          <a href="#">📸</a>
        </div>
      </footer>
    </div>
  );
}
