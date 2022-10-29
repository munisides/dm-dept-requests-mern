import React from "react";

export default function Footer() {
  return (
    <section maxWidth="sm" style={{ marginTop: 50 }}>
      <p>
        <span className="log-reg-link">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://munisides.github.io/"
          >
            Munisides
          </a>
        </span>
        | 2017 - {new Date().getFullYear()}
      </p>
    </section>
  );
}
