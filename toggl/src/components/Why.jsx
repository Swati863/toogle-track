import React from "react";
import style from "./why.module.css";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Container,
  Text,
  Stack,
  Link,
} from "@chakra-ui/react";
import { Image, Box } from "@chakra-ui/react";

function Why() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = React.useState("top");

  return (
    <>
      <Button
        colorScheme="white"
        color={"grey"}
        fontWeight={400}
        backgroundColor={"white"}
        onClick={onOpen}
      >
        Why Track ?
      </Button>
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody>
            {/* NAVBAR- THINGS */}
            <div className={style.main1_div}>
              <div className={style.left_div}>
                <div>
                  <a href="/">

                    <img
                      className={style.img1}
                      src="https://toggl.com/blog/wp-content/uploads/2020/09/toggl-track_logotype_horizontal_pink_rgb-e1599116263835.png"
                    />
                  </a>
                </div>
                <div>
                  <h3> Products </h3>
                </div>
                <div>
                  <h3> Pricing </h3>
                </div>
                <div>
                  <h3> Why Track ?</h3>
                </div>
                <div>
                  <h3> Careers</h3>
                </div>
              </div>

              {/* right div */}
              <div className={style.right_div}>
                <div>
                  <h3>

                    Book a demo <span> | </span>
                  </h3>
                </div>
                <div>
                  <h3> Log in </h3>
                </div>

                <div>
                  <button className={style.button_div}>Try for free</button>
                </div>
              </div>
            </div>

            {/* DROP-DOWN LIST ITEMS */}


            <div className={style.main2_div}>
              {/* 1st div  */}
              <div className={style.first_div}>
                <p>TIME TRACKING FOR EVERY TEAM SIZE</p>
              </div>

              {/* 2nd div */}
              <div className={style.second_div}>
                {/* 1st individual */}
                <div className={style.individual_div}>
                  <div>
                    <img
                      src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTQiIGhlaWdodD0iNTMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggdHJhbnNmb3JtPSJtYXRyaXgoLjcwMTQgLS43MTI3NyAuNzIxOSAuNjkyIDM5LjY0NiAxNC43NzEpIiBzdHJva2U9IiNFODg5REMiIHN0cm9rZS13aWR0aD0iMi4yMDgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZD0iTTEuMTA0LTEuMTA0aDYuNTM5Ii8+PHBhdGggdHJhbnNmb3JtPSJtYXRyaXgoLjk0MzIgLS4zMzIyNCAuMzQwMDUgLjk0MDQgMzkuNjQ2IDIwLjEzMykiIHN0cm9rZT0iI0RENkZEMSIgc3Ryb2tlLXdpZHRoPSIyLjIwOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNMS4xMDQtMS4xMDRoMTMuMDExIi8+PHBhdGggdHJhbnNmb3JtPSJtYXRyaXgoLS45MjUwNiAtLjM3OTgzIC4zODg0IC0uOTIxNDkgOS4xMyAxNS4yODUpIiBzdHJva2U9IiNFODg5REMiIHN0cm9rZS13aWR0aD0iMi4yMDgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZD0iTTEuMTA0LTEuMTA0aDYuNTgxIi8+PHBhdGggdHJhbnNmb3JtPSJtYXRyaXgoLS42NjM4IC0uNzQ3OTIgLjc1NjQ3IC0uNjU0MDIgMTQuMTggMTMuMzE1KSIgc3Ryb2tlPSIjREQ2RkQxIiBzdHJva2Utd2lkdGg9IjIuMjA4IiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik0xLjEwNC0xLjEwNGgxMi45MjEiLz48cGF0aCBkPSJNMzIuMDU1IDE0LjQzNmgtNy41MTJsLTE0LjAwNiAxMy42MyA2LjMzMiA2LjYgNi4wNjQtNS44NDhWNTJoOS4xMjJWMTQuNDM2eiIgZmlsbD0iIzQxMkE0QyIvPjwvc3ZnPg=="
                      alt="1"
                    />
                  </div>

                  <div className={style.individual_text_div}>
                   <a href="/Solo"> <h3>For freelancers and solo users</h3> </a>
                    <p>For solo entrepreneurs with a growing list of clients</p>
                  </div>
                </div>

                {/* 2st individual */}
                <div className={style.individual_div}>
                  <div>
                    <img
                      src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTMiIGhlaWdodD0iNTMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PG1hc2sgaWQ9ImEiIHN0eWxlPSJtYXNrLXR5cGU6YWxwaGEiIG1hc2tVbml0cz0idXNlclNwYWNlT25Vc2UiIHg9IjIiIHk9IjAiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MyI+PHBhdGggZmlsbD0iI0M0QzRDNCIgZD0iTTIgMGg0OS45MTN2NTNIMnoiLz48L21hc2s+PGcgbWFzaz0idXJsKCNhKSI+PGNpcmNsZSBjeD0iNDAuODQ5IiBjeT0iMzYuOTIyIiByPSIzLjY3MSIgZmlsbD0iI0VEQTNFNCIvPjxjaXJjbGUgY3g9IjQ2LjA5NCIgY3k9IjQ2LjM2MSIgcj0iMS41NzMiIGZpbGw9IiNFNTdDRDgiLz48Y2lyY2xlIGN4PSI4LjMzMyIgY3k9IjEwLjciIHI9IjQuNzIiIGZpbGw9IiM1NjQyNjAiLz48cGF0aCBkPSJtMTguOTkyIDE2LjYwNCA4LjIxNiAyLjk4NiAyMS42MzQgNy44NjRjMy4yMDYtNi4yNiA2LjExMi0yMC4wNTUtNy45MS0yNS4xNTEtMTQuMDItNS4wOTctMjAuNDY4IDcuNDEtMjEuOTQgMTQuMzAxeiIgZmlsbD0iIzY4MzcyRSIgc3Ryb2tlPSIjNjgzNzJFIiBzdHJva2Utd2lkdGg9Ii4zNjEiLz48Y2lyY2xlIGN4PSIzNi4wODQiIGN5PSIxNS40NTgiIHI9IjExLjQwMyIgdHJhbnNmb3JtPSJyb3RhdGUoMTkuOTc1IDM2LjA4NCAxNS40NTgpIiBmaWxsPSIjZmZmIi8+PHBhdGggZD0iTTMwLjI4NyAxNy43MjdjLjUyNyAyLjM3OSA0LjIgNi40OTkgOS4zNzUgMy4yMDgiIHN0cm9rZT0iI0ZGQUNBMiIgc3Ryb2tlLXdpZHRoPSIxLjMxMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBhdGggZD0iTTQ4LjU1IDE3LjI3MyAyNS44ODcgOS4wMzZsNC4wNjItNy4zNDYgOS4wODcuNzE3IDguMzM3IDQuNDIzIDEuMTc3IDEwLjQ0M3oiIGZpbGw9IiM2ODM3MkUiLz48Y2lyY2xlIGN4PSIxOC4yMTMiIGN5PSI0MC45MSIgcj0iMTEuNzY1IiB0cmFuc2Zvcm09InJvdGF0ZSgtMjAuMzY1IDE4LjIxMyA0MC45MSkiIGZpbGw9IiNmZmYiLz48cGF0aCBkPSJNMTUuMTcgNDYuNTY2YzIuMDAzIDEuNTE5IDcuNjQ0IDIuMzA1IDkuNTE2LTMuNzM5IiBzdHJva2U9IiNGRkFDQTIiIHN0cm9rZS13aWR0aD0iMS4yODgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwYXRoIGQ9Im0yOS40NTggMzYuNTctMy40NC0yLjg3N2EyLjQzIDIuNDMgMCAwIDAtLjMzNS0uNjA4Yy0uODgxLTEuMTcyLTIuNzU0LTEuNDM2LTQuMTY1LS40NTdhMjIuMTU0IDIyLjE1NCAwIDAgMS00LjMwOSAyLjM2N2MtMy41NTIgMS40NS02LjA4LjAzOS02Ljk4NC0uNjEtMi41MyAxLjMyNC0zLjgxNCA0LjEwMy0yLjkwNiA2LjU0OGwtLjM0IDMuOTgyLS42OC0xcy00LjY5LTYuMDY3LTMuODAzLTguNjAzYy44NzUtMi40OTYgMy4wODktMi4zNyAzLjA4OS0yLjM3UzIuMzIgMjcuNjUzIDguNzQgMjUuMzljNi40MDgtMi4yNTkgMTcuMTIzIDEuMjEyIDE4LjE3NiAyLjE4OCAxLjYzNyAxLjQ5MSAyLjU0IDguOTkzIDIuNTQgOC45OTN6IiBmaWxsPSIjNTY0MjYwIi8+PC9nPjwvc3ZnPg=="
                      alt="child"
                    />
                  </div>

                  <div className={style.individual_text_div}>
                     <a href="/Small"> <h3>For Small Teams</h3> </a>
                    <p>
                      For teams of less than 10 that need to track projects and
                      bill clients
                    </p>
                  </div>
                </div>

                {/* 3st individual */}
                <div className={style.individual_div}>
                  <div>
                    <img
                      src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTMiIGhlaWdodD0iNTMiIHZpZXdCb3g9IjAgMCA1MyA1MyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iOC4yNjM2NCIgY3k9IjYuMjYzNjQiIHI9IjYuMjYzNjQiIGZpbGw9IiNFODg5REMiLz4KPGNpcmNsZSBjeD0iOC4yNjM2NCIgY3k9IjIxLjY4MTYiIHI9IjYuMjYzNjQiIGZpbGw9IiNFODg5REMiLz4KPGNpcmNsZSBjeD0iOC4yNjM2NCIgY3k9IjM3LjA5OTYiIHI9IjYuMjYzNjQiIGZpbGw9IiNFODg5REMiLz4KPGNpcmNsZSBjeD0iMjYuNTcyNyIgY3k9IjExLjA4MiIgcj0iNi4yNjM2NCIgZmlsbD0iI0VEQTNFNCIvPgo8Y2lyY2xlIGN4PSIyNi41NzI3IiBjeT0iMjYuNSIgcj0iNi4yNjM2NCIgZmlsbD0iI0VEQTNFNCIvPgo8Y2lyY2xlIGN4PSIyNi41NzI3IiBjeT0iNDEuOTE3OSIgcj0iNi4yNjM2NCIgZmlsbD0iI0VEQTNFNCIvPgo8Y2lyY2xlIGN4PSI0NC44ODE4IiBjeT0iMTUuODk5NCIgcj0iNi4yNjM2NCIgZmlsbD0iI0Y1Q0JFRiIvPgo8Y2lyY2xlIGN4PSI0NC44ODE4IiBjeT0iMzEuMzE3MyIgcj0iNi4yNjM2NCIgZmlsbD0iI0Y1Q0JFRiIvPgo8Y2lyY2xlIGN4PSI0NC44ODE4IiBjeT0iNDYuNzM1MyIgcj0iNi4yNjM2NCIgZmlsbD0iI0Y1Q0JFRiIvPgo8L3N2Zz4K"
                      alt="big"
                    />
                  </div>

                  <div className={style.individual_text_div}>
                  <a href="/Big"> <h3>For big teams</h3></a>
                    <p>
                      For growing teams that need robust and flexible solutions
                      for time and project tracking
                    </p>
                  </div>
                </div>
              </div>

              {/* 3rd div */}
              <div className={style.third_div}>
                <p className={style.track}>
                  Track has helped teams across multiple industries
                  profitability and productivity,shaving hours off admin.Explore
                  case studies
                </p>
              </div>
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Why;
