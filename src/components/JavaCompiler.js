import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { useCodeMirror } from "@uiw/react-codemirror";
import { java } from "@codemirror/lang-java";
import { solarizedDark } from "@uiw/codemirror-theme-solarized";

function JavaCompiler() {
  const [javaCode, setJavaCode] = useState("");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [inputRequired, setInputRequired] = useState(false);
  const [inputType, setInputType] = useState("");
  const [logOutput, setLogOutput] = useState("");
  const [messages, setMessages] = useState([
    {
      text: "Hii, I am ChatAI...! How can I help you?",
      isBot: true,
    },
  ]);
  const [clicked, setClicked] = useState(false);

  const javaEditor = useRef(null);

  useCodeMirror({
    container: javaEditor.current,
    value: javaCode,
    theme: solarizedDark, // Use githubDark for dark mode
    extensions: [java(), solarizedDark],
    onChange: (value) => {
      setJavaCode(value);
      setLogOutput(`JAVA: ${value}`);
    },
  });

  const doesCodeRequireInput = (code) => {
    return code.includes("Scanner") || code.includes("BufferedReader");
  };

  const compileJavaCode = async () => {
    setError("");
    setOutput("");

    if (doesCodeRequireInput(javaCode) && input.trim() === "") {
      setInputType("string");
      setError("Please provide input for the code — expected string.");
      setInputRequired(true);
      return;
    }

    setLoading(true);
    setInputRequired(false);

    const postData = {
      language: "java",
      version: "15.0.2",
      files: [
        {
          name: "Main.java",
          content: javaCode,
        },
      ],
      stdin: input,
    };

    try {
      const res = await axios.post(
        "https://emkc.org/api/v2/piston/execute",
        postData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setOutput(
        cleanOutput(res.data.run.output || "No output from the server.")
      );
    } catch (error) {
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );
      setError(
        "Failed to compile Java code. Please check your code and try again."
      );
    }

    setLoading(false);
  };

  const cleanOutput = (output) => {
    return output.replace(/`/g, "").replace(/\*/g, "").trim();
  };

  const clearInput = () => {
    setInput("");
    setError("");
    setInputRequired(false);
  };

  const generateAns = async () => {
    setLoading(true);
    setError("");

    try {
      const res = await axios.post(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyCok-7EJjFVuirqtP0Rzzpi5u-im4zvuYA",
        {
          contents: [{ parts: [{ text: logOutput }] }],
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const botResponse = cleanOutput(
        res.data?.candidates?.[0]?.content?.parts?.[0]?.text ||
          "No response received"
      );
      setMessages((prevMessages) => [
        { text: botResponse, isBot: true },
        ...prevMessages,
      ]);
    } catch (error) {
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );
      setMessages((prevMessages) => [
        { text: "Failed to generate AI response.", isBot: true },
        ...prevMessages,
      ]);
      setError("Failed to generate AI response. Please try again.");
    }
    setLoading(false);
  };

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => {
      setClicked(false);
    }, 2000);
  };

  const [name, setName] = useState("");
  const [files, setFiles] = useState([]);
  const [editingFile, setEditingFile] = useState(null); // Track the file being edited

  useEffect(() => {
    fetchFiles();
  }, []);

  const fetchFiles = async () => {
    const response = await fetch("http://localhost:5000/api/files", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
    });

    const data = await response.json();
    if (response.ok) {
      setFiles(data);
    } else {
      alert(data.error);
    }
  };

  const handleFileCreation = async (e) => {
    e.preventDefault();

    // Fetch the token from localStorage
    const token = localStorage.getItem("authToken");
    if (!token) {
      alert("No token found. Please log in again.");
      return;
    }

    // Make the POST request to the server to create a new file
    const response = await fetch("http://localhost:5000/api/files", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ name, content: javaCode }), // Send file name and code content
    });

    // Handle the response from the server
    const data = await response.json();
    if (response.ok) {
      setName(""); // Reset the input field for file name
      setJavaCode(""); // Reset the code content
      setShowInput(false); // Hide the input field after file creation
      fetchFiles(); // Fetch the updated list of files
    } else {
      alert(data.error); // Show the error message to the user
    }
  };

  const handleDelete = async (id) => {
    const response = await fetch(`http://localhost:5000/api/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
    });

    if (response.ok) {
      alert("File deleted successfully");
      fetchFiles();
    } else {
      alert("Error deleting file");
    }
  };

  const handleSave = async (id) => {
    setLoading(true); // Indicate loading

    const response = await fetch(`http://localhost:5000/api/update/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
      body: JSON.stringify({ content: javaCode }),
    });

    if (response.ok) {
      alert("File updated successfully");
      setEditingFile(null);
      setJavaCode(""); // Reset the editor's content (refresh the editor)
      fetchFiles(); // Optionally reload files list
    } else {
      alert("Error updating file");
    }

    setLoading(false); // Stop the loading indicator
  };

  const startEditing = (file) => {
    setEditingFile(file);
    setJavaCode(file.content); // Load content into the editor
  };
  // const CreateFileComponent = () => {
  const [showInput, setShowInput] = useState(false); // State to toggle input visibility

  return (
    <div className="JavaCompiler">
      <h1 className="comH1" style={{ marginLeft: "1%" }}>
        Java Compiler
      </h1>
      <div className="editor-container">
        <div className="ele0">
          <div className="filesBar">
            <div>
              <form onSubmit={handleFileCreation} className="files">
                {showInput && (
                  <input
                    type="text"
                    placeholder="File Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                )}
                <input
                  type="text"
                  placeholder="File Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <button type="submit">Create File</button>
              </form>
            </div>
            <h2 style={{ color: "black" }}>
              <b>Your Files :</b>
            </h2>
            <div className="file-list-container">
              <ul>
                {files.map((file) => (
                  <li key={file._id}>
                    <h3>{file.name} :</h3>
                    <div className="butn">
                      <button onClick={() => startEditing(file)}>Open</button>
                      <button onClick={() => handleDelete(file._id)}>
                        Delete
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {editingFile && (
              <div className="files">
                <div className="margin">
                  <h2>Edit `{editingFile.name}` File :</h2>
                  <button onClick={() => handleSave(editingFile._id)}>
                    Save Changes
                  </button>
                  <button
                    onClick={() => {
                      setEditingFile(null);
                      setJavaCode("");
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="ele1">
          <br />
          <div className="row">
            <h3 className="compWri">Write Your Java Code:</h3>
            <div>
              {error && <div className="error">{error}</div>}
              <button
                // onClick={compileJavaCod }
                onClick={() => {
                  compileJavaCode();
                }}
                className="submit"
                style={{ border: "none" }}
              >
                <b>{loading ? "Compiling..." : "Compile and Run"}</b>
              </button>
            </div>
          </div>
          <br />
          <div ref={javaEditor} className="editor" />
        </div>

        <div className="ele2">
          <div className="iptDiv">
            <h3 style={{ color: "white", textAlign: "left" }}>
              <b>Input: </b>
            </h3>
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter requires input....."
              className="input-textarea"
              style={{
                boxShadow: "none",
                backgroundColor: "rgba(11, 11, 11, 0.7)",
              }}
            />
            <br />
            <button onClick={clearInput} className="clear-input-btn">
              Clear Input
            </button>
          </div>

          <div className="optDiv">
            {error && <div className="error">{error}</div>}
            {inputRequired && (
              <div className="input-message" style={{ color: "orange" }}>
                Please provide input for the code — expected {inputType}.
              </div>
            )}
            <h3
              style={{
                color: "white",
                marginTop: "0px",
                textAlign: "left",
              }}
            >
              Output:
            </h3>

            <textarea
              className="output"
              value={output}
              style={{
                marginTop: "0px",
                paddingLeft: "15px",
                border: "none",
                outline: "none",
                padding: "10px",
                resize: "none",
              }}
              disabled
            />
          </div>
        </div>
      </div>

      <h1 className="comH1" style={{ marginTop: "20px", textAlign: "left" }}>
        Code with AI{" "}
      </h1>

      <div className="aiPage" style={{ marginTop: "20px" }}>
        <div className="ele2">
          <button
            className={`colorChangeBtn ${clicked ? "clicked" : ""}`}
            onClick={() => {
              handleClick();
              generateAns();
            }}
          >
            <b>
              {loading ? "Generating AI Response..." : "Generate AI Response"}
            </b>
          </button>
          <br />
        </div>

        <div
          className="ele1"
          style={{ border: "none", backgroundColor: "transparent" }}
        >
          <div className="user pad hight">
            <textarea
              value={logOutput}
              className="textArea hight input"
              style={{
                width: "90%",
                marginLeft: "5%",
                height: "300px",
                outline: "none",
                resize: "none",
                boxShadow: "0px 0px 10px rgb(252, 134, 134)",
                borderRadius: "5px",
              }}
              placeholder="View your Code written in the editor , and feel free to ask any Questions related to it!"
              onChange={(e) => setLogOutput(e.target.value)} // Capture user input and update logOutput state

              // disabled
            />
          </div>
          <br />

          {error && <div style={{ color: "red" }}>{error}</div>}

          {messages.map((message, i) => (
            <textarea
              key={i}
              className={`pad hight textArea ${
                message.isBot ? "aiAns" : "userAns"
              }`}
              style={
                message.text.includes(
                  "Hii, I am ChatAI...! How can I help you?"
                )
                  ? {
                      textAlign: "center",
                      fontFamily: "serif",
                      color: "green",
                      height: "40px",
                      borderRadius: "30px",
                      resize: "none",
                      backgroundColor: "black",
                    }
                  : {}
              }
              value={message.text}
              disabled
            />
          ))}

          <br />
          <br />
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}

export default JavaCompiler;
