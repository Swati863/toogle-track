import { Box, Text, Button } from "@chakra-ui/react";
import React from "react";
import { Table, Thead, Tbody, Tr, Td, TableContainer } from "@chakra-ui/react";
import { BsCheckLg } from "react-icons/bs";

const PlanComparison = () => {
  return (
    <Box w={{ lg: "80%" }} m="auto" textAlign={"center"}>
      <Text
        fontSize={{ lg: "44.99px", md: "35px", base: "25px" }}
        mt={{ lg: "70px", base: "50px", md: "70px" }}
        mb={{ lg: "40px", md: "40px", base: "30px" }}
      >
        Full Plan Comparison
      </Text>

      <Box>
        <TableContainer border={"1px solid white"}>
          <Table size="sm" bg="#fff3ed">
            <Thead>
              <Tr>
                <Td border={"1px solid #bcb8b1"}></Td>
                <Td
                  border={"1px solid #bcb8b1"}
                  fontWeight={{ lg: "bold" }}
                  textAlign="center"
                >
                  <Text
                    fontSize={{ lg: "19.2px" }}
                    m={{ lg: "8px" }}
                    color="#2c1338"
                  >
                    Free
                  </Text>
                  <Button
                    bg="black"
                    color={"white"}
                    m={{ lg: "4px" }}
                    w={{ lg: "150px" }}
                  >
                    Get started
                  </Button>
                </Td>

                <Td
                  border={"1px solid #bcb8b1"}
                  textAlign="center"
                  fontWeight={{ lg: "bold" }}
                >
                  <Text
                    fontSize={{ lg: "19.2px" }}
                    color="#2c1338"
                    m={{ lg: "8px" }}
                  >
                    Starter
                  </Text>
                  <Button bg="black" color={"white"} m={{ lg: "8px" }}>
                    Get started
                  </Button>
                </Td>

                <Td
                  border={"1px solid #bcb8b1"}
                  textAlign="center"
                  bg="#fce5d8"
                  fontWeight={{ lg: "bold" }}
                >
                  <Text
                    fontSize={{ lg: "19.2px" }}
                    color="#2c1338"
                    m={{ lg: "8px" }}
                  >
                    Premium
                  </Text>
                  <Button bg="#e57cd8" color={"white"} m={{ lg: "8px" }}>
                    Get started
                  </Button>
                </Td>
                <Td
                  border={"1px solid #bcb8b1"}
                  textAlign="center"
                  fontWeight={{ lg: "bold" }}
                >
                  <Text
                    fontSize={{ lg: "19.2px" }}
                    color="#2c1338"
                    m={{ lg: "8px" }}
                  >
                    Enterprise
                  </Text>
                  <Button bg="black" color={"white"} m={{ lg: "8px" }}>
                    Get started
                  </Button>
                </Td>
              </Tr>
            </Thead>
            <Tbody>
              <Tr bg="#564260">
                <Td fontSize={{ lg: "20px" }} p={{ lg: "20px" }}>
                  Time Tracking
                </Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
              </Tr>
              <Tr color={"black"}>
                <Td border={"1px solid #bcb8b1"} p={{ lg: "20px" }}>
                  Web app, mobile apps, and desktop apps
                </Td>
                <Td border={"1px solid #bcb8b1"}>
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
                <Td border={"1px solid #bcb8b1"}>
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
                <Td border={"1px solid #bcb8b1"} color="#e57cd8">
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
                <Td border={"1px solid #bcb8b1"}>
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
              </Tr>
              <Tr color={"black"}>
                <Td border={"1px solid #bcb8b1"} p={{ lg: "20px" }}>
                  Pomodoro timer
                </Td>
                <Td border={"1px solid #bcb8b1"}>
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
                <Td border={"1px solid #bcb8b1"}>
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
                <Td border={"1px solid #bcb8b1"} color="#e57cd8">
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
                <Td border={"1px solid #bcb8b1"}>
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
              </Tr>
              <Tr color={"black"}>
                <Td border={"1px solid #bcb8b1"} p={{ lg: "20px" }}>
                  Idle time detection
                </Td>
                <Td border={"1px solid #bcb8b1"}>
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
                <Td border={"1px solid #bcb8b1"}>
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
                <Td border={"1px solid #bcb8b1"} color="#e57cd8">
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
                <Td border={"1px solid #bcb8b1"}>
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
              </Tr>
              <Tr color={"black"}>
                <Td border={"1px solid #bcb8b1"} p={{ lg: "20px" }}>
                  Personal time tracking reminders
                </Td>
                <Td border={"1px solid #bcb8b1"}>
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
                <Td border={"1px solid #bcb8b1"}>
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
                <Td border={"1px solid #bcb8b1"} color="#e57cd8">
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
                <Td border={"1px solid #bcb8b1"}>
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
              </Tr>
              <Tr color={"black"}>
                <Td border={"1px solid #bcb8b1"} p={{ lg: "20px" }}>
                  Automated time tracking triggers
                </Td>
                <Td border={"1px solid #bcb8b1"}>
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
                <Td border={"1px solid #bcb8b1"}>
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
                <Td border={"1px solid #bcb8b1"} color="#e57cd8">
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
                <Td border={"1px solid #bcb8b1"}>
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
              </Tr>
              <Tr color={"black"}>
                <Td border={"1px solid #bcb8b1"} p={{ lg: "20px" }}>
                  Personal desktop activity tracking
                </Td>
                <Td border={"1px solid #bcb8b1"}>
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
                <Td border={"1px solid #bcb8b1"}>
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
                <Td border={"1px solid #bcb8b1"} color="#e57cd8">
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
                <Td border={"1px solid #bcb8b1"}>
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
              </Tr>
              <Tr color={"black"}>
                <Td border={"1px solid #bcb8b1"} p={{ lg: "20px" }}>
                  Favorite time entries
                </Td>
                <Td border={"1px solid #bcb8b1"}> </Td>
                <Td border={"1px solid #bcb8b1"}>
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
                <Td border={"1px solid #bcb8b1"} color="#e57cd8">
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
                <Td border={"1px solid #bcb8b1"}>
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
              </Tr>

              {/* Time tracking */}

              <Tr bg="#564260">
                <Td fontSize={{ lg: "20px" }} p={{ lg: "20px" }}>
                  Team Management
                </Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
              </Tr>
              <Tr color={"black"}>
                <Td border={"1px solid #bcb8b1"} p={{ lg: "20px" }}>
                  Overview of team activity
                </Td>
                <Td border={"1px solid #bcb8b1"}>
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
                <Td border={"1px solid #bcb8b1"}>
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
                <Td border={"1px solid #bcb8b1"} color="#e57cd8">
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
                <Td border={"1px solid #bcb8b1"}>
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
              </Tr>
              <Tr color={"black"}>
                <Td border={"1px solid #bcb8b1"} p={{ lg: "20px" }}>
                  User groups
                </Td>
                <Td border={"1px solid #bcb8b1"}>
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
                <Td border={"1px solid #bcb8b1"}>
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
                <Td border={"1px solid #bcb8b1"} color="#e57cd8">
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
                <Td border={"1px solid #bcb8b1"}>
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
              </Tr>
              <Tr color={"black"}>
                <Td border={"1px solid #bcb8b1"} p={{ lg: "20px" }}>
                  Team access level management
                </Td>
                <Td border={"1px solid #bcb8b1"}>
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
                <Td border={"1px solid #bcb8b1"}>
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
                <Td border={"1px solid #bcb8b1"} color="#e57cd8">
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
                <Td border={"1px solid #bcb8b1"}>
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
              </Tr>
              <Tr color={"black"}>
                <Td border={"1px solid #bcb8b1"} p={{ lg: "20px" }}>
                  Team time tracking reminder emails
                </Td>
                <Td border={"1px solid #bcb8b1"}> </Td>
                <Td border={"1px solid #bcb8b1"}></Td>
                <Td border={"1px solid #bcb8b1"} color="#e57cd8">
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
                <Td border={"1px solid #bcb8b1"}>
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
              </Tr>
              <Tr color={"black"}>
                <Td border={"1px solid #bcb8b1"} p={{ lg: "20px" }}>
                  Add time for team members
                </Td>
                <Td border={"1px solid #bcb8b1"}> </Td>
                <Td border={"1px solid #bcb8b1"}> </Td>
                <Td border={"1px solid #bcb8b1"} color="#e57cd8">
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
                <Td border={"1px solid #bcb8b1"}>
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
              </Tr>
              <Tr color={"black"}>
                <Td border={"1px solid #bcb8b1"} p={{ lg: "20px" }}>
                  Manage team member billable rates and labor costs
                </Td>
                <Td border={"1px solid #bcb8b1"}> </Td>
                <Td border={"1px solid #bcb8b1"}> </Td>
                <Td border={"1px solid #bcb8b1"} color="#e57cd8">
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
                <Td border={"1px solid #bcb8b1"}>
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
              </Tr>
              <Tr color={"black"}>
                <Td border={"1px solid #bcb8b1"} p={{ lg: "20px" }}>
                  Single Sign-On (SSO)
                </Td>
                <Td border={"1px solid #bcb8b1"}> </Td>
                <Td border={"1px solid #bcb8b1"}> </Td>
                <Td border={"1px solid #bcb8b1"} color="#e57cd8">
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
                <Td border={"1px solid #bcb8b1"}>
                  {" "}
                  <Box ml={{ lg: "90px" }} fontSize={{ lg: "20px" }}>
                    {" "}
                    <BsCheckLg />
                  </Box>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default PlanComparison;
