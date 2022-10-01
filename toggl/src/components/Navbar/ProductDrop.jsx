import React, { useState } from "react";
import { CgArrowLongRight } from "react-icons/cg";
import { Link } from "react-router-dom";
import "./productdrop.css";

const ProductDrop = () => {
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
          <p style={{ marginTop: "100px" }}>FOR EVERY NEED </p>
        </div>

        <div className="soft_Drop_Div_2">
          <div>
            <div
              style={{
                marginLeft: "-500px",
                display: "inline-block",
              }}
              to=""
              className="softdropdiv2link"
            >
              <img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0iI0RENkZEMSIgZD0iTTAgMGgyMi44M3YyMi44M0gweiIvPjxwYXRoIGZpbGw9IiM0MTJBNEMiIGQ9Ik0yNi45ODEgNS4xODloMjIuODN2MjIuODNoLTIyLjgzek0wIDI2Ljk4aDIyLjgzdjIyLjgzSDB6Ii8+PHBhdGggZmlsbD0iI0RENkZEMSIgZD0iTTI2Ljk4MSAzMi4xN2gyMi44M1Y1NWgtMjIuODN6Ii8+PC9zdmc+"
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
                <Link to="/features"> Key Features</Link>
              </h2>
              <p
                style={{
                  marginLeft: "90px",
                  textAlign: "left",
                  color: "grey",
                  marginTop: "10px",
                }}
              >
                View features by need, from time tracking <br /> to project and
                team management
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
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTMiIGhlaWdodD0iNTMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGVsbGlwc2UgY3g9IjI2LjQwNyIgY3k9IjMxLjc1NCIgcng9IjE5LjMzNSIgcnk9IjIxLjI0NSIgZmlsbD0iI0ZFRkJGQSIvPjxwYXRoIGQ9Ik0xOC40ODIgMzkuNDE5YzIuMjIgMy44MyAxMC40NiA4LjcwNyAxNi44LS4zNDkiIHN0cm9rZT0iI0YyQkRFQyIgc3Ryb2tlLXdpZHRoPSIxLjc1MiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGVsbGlwc2UgY3g9IjI2LjQwNyIgY3k9IjMxLjc1NCIgcng9IjE5LjMzNSIgcnk9IjIxLjI0NSIgZmlsbD0iI0ZFRkJGQSIvPjxwYXRoIGQ9Ik0xOC40ODIgMzkuNDE5YzIuMjIgMy44MyAxMC40NiA4LjcwNyAxNi44LS4zNDkiIHN0cm9rZT0iI0YyQkRFQyIgc3Ryb2tlLXdpZHRoPSIxLjc1MiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGVsbGlwc2UgY3g9IjI2LjQwNyIgY3k9IjMxLjc1NCIgcng9IjE5LjMzNSIgcnk9IjIxLjI0NSIgZmlsbD0iI0ZFRkJGQSIvPjxwYXRoIGQ9Ik0xOC40ODIgMzkuNDE5YzIuMjIgMy44MyAxMC40NiA4LjcwNyAxNi44LS4zNDkiIHN0cm9rZT0iI0YyQkRFQyIgc3Ryb2tlLXdpZHRoPSIxLjc1MiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBhdGggZD0iTTEyLjA2OSAzMC45NzdjLTQuODU0IDEuMTg1LTQuOTM2IDQuMDg1LTQuNTM1IDUuNjE3LjgzNSAxLjUwMy4yOSAxLjExMSAwIDAtLjYwMS0xLjA4LTEuOTE2LTMuMTQtNC41NTItNi42MTVDLTExLjA1IDExLjQ3NiAyOC41NzYtLjY0IDM2LjE0OC4wMjZjOS45OTUgMCAyNS40NDIgMTEuNTgyIDEwLjkwNCAyMy45NjItMTQuNTM4IDEyLjM4LTEwLjkwNC0yLjk5NS0xNy43MTktMi45OTUgMCAwLTIyLjcxNi00Ljc5Mi0xNy4yNjQgOS45ODR6IiBmaWxsPSIjRTU3Q0Q4Ii8+PC9zdmc+"
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
                Employee time tracking
              </h2>
              <p
                style={{
                  marginLeft: "90px",
                  textAlign: "left",
                  color: "grey",
                  marginTop: "10px",
                }}
              >
                Loved by teams and team leads. Error-free <br /> timesheet data
                and ease of use
              </p>
            </div>
          </div>
        </div>
        <div className="soft_Drop_Div_2">
          <div>
            <div
              style={{
                marginLeft: "-530px",
                display: "inline-block",
              }}
              to=""
              className="softdropdiv2link"
            >
              <img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTUiIGhlaWdodD0iNTUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjEuNzQ3IiBjeT0iMjIuNzQ3IiByPSIyMS43NDciIGZpbGw9IiNGMkJERUMiLz48Y2lyY2xlIGN4PSI0MC4zODYiIGN5PSIxMi42NSIgcj0iMTEuMjYyIiBmaWxsPSIjRTU3Q0Q4Ii8+PHBhdGggZD0iTTQwLjc2NSAxOS4xNTRhLjYyNS42MjUgMCAwIDEtLjQ3OC0uMi42MzEuNjMxIDAgMCAxLS4xODctLjQ2NXYtLjkwNGE2LjIzMiA2LjIzMiAwIDAgMS0xLjQ1LS4yNTMgNi41MzYgNi41MzYgMCAwIDEtMS4wNzYtLjQ2NS43NTkuNzU5IDAgMCAxLS4zODYtLjQ2Ni45Mi45MiAwIDAgMSAuMDQtLjU1OC42NDYuNjQ2IDAgMCAxIC4zNTktLjM3MmMuMTY4LS4wNzEuMzY4LS4wNC41OTguMDkzLjI0OS4xNDIuNTcyLjI3OS45NzEuNDEyLjQwOC4xMjQuODk2LjE4NiAxLjQ2My4xODYuNjY1IDAgMS4xNDQtLjExNSAxLjQzNi0uMzQ2LjI5My0uMjQuNDQtLjUzNi40NC0uODlhLjkyOC45MjggMCAwIDAtLjMwNy0uNzE5Yy0uMjA0LS4xODYtLjU2Ny0uMzM3LTEuMDktLjQ1MmwtMS40MS0uMzA2Yy0xLjYwNS0uMzQ2LTIuNDA3LTEuMTg4LTIuNDA3LTIuNTI3IDAtLjc0NC4yNTMtMS4zNy43NTgtMS44NzUuNTE0LS41MTQgMS4yMDEtLjgyNCAyLjA2MS0uOTN2LS45NDVjMC0uMTg2LjA2Mi0uMzQxLjE4Ny0uNDY1YS42MjUuNjI1IDAgMCAxIC40NzgtLjIuNjEuNjEgMCAwIDEgLjQ2Ni4yYy4xMzMuMTI0LjIuMjc5LjIuNDY1di45MzFjLjM1NC4wMzYuNzI2LjEyIDEuMTE2LjI1My40LjEzMy43NDUuMzE0IDEuMDM4LjU0NWEuNzI2LjcyNiAwIDAgMSAuMjkyLjQ2NS43MDIuNzAyIDAgMCAxLS4wOTMuNDguNjI2LjYyNiAwIDAgMS0uMzg2LjI5MmMtLjE2OC4wNDQtLjM2NyAwLS41OTgtLjEzM2EzLjk0IDMuOTQgMCAwIDAtMi4wMDgtLjUwNWMtLjU2OCAwLTEuMDE1LjEyOC0xLjM0My4zODUtLjMyLjI0OC0uNDc5LjU3Ni0uNDc5Ljk4NCAwIC4zMDIuMDk4LjU0NS4yOTMuNzMyLjE5NS4xNzcuNTI3LjMxOS45OTcuNDI1bDEuNDUuMzJjLjg1LjE4NSAxLjQ3Ni40ODIgMS44NzUuODkuMzk5LjQuNTk4LjkyNy41OTggMS41ODMgMCAuNzQ1LS4yNTcgMS4zNTYtLjc3MSAxLjgzNS0uNTA2LjQ3LTEuMTY2Ljc2Ny0xLjk4Mi44OTF2Ljk0NGEuNjMyLjYzMiAwIDAgMS0uMTg2LjQ2Ni42MjYuNjI2IDAgMCAxLS40NzkuMnoiIGZpbGw9IiMyQzEzMzgiLz48cGF0aCBkPSJNMjUuODgzIDI3LjI4OGMtNS4yNDIgMy42ODktOC4zNDkgMy40My0xMC40ODUgMy4zLTcuODk2IDIuOTEzLTE4Ljg3MyAxMC43MTguMzg5IDE4LjY0IDI0LjA3NiA5LjkwMiAzMS44MzktLjQ3NSAzNC4xNzMtMi43MTkgNS4wNDgtNC44NTQgNC40NjUtMjEuNzQ2IDMuODgzLTIzLjg4MS0uNDY2LTEuNzA5LTIuMzk1LTIuMTM2LTMuMy0yLjEzNi0zLjMwMi0uNTgzLTQuNzkgMi4zMy00Ljg1NSA0LjI3MSAwIDAgLjc3NyA5LjUxNSAwIDEyLjQyNy0uNjIxIDIuMzMtMy4xMDcgMy4zLTQuMjcyIDMuNDk1LTEuNzQ3LjI1OS02LjAxOS4xMTYtOS4xMjUtMi41MjQtMy4xMDctMi42NC0xLjY4My00LjcyNS0uNTgzLTUuNDM3bDYuMDItMy44ODNjLjc3Ni0uODQxIDEuODYzLTIuOTkgMC00Ljg1NC0xLjg2NS0xLjg2NC0zLjYyNS0xLjY4My00LjI3Mi0xLjM2bC03LjU3MyA0LjY2eiIgZmlsbD0iIzQxMkE0QyIvPjxyZWN0IHg9IjEuOTQxIiB5PSIzMC4xMjQiIHdpZHRoPSIxMC40ODUiIGhlaWdodD0iMTkuNDE2IiByeD0iMS4wNTUiIGZpbGw9IiNFNTdDRDgiLz48L3N2Zz4="
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
                Billing & invocing
              </h2>
              <p
                style={{
                  marginLeft: "90px",
                  textAlign: "left",
                  color: "grey",
                  marginTop: "10px",
                }}
              >
                Capture every billable minute so you can <br /> invoice with
                ease and precision
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
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTMiIGhlaWdodD0iNTMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3QgeT0iMy4xOCIgd2lkdGg9IjUzIiBoZWlnaHQ9IjQ5LjgyIiByeD0iMy4wOTUiIGZpbGw9IiNGNUNCRUYiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTAgNi4xOWEzLjA5NSAzLjA5NSAwIDAgMSAzLjA5NS0zLjA5NGg0Ni44MUEzLjA5NSAzLjA5NSAwIDAgMSA1MyA2LjE5djguODk3SDBWNi4xOTF6bTEzLjU0IDMuMDk2YTMuNDgyIDMuNDgyIDAgMSAxLTYuOTY0IDAgMy40ODIgMy40ODIgMCAwIDEgNi45NjQgMHptMjkuMDE1IDMuNDgyYTMuNDgyIDMuNDgyIDAgMSAwIDAtNi45NjQgMy40ODIgMy40ODIgMCAwIDAgMCA2Ljk2M3oiIGZpbGw9IiNFNTdDRDgiLz48cmVjdCB4PSI3LjczNyIgd2lkdGg9IjQuNjQyIiBoZWlnaHQ9IjEyLjM4IiByeD0iMi4zMjEiIGZpbGw9IiM0MTJBNEMiLz48cmVjdCB4PSI0MC4yMzQiIHdpZHRoPSI0LjY0MiIgaGVpZ2h0PSIxMi4zOCIgcng9IjIuMzIxIiBmaWxsPSIjNDEyQTRDIi8+PGNpcmNsZSBjeD0iNi4zMjgiIGN5PSIyNy41MjciIHI9IjIuMDg4IiBmaWxsPSIjRkRFNURDIi8+PGNpcmNsZSBjeD0iMTMuMTU0IiBjeT0iMjcuNTI3IiByPSIyLjA4OCIgZmlsbD0iI0ZERTVEQyIvPjxjaXJjbGUgY3g9IjE5Ljk4IiBjeT0iMjcuNTI3IiByPSIyLjA4OCIgZmlsbD0iI0ZERTVEQyIvPjxjaXJjbGUgY3g9IjI2LjgwNSIgY3k9IjI3LjUyNyIgcj0iMi4wODgiIGZpbGw9IiNGREU1REMiLz48Y2lyY2xlIGN4PSIzMy42MzEiIGN5PSIyNy41MjciIHI9IjIuMDg4IiBmaWxsPSIjRkRFNURDIi8+PGNpcmNsZSBjeD0iNDAuNDU3IiBjeT0iMjcuNTI3IiByPSIyLjA4OCIgZmlsbD0iI0ZERTVEQyIvPjxjaXJjbGUgY3g9IjQ3LjI4MyIgY3k9IjI3LjUyNyIgcj0iMi4wODgiIGZpbGw9IiNGREU1REMiLz48Y2lyY2xlIGN4PSI0MC40NTciIGN5PSIyMS4xNjgiIHI9IjIuMDg4IiBmaWxsPSIjRkRFNURDIi8+PGNpcmNsZSBjeD0iNDcuMjgzIiBjeT0iMjEuMTY4IiByPSIyLjA4OCIgZmlsbD0iI0ZERTVEQyIvPjxjaXJjbGUgY3g9IjYuMzI4IiBjeT0iMzMuODg4IiByPSIyLjA4OCIgZmlsbD0iI0ZERTVEQyIvPjxjaXJjbGUgY3g9IjEzLjE1NCIgY3k9IjMzLjg4OCIgcj0iMi4wODgiIGZpbGw9IiNGREU1REMiLz48Y2lyY2xlIGN4PSIxOS45OCIgY3k9IjMzLjg4OCIgcj0iMi4wODgiIGZpbGw9IiNGREU1REMiLz48Y2lyY2xlIGN4PSIyNi44MDUiIGN5PSIzMy44ODgiIHI9IjIuMDg4IiBmaWxsPSIjRkRFNURDIi8+PGNpcmNsZSBjeD0iMzMuNjMxIiBjeT0iMzMuODg4IiByPSIyLjA4OCIgZmlsbD0iI0ZERTVEQyIvPjxjaXJjbGUgY3g9IjQwLjQ1NyIgY3k9IjMzLjg4OCIgcj0iMi4wODgiIGZpbGw9IiNGREU1REMiLz48Y2lyY2xlIGN4PSI0Ny4yODMiIGN5PSIzMy44ODgiIHI9IjIuMDg4IiBmaWxsPSIjRkRFNURDIi8+PGNpcmNsZSBjeD0iNi4zMjgiIGN5PSI0MC4yNDgiIHI9IjIuMDg4IiBmaWxsPSIjRkRFNURDIi8+PGNpcmNsZSBjeD0iMTMuMTU0IiBjeT0iNDAuMjQ4IiByPSIyLjA4OCIgZmlsbD0iI0ZERTVEQyIvPjxjaXJjbGUgY3g9IjE5Ljk4IiBjeT0iNDAuMjQ4IiByPSIyLjA4OCIgZmlsbD0iI0ZERTVEQyIvPjxjaXJjbGUgY3g9IjI2LjgwNSIgY3k9IjQwLjI0OCIgcj0iMi4wODgiIGZpbGw9IiNGREU1REMiLz48Y2lyY2xlIGN4PSIzMy42MzEiIGN5PSI0MC4yNDgiIHI9IjIuMDg4IiBmaWxsPSIjRkRFNURDIi8+PGNpcmNsZSBjeD0iNDAuNDU3IiBjeT0iNDAuMjQ4IiByPSIyLjA4OCIgZmlsbD0iI0ZERTVEQyIvPjxjaXJjbGUgY3g9IjQ3LjI4MyIgY3k9IjQwLjI0OCIgcj0iMi4wODgiIGZpbGw9IiNGREU1REMiLz48Y2lyY2xlIGN4PSI2LjMyOCIgY3k9IjQ2LjYwOCIgcj0iMi4wODgiIGZpbGw9IiNGREU1REMiLz48Y2lyY2xlIGN4PSIxMy4xNTQiIGN5PSI0Ni42MDgiIHI9IjIuMDg4IiBmaWxsPSIjRkRFNURDIi8+PGNpcmNsZSBjeD0iMTkuOTgiIGN5PSI0Ni42MDgiIHI9IjIuMDg4IiBmaWxsPSIjRkRFNURDIi8+PGNpcmNsZSBjeD0iMjYuODA1IiBjeT0iNDYuNjA4IiByPSIyLjA4OCIgZmlsbD0iI0ZERTVEQyIvPjxwYXRoIGQ9Ik00Mi43OTIgNDEuMjJhLjY4NS42ODUgMCAwIDAtLjkzNC4xOTQgNC42NSA0LjY1IDAgMCAxLTMuODg4IDIuMTA2IDQuNjQzIDQuNjQzIDAgMCAxLTMuODg5LTIuMTA2LjY3NS42NzUgMCAwIDAtMS4xMjguNzQgNS45OTQgNS45OTQgMCAwIDAgNS4wMTcgMi43MiA1Ljk4NCA1Ljk4NCAwIDAgMCA1LjAxNi0yLjcyLjY3Ni42NzYgMCAwIDAtLjE5NC0uOTM0eiIgZmlsbD0iIzU0NDY1RSIvPjxwYXRoIGQ9Ik00MS42OCAyOS41NzNhLjc0Ljc0IDAgMCAxLS4yMTYtMS4wODFsLjA2NS0uMDgxLjAyNy0uMDMzLjA4MS0uMDk3Yy4yNjMtLjMzMS40ODItLjY5NC42NTMtMS4wOGE1LjA4OSA1LjA4OSAwIDAgMCAuNDE2LTIuMDExIDUuMDc0IDUuMDc0IDAgMCAwLTIuNzMyLTQuNDgxIDUuMDU3IDUuMDU3IDAgMCAwLTYuOTY2IDIuNDY2IDUuMDc2IDUuMDc2IDAgMCAwLS4wMTcgNC4wM2MuMTc1LjM5Ny4zOTguNzcxLjY2NCAxLjExNGwuMDMyLjAzOC4xMTQuMTU3YS43NC43NCAwIDAgMS0uMjMzIDEuMDhsLS4zMTguMTg0YTEwLjA5IDEwLjA5IDAgMCAwLTUuMjY4IDYuMjQyYy40Ni4wNjkuOTIzLjEwNSAxLjM4Ny4xMDhhMTAuNzg0IDEwLjc4NCAwIDAgMCA5LjAwOC00Ljg2NCAxMC4yNiAxMC4yNiAwIDAgMCA4LjgzIDUuMDY0aC4xODNhMTAuMTE2IDEwLjExNiAwIDAgMC01LjcxLTYuNzU1eiIgZmlsbD0iIzY4MzcyRSIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNDcuMTkxIDM2LjI2N2guMTg0Yy4yMS44MjguMzEzIDEuNjguMzA4IDIuNTM1YTEwLjA2NCAxMC4wNjQgMCAwIDEtMi45OTUgNy4xNTVsLTEuMzUgMS4zNWEzLjMyNiAzLjMyNiAwIDAgMCAxLjY5NyA1LjU5M2gtMTQuOTJjMi41NjgtLjM3MyAzLjcyLTMuNjk5IDEuNzg3LTUuNjM1bC0xLjM0NC0xLjM0NmExMC4wMzUgMTAuMDM1IDAgMCAxLTIuOTk2LTcuMTcxIDEwLjA5MSAxMC4wOTEgMCAwIDEgLjQwNS0yLjhjLjQ2LjA2OS45MjMuMTA1IDEuMzg3LjEwOGExMC43ODMgMTAuNzgzIDAgMCAwIDkuMDA4LTQuODY0IDEwLjI2MSAxMC4yNjEgMCAwIDAgOC44MyA1LjA3NXptLTYuMzY4IDcuODgxYTUuOTk0IDUuOTk0IDAgMCAwIDIuMTY0LTEuOTk2LjY3Ni42NzYgMCAwIDAtLjE5NC0uOTM1LjY4NS42ODUgMCAwIDAtLjkzNC4xOTUgNC42NDkgNC42NDkgMCAwIDEtMy44ODkgMi4xMDUgNC42NDIgNC42NDIgMCAwIDEtMy44ODgtMi4xMDUuNjc1LjY3NSAwIDAgMC0xLjEyOC43NCA1Ljk5NCA1Ljk5NCAwIDAgMCA1LjAxNyAyLjcyYy45OTYgMCAxLjk3Ni0uMjQ5IDIuODUyLS43MjR6IiBmaWxsPSIjQ0Q5NDYwIi8+PC9zdmc+"
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
                Payroll
              </h2>
              <p
                style={{
                  marginLeft: "90px",
                  textAlign: "left",
                  color: "grey",
                  marginTop: "10px",
                }}
              >
                Calculate payroll for contractors and <br /> employees based on
                accurate data
              </p>
            </div>
          </div>
        </div>
        <div className="soft_Drop_Div_2">
          <div>
            <div
              style={{
                marginLeft: "-550px",
                display: "inline-block",
              }}
              to=""
              className="softdropdiv2link"
            >
              <img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTciIGhlaWdodD0iNTciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PG1hc2sgaWQ9ImEiIHN0eWxlPSJtYXNrLXR5cGU6YWxwaGEiIG1hc2tVbml0cz0idXNlclNwYWNlT25Vc2UiIHg9IjAiIHk9IjAiIHdpZHRoPSI1NyIgaGVpZ2h0PSI1NyI+PHBhdGggZmlsbD0iI0M0QzRDNCIgZD0iTTAgMGg1N3Y1N0gweiIvPjwvbWFzaz48ZyBtYXNrPSJ1cmwoI2EpIj48cGF0aCBkPSJNNDkuMSAzOC4yMDFDNDYuMTgxIDUxLjIzIDMzLjY5NSA1OC45OTYgMjEuMjEgNTUuNTQ3IDguNzI4IDUyLjEuOTcyIDM4Ljc0MyAzLjg5IDI1LjcxNCA2LjgwNyAxMi42ODUgMTkuMjkyIDQuOTE5IDMxLjc3NyA4LjM2OGwtNS4yODMgMjMuNTlMNDkuMSAzOC4yeiIgZmlsbD0iIzU2NDI2MCIvPjxwYXRoIGQ9Ik01NC43NTMgMzQuMjIxQzU3LjY3IDIxLjE5MyA0OS45MTUgNy44MzYgMzcuNDMgNC4zODhsLTUuMjgyIDIzLjU5IDIyLjYwNSA2LjI0M3oiIGZpbGw9IiNFNTdDRDgiLz48L2c+PC9zdmc+"
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
                Reporting and transparency
              </h2>
              <p
                style={{
                  marginLeft: "90px",
                  textAlign: "left",
                  color: "grey",
                  marginTop: "10px",
                }}
              >
                Get a big picture overview or dig into <br /> details with
                insightful reports
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
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTMiIGhlaWdodD0iNTMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjYuNSIgY3k9IjI2LjUiIHI9IjI2LjUiIGZpbGw9IiM0MTJBNEMiLz48Y2lyY2xlIGN4PSIyNi41IiBjeT0iMjYuNSIgcj0iMTkuNzIxIiBmaWxsPSIjRjVDQkVGIi8+PGNpcmNsZSBjeD0iMjYuNjM1IiBjeT0iMjYuNjM1IiByPSIxNC4zMSIgZmlsbD0iI0U1N0NEOCIvPjxjaXJjbGUgY3g9IjI2LjM1MiIgY3k9IjI2LjM1MiIgcj0iOC40OCIgZmlsbD0iI0ZGREU5MSIvPjxwYXRoIGQ9Im0yMS44MjMgMjIuODYzIDUuMTk3IDUuMTk2IDExLjQzLTExLjQzMSIgc3Ryb2tlPSIjNDEyQTRDIiBzdHJva2Utd2lkdGg9IjIuNTk4IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L3N2Zz4="
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
                Project budgeting
              </h2>
              <p
                style={{
                  marginLeft: "90px",
                  textAlign: "left",
                  color: "grey",
                  marginTop: "10px",
                }}
              >
                Stay on track with budgets and deadlines. <br /> Eliminate scope
                creep and overwork
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDrop;
