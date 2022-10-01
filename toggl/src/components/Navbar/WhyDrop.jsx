import React, { useState } from "react";
import { CgArrowLongRight } from "react-icons/cg";
import "./productdrop.css";

const WhyDrop = () => {
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
            TIME TRACKING FOR EVERY TEAM SIZE
          </p>
        </div>

        <div className="soft_Drop_Div_2">
          <div>
            <div
              style={{
                marginLeft: "-450px",
                display: "inline-block",
              }}
              to=""
              className="softdropdiv2link"
            >
              <img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTQiIGhlaWdodD0iNTMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggdHJhbnNmb3JtPSJtYXRyaXgoLjcwMTQgLS43MTI3NyAuNzIxOSAuNjkyIDM5LjY0NiAxNC43NzEpIiBzdHJva2U9IiNFODg5REMiIHN0cm9rZS13aWR0aD0iMi4yMDgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZD0iTTEuMTA0LTEuMTA0aDYuNTM5Ii8+PHBhdGggdHJhbnNmb3JtPSJtYXRyaXgoLjk0MzIgLS4zMzIyNCAuMzQwMDUgLjk0MDQgMzkuNjQ2IDIwLjEzMykiIHN0cm9rZT0iI0RENkZEMSIgc3Ryb2tlLXdpZHRoPSIyLjIwOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNMS4xMDQtMS4xMDRoMTMuMDExIi8+PHBhdGggdHJhbnNmb3JtPSJtYXRyaXgoLS45MjUwNiAtLjM3OTgzIC4zODg0IC0uOTIxNDkgOS4xMyAxNS4yODUpIiBzdHJva2U9IiNFODg5REMiIHN0cm9rZS13aWR0aD0iMi4yMDgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZD0iTTEuMTA0LTEuMTA0aDYuNTgxIi8+PHBhdGggdHJhbnNmb3JtPSJtYXRyaXgoLS42NjM4IC0uNzQ3OTIgLjc1NjQ3IC0uNjU0MDIgMTQuMTggMTMuMzE1KSIgc3Ryb2tlPSIjREQ2RkQxIiBzdHJva2Utd2lkdGg9IjIuMjA4IiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik0xLjEwNC0xLjEwNGgxMi45MjEiLz48cGF0aCBkPSJNMzIuMDU1IDE0LjQzNmgtNy41MTJsLTE0LjAwNiAxMy42MyA2LjMzMiA2LjYgNi4wNjQtNS44NDhWNTJoOS4xMjJWMTQuNDM2eiIgZmlsbD0iIzQxMkE0QyIvPjwvc3ZnPg=="
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
                For freelancers and solo users
              </h2>
              <p
                style={{
                  marginLeft: "90px",
                  textAlign: "left",
                  color: "grey",
                  marginTop: "10px",
                }}
              >
                For solo entrepreneurs with a growing list <br /> of clients
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
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTMiIGhlaWdodD0iNTMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PG1hc2sgaWQ9ImEiIHN0eWxlPSJtYXNrLXR5cGU6YWxwaGEiIG1hc2tVbml0cz0idXNlclNwYWNlT25Vc2UiIHg9IjIiIHk9IjAiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MyI+PHBhdGggZmlsbD0iI0M0QzRDNCIgZD0iTTIgMGg0OS45MTN2NTNIMnoiLz48L21hc2s+PGcgbWFzaz0idXJsKCNhKSI+PGNpcmNsZSBjeD0iNDAuODQ5IiBjeT0iMzYuOTIyIiByPSIzLjY3MSIgZmlsbD0iI0VEQTNFNCIvPjxjaXJjbGUgY3g9IjQ2LjA5NCIgY3k9IjQ2LjM2MSIgcj0iMS41NzMiIGZpbGw9IiNFNTdDRDgiLz48Y2lyY2xlIGN4PSI4LjMzMyIgY3k9IjEwLjciIHI9IjQuNzIiIGZpbGw9IiM1NjQyNjAiLz48cGF0aCBkPSJtMTguOTkyIDE2LjYwNCA4LjIxNiAyLjk4NiAyMS42MzQgNy44NjRjMy4yMDYtNi4yNiA2LjExMi0yMC4wNTUtNy45MS0yNS4xNTEtMTQuMDItNS4wOTctMjAuNDY4IDcuNDEtMjEuOTQgMTQuMzAxeiIgZmlsbD0iIzY4MzcyRSIgc3Ryb2tlPSIjNjgzNzJFIiBzdHJva2Utd2lkdGg9Ii4zNjEiLz48Y2lyY2xlIGN4PSIzNi4wODQiIGN5PSIxNS40NTgiIHI9IjExLjQwMyIgdHJhbnNmb3JtPSJyb3RhdGUoMTkuOTc1IDM2LjA4NCAxNS40NTgpIiBmaWxsPSIjZmZmIi8+PHBhdGggZD0iTTMwLjI4NyAxNy43MjdjLjUyNyAyLjM3OSA0LjIgNi40OTkgOS4zNzUgMy4yMDgiIHN0cm9rZT0iI0ZGQUNBMiIgc3Ryb2tlLXdpZHRoPSIxLjMxMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBhdGggZD0iTTQ4LjU1IDE3LjI3MyAyNS44ODcgOS4wMzZsNC4wNjItNy4zNDYgOS4wODcuNzE3IDguMzM3IDQuNDIzIDEuMTc3IDEwLjQ0M3oiIGZpbGw9IiM2ODM3MkUiLz48Y2lyY2xlIGN4PSIxOC4yMTMiIGN5PSI0MC45MSIgcj0iMTEuNzY1IiB0cmFuc2Zvcm09InJvdGF0ZSgtMjAuMzY1IDE4LjIxMyA0MC45MSkiIGZpbGw9IiNmZmYiLz48cGF0aCBkPSJNMTUuMTcgNDYuNTY2YzIuMDAzIDEuNTE5IDcuNjQ0IDIuMzA1IDkuNTE2LTMuNzM5IiBzdHJva2U9IiNGRkFDQTIiIHN0cm9rZS13aWR0aD0iMS4yODgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwYXRoIGQ9Im0yOS40NTggMzYuNTctMy40NC0yLjg3N2EyLjQzIDIuNDMgMCAwIDAtLjMzNS0uNjA4Yy0uODgxLTEuMTcyLTIuNzU0LTEuNDM2LTQuMTY1LS40NTdhMjIuMTU0IDIyLjE1NCAwIDAgMS00LjMwOSAyLjM2N2MtMy41NTIgMS40NS02LjA4LjAzOS02Ljk4NC0uNjEtMi41MyAxLjMyNC0zLjgxNCA0LjEwMy0yLjkwNiA2LjU0OGwtLjM0IDMuOTgyLS42OC0xcy00LjY5LTYuMDY3LTMuODAzLTguNjAzYy44NzUtMi40OTYgMy4wODktMi4zNyAzLjA4OS0yLjM3UzIuMzIgMjcuNjUzIDguNzQgMjUuMzljNi40MDgtMi4yNTkgMTcuMTIzIDEuMjEyIDE4LjE3NiAyLjE4OCAxLjYzNyAxLjQ5MSAyLjU0IDguOTkzIDIuNTQgOC45OTN6IiBmaWxsPSIjNTY0MjYwIi8+PC9nPjwvc3ZnPg=="
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
                For small teams
              </h2>
              <p
                style={{
                  marginLeft: "90px",
                  textAlign: "left",
                  color: "grey",
                  marginTop: "10px",
                }}
              >
                For teams of less than 10 that need to track projects and bill
                clients
              </p>
            </div>
          </div>
          <div>
            <div
              style={{
                marginLeft: "80px",
                display: "inline-block",
                marginBottom: "100px",
                // border: "1px solid red",
                width: "500px",
              }}
              to=""
              className="softdropdiv2link"
            >
              <img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTMiIGhlaWdodD0iNTMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iOC4yNjQiIGN5PSI2LjI2NCIgcj0iNi4yNjQiIGZpbGw9IiNFODg5REMiLz48Y2lyY2xlIGN4PSI4LjI2NCIgY3k9IjIxLjY4MiIgcj0iNi4yNjQiIGZpbGw9IiNFODg5REMiLz48Y2lyY2xlIGN4PSI4LjI2NCIgY3k9IjM3LjEiIHI9IjYuMjY0IiBmaWxsPSIjRTg4OURDIi8+PGNpcmNsZSBjeD0iMjYuNTczIiBjeT0iMTEuMDgyIiByPSI2LjI2NCIgZmlsbD0iI0VEQTNFNCIvPjxjaXJjbGUgY3g9IjI2LjU3MyIgY3k9IjI2LjUiIHI9IjYuMjY0IiBmaWxsPSIjRURBM0U0Ii8+PGNpcmNsZSBjeD0iMjYuNTczIiBjeT0iNDEuOTE4IiByPSI2LjI2NCIgZmlsbD0iI0VEQTNFNCIvPjxjaXJjbGUgY3g9IjQ0Ljg4MiIgY3k9IjE1Ljg5OSIgcj0iNi4yNjQiIGZpbGw9IiNGNUNCRUYiLz48Y2lyY2xlIGN4PSI0NC44ODIiIGN5PSIzMS4zMTciIHI9IjYuMjY0IiBmaWxsPSIjRjVDQkVGIi8+PGNpcmNsZSBjeD0iNDQuODgyIiBjeT0iNDYuNzM1IiByPSI2LjI2NCIgZmlsbD0iI0Y1Q0JFRiIvPjwvc3ZnPg=="
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
                For big teams
              </h2>
              <p
                style={{
                  marginLeft: "90px",
                  textAlign: "left",
                  color: "grey",
                  marginTop: "10px",
                }}
              >
                For growing teams that need robust and flexible solutions for
                time and project tracking
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyDrop;
