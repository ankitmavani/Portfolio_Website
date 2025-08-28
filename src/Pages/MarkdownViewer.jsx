import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { useSearchParams } from "react-router-dom";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const MarkdownViewer = () => {
  const [markdown, setMarkdown] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [fileName, setFileName] = useSearchParams();

  const file = fileName.get("file");

  useEffect(() => {
    // Fetch the README.md file from the public directory
    fetch(`./Markdown/${file}.md`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load README.md");
        }
        return response.text();
      })
      .then((text) => {
        setMarkdown(text);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <article className="about active" data-page="markdown">
        <header>
          <h2 className="h2 article-title">Documentation</h2>
        </header>
        <div className="loading">Loading README.md...</div>
      </article>
    );
  }

  if (error) {
    return (
      <article className="about active" data-page="markdown">
        <header>
          <h2 className="h2 article-title">Documentation</h2>
        </header>
        <div className="error">Error: {error}</div>
      </article>
    );
  }

  return (
    <article className="blog active" data-page="markdown">
      <header>
        <h2 className="h2 article-title">Documentation</h2>
      </header>

      <div className="markdown-content">
        <ReactMarkdown
          children={markdown}
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || "");
              const language = match ? match[1] : "";

              return !inline && language ? (
                <SyntaxHighlighter
                  children={String(children).replace(/\n$/, "")}
                  style={atomDark}
                  language={language}
                  PreTag="div"
                  {...props}
                />
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
          }}
        />
      </div>
    </article>
  );
};

export default MarkdownViewer;
