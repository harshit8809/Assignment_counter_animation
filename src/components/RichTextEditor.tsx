import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; 
import { Button } from "@mui/material"; 

const RichTextEditor: React.FC = () => {
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    const savedContent = localStorage.getItem("richTextContent");
    if (savedContent) {
      setContent(savedContent);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("richTextContent", content);
  }, [content]);

  const handleClear = () => {
    setContent(""); 
    localStorage.removeItem("richTextContent"); 
  };

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      ["clean"],
    ],
  };

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
            padding: "15px",
            borderRadius: "4px",
          }}
        />
      </div>
    </div>
  );
};

export default RichTextEditor;