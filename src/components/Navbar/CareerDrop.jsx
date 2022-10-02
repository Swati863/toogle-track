import React, { useState } from "react";
import { CgArrowLongRight } from "react-icons/cg";
import "./productdrop.css";

const CareerDrop = () => {
  const [dropDown, setDropDown] = useState(false);

  return (
    <div
      className={
        dropDown ? "softwareDrop_main-div click" : "softwareDrop_main-div"
      }
      onClick={() => setDropDown(!dropDown)}
    >
      <div className="softwaredroptopdiv">
        <div className="soft_Drop_Div1">
          <p
            style={{
              marginLeft: "0px",
              width: "500px",
              height: "50px",
              marginTop: "50px",
            }}
          >
            WORK ON A PRODUCT THAT MATTERS TO MILLIONS
          </p>
        </div>

        <div className="soft_Drop_Div_2">
          <div>
            <div
              style={{
                marginLeft: "-450px",
                display: "inline-block",
                marginBottom: "100px",
              }}
              to=""
              className="softdropdiv2link"
            >
              <img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTMiIGhlaWdodD0iNTMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PG1hc2sgaWQ9ImEiIHN0eWxlPSJtYXNrLXR5cGU6YWxwaGEiIG1hc2tVbml0cz0idXNlclNwYWNlT25Vc2UiIHg9IjAiIHk9IjAiIHdpZHRoPSI1MyIgaGVpZ2h0PSI1MyI+PHBhdGggZmlsbD0iI0M0QzRDNCIgZD0iTTAgMGg1M3Y1M0gweiIvPjwvbWFzaz48ZyBtYXNrPSJ1cmwoI2EpIj48cGF0aCBmaWxsPSIjRTU3Q0Q4IiBkPSJtMzIuNzIyIDM1LjE3IDIuMzAzLTIuMzM5IDMuODk3IDMuODM4LTIuMzAyIDIuMzM5eiIvPjxyZWN0IHg9IjM5LjkyOSIgeT0iMzQuNDI3IiB3aWR0aD0iMTkuODAyIiBoZWlnaHQ9IjcuNzAxIiByeD0iMy44NSIgdHJhbnNmb3JtPSJyb3RhdGUoNDQuNTU4IDM5LjkzIDM0LjQyNykiIGZpbGw9IiM1NjQyNjAiLz48Y2lyY2xlIGN4PSIyMC40NjgiIGN5PSIyMC40NjgiIHI9IjIwLjM1MiIgdHJhbnNmb3JtPSJyb3RhdGUoLTQ1LjEgMjAuNDY4IDIwLjQ2OCkiIGZpbGw9IiM0MTJBNEMiLz48Y2lyY2xlIGN4PSIyMC40NjgiIGN5PSIyMC40NjgiIHI9IjE1Ljk1MSIgdHJhbnNmb3JtPSJyb3RhdGUoLTQ1LjEgMjAuNDY4IDIwLjQ2OCkiIGZpbGw9IiNGREU1REMiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTIwLjY3NiAxOC4zMzMgMjMuMzIgNy4xNzcgMTEuMzc3IDIyLjQ5NWg4LjIwNEwxNi45MzYgMzMuNjUgMjguODggMTguMzMzaC04LjIwNHoiIGZpbGw9IiNFNTdDRDgiLz48L2c+PC9zdmc+"
                alt=""
              />
              <h2
                style={{
                  textAlign: "left",
                  marginLeft: "90px",
                  marginTop: "-60px",
                  color: "black",
                }}
              >
                Current job openings
              </h2>
              <p
                style={{
                  marginLeft: "90px",
                  textAlign: "left",
                  color: "grey",
                  marginTop: "10px",
                }}
              >
                We are hiring! Apply by taking a skills test; <br /> no resume
                or CV required
              </p>
            </div>
          </div>
          <div>
            <div
              style={{
                marginLeft: "-100px",
                display: "inline-block",
              }}
              to=""
              className="softdropdiv2link"
            >
              <img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTMiIGhlaWdodD0iNTQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjYuNSIgY3k9IjI3IiByPSIyNi41IiBmaWxsPSIjRjdEOEYzIi8+PHJlY3QgeD0iMTEuNjYiIHk9IjM5LjcyMSIgd2lkdGg9IjMwLjc0IiBoZWlnaHQ9IjQuMjQiIHJ4PSIyLjEyIiBmaWxsPSIjNDEyQTRDIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00Mi44MyAzNy42aC0zMi4yTDcuNDM2IDIxLjk1N2EuODU4Ljg1OCAwIDAgMSAxLjI4NC0uOTA3TDE5LjcgMjcuNjY3bDYuMjYtMTIuNTk3YS44NTguODU4IDAgMCAxIC43NjItLjQ3Ni44ODIuODgyIDAgMCAxIC43NjguNDYzbDYuNDY5IDEyLjQ4NyAxMC43NzgtNi40OTNhLjg1OC44NTggMCAwIDEgMS4yODQuOTA2TDQyLjgzIDM3LjZ6IiBmaWxsPSIjRTU3Q0Q4Ii8+PGNpcmNsZSBjeD0iMjYuNSIgY3k9IjE0LjI4MSIgcj0iMy4xOCIgZmlsbD0iIzQxMkE0QyIvPjxjaXJjbGUgY3g9IjQ1LjU4IiBjeT0iMjAuNjQxIiByPSIzLjE4IiBmaWxsPSIjNDEyQTRDIi8+PGNpcmNsZSBjeD0iNy40MiIgY3k9IjIwLjY0MSIgcj0iMy4xOCIgZmlsbD0iIzQxMkE0QyIvPjxwYXRoIGQ9Ik0yNC41OCAzMS44ODljMCAuOTkxLjE3MyAxLjc1NS41MiAyLjI3NS41MzIuNzk1IDEuMTI4IDEuMzE2IDIuNTc2IDEuMzE2Ljg0IDAgMS41NDMtLjE5OSAyLjAwNC0uNDY0di0yLjk2M2MtLjIxOS4wOC0uNDUuMTItLjY4MS4xMTYtLjU2IDAtLjc4OS0uMTc3LS45OTUtLjQ0OC0uMTM0LS4xNzctLjIwMS0uNDM3LS4yMDEtLjc3NHYtMS41NzhoMS44Nzd2LTIuODI3aC0xLjg3N1YyMy44MmgtMi4zOTl2MS4wMTdjMCAxLjEyOC0uODMxIDIuMDQtMS44NTggMi4wNC0uMDc1IDAtLjE1LS4wMDUtLjIyNi0uMDE0djIuNTA2aDEuMjZ2Mi41MnoiIGZpbGw9IiMyQzEzMzgiLz48L3N2Zz4="
                alt=""
              />
              <h2
                style={{
                  textAlign: "left",
                  marginLeft: "90px",
                  marginTop: "-60px",
                  color: "black",
                }}
              >
                The Toggl Track Culture
              </h2>
              <p
                style={{
                  marginLeft: "90px",
                  textAlign: "left",
                  color: "grey",
                  marginTop: "10px",
                }}
              >
                Learn more about our mission, vision and <br />
                values
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerDrop;
