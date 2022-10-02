import React from "react";
import style from "./solo.module.css";
import {
  Box,
  Container,
  SimpleGrid,
  Text,
  Button,
  Stack,
  Heading,
  Center,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";

const Solo = () => {
  return (
    <div className={style.sw_main_div}>
      {/* 1st pic div */}

      <SimpleGrid columns={2} spacing={0} backgroundColor=" rgb(44,19,56)" >
        <Box margin={"10"}
          fontFamily="sans-serif"
          fontWeight="600"
          fontSize="65px"
          lineHeight="71px"
          color="#fff3ed"
          display="block"
          width="80%"
        >
          <Heading> Accurate, Beautiful Time Tracking. It's Simple.</Heading>


          <Text
            margin="30px"
            fontFamily="sans-serif"
            fontWeight="400"
            fontSize="18px"
            lineHeight="27px"
            color="#fff3ed"
          >
            Toggl Track is here to save your time—so you can spend it where you
            want to. That’s our singular focus.
          </Text>
          <Button
            margin="20px"
            fontSize="16px"
            background=" rgb(229,124,216)"
            color="white"
            padding="20px 25px 20px 25px"
            borderRadius="30px"
            border={"none"}
          >
            Sign up for free
          </Button>
        </Box>
        <Box
          width="100%"
          backgroundImage="https://public-assets.toggl.space/58c88da8-9f59-4fb5-ae83-1ebcfa063516/static/8d06ace628e1cadfc31838320c477118/0fc98/hero-freelancers.avif"
        >
          {/* <Image align="objectFit" width="800px" htmlHeight ="800px" src='https://public-assets.toggl.space/58c88da8-9f59-4fb5-ae83-1ebcfa063516/static/8d06ace628e1cadfc31838320c477118/0fc98/hero-freelancers.avif' alt='laptop' /> */}
        </Box>
      </SimpleGrid>

      {/* 2nd text div */}
      <Box>
        <Box alignItems="center" m="auto" marginTop={"100"} w="70%">
          <Text
            alignItems="center"
            fontFamily="sans-serif"
            fontWeight="600"
            fontSize="46px"
            lineHeight="58px"
            color="#2c1338"
          >
            With beautiful reports and easy customization, you'll never lose a
            minute of your <i> creative time </i>
          </Text>

          <Text
            alignItems="center"
            p="20px 40px 5px 40px"
            fontFamily="sans-serif"
            fontWeight="400"
            fontSize="18px"
            lineHeight="27px"
            color="#2c1338"
          >
            We know that when you work as a team of one, every moment is
            mission-critical.
          </Text>
          <Text
            alignItems="center"
            fontFamily="sans-serif"
            fontWeight="400"
            fontSize="18px"
            lineHeight="27px"
            color="#2c1338"
          >That's where Track comes in.</Text>
        </Box>
      </Box>

      {/* 3rd div */}
      <SimpleGrid columns={2} spacing={10} width="75%" margin="auto" my={14} >

        {/* 1-2 box in grid */}
        <Center align="left" padding-top="80px">
          <Box>
            <Image width="45" height="45" src="https://public-assets.toggl.space/58c88da8-9f59-4fb5-ae83-1ebcfa063516/static/6fd04d0ec899de2f8d6ea8d611c7f55f/b79cb/icon-magnify-dark.avif" />

            <Text
              fontFamily="sans-serif"
              fontWeight="600"
              fontSize="32px"
              lineHeight="42px"
              color="#2c1338"
            >
              Understand how long projects really take

            </Text>

            <Text
              fontFamily="sans-serif"
              fontWeight="400"
              fontSize="18px"
              lineHeight="27px"
              color="#2c1338"
            >
              What you think your workday looks like isn't what it actually looks like. To really understand where your time goes, Track does the hard work for you.
            </Text>
          </Box>
        </Center>
        <Box>
          <Image width="550" height="477" src="https://public-assets.toggl.space/58c88da8-9f59-4fb5-ae83-1ebcfa063516/static/c479802bb3dcaa4d05deaa9f2bc7f146/3f0bb/feature-graphs.avif" />
        </Box>
      </SimpleGrid>
      {/* 3-4 box in grid */}
      <SimpleGrid columns={2} spacing={10} width="75%" margin="auto" my={14}>

        <Box >
          <Image width="550" height="477" src="https://public-assets.toggl.space/58c88da8-9f59-4fb5-ae83-1ebcfa063516/static/1d75f67b9bac69fe63a659873978936a/af3f3/feature-time-entries.avif" />
        </Box>
        <Center align="left" padding-top="80px">
          <Box align="left" margin-left="250px" padding-top="80px">
            <Image width="45" height="45" src="https://public-assets.toggl.space/58c88da8-9f59-4fb5-ae83-1ebcfa063516/static/66f27591a1bb8c35eb25b463d69b9073/73ddc/icon-money-dark.avif" />

            <Text
              fontFamily="sans-serif"
              fontWeight="600"
              fontSize="32px"
              lineHeight="42px"
              color="#2c1338"
            >
              Create accurate invoices easily

            </Text>

            <Text
              fontFamily="sans-serif"
              fontWeight="400"
              fontSize="18px"
              lineHeight="27px"
              color="#2c1338"
            >
              There’s no dread like end-of-the-month, time-to-create-invoices dread. Toggl Track takes your hours logged, and turns them into clean reports. You’ll know exactly where you spent your time—and how to bill it—cha-ching!
            </Text>

          </Box>
        </Center>
      </SimpleGrid>

      <SimpleGrid columns={2} spacing={10} width="75%" margin="auto" my={14}>

        {/* 1-2 box in grid */}
        <Center align="left" padding-top="80px">
          <Box align="left" padding-top="80px">
            <Image width="45" height="45" src="https://public-assets.toggl.space/58c88da8-9f59-4fb5-ae83-1ebcfa063516/static/b468810bf2f43552f492da0c744cfdfa/ca913/icon-timeline-dark.avif" />

            <Text
              fontFamily="sans-serif"
              fontWeight="600"
              fontSize="32px"
              lineHeight="42px"
              color="#2c1338"
            >
              Stay accountable every day

            </Text>

            <Text
              fontFamily="sans-serif"
              fontWeight="400"
              fontSize="18px"
              lineHeight="27px"
              color="#2c1338"
            >
              Don't wait for your clients to ask, "What is it that you do all day?" Toggl Track is the easiest way to stay accountable, even when nobody's asking.
            </Text>

          </Box>
        </Center>
        <Box>
          <Image width="550" height="477" src="https://public-assets.toggl.space/58c88da8-9f59-4fb5-ae83-1ebcfa063516/static/b35ef7e54578a8a6eebf590f54353ea3/ce5a6/feature-calendar.avif" />
        </Box>
      </SimpleGrid>

      {/* 7-8 box in grid */}
      <SimpleGrid columns={2} spacing={10} width="75%" margin="auto" my={14}>
        <Box align="left" >
          <Image width="550" height="477" src="https://public-assets.toggl.space/58c88da8-9f59-4fb5-ae83-1ebcfa063516/static/e335fd772212c6144a8f4e02609d0d0c/10316/feature-reminders.avif" />
        </Box>
        <Center>
          <Box align="left" margin-left="250px" padding-top="80px">
            <Image width="45" height="45" src="https://public-assets.toggl.space/58c88da8-9f59-4fb5-ae83-1ebcfa063516/static/caf89ee4a474d1385ff4afa8f103b2e9/b79cb/icon-calendar-dark.avif" />

            <Text
              fontFamily="sans-serif"
              fontWeight="600"
              fontSize="32px"
              lineHeight="42px"
              color="#2c1338"
            >
              Efficiency in practice

            </Text>

            <Text
              fontFamily="sans-serif"
              fontWeight="400"
              fontSize="18px"
              lineHeight="27px"
              color="#2c1338"
            >
              You don't need another chore. Track isn't another tool you dread opening. There's no onboarding required. Track will even remind you to pause or clock out. Because your well-being is just as important as your to-do list.
            </Text>
          </Box>
        </Center>
      </SimpleGrid>

      {/* 4th div  */}

      <div style={{ transform: "skew(0deg,10deg,0deg,0deg)", backgroundColor: "#2c1338", border: "1px solid", paddingTop: "50px" }}>
        <Box w="1000px" borederColor="white" alignItems="center" paddingLeft={"300px"} >
          <Image width="200" height="200" src="https://public-assets.toggl.com/b/static/291f951779f8d71b540e34c3a137e53d/09977/illo-stopwatch.avif" />
          <Text
            fontFamily="sans-serif"
            fontWeight="400"
            fontSize="32px"
            lineHeight="42px"
            color="white"
          >With Toggl Track, individuals captured an additional 25% of billable hours that would otherwise be lost</Text>

        </Box>
      </div>


    </div>
  );
};

export default Solo;
