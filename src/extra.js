{/* <div className="sh">
        <h1>CodeAI</h1></div> */}
          {/* <Link to="/Resigter" className="x">
          <button>
            <span className="material-symbols-outlined send">login</span>
          </button>
        </Link> */}
        // .page1 g {


        <div
        style={{
          width: `${dimensions.width}px`,
          height: `${dimensions.height}px`,
          backgroundColor: "red",
          //position: 'absolute',
          top: `${dimensions.top}px`,
          left: "18.25%", // Center hori1%zontally
          border: "1px solid black",
          userSelect: "none", // Prevents text selection while resizing
          paddingTop: "30px",
          //marginTop : '35px'
          maxHeight : "300px"

        }}
      >
        Resizable Div
        <div
          style={{
            width: "100%",
            height: "10px",
            backgroundColor: "darkblue",
            //position: "absolute",
            left: "50%",
            top: "0px", // Position above the top of the div
            transform: "translateX(-50%)",
            cursor: "n-resize", // Cursor for resizing downwards
          }}
          onMouseDown={handleMouseDown}
        ></div>
      </div> */}
        //     color: orangered;
        //     text-align: center;
        //     font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
        //       Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        //     display: block;
        //     padding: 10px;
        //     border-radius: 40px;
        //     font-size: 5.5rem;
        //     background-image: url("https://thumbs.dreamstime.com/b/digital-ai-artificial-intelligence-machine-learning-backgrou-digital-ai-artificial-intelligence-machine-learning-background-132038727.jpg");
        //     background-repeat: repeat;
        //     background-size: cover;
        //     -webkit-background-clip: text; /* For webkit browsers */
        //     background-clip: text;
        //     -webkit-text-fill-color: transparent; /* Makes the text see-through to show the background */
        //     font-weight: bold;
        //     font-family: "Steelfish Rg", "helvetica neue", helvetica, arial, sans-serif;
        //     -webkit-font-smoothing: antialiased;
        //     text-shadow: 3px 3px 10px rgba(247, 62, 62, 0.7);
        //     cursor: pointer;
          
// @keyframes shadows1 {
//     0% {
//       box-shadow: 0px 0px 10px 5px #11cfff;
//     }
//     50% {
//       box-shadow: 0px 0px 10px 5px rgb(3, 243, 231);
//     }
//     75% {
//       box-shadow: 0px 0px 10px 5px rebeccapuprle;
//     }
//     100% {
//       box-shadow: 0px 0px 10px 5px #48abe0;
//     }
//   }

{/*}
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
  .send1 {
  color: black;
  font-size: 25px;
  padding-top: 10px;
  padding-left: 7px;
}

.next {
  padding-top: 100px;
}
.buttonsX {
  display: flex;
  flex-direction: row;
  position: absolute;
  margin-top: -100%;
}

























 style={{
          height: isFullHeight ? "100vh" : "auto", // Toggle between 100px and 100% screen height
          transition: "height 0.3s ease-in-out", // Smooth transition
          position: isFullHeight ? "fixed" : "static", // Become a popup when full height
          top: isFullHeight ? 0 : "auto",
          left: isFullHeight ? 0 : "auto",
          marginBottom: isFullHeight ? "20px" : "", // Toggle between 100px and 100% screen height
          zIndex: isFullHeight ? 999 : "auto", // Bring to the front when full screen
          backgroundColor: isFullHeight
            ? " rgb(0, 17, 23, 0.3)"
            : "transparent",
        }}

            {/* 
          <div
            style={{
              width: `${dimensions.width}px`,
              height: `${dimensions.height}px`,
              backgroundColor: "red",
              //position: 'absolute',
              top: `${dimensions.top}px`,
              left: "18.25%", // Center hori1%zontally
              border: "1px solid black",
              userSelect: "none", // Prevents text selection while resizing
              paddingTop: "30px",
              //marginTop : '35px'
              maxHeight : "300px"

            }}
          >
            Resizable Div
            <div
              style={{
                width: "100%",
                height: "10px",
                backgroundColor: "darkblue",
                //position: "absolute",
                left: "50%",
                top: "0px", // Position above the top of the div
                transform: "translateX(-50%)",
                cursor: "n-resize", // Cursor for resizing downwards
              }}
              onMouseDown={handleMouseDown}
            ></div>
          </div> 












.comp2 {
    position: absolute;
    height: auto;
    margin-top: 330px;
    border-radius: 10px;
    padding: 10px;
    height: auto;
    border-radius: 20px 0px 20px 0px;
    border: none;
    background-color: transparent;
    position: absolute;
    margin-left: 68%;
  }
  
  .comp2:hover {
    background-color: rgb(25, 240, 240, 0.3);
  }
  
  .send {
    color: skyblue;
    font-size: 25px;
    padding: 10px;
    position: absolute;
    margin-top: 25%;
    border-radius: 50%;
  }
  
  .send:hover {
    background-color: rgb(25, 240, 240, 0.3);
  }
  
  .component1 button {
    background-color: rgb(2, 83, 54, 0.5);
    border: none;
    color: black;
  }
 */}