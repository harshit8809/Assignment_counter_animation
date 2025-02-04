import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Counter from "./components/Counter";
import UserDataForm from "./components/UserDataForm";
import RichTextEditor from "./components/RichTextEditor";
import "./App.css";
import SubmittedDataScreen from "./screens/SubmittedDataScreen";

const App: React.FC = () => {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <>
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
              </>
            }
          />
          <Route path="/user-data" element={<SubmittedDataScreen />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;