import React, { useState } from "react";
import { ChevronRight, ChevronDown } from "lucide-react";

const treeData = [
  {
    name: "src",
    type: "folder",
    children: [
      {
        name: "components",
        type: "folder",
        children: [
          { name: "Header.jsx", type: "file" },
          { name: "Footer.jsx", type: "file" },
        ],
      },
      {
        name: "pages",
        type: "folder",
        children: [
          { name: "Home.jsx", type: "file" },
          { name: "About.jsx", type: "file" },
        ],
      },
      { name: "App.js", type: "file" },
      { name: "index.js", type: "file" },
    ],
  },
  {
    name: "public",
    type: "folder",
    children: [{ name: "index.html", type: "file" }],
  },
  { name: "package.json", type: "file" },
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
        <span className="text-gray-200 text-2xl">{node.name}</span>
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
        <h2 className="h2 article-title">About me</h2>
      </header>
      <div className="text-sm text-gray-200 font-mono">
        {treeData.map((node, index) => (
          <TreeNode key={index} node={node} />
        ))}
      </div>
    </article>
  );
}
