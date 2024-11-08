{/* {showInput && (
                  <input
                    type="text"
                    placeholder="File Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                )} */}


                {/*
                  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

button {
  cursor: pointer;
}

body {
  color: rgb(223, 240, 254);
  background-color: #1d1f22;
 }
/* Custom scrollbar styles for the textarea with the 'output' class */
textarea::-webkit-scrollbar {
  width: 8px; /* Scrollbar width */
}

textarea::-webkit-scrollbar-track {
  background: transparent; /* Track background */
  border-radius: 20px; /* Round the track */
}

textarea::-webkit-scrollbar-thumb {
  background-color: wheat;
  border-radius: 10px; /* Round the thumb */
}


textarea::-webkit-scrollbar-thumb:hover {
  background-color: #555; /* Darker thumb color when hovered */
}

header {
  height: 60px;
  /* background-color: rgb(0, 0, 0,0.8); */
  color: white;
  align-items: center;
  display: flex;
  justify-content: space-between;
  background-repeat: no-repeat;
  background-size: cover;
  /* background: linear-gradient(109.6deg, rgb(6, 2, 2) 32.4%, rgb(28, 0, 0) 98.8%); */
}

.logoImg {
  position: absolute;
  height: 50px;
  width: 50px;
  margin-left: 5px;
  border-radius: 50%;
  margin-left: 5px;
}

.userI {
  display: flex;
}

.userI img {
  height: 40px;
  width: 40px;
  margin-top: 12px;
  border-radius: 50%;
  margin-right: 10px;
}

.userI h3 {
  font-family: cursive;
  margin-right: 15px;
  color: skyblue;
}

.userI a:link {
  text-decoration: none;
}

.userI h3:hover {
  color: rgb(169, 221, 241);
}

.ndNav {
  height: 60px;
  color: white;
  align-items: center;
  display: flex;
  justify-content: space-between;
}

.ndNav h3 {
  margin-left: 10px;
  color: green;
}

.ndNav a {
  text-decoration: none;
}
.ndNav a:hover {
  color: rgb(11, 251, 51);
  text-decoration: wavy;
}

.ndNav h3:hover {
  color: rgb(11, 251, 51);
}

a:link {
  color: green;
}
a:link:active,
a:visited:active {
  color: green;
}

button {
  border-radius: 7px;
}

.editor-container {
  width: 98%;
  height: auto;
  margin-left: 1%;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 7px rgb(245, 244, 244);
  margin-top: 20px;
}

.compWri {
  text-align: left;
  margin-left: 1%;
  color: #f1f1f1;
}

.submit {
  background-color: #61dafb;
  color: rgb(17, 0, 32);
  cursor: pointer;
}

.x {
  margin-left: 70px;
}

.comH1 {
  text-align: left;
  color: rgb(255, 254, 254);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  /* color: orangered; */
}

.user {
  color: #0f0e0e; /* Usessage color */
}

pre {
  white-space: pre-wrap; /* Preserve whitespace and wrap text */
  word-wrap: break-word; /* Break long words */
  overflow: auto; /* Add a scrollbar if needed */
  max-width: 100%; /* Ensure the pre tag stays within its container */
  padding: 10px; /* Optional padding */
  background-color: #f4f4f4; /* Optional background color */
  border-radius: 5px; /* Optional rounded corners */
  font-family: "Courier New", Courier, monospace; /* Code-like font */
  box-sizing: border-box; /* Ensure padding is included in the width */
}

#iframe {
  border: none;
}

.aiPage {
  width: 98%;
  text-align: left;
  display: flex;
  flex-direction: row;
  background-color: #1d1f22;
  justify-content: space-between;
  margin-left: 1%;
  border-radius: 10px;
  height: auto;
  box-shadow: 0px 0px 7px rgb(245, 244, 244);
}
.aiPage input {
  box-shadow: 0px 0px 10px rgb(251, 86, 86);
}
.pad {
  margin-top: 20px;
}

.hight {
  width: 90%;
  margin-left: 0%;
  height: 300px;
  margin-left: 1.5%;
  outline: none;
}

.enterText {
  height: 20px;
}

.textArea {
  font-size: 16px;
  background-color: transparent;
  padding: 10px;
  color: rgb(245, 211, 124);
  outline: none;
  border: none;
  background-color: #282c34;
}

.sub {
  background-color: #0b89f8;
  color: rgb(17, 0, 32);
  cursor: pointer;
  border: none;
  margin: 0 40px;
  margin-top: 20px;
}

.colorChangeBtn {
  background-color: #0395f7;
  color: rgb(17, 0, 32);
  margin: 0 40px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 1s ease; /* Smooth transition */
  margin-top: 20px;
}

.colorChangeBtn.clicked {
  background-color: #02f4fd;
}

pre {
  white-space: pre-wrap; /* Preserve whitespace and wrap text */
  word-wrap: break-word; /* Break long words */
  overflow: auto; /* Add a scrollbar if needed */
  max-width: 100%; /* Ensure the pre tag stays within its container */
  padding: 10px; /* Optional padding */
  background-color: #f4f4f4;
  border-radius: 5px; /* Optional rounded corners */
  font-family: "Courier New", Courier, monospace; /* Code-like font */
  box-sizing: border-box; /* Ensure padding is included in the width */
}

.ele1 {
  width: 60%;
  height: 100%;
  border-right: 10px solid rgb(16, 14, 14);
}

.row {
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.ele2 {
  width: 24%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.editor {
  border: 1px solid #ccc;
  width: 98%;
  margin-left: 1%;
  height: 300px;
  overflow: hidden;
  /* background-color: #282c34; */
  margin-bottom: 10px;
  text-align: left;
  height: 460px;
  font-size: 1rem;
  overflow: auto !important;
}

.JavaCompiler {
  height: auto;
  /* background-image: url("https://www.pullrequest.com/blog/ai-code-review-the-new-frontier-in-software-development/images/ai-code-review--the-new-frontier-in-software-development.webp"); */
  /* -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(3px); */
  background-size: cover;
}
.iptDiv {
  height: 30%;
  margin-left: 5px;
  width: 100%;
}

.optDiv {
  margin-left: 5px;
  height: 70%;
  width: 100%;
}

.clear-input-btn {
  /* background-color: rgb(74, 74, 74); */
  /* background-color: rgb(74, 74, 74); */
  background-color: transparent;
  border: none;
  color: #97bff9;
}

.clear-input-btn:hover {
  background-color: rgb(74, 74, 74);
}

.input-textarea {
  width: 90%;
  background-color: transparent;
  padding: 10px;
  height: 80px;
  border-radius: 10px;
  color: #f9f3ab;
  /* border: none; */
}

.error {
  white-space: pre-wrap;
  padding: 10px;
  background-color: transparent;
  color: #f9f3ab;
  text-align: left;
}

.output {
  white-space: pre-wrap;
  padding: 10px;
  background-color: transparent;
  color: #f9f3ab;
  text-align: left;
  width: 90%;
  height: 245px;

  /* border-radius: 5px;
  margin-top: 10px; */
}

h1 {
  text-align: left;
  font-size: 2rem;
}

@keyframes neonGlow {
  0% {
    text-shadow: 0 0 5px #f0f, 0 0 10px #f0f, 0 0 20px #f0f, 0 0 40px #f0f,
      0 0 60px #f0f;
    color: #f0f;
  }
  25% {
    text-shadow: 0 0 5px #0ff, 0 0 10px #0ff, 0 0 20px #0ff, 0 0 40px #0ff,
      0 0 60px #0ff;
    color: #0ff;
  }
  50% {
    text-shadow: 0 0 5px #ff0, 0 0 10px #ff0, 0 0 20px #ff0, 0 0 40px #ff0,
      0 0 60px #ff0;
    color: #ff0;
  }
  75% {
    text-shadow: 0 0 5px #0f0, 0 0 10px #0f0, 0 0 20px #0f0, 0 0 40px #0f0,
      0 0 60px #0f0;
    color: #0f0;
  }
  100% {
    text-shadow: 0 0 5px #f0f, 0 0 10px #f0f, 0 0 20px #f0f, 0 0 40px #f0f,
      0 0 60px #f0f;
    color: #f0f;
  }
}

.neon {
  font-family: "Arial", sans-serif;
  color: #fff;
  animation: neonGlow 10s infinite;
  transition: color 2s ease-in-out;
}

.tab-buttons {
  margin-right: 0px;
}

button {
  margin: 0 10px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}

.tab-buttons button.active {
  background-color: #61dafb;
  border: none;
  /* border: none; */
}

.tab-buttons button:not(.active) {
  background-color: transparent;
  border: 1px solid default;
  color: white;
}


.outputDiv {
  height: 80%;
}

.compiler {
  display: none;
}

.compiler.active {
  display: block;
}

.files {
  display: flex;
  flex-direction: column;
  margin-top: 10px;
}
.files input {
  width: 80%;
  margin-left: 10%;
  padding: 10px;
  border: none;
  border: 1px solid gray;
  border-radius: 20px;
  color: rgb(255, 243, 243);
  background-color: rgba(11, 11, 11, 0.7);
  text-align: center;
  background-color: rgba(0, 17, 23, 0.9);
}

input,
textarea:focus {
  outline: none;
}

.files button {
  padding: 5px;
  background-color: rgb(1, 145, 145);
  margin-top: 5px;
  width: 95%;
  margin-left: 2.5%;
  border-radius: 5px;
  border: none;
}

.margin {
  margin-bottom: 10px;
}

.filesBar {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.filesBar h2 {
  text-align: left;
  color: rgb(253, 244, 241);
  margin-left: 2.5%;
  margin-top: 10px;
}

.filesBar ul h3 {
  width: 95%;
  color: rgb(254, 228, 59);
  margin-left: 2.5%;
  padding: 5px;
  border-radius: 3px;
}

.filesBar ul h3:hover {
  background-color: #002f39;
  border-radius: 20px;
}

.filesBar pre {
  width: 95%;
  color: black;
  margin-left: 2.5%;
  padding: 5px;
  border-radius: 3px;
}

.butn {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 95%;
  margin-left: 2.5%;
  padding: 10px;
}

.butn button {
  background-color: rgb(110, 251, 251);
  border: none;
  padding: 7px;
  border-radius: 7px;
}

.tetxA {
  resize: none;
  width: 80%;
  height: auto;
  margin-left: 2.5%;
  padding: 10px;
  border: none;
  border: none;
  border-radius: 3px;
  color: black;
  margin-top: 5px;
}

/* App.css */

.App {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  text-align: center;
  background-size: cover;
  background-position: center;
  /* background-image: url(""); */
}

/* Custom scrollbar styles for the textarea with the 'output' class */
textarea::-webkit-scrollbar {
  width: 8px; /* Scrollbar width */
}

textarea::-webkit-scrollbar-track {
  background: transparent; /* Track background */
  border-radius: 20px; /* Round the track */
}

textarea::-webkit-scrollbar-thumb {
  background-color: wheat;
  border-radius: 10px; /* Round the thumb */
}

textarea::-webkit-scrollbar-thumb:hover {
  background-color: #555; /* Darker thumb color when hovered */
}

header {
  height: 60px;
  /* background-color: rgb(0, 0, 0,0.8); */
  color: white;
  align-items: center;
  display: flex;
  justify-content: space-between;
  background-repeat: no-repeat;
  background-size: cover;
  /* background: linear-gradient(109.6deg, rgb(6, 2, 2) 32.4%, rgb(28, 0, 0) 98.8%); */
}

.logoImg {
  position: absolute;
  height: 50px;
  width: 50px;
  margin-left: 5px;
  border-radius: 50%;
  margin-left: 5px;
}

.userI {
  display: flex;
}

.userI img {
  height: 40px;
  width: 40px;
  margin-top: 12px;
  border-radius: 50%;
  margin-right: 10px;
}

.userI h3 {
  font-family: cursive;
  margin-right: 15px;
  color: skyblue;
  margin-top: 15px;
}

.userI a:link {
  text-decoration: none;
}

.userI h3:hover {
  color: rgb(169, 221, 241);
}

.ndNav {
  height: 60px;
  color: white;
  align-items: center;
  display: flex;
  justify-content: space-between;
  /* border-bottom: 2px solid rgb(245, 241, 241 , 0.9); */
  /* background: linear-gradient(109.6deg, rgb(6, 2, 2) 32.4%, rgb(28, 0, 0) 98.8%); */
}

.ndNav h3 {
  margin-left: 10px;
  color: green;
}

.ndNav a {
  text-decoration: none;
}
.ndNav a:hover {
  color: rgb(11, 251, 51);
  text-decoration: wavy;
}

.ndNav h3:hover {
  color: rgb(11, 251, 51);
}

a:link {
  color: green;
}
a:link:active,
a:visited:active {
  color: green;
}

button {
  border-radius: 7px;
}

.editor-container {
  width: 98%;
  height: auto;
  margin-left: 1%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  /* align-items: center;
  justify-content: center; */
  box-shadow: 0px 0px 7px rgb(245, 244, 244);
  -webkit-backdrop-filter: blur(30px);
  backdrop-filter: blur(15px);
}

.inpOut {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.compWri {
  text-align: left;
  margin-left: 1%;
  color: #f1f1f1;
  margin-top: 5px;
}

.submit {
  background-color: #61dafb;
  color: rgb(17, 0, 32);
  cursor: pointer;
}

.x {
  margin-left: 70px;
}

.comH1 {
  text-align: left;
  margin-left: 20px;
  padding-top: 10px;
  color: orangered;
  text-align: center;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

.user {
  color: #0f0e0e; /* Usessage color */
}

pre {
  white-space: pre-wrap; /* Preserve whitespace and wrap text */
  word-wrap: break-word; /* Break long words */
  overflow: auto; /* Add a scrollbar if needed */
  max-width: 100%; /* Ensure the pre tag stays within its container */
  padding: 10px; /* Optional padding */
  background-color: #f4f4f4; /* Optional background color */
  border-radius: 5px; /* Optional rounded corners */
  font-family: "Courier New", Courier, monospace; /* Code-like font */
  box-sizing: border-box; /* Ensure padding is included in the width */
}

#iframe {
  border: none;
}

.aiPage {
  width: 98%;
  text-align: left;
  display: flex;
  flex-direction: row;
  background-color: #1d1f22;
  background-color: transparent;
  justify-content: space-between;
  margin-left: 1%;
  border-radius: 10px;
  height: auto;
}

.pad {
  /* padding: 10px; */
  margin-top: 20px;
}

.hight {
  width: 90%;
  margin-left: 0%;
  height: 300px;
  margin-left: 1.5%;
  outline: none;
}

.enterText {
  height: 20px;
}

.textArea {
  font-size: 16px;
  background-color: transparent;
  padding: 10px;
  color: rgb(245, 211, 124);
  outline: none;
  border: none;
  background-color: rgba(11, 11, 11, 0.7);
}

.sub {
  background-color: #0b89f8;
  color: rgb(17, 0, 32);
  cursor: pointer;
  border: none;
  margin: 0 40px;
  margin-top: 20px;
}

.colorChangeBtn {
  background-color: #0395f7;
  color: rgb(17, 0, 32);
  margin: 0 40px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 1s ease; /* Smooth transition */
  margin-top: 20px;
}

.colorChangeBtn.clicked {
  background-color: #02f4fd;
}

pre {
  white-space: pre-wrap; /* Preserve whitespace and wrap text */
  word-wrap: break-word; /* Break long words */
  overflow: auto; /* Add a scrollbar if needed */
  max-width: 100%; /* Ensure the pre tag stays within its container */
  padding: 10px; /* Optional padding */
  background-color: #f4f4f4;
  border-radius: 5px; /* Optional rounded corners */
  font-family: "Courier New", Courier, monospace; /* Code-like font */
  box-sizing: border-box; /* Ensure padding is included in the width */
}

.ele0 {
  width: 100%;
  height: auto;
  /* border-right: 20px solid rgb(16, 14, 14); */
  /* background-color: #0b89f8; */
}

.ele0 main {
  height: 200px;
}
.ele1 {
  width: 58%;
  height: 100%;
  border: none;
}

.row {
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.ele2 {
  /* width: 29%; */
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.editor {
  border: 1px solid #ccc;
  width: 98%;
  margin-left: 1%;
  height: 300px;
  overflow: hidden;
  background-color: #002f39;
  margin-bottom: 10px;
  text-align: left;
  height: 460px;
  font-size: 1rem;
  overflow: auto !important;

  /* margin-top: -25px; */
}

/* Ensure CodeMirror container allows scrolling */
.editor {
  overflow: auto !important;
  max-height: 500px;
  max-height: 1000px;
}

/* Optional: Customize the scrollbar */
.editor::-webkit-scrollbar {
  width: 8px;
}

.editor::-webkit-scrollbar-thumb {
  background-color: transparent; /* Scrollbar thumb color */
  border-radius: 4px; /* Rounded edges */
}

.editor::-webkit-scrollbar-track {
  background-color: transparent; /* Scrollbar track color */
}

.JavaCompiler {
  height: auto;
}
.iptDiv {
  height: 30%;
  margin-left: 5px;
  width: 100%;
  margin-top: -45px;
}

.iptDiv h3 {
  margin-bottom: 14px;
}

.optDiv {
  margin-left: 5px;
  height: 70%;
  width: 100%;
}

.clear-input-btn {
  /* background-color: rgb(74, 74, 74); */
  /* background-color: rgb(74, 74, 74); */
  background-color: transparent;
  /* background-color: #282c34; */
  border: none;
  color: #97bff9;
  margin-left: 25%;
}

.clear-input-btn:hover {
  background-color: rgb(74, 74, 74);
}

.input-textarea {
  width: 90%;
  background-color: transparent;
  padding: 10px;
  height: 80px;
  border-radius: 10px;
  color: #f9f3ab;
  /* border: none; */
}

.error {
  white-space: pre-wrap;
  padding: 10px;
  background-color: transparent;
  color: #f9f3ab;
  text-align: left;
}

.output {
  white-space: pre-wrap;
  padding: 10px;
  background-color: transparent;
  color: #f9f3ab;
  text-align: left;
  width: 90%;
  height: 245px;

  /* border-radius: 5px;
  margin-top: 10px; */
}

h1 {
  text-align: left;
  font-size: 2rem;
}

@keyframes neonGlow {
  0% {
    text-shadow: 0 0 5px #f0f, 0 0 10px #f0f, 0 0 20px #f0f, 0 0 40px #f0f,
      0 0 60px #f0f;
    color: #f0f;
  }
  25% {
    text-shadow: 0 0 5px #0ff, 0 0 10px #0ff, 0 0 20px #0ff, 0 0 40px #0ff,
      0 0 60px #0ff;
    color: #0ff;
  }
  50% {
    text-shadow: 0 0 5px #ff0, 0 0 10px #ff0, 0 0 20px #ff0, 0 0 40px #ff0,
      0 0 60px #ff0;
    color: #ff0;
  }
  75% {
    text-shadow: 0 0 5px #0f0, 0 0 10px #0f0, 0 0 20px #0f0, 0 0 40px #0f0,
      0 0 60px #0f0;
    color: #0f0;
  }
  100% {
    text-shadow: 0 0 5px #f0f, 0 0 10px #f0f, 0 0 20px #f0f, 0 0 40px #f0f,
      0 0 60px #f0f;
    color: #f0f;
  }
}

.neon {
  font-family: "Arial", sans-serif;
  color: #fff;
  animation: neonGlow 10s infinite;
  transition: color 2s ease-in-out;
}

.tab-buttons {
  margin-right: 0px;
}

button {
  margin: 0 10px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}

.tab-buttons button.active {
  background-color: #61dafb;
  border: none;
  /* border: none; */
}

.tab-buttons button:not(.active) {
  background-color: transparent;
  /* background-color: #010914;  */
  border: 1px solid default;
  color: white;
}

.outputDiv {
  height: 80%;
}

.compiler {
  display: none;
}

.compiler.active {
  display: block;
}

.file-list-container {
  overflow-y: auto;
  margin-bottom: 20px; /* Add space below the file list */
  padding: 10px;
  display: flex;
  flex-direction: column;
  /* align-items: center;
  justify-content: space-between; */
}

.file-list-container ul::-webkit-scrollbar {
  width: 5px; /* Set the width of the scrollbar */
  background-color: red;
}

.file-list-container ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 3px;
}

.file-list-container li {
  margin-bottom: 10px;
  border-radius: 20px;
}

.file-list-container .ulScroll {
  margin-top: 30px;
}

textarea.tetxA {
  width: 100%;
  height: 100px;
  resize: none;
  padding: 8px;
}

.inp {
  width: 80%;
  margin-left: 10%;
  padding: 10px;
  border: none;
  border: 2px solid rgb(37, 37, 37);
  border-radius: 20px;
  color: rgb(255, 243, 243);
  background-color: rgba(21, 18, 18, 0.2);
  text-align: center;
}

.App {
  /* background-image: url("https://www.pullrequest.com/blog/ai-code-review-the-new-frontier-in-software-development/images/ai-code-review--the-new-frontier-in-software-development.webp");
  /* background-image: url("./bg12.webp"); */
  -webkit-backdrop-filter: blur(30px);
  backdrop-filter: blur(200px);
}

header , .ndNav{
  -webkit-backdrop-filter: blur(30px); 
  backdrop-filter: blur(200px);
}

.blur {
  -webkit-backdrop-filter: blur(30px);
  backdrop-filter: blur(200px);
}



.file-list-container .ulScroll::-webkit-scrollbar-thumb {
  background-color: transparent;
  border-radius: 5px; 
}
                  */}