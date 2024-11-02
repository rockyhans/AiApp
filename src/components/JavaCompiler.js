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
    lineNumbers: true, // Show line numbers
    lineWrapping: false, // Disable line wrapping (allows horizontal scrolling)
    scrollbarStyle: "native", // Ensure the scroll bar is visible
    viewportMargin: Infinity, // Show all content
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
    const response = await fetch(
      "https://appbackend-7d64.onrender.com/api/files",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      }
    );

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
    const response = await fetch(
      "https://appbackend-7d64.onrender.com/api/files",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ name, content: javaCode }), // Send file name and code content
      }
    );

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
    const response = await fetch(
      `https://appbackend-7d64.onrender.com/api/delete/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      }
    );

    if (response.ok) {
      alert("File deleted successfully");
      fetchFiles();
    } else {
      alert("Error deleting file");
    }
  };

  const handleSave = async (id) => {
    setLoading(true); // Indicate loading

    const response = await fetch(
      `https://appbackend-7d64.onrender.com/api/update/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
        body: JSON.stringify({ content: javaCode }),
      }
    );

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

  const [isFullHeight, setIsFullHeight] = useState(false); // To toggle between normal and full screen height

  const increaseHeight = () => {
    setIsFullHeight(true); // Set height to 100% of the screen
  };
  const closePopup = () => {
    setIsFullHeight(false); // Close the popup and reset height
  };

  const [dimensions, setDimensions] = useState({
    width: 200,
    height: 100,
    top: 680,
  });
  const [isResizing, setIsResizing] = useState(false);

  const handleMouseDown = () => {
    setIsResizing(true);
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isResizing) {
        const newHeight = dimensions.height + (dimensions.top - e.clientY);
        const newTop = e.clientY;

        if (newHeight > 100) {
          // Minimum height of 100px
          setDimensions((prevDimensions) => ({
            ...prevDimensions,
            height: newHeight,
            top: newTop,
          }));
        }
      }
    };

    const handleMouseUp = () => {
      setIsResizing(false);
    };

    if (isResizing) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    } else {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isResizing, dimensions]);

  return (
    <div className="JavaCompiler">
      <div className="j1">
        <h1 className="comH1" style={{ marginLeft: "1%" }}>
          Java Compiler
        </h1>
        {/* <button
          onClick={increaseHeight}
          style={{ padding: "10px 20px" }}
          className="increaseBtn"
        >
          <b>Enable Full Screen</b>
        </button> */}
      </div>

      <div
        className="editor-container"
        style={{
          height: isFullHeight ? "100%" : "auto", // Toggle between 100px and 100% screen height
          width: isFullHeight ? "100%" : "",
          transition: "height 0.3s ease-in-out", // Smooth transition
          position: isFullHeight ? "fixed" : "static", // Become a popup when full height
          top: isFullHeight ? 5 : "auto",

          marginBottom: isFullHeight ? "20px" : "", // Toggle between 100px and 100% screen height
          zIndex: isFullHeight ? 999 : "auto", // Bring to the front when full screen
          marginLeft: isFullHeight ? "0px" : "",

          backgroundColor: isFullHeight
            ? " rgb(0, 17, 23, 0.3)"
            : "transparent",
        }}
      >
        {isFullHeight && (
          <button
            onClick={closePopup}
            style={{
              position: "absolute",
              top: "20px",
              right: "10px",
              padding: "10px 20px",
              backgroundColor: "transparent",
              boxShadow: "0px 0px 5px #0395f7",
              color: "whitesmoke",
              border: "none",
              cursor: "pointer",
            }}
          >
            Disable
          </button>
        )}

        <div
          className="ele0"
          style={{
            height: isFullHeight ? "100px" : "",
            padding: isFullHeight ? "0px" : "",
          }}
        >
          <div
            className="filesBar"
            //style={{ height: isFullHeight ? "100px" : "" }}
          >
            <form
              onSubmit={handleFileCreation}
              className="files"
              //style={{ height: isFullHeight ? "100px" : "" }}
            >
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

            <div
              className="file-list-container"
              style={{
                height: isFullHeight ? "auto" : "",
                padding: isFullHeight ? "0px" : "",
                backgroundColor: isFullHeight ? "transparent" : "",

              }}
            >
              {!isFullHeight && (
                <h2
                  style={{
                    // width: "100%",
                    color: "black",
                    textShadow: "0px 0px 3px skyblue",
                    // textAlign: "center",
                    position: "absolute",
                    marginTop: "0px",
                    marginLeft: "0px",
                  }}
                >
                  <b>Your Files :</b>
                </h2>
              )}
              <div
                className="ulScroll"
                style={{
                  padding: isFullHeight ? "0px" : "",
                  marginTop: isFullHeight ? "0px" : "",
                }}
              >
                <ul>
                  {files.map((file) => (
                    <li
                      key={file._id}
                      style={{
                        display: isFullHeight ? "flex" : "",
                        flexDirection: isFullHeight ? "row" : "",
                        padding: isFullHeight ? "0px" : "",
                        marginTop: isFullHeight ? 0 : "",
                      }}
                    >
                      <h3>{file.name} :</h3>
                      <div
                        className="butn"
                        style={{ flexDirection: isFullHeight ? "column" : "" }}
                      >
                        <button onClick={() => startEditing(file)}>Open</button>
                        <button
                          onClick={() => handleDelete(file._id)}
                          style={{ marginTop: isFullHeight ? "5px" : "" }}
                        >
                          Delete
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {editingFile && (
              <div className="files">
                <div className="margin">
                 {!isFullHeight &&   <h2>Edit `{editingFile.name}`:</h2>}
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

        <div className="inpOut">
          <div
            className="ele1"
            style={{
              borderTop: "none",
              height: isFullHeight ? "auto" : "",
              marginTop: isFullHeight ? "0px" : "",

            }}
          >
            {!isFullHeight && <br />}
            <div className="row">
              <h3 className="compWri">Write Your Java Code:</h3>

              <button
                onClick={() => {
                  compileJavaCode();
                }}
                className="submit"
                style={{ border: "none" }}
              >
                <b>{loading ? "Compiling..." : "Compile and Run"}</b>
              </button>
            </div>
            {!isFullHeight && <br />}
            <div
              ref={javaEditor}
              className="editor"
              style={{
                height: isFullHeight ? "600px" : "450px",
                transition: "height 0.3s ease-in-out",
                // marginBottom: isFullHeight ? '-10px' : '10px',
                // position: isFullHeight ? 'fixed' : 'static',
                // zIndex: isFullHeight ? 999 : 'auto',
              }}
            >
              {/* {isFullHeight && (
                <div
                  style={{
                    width: `${dimensions.width}px`,
                    height: `${dimensions.height}px`,
                    backgroundColor: "red",
                    position: "absolute",
                    top: `${dimensions.top}px`,
                    left: "18.25%", // Center hori1%zontally
                    border: "1px solid black",
                    userSelect: "none", // Prevents text selection while resizing
                    paddingTop: "30px",
                    maxHeight: "200px",
                  }}
                >
                  Resizable Div
                  <div
                    style={{
                      width: "100%",
                      height: "10px",
                      backgroundColor: "darkblue",
                      position: "absolute",
                      left: "50%",
                      top: "0px", // Position above the top of the div
                      transform: "translateX(-50%)",
                      cursor: "n-resize", // Cursor for resizing downwards
                    }}
                    onMouseDown={handleMouseDown}
                  ></div>
                </div>
              )} */}
            </div>
          </div>

          <div
            className="ele2"
            style={{ borderTop: "none", height: isFullHeight ? "auto" : "" }}
          >
            <div className="iptDivM" style={{ marginTop: "0px" }}>
              <h3 className="gap">
                <b>Input: </b>
              </h3>
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter requires input..."
                className="input-textarea"
                style={{
                  boxShadow: "none",
                  backgroundColor: "rgba(11, 11, 11, 0.7)",
                }}
              />
              <button
                onClick={clearInput}
                className="clear-input-btn"
                style={{ marginTop: "5px" }}
              >
                Clear Input
              </button>
            </div>

            <div className="optDiv">
              {inputRequired && (
                <div className="input-message" style={{ color: "orange" }}>
                  Please provide input for the code — expected {inputType}.
                </div>
              )}
              <h3
                style={{
                  color: "white",
                  marginTop: "0px",
                  textAlign: "center",
                }}
              >
                Output:
              </h3>

              <textarea
                className="output"
                value={output}
                style={{
                  paddingLeft: "15px",
                  outline: "none",
                  padding: "10px",
                  resize: "none",
                  // height: "340px",
                  height: isFullHeight ? "445px" : "340px",

                  width: "100%",
                }}
                disabled
              />
            </div>
          </div>
        </div>
      </div>

      <h1 className="comH1V">Code with AI </h1>

      <div className="aiPageV" style={{ marginTop: "20px" }}>
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
          <div className="ele22"></div>
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
                border: "none",
                boxShadow: "0px 0px 100px black",
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
                      height: "50px",
                      fontSize: "1.5rem",
                      borderRadius: "30px",
                      resize: "none",
                      backgroundColor: "black",
                    }
                  : { border: "2px solid black" }
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
