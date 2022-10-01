import React from "react";
import style from "./solo.module.css";
import {
  Box,
  Container,
  SimpleGrid,
  Text,
  Button,
  Stack,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";

const Small = () => {
  return (
    <div className={style.main_div}>
      {/* 1st pic div */}

      <SimpleGrid columns={2} spacing={0} backgroundColor=" rgb(44,19,56)">
        <Box margin={"80"} overflow="hidden" align="left">
          <Container
            fontFamily="sans-serif"
            fontWeight="600"
            fontSize="65px"
            lineHeight="71px"
            color="#fff3ed"
          >
          
          Small Teams with Big Insights
          </Container>
          <Text
            margin="30px"
            fontFamily="sans-serif"
            fontWeight="400"
            fontSize="18px"
            lineHeight="27px"
            color="#fff3ed"
          >
          Toggl Track is here to save your time—so you can spend it where you want to. That’s our singular focus.
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
          backgroundImage="https://public-assets.toggl.space/58c88da8-9f59-4fb5-ae83-1ebcfa063516/static/b269cbb579f2789a1cd6c2c321e254fd/a92d8/hero-small-teams.avif"
        >
          {/* <Image align="objectFit" width="800px" htmlHeight ="800px" src='https://public-assets.toggl.space/58c88da8-9f59-4fb5-ae83-1ebcfa063516/static/8d06ace628e1cadfc31838320c477118/0fc98/hero-freelancers.avif' alt='laptop' /> */}
        </Box>
      </SimpleGrid>

      {/* 2nd text div */}
      <Stack>
        <Box margin={"100"} alignItems="center">
          <Text
            alignItems="center"
            margin="30px 150px 30px 150px"
            fontFamily="sans-serif"
            fontWeight="600"
            fontSize="46px"
            lineHeight="58px"
            color="#2c1338"
          >
          Toggl Track delivers insight into your time. Because small teams <i> win big </i> with smart time tracking.
          </Text>

          <Text
            alignItems="center"
            margin="40px 320px 40px 320px"
            fontFamily="sans-serif"
            fontWeight="400"
            fontSize="18px"
            lineHeight="27px"
            color="#2c1338"
          >
           There are 1,440 minutes each day to work, grow your business, and clock out.
          </Text>
        </Box>
      </Stack>

      {/* 3rd div */}
      <SimpleGrid columns={2} spacing={80} margin="30px 300px 80px 250px">
      

      {/* 1-2 box in grid */}
        <Box align="left" padding-top="80px">
          <Image width="45" height="45" src="https://public-assets.toggl.space/58c88da8-9f59-4fb5-ae83-1ebcfa063516/static/6fd04d0ec899de2f8d6ea8d611c7f55f/b79cb/icon-magnify-dark.avif"  />
          
          <Text
            fontFamily="sans-serif"
            fontWeight="600"
            fontSize="32px"
            lineHeight="42px"
            color="#2c1338"
            >
         Insights like flashlights
         
          </Text>

          <Text 
           fontFamily="sans-serif"
            fontWeight="400"
            fontSize="18px"
            lineHeight="27px"
            color="#2c1338"
            >
          Track shines a light on your workweek. From profitability projections to earnings-per-client to ROI to milestone setting—Track insights turn small teams into mighty ones.
          </Text>

        </Box>
        <Box>
          <Image width="550" height="477"  src="https://public-assets.toggl.space/58c88da8-9f59-4fb5-ae83-1ebcfa063516/static/c479802bb3dcaa4d05deaa9f2bc7f146/3f0bb/feature-graphs.avif"/>
        </Box>
</SimpleGrid>
         {/* 3-4 box in grid */}
         <SimpleGrid columns={2} spacing="200px" margin="30px 300px 80px 250px">
         <Box align="left" >
          <Image width="400" height="415"  src="https://public-assets.toggl.space/58c88da8-9f59-4fb5-ae83-1ebcfa063516/static/4903ee711944ad74a04a462a3eee0a89/8fa3d/feature-team-dashboard.avif"/>
        </Box>
        <Box align="left" margin-left="250px" padding-top="80px">
          <Image width="45" height="45" src="https://public-assets.toggl.space/58c88da8-9f59-4fb5-ae83-1ebcfa063516/static/66f27591a1bb8c35eb25b463d69b9073/73ddc/icon-money-dark.avif"  />
          
          <Text
            fontFamily="sans-serif"
            fontWeight="600"
            fontSize="32px"
            lineHeight="42px"
            color="#2c1338"
            >
        Stay accountable inside and outside your team
         
          </Text>

          <Text 
           fontFamily="sans-serif"
            fontWeight="400"
            fontSize="18px"
            lineHeight="27px"
            color="#2c1338"
            >
        Track uses 360-degree visibility to keep teams accountable—to each other, and to their clients. Create beautiful weekly or monthly reports that clients don't need a PhD to understand. Send email reminders to log hours. Track's seamless reporting creates transparency with one click.
          </Text>
        </Box>
       
      </SimpleGrid>

      <SimpleGrid columns={2} spacing={80} margin="30px 300px 80px 250px">
      

      {/* 5-6 box in grid */}
        <Box align="left" padding-top="80px">
          <Image width="45" height="45" src="https://public-assets.toggl.space/58c88da8-9f59-4fb5-ae83-1ebcfa063516/static/b468810bf2f43552f492da0c744cfdfa/ca913/icon-timeline-dark.avif"  />
          
          <Text
            fontFamily="sans-serif"
            fontWeight="600"
            fontSize="32px"
            lineHeight="42px"
            color="#2c1338"
            >
         Put your people where they belong
         
          </Text>

          <Text 
           fontFamily="sans-serif"
            fontWeight="400"
            fontSize="18px"
            lineHeight="27px"
            color="#2c1338"
            >
          No one should be overworked or underworked—least of all, you. With Track's capabilities, get a bird's-eye view into where your team is spending time. Then, reshuffle the work accordingly.
          </Text>

        </Box>
        <Box>
          <Image width="550" height="477"  src="https://public-assets.toggl.space/58c88da8-9f59-4fb5-ae83-1ebcfa063516/static/b35ef7e54578a8a6eebf590f54353ea3/ce5a6/feature-calendar.avif" />
        </Box>
</SimpleGrid>

         {/* 7-8 box in grid */}
         <SimpleGrid columns={2} spacing="200px" margin="30px 300px 80px 250px">
         <Box align="left" >
          <Image width="550" height="477"  src="https://public-assets.toggl.space/58c88da8-9f59-4fb5-ae83-1ebcfa063516/static/e335fd772212c6144a8f4e02609d0d0c/10316/feature-reminders.avif"/>
        </Box>
        <Box align="left" margin-left="250px" padding-top="80px">
          <Image width="45" height="45" src="https://public-assets.toggl.space/58c88da8-9f59-4fb5-ae83-1ebcfa063516/static/caf89ee4a474d1385ff4afa8f103b2e9/b79cb/icon-calendar-dark.avif"  />
          
          <Text
            fontFamily="sans-serif"
            fontWeight="600"
            fontSize="32px"
            lineHeight="42px"
            color="#2c1338"
            >
          Fit the bill
         
          </Text>

          <Text 
           fontFamily="sans-serif"
            fontWeight="400"
            fontSize="18px"
            lineHeight="27px"
            color="#2c1338"
            >
         Don't accept best-guess invoices. Bill with razor-sharp accuracy, down to the minute. Leave behind messy spreadsheets, forgotten time-cards, and disorganized time systems. Never lose another billable hour.
          </Text>
        </Box>
       
      </SimpleGrid>

      {/* 4th div  */}

      <div style={{transform:"skew(0deg,10deg,0deg,0deg)", backgroundColor:"#2c1338",border:"1px solid",paddingTop:"50px"}}>
       <Box w="1000px"  borederColor="white" alignItems="center" paddingLeft={"300px"} >
       <Image width="200" height="200" src="https://public-assets.toggl.com/b/static/291f951779f8d71b540e34c3a137e53d/09977/illo-stopwatch.avif" />
       <Text 
        fontFamily="sans-serif"
        fontWeight="400"
        fontSize="32px"
        lineHeight="42px"
        color="white"
       >Studies found that daily time tracking can reduce lost hours from 23% to less than 5% (a recovery of 80%)</Text>

</Box>
      </div>

      
    </div>
  );
};

export default Small;
