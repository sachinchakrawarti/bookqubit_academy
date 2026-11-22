// src/app/programming/javascript/page.js
"use client";

import Link from "next/link";
import "./javascript.css";

export default function JavaScriptTutorial() {
  return (
    <div className="article-layout">
      
      {/* LEFT SIDEBAR */}
      <aside className="article-sidebar">
        <h3 className="sidebar-title">JS Tutorial</h3>
        <nav className="sidebar-nav">
          <Link href="#intro" className="sidebar-link active">JS Introduction</Link>
          <Link href="#variables" className="sidebar-link">JS Variables</Link>
          <Link href="#functions" className="sidebar-link">JS Functions</Link>
          <Link href="#dom" className="sidebar-link">JS DOM</Link>
        </nav>
      </aside>

      {/* MAIN ARTICLE CONTENT */}
      <article className="article-content">
        <div className="article-header">
          <span className="article-tag">Programming</span>
          <h1 className="article-title">JavaScript Tutorial</h1>
          <p className="article-desc">
            JavaScript is the world's most popular programming language. 
            It is the programming language of the Web. Learn how to add interactivity to your pages.
          </p>
        </div>

        <hr className="article-divider" />

        {/* SECTION: Intro */}
        <section id="intro" className="article-section">
          <h2>JS Introduction</h2>
          <p>
            JavaScript can change HTML content, attribute values, and styles. 
            It can also hide and show HTML elements.
          </p>
          <div className="code-block">
            <div className="code-header">
              <span>Example</span>
            </div>
            <pre>
              <code>
{`// Change HTML Content
document.getElementById("demo").innerHTML = "Hello JavaScript!";`}
              </code>
            </pre>
          </div>
        </section>

        {/* SECTION: Variables */}
        <section id="variables" className="article-section">
          <h2>JS Variables</h2>
          <p>
            Variables are containers for storing data values. In modern JavaScript, 
            we use <code>let</code> or <code>const</code> to declare variables.
          </p>
          <div className="code-block">
            <div className="code-header">
              <span>Example</span>
            </div>
            <pre>
              <code>
{`let x = 5;
let y = 6;
let z = x + y; // z will be 11
console.log(z);`}
              </code>
            </pre>
          </div>
        </section>

        {/* SECTION: Functions */}
        <section id="functions" className="article-section">
          <h2>JS Functions</h2>
          <p>
            A JavaScript function is a block of code designed to perform a particular task. 
            It is executed when "something" invokes it (calls it).
          </p>
          <div className="code-block">
            <div className="code-header">
              <span>Example</span>
            </div>
            <pre>
              <code>
{`function myFunction(p1, p2) {
  return p1 * p2; // The function returns the product of p1 and p2
}`}
              </code>
            </pre>
          </div>
        </section>

      </article>
    </div>
  );
}