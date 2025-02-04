import React from "react";
import Counter from "./components/Counter";
import UserDataForm from "./components/UserDataForm";
import RichTextEditor from "./components/RichTextEditor";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="container">
      <div className="top-section">
        <div className="counter-box">
          <Counter />
        </div>
        <div className="editor-box">
          <RichTextEditor />
        </div>
      </div>

      <div className="bottom-section">
        <div className="user-data-form">
          <UserDataForm />
        </div>
      </div>
    </div>
  );
};

export default App;
