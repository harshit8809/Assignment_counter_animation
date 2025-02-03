import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import Quill styles
import { Button } from "@mui/material"; // Optional: Use Material UI for styling

const RichTextEditor: React.FC = () => {
  const [content, setContent] = useState<string>("");

  // Load saved content from localStorage on component mount
  useEffect(() => {
    const savedContent = localStorage.getItem("richTextContent");
    if (savedContent) {
      setContent(savedContent);
    }
  }, []);

  // Save content to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("richTextContent", content);
  }, [content]);

  // Clear all data from the editor and localStorage
  const handleClear = () => {
    setContent(""); // Clear the editor content
    localStorage.removeItem("richTextContent"); // Remove saved content from localStorage
  };

  // Quill modules for toolbar customization
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      ["clean"],
    ],
  };

  // Quill formats for supported formats
  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "list",
    "bullet",
    "link",
    "image",
  ];

  return (
    <div style={{ margin: "20px" }}>
      <h2>Rich Text Editor</h2>
      <ReactQuill
        theme="snow"
        value={content}
        onChange={setContent}
        modules={modules}
        formats={formats}
        style={{ height: "300px", marginBottom: "20px" }}
      />
      <Button
        variant="contained"
        color="secondary"
        onClick={handleClear}
        style={{ marginBottom: "20px" }}
      >
        Clear
      </Button>
      <div>
        <h3>Preview</h3>
        <div
          dangerouslySetInnerHTML={{ __html: content }}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            borderRadius: "4px",
          }}
        />
      </div>
    </div>
  );
};

export default RichTextEditor;