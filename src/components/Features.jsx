import React, { useRef, useState } from "react";
import { FaGoogle, FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { GoMail } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../Context/userContext";
import Footer from "./Footer/Footer";

function Features() {
  //   const { screen } = useScreenWidth();
  const { signInWithGoogle } = useUserContext();
  const redirect = useNavigate()

  return (
    <div>
      <div>
        <div
          style={{
            padding: "3rem",
            backgroundImage:
              "url(" +
              "https://public-assets.toggl.com/b/static/b32695b8d72a3ad4a9acc8fa09e92b28/6f15e/hero-icecream.avif" +
              ")",
            color: "snow",
            // border: "1px solid red",
            height: "500px",

            filter: "brightness(90%)",
            // filterBackground: "brightness(20%)",
          }}
        >
          <h1
            style={{
              fontSize: "4rem",
              fontWeight: "600",
              marginBottom: "2rem",
              lineHeight: "3rem",
              filter: "brightness(100%)",
              marginTop: "7rem",
            }}
          >
            Everything you need in <br />
            <br /> <em style={{ color: "hotpink" }}>one</em> package
          </h1>
        </div>
        <div
          style={{
            padding: "3rem",
            backgroundColor: "#2c1438",
            color: "#2c1438",
          }}
        >
          <div style={{ display: "flex", justifyContent: "center" }}>
            <h1
              style={{
                fontSize: "3rem",
                fontWeight: "bold",
                marginBottom: "2rem",
                lineHeight: "3rem",
                width: "70%",
                textAlign: "center",
              }}
            >
              <h2 style={{ color: "hotpink" }}> Time Tracking</h2> <br />
              <p
                style={{
                  fontSize: "2rem",
                  fontWeight: "400",
                  marginBottom: "2rem",
                  lineHeight: "3rem",
                  width: "70%",
                  textAlign: "center",
                  color: "white",
                  marginLeft: "170px",
                }}
              >
                There's more than one way to track time
              </p>
            </h1>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1rem",
              marginBottom: "2rem",
            }}
          >
            <div
              style={{ padding: "3rem", width: "550px", marginLeft: "150px" }}
            >
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <img
                  src="https://public-assets.toggl.space/58c88da8-9f59-4fb5-ae83-1ebcfa063516/static/8500be9b3ef28cfb9293446ddd6f28a3/feature-timers.png"
                  alt="img"
                />
              </div>

              <p
                style={{
                  fontWeight: "500",
                  color: "hotpink",
                  textAlign: "left",
                  marginTop: "2rem",
                  marginBottom: "1rem",
                  fontSize: "25px",
                }}
              >
                One-Click Timers
              </p>
              <p
                style={{
                  textDecoration: "none",
                  color: "white",
                  textAlign: "left",
                }}
              >
                Track time across the web app, desktop app, mobile app, or
                browser extension - with one click! All your entries will sync
                automatically.
              </p>
            </div>
            <div
              style={{ padding: "3rem", width: "550px", marginTop: "150px" }}
            >
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <img
                  src="https://public-assets.toggl.space/58c88da8-9f59-4fb5-ae83-1ebcfa063516/static/dc16bcc802fe68318016e002083b47d0/feature-timeline.png"
                  alt="img"
                />
              </div>

              <p
                style={{
                  fontWeight: "bold",
                  color: "hotpink",
                  textAlign: "left",
                  marginTop: "2rem",
                  marginBottom: "1rem",
                  fontSize: "25px",
                }}
              >
                Background Tracking
              </p>
              <p
                style={{
                  textDecoration: "none",
                  color: "white",
                  textAlign: "left",
                }}
              >
                Auto-track every application or website you use for more than 10
                seconds with our Timeline feature - then turn that data into
                time entries.
              </p>
            </div>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1rem",
              marginBottom: "2rem",
            }}
          >
            <div
              style={{ padding: "3rem", width: "550px", marginLeft: "150px" }}
            >
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <img
                  src="https://public-assets.toggl.space/58c88da8-9f59-4fb5-ae83-1ebcfa063516/static/bc5611683afd9f23db67c223c02f15e5/feature-cal-integration.png"
                  alt="img"
                />
              </div>

              <p
                style={{
                  fontWeight: "500",
                  color: "hotpink",
                  textAlign: "left",
                  marginTop: "2rem",
                  marginBottom: "1rem",
                  fontSize: "25px",
                }}
              >
                Calendar Integrations
              </p>
              <p
                style={{
                  textDecoration: "none",
                  color: "white",
                  textAlign: "left",
                }}
              >
                Integrate your Outlook or Google Calendar into Toggl Track's
                Calendar view and create or start time entries based on calendar
                events. Available for our web and mobile apps.
              </p>
            </div>
            <div
              style={{ padding: "3rem", width: "550px", marginTop: "150px" }}
            >
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <img
                  src="https://public-assets.toggl.space/58c88da8-9f59-4fb5-ae83-1ebcfa063516/static/3564bf4f714c41ebf64c711e2532c2e3/feature-autotracker.png"
                  alt="img"
                />
              </div>

              <p
                style={{
                  fontWeight: "bold",
                  color: "hotpink",
                  textAlign: "left",
                  marginTop: "2rem",
                  marginBottom: "1rem",
                  fontSize: "25px",
                }}
              >
                Autotracker
              </p>
              <p
                style={{
                  textDecoration: "none",
                  color: "white",
                  textAlign: "left",
                }}
              >
                For the forgetful among us, set up Toggl Track to trigger time
                entry suggestions based on the software you're currently using.
              </p>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1rem",
              marginBottom: "2rem",
            }}
          >
            <div
              style={{ padding: "3rem", width: "550px", marginLeft: "150px" }}
            >
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <img
                  src="https://public-assets.toggl.space/58c88da8-9f59-4fb5-ae83-1ebcfa063516/static/d4ecf8623e191207b4aef924be6f8d3b/feature-favorites.png"
                  alt="img"
                />
              </div>

              <p
                style={{
                  fontWeight: "500",
                  color: "hotpink",
                  textAlign: "left",
                  marginTop: "2rem",
                  marginBottom: "1rem",
                  fontSize: "25px",
                }}
              >
                Favorite time entries
              </p>
              <p
                style={{
                  textDecoration: "none",
                  color: "white",
                  textAlign: "left",
                }}
              >
                Pin your most frequently-used time entries to the top of your
                Timer page for easy access. Currently available for the web app,
                coming soon to other platforms.
              </p>
            </div>
            <div
              style={{ padding: "3rem", width: "550px", marginTop: "150px" }}
            >
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <img
                  src="https://public-assets.toggl.space/58c88da8-9f59-4fb5-ae83-1ebcfa063516/static/81089530d0f94f64ea34371d82de77ce/feature-jira.png"
                  alt="img"
                />
              </div>

              <p
                style={{
                  fontWeight: "bold",
                  color: "hotpink",
                  textAlign: "left",
                  marginTop: "2rem",
                  marginBottom: "1rem",
                  fontSize: "25px",
                }}
              >
                Jira Sync
              </p>
              <p
                style={{
                  textDecoration: "none",
                  color: "white",
                  textAlign: "left",
                }}
              >
                Enter your information once, into Jira. Jira Sync will ensure
                that your Toggl Track Workspace is synced up to your Jira data
                so you can start tracking time right away—with up-to-date Jira
                data.
              </p>
            </div>
          </div>
        </div>

        {/* app integration */}
        <div
          style={{
            padding: "3rem",
            backgroundColor: "#2c1438",
            color: "#2c1438",
            // border: "1px solid red",
            zIndex: "1",
            height: "870px",
          }}
        >
          <div
            style={{
              backgroundColor: "#FCE5D8",
              color: "#2c1438",
              //   border: "1px solid blue",
              height: "600px",
              width: "1520px",
              marginTop: "86px",
              zIndex: "0",
              marginLeft: "-50px",
              //   transform: "rotateY(0deg) rotate(10deg)",
              transform: "skewY(10deg)",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1rem",
            }}
          >
            <div
              style={{
                transform: "skewY(-10deg)",
                marginTop: "5rem",
                width: "80%",
                textAlign: "left",
                marginLeft: "10rem",

                // border: "1px solid red",
              }}
            >
              <h1
                style={{
                  fontWeight: "500",
                  fontSize: "50px",

                  // border: "1px solid red",
                }}
              >
                Over 100+ App Integrations
              </h1>
              <br />
              <br />

              <p
                style={{
                  fontWeight: "400",
                  fontSize: "20px",

                  // border: "1px solid red",
                }}
              >
                Toggl Track's browser extensions allow you to start the timer
                directly from online tools like Asana, Todoist, Trello and more.
                With features like the Pomodoro Timer, idle detection, and
                tracking reminders, it’s the ultimate tool to help you stay
                focused on work.
              </p>
              <p
                style={{
                  fontWeight: "400",
                  fontSize: "20px",
                  marginTop: "20px",
                  marginBottom: "30px",
                  // border: "1px solid red",
                }}
              >
                Currently available on{" "}
                <em style={{ color: "hotpink" }}>Chrome</em> and
                <em style={{ color: "hotpink" }}> Firefox</em>.
              </p>
              <button
                style={{
                  padding: "0.75rem 1.5rem",
                  color: "snow",
                  backgroundColor: "#2c1438",
                  borderRadius: "25px",
                }}
              >
                See all integrations
              </button>
            </div>
            <div
              style={
                {
                  // border: "1px solid blue",
                }
              }
            >
              <img
                style={{
                  height: "650px",
                  width: "55%",
                  transform: "skewY(-10deg)",
                  marginLeft: "130px",
                }}
                src="https://public-assets.toggl.com/b/static/integrations-desktop-157a92c40e917125dc69d3ba8e043165.png"
                alt=""
              />
            </div>
          </div>
        </div>

        {/* Reporting */}
        <div
          style={{
            padding: "3rem",
            backgroundColor: "#2c1438",
            color: "#2c1438",
          }}
        >
          <div style={{ display: "flex", justifyContent: "center" }}>
            <h1
              style={{
                fontSize: "3rem",
                fontWeight: "bold",
                marginBottom: "2rem",
                lineHeight: "3rem",
                width: "70%",
                textAlign: "center",
              }}
            >
              <h2 style={{ color: "hotpink" }}> Reporting</h2> <br />
              <p
                style={{
                  fontSize: "2rem",
                  fontWeight: "400",
                  marginBottom: "2rem",
                  lineHeight: "3rem",
                  width: "70%",
                  textAlign: "center",
                  color: "white",
                  marginLeft: "170px",
                }}
              >
                Powerful reporting to reveal actionable insights
              </p>
            </h1>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1rem",
              marginBottom: "2rem",
            }}
          >
            <div
              style={{ padding: "3rem", width: "550px", marginLeft: "150px" }}
            >
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <img
                  src="https://public-assets.toggl.space/58c88da8-9f59-4fb5-ae83-1ebcfa063516/static/3c080da045d0117b821dc255d1677d6c/feature-time-reports.png"
                  alt="img"
                />
              </div>

              <p
                style={{
                  fontWeight: "500",
                  color: "hotpink",
                  textAlign: "left",
                  marginTop: "2rem",
                  marginBottom: "1rem",
                  fontSize: "25px",
                }}
              >
                Summary, Detailed, & Weekly Reports
              </p>
              <p
                style={{
                  textDecoration: "none",
                  color: "white",
                  textAlign: "left",
                }}
              >
                Select the level of detail you want to see, filter and sort your
                data, and create simple, client-ready visuals and reports via
                CSV or PDF.
              </p>
            </div>
            <div
              style={{ padding: "3rem", width: "550px", marginTop: "150px" }}
            >
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <img
                  src="https://public-assets.toggl.space/58c88da8-9f59-4fb5-ae83-1ebcfa063516/static/a1fc813547f41e7e031c968be460fea8/feature-saved-reports.png"
                  alt="img"
                />
              </div>

              <p
                style={{
                  fontWeight: "bold",
                  color: "hotpink",
                  textAlign: "left",
                  marginTop: "2rem",
                  marginBottom: "1rem",
                  fontSize: "25px",
                }}
              >
                Saved Reports
              </p>
              <p
                style={{
                  textDecoration: "none",
                  color: "white",
                  textAlign: "left",
                }}
              >
                Set up your preferred reports with specified filters and date
                ranges. Share the saved report link with your clients so they
                can view them online.
              </p>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1rem",
              marginBottom: "2rem",
            }}
          >
            <div
              style={{ padding: "3rem", width: "550px", marginLeft: "150px" }}
            >
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <img
                  src="https://public-assets.toggl.space/58c88da8-9f59-4fb5-ae83-1ebcfa063516/static/383198f0c0874c4c07d5731a3aa79881/feature-email-reports.png"
                  alt="img"
                />
              </div>

              <p
                style={{
                  fontWeight: "500",
                  color: "hotpink",
                  textAlign: "left",
                  marginTop: "2rem",
                  marginBottom: "1rem",
                  fontSize: "25px",
                }}
              >
                Schedule Reports to Email
              </p>
              <p
                style={{
                  textDecoration: "none",
                  color: "white",
                  textAlign: "left",
                }}
              >
                Schedule your favorite reports to regularly arrive in your inbox
                so you’ll always stay up to date without the need to log into
                Toggl.
              </p>
            </div>
            <div
              style={{ padding: "3rem", width: "550px", marginTop: "150px" }}
            >
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <img
                  src="https://public-assets.toggl.space/58c88da8-9f59-4fb5-ae83-1ebcfa063516/static/205ee8a7c7013e2c60ffa661cd251780/feature-rounding.png"
                  alt="img"
                />
              </div>

              <p
                style={{
                  fontWeight: "bold",
                  color: "hotpink",
                  textAlign: "left",
                  marginTop: "2rem",
                  marginBottom: "1rem",
                  fontSize: "25px",
                }}
              >
                Time Rounding
              </p>
              <p
                style={{
                  textDecoration: "none",
                  color: "white",
                  textAlign: "left",
                }}
              >
                Whether you track seconds, minutes, or 6-minute increments,
                automatically round time entries up or down to the nearest
                interval of your choice.
              </p>
            </div>
          </div>
        </div>

        {/* team Schedule */}
        <div
          style={{
            padding: "3rem",
            backgroundColor: "#2c1438",
            color: "#2c1438",
          }}
        >
          <div style={{ display: "flex", justifyContent: "center" }}>
            <h1
              style={{
                fontSize: "3rem",
                fontWeight: "bold",
                marginBottom: "2rem",
                lineHeight: "3rem",
                width: "70%",
                textAlign: "center",
              }}
            >
              <h2 style={{ color: "hotpink" }}>
                {" "}
                Team Scheduling & Management
              </h2>{" "}
              <br />
              <p
                style={{
                  fontSize: "2rem",
                  fontWeight: "400",
                  marginBottom: "2rem",
                  lineHeight: "3rem",
                  width: "70%",
                  textAlign: "center",
                  color: "white",
                  marginLeft: "170px",
                }}
              >
                When everyone’s on the same page, it’s magic!
              </p>
            </h1>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1rem",
              marginBottom: "2rem",
            }}
          >
            <div
              style={{ padding: "3rem", width: "550px", marginLeft: "150px" }}
            >
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <img
                  src="https://public-assets.toggl.space/58c88da8-9f59-4fb5-ae83-1ebcfa063516/static/780df679661aefbf3e7038f36d982e14/feature-team-activity.png"
                  alt="img"
                />
              </div>

              <p
                style={{
                  fontWeight: "500",
                  color: "hotpink",
                  textAlign: "left",
                  marginTop: "2rem",
                  marginBottom: "1rem",
                  fontSize: "25px",
                }}
              >
                Team Dashboard
              </p>
              <p
                style={{
                  textDecoration: "none",
                  color: "white",
                  textAlign: "left",
                }}
              >
                Check in on your team, so you can see who is over capacity and
                who might be able to lend a hand.
              </p>
            </div>
            <div
              style={{ padding: "3rem", width: "550px", marginTop: "150px" }}
            >
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <img
                  src="https://public-assets.toggl.space/58c88da8-9f59-4fb5-ae83-1ebcfa063516/static/fbfb7112c78af47d3182a4f94504b0df/feature-tracking-reminders.png"
                  alt="img"
                />
              </div>

              <p
                style={{
                  fontWeight: "bold",
                  color: "hotpink",
                  textAlign: "left",
                  marginTop: "2rem",
                  marginBottom: "1rem",
                  fontSize: "25px",
                }}
              >
                Email Tracking Reminders
              </p>
              <p
                style={{
                  textDecoration: "none",
                  color: "white",
                  textAlign: "left",
                }}
              >
                Automate email reminders to gently nudge team members who
                haven't tracked their target number of hours.
              </p>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1rem",
              marginBottom: "2rem",
            }}
          >
            <div
              style={{ padding: "3rem", width: "550px", marginLeft: "150px" }}
            >
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <img
                  src="https://public-assets.toggl.space/58c88da8-9f59-4fb5-ae83-1ebcfa063516/static/8460ac6c46a2667068fe9c093241439a/feature-required.png"
                  alt="img"
                />
              </div>

              <p
                style={{
                  fontWeight: "500",
                  color: "hotpink",
                  textAlign: "left",
                  marginTop: "2rem",
                  marginBottom: "1rem",
                  fontSize: "25px",
                }}
              >
                Required Fields
              </p>
              <p
                style={{
                  textDecoration: "none",
                  color: "white",
                  textAlign: "left",
                }}
              >
                Say goodbye to manual auditing! Set required fields to ensure
                your team fills in all the information you need for accurate
                reporting.
              </p>
            </div>
            <div
              style={{ padding: "3rem", width: "550px", marginTop: "150px" }}
            >
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <img
                  src="https://public-assets.toggl.space/58c88da8-9f59-4fb5-ae83-1ebcfa063516/static/4c1a6ba95e1c276c88add60359d47a63/feature-audits.png"
                  alt="img"
                />
              </div>

              <p
                style={{
                  fontWeight: "bold",
                  color: "hotpink",
                  textAlign: "left",
                  marginTop: "2rem",
                  marginBottom: "1rem",
                  fontSize: "25px",
                }}
              >
                Time Audits
              </p>
              <p
                style={{
                  textDecoration: "none",
                  color: "white",
                  textAlign: "left",
                }}
              >
                Quickly find time entries that have not been assigned to a
                project or task, or that seem too short or too long.
              </p>
            </div>
          </div>
        </div>

        <div
          style={{ color: "snow", padding: "3rem", backgroundColor: "#422a4c" }}
        >
          <div style={{ marginBottom: "2rem" }}>
            <h1 style={{ fontSize: "3rem", textAlign: "center" }}>
              Let us help you get on{" "}
              <em style={{ color: "hotpink", textAlign: "center" }}>Track</em>?
            </h1>
          </div>

          <div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                padding: "2rem 5rem",
              }}
            >
              <div>
                <div
                  style={{
                    backgroundColor: "#2c1438",
                    color: "#fce4d8",
                    padding: "3rem",
                    width: "90%",
                    height: "550px",
                    position: "relative",
                    fontSize: "1.2rem",
                    marginLeft: "150px",
                  }}
                >
                  <h1
                    style={{
                      fontSize: "2.1rem",
                      fontWeight: "bold",
                      marginBottom: "2rem",
                    }}
                  >
                    Sign up for free
                  </h1>
                  <p style={{ textAlign: "left", fontSize: "16px" }}>
                    All plans come with a free, 30-day trial of Toggl Track
                    Premium—no credit card required. Upgrade at the end of the
                    trial or continue using Track for free.
                  </p>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      alignItems: "center",
                      gap: "1.5rem",

                    }}
                  >
                    <button
                      onClick={signInWithGoogle}
                      style={{
                        display: "flex",
                        padding: "0.75rem 1.5rem",
                        color: "black",
                        backgroundColor: "snow",
                        borderRadius: "25px",
                        margin: "1rem 0",
                        alignItems: "center",
                        width: "110%",

                      }}
                    >
                      <span>
                        <FcGoogle
                          style={{ fontSize: "1.3rem", marginRight: "0.5rem" }}
                        />
                      </span>{" "}
                      <span style={{ fontSize: "1rem" }}>
                        Sign up via Google
                      </span>
                    </button>
                    <button
                      onClick={signInWithGoogle}
                      style={{
                        display: "flex",
                        padding: "0.75rem 1.5rem",
                        color: "black",
                        backgroundColor: "snow",
                        borderRadius: "25px",
                        margin: "1rem 0",
                        alignItems: "center",
                        width: "110%",
                      }}
                    >
                      <span>
                        <FaApple
                          style={{ fontSize: "1.3rem", marginRight: "0.5rem" }}
                        />
                      </span>{" "}
                      <span style={{ fontSize: "1rem" }}>
                        Sign up via Apple
                      </span>
                    </button>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginBottom: "2rem",
                    }}
                  >
                    <button
                      onClick={() => redirect("/signup")}
                      style={{
                        display: "flex",
                        padding: "0.75rem 1.5rem",
                        color: "black",
                        backgroundColor: "snow",
                        borderRadius: "25px",
                        margin: "1rem",
                        alignItems: "center",
                        width: "100%",
                        justifyContent: "center",
                      }}
                    >
                      <span>
                        <GoMail
                          style={{ fontSize: "1.3rem", marginRight: "1.5rem" }}
                        />
                      </span>{" "}
                      <span>or sign up via email</span>
                    </button>
                  </div>
                  <p style={{ fontSize: "14px" }}>
                    By signing up, you agree to our{" "}
                    <em
                      style={{ color: "hotpink", textDecoration: "underline" }}
                    >
                      terms of service
                    </em>
                    ,{" "}
                    <em
                      style={{ color: "hotpink", textDecoration: "underline" }}
                    >
                      privacy policy
                    </em>{" "}
                    and to{" "}
                    <em
                      style={{ color: "hotpink", textDecoration: "underline" }}
                    >
                      receiving
                    </em>{" "}
                    marketing communication from Toggl Track. You can opt out
                    anytime.
                  </p>
                </div>
              </div>
              <div>
                <div
                  style={{
                    backgroundColor: "#fce4d8",
                    color: "#2c1438",
                    padding: "3rem",
                    paddingLeft: "6rem",
                    fontSize: "1.2rem",
                    marginTop: "17rem",
                    zIndex: "1",
                    marginLeft: "40px",
                    textAlign: "left",
                  }}
                >
                  <h2
                    style={{
                      fontSize: "2rem",
                      fontWeight: "600",
                      marginBottom: "2rem",
                      width: "80%",
                    }}
                  >
                    Prefer a product demo instead?
                  </h2>
                  <p style={{ marginBottom: "2rem" }}>
                    Request a 30-minute personalized demo to see how Toggl Track
                    can meet your time tracking goals
                  </p>
                  <button
                    style={{
                      padding: "0.75rem 1.5rem",
                      color: "snow",
                      backgroundColor: "#e67dd8",
                      borderRadius: "25px",
                    }}
                  >
                    Book a demo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Features;
