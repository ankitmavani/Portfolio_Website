import React, { useState } from "react";
import { ChevronRight, ChevronDown } from "lucide-react";

const treeData = [
  {
    name: "DSA",
    type: "folder",
    children: [
      {
        name: "Array",
        type: "folder",
        children: [{ name: "Array.md", type: "file" }],
      },
      {
        name: "String",
        type: "folder",
        children: [{ name: "String.md", type: "file" }],
      },
      {
        name: "Object",
        type: "folder",
        children: [{ name: "Object.md", type: "file" }],
      },
      {
        name: "Stack",
        type: "folder",
        children: [{ name: "Stack.md", type: "file" }],
      },
      {
        name: "Queue",
        type: "folder",
        children: [{ name: "Queue.md", type: "file" }],
      },
      {
        name: "Linked List",
        type: "folder",
        children: [{ name: "LinkedList.md", type: "file" }],
      },
      {
        name: "HashMap & Hashing",
        type: "folder",
        children: [
          { name: "HashMap.md", type: "file" },
          { name: "Hashing.md", type: "file" },
        ],
      },
      {
        name: "Sorting & Searching",
        type: "folder",
        children: [
          { name: "Sorting.md", type: "file" },
          { name: "Searching.md", type: "file" },
        ],
      },
      {
        name: "Trees",
        type: "folder",
        children: [{ name: "Trees.md", type: "file" }],
      },
      {
        name: "Graphs",
        type: "folder",
        children: [{ name: "Graphs.md", type: "file" }],
      },
      {
        name: "Divide and Conquer",
        type: "folder",
        children: [{ name: "DivideAndConquer.md", type: "file" }],
      },
      {
        name: "Time Complexity",
        type: "folder",
        children: [{ name: "TimeComplexity.md", type: "file" }],
      },
      {
        name: "Greedy Algo",
        type: "folder",
        children: [{ name: "Greedy.md", type: "file" }],
      },
      {
        name: "Dynamic Programming",
        type: "folder",
        children: [{ name: "DynamicProgramming.md", type: "file" }],
      },
      {
        name: "Bitwise",
        type: "folder",
        children: [{ name: "Bitwise.md", type: "file" }],
      },
      {
        name: "Math",
        type: "folder",
        children: [{ name: "Math.md", type: "file" }],
      },
      {
        name: "Backtracking",
        type: "folder",
        children: [{ name: "Backtracking.md", type: "file" }],
      },
      {
        name: "Recursion",
        type: "folder",
        children: [{ name: "Recursion.md", type: "file" }],
      },
      {
        name: "Heap",
        type: "folder",
        children: [{ name: "Heap.md", type: "file" }],
      },
    ],
  },
  {
    name: "HTML",
    type: "folder",
    children: [{ name: "html.md", type: "file" }],
  },
  {
    name: "CSS",
    type: "folder",
    children: [{ name: "css.md", type: "file" }],
  },
  {
    name: "JavaScript",
    type: "folder",
    children: [{ name: "JavaScript.md", type: "file" }],
  },
  {
    name: "TypeScript",
    type: "folder",
    children: [{ name: "TypeScript.md", type: "file" }],
  },
  {
    name: "React",
    type: "folder",
    children: [{ name: "React.md", type: "file" }],
  },
  {
    name: "NodeJS",
    type: "folder",
    children: [{ name: "Node.md", type: "file" }],
  },
  {
    name: "SQL",
    type: "folder",
    children: [{ name: "SQL.md", type: "file" }],
  },
  {
    name: "NoSQL",
    type: "folder",
    children: [{ name: "NoSQL.md", type: "file" }],
  },
  {
    name: "Backend",
    type: "folder",
    children: [{ name: "backend.md", type: "file" }],
  },
  {
    name: "Frontend",
    type: "folder",
    children: [{ name: "Frontend.md", type: "file" }],
  },
  {
    name: "Git",
    type: "folder",
    children: [{ name: "Git.md", type: "file" }],
  },
  {
    name: "Docker",
    type: "folder",
    children: [{ name: "Docker.md", type: "file" }],
  },
  {
    name: "System Design",
    type: "folder",
    children: [{ name: "SystemDesign.md", type: "file" }],
  },
];

const TreeNode = ({ node, level = 0 }) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasChildren = node.type === "folder" && node.children?.length > 0;

  return (
    <div>
      {/* Row */}
      <div
        className="flex items-center cursor-pointer select-none hover:bg-white/5 rounded-sm"
        style={{ paddingLeft: `${level * 16}px` }}
        onClick={() => hasChildren && setIsOpen(!isOpen)}
      >
        {/* Arrow toggle */}
        {hasChildren ? (
          isOpen ? (
            <ChevronDown className="w-4 h-4 text-gray-400" />
          ) : (
            <ChevronRight className="w-4 h-4 text-gray-400" />
          )
        ) : (
          <span className="w-4 h-4" />
        )}

        {/* File/Folder Name */}
        <span className="text-gray-200 text-sm">{node.name}</span>
      </div>

      {/* Children */}
      {hasChildren && isOpen && (
        <div className="ml-[16px] border-l border-gray-700">
          {node.children.map((child, index) => (
            <TreeNode key={index} node={child} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

export default function Blog() {
  return (
    <article className="blog active" data-page="about">
      <header>
        <h2 className="h2 article-title">Blog</h2>
      </header>
      <div className="text-sm text-gray-200 font-mono">
        {treeData.map((node, index) => (
          <TreeNode key={index} node={node} />
        ))}
      </div>
    </article>
  );
}
