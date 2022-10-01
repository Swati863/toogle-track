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

const Big = () => {
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
          
          Time Will Tell (If You Track It)
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
          backgroundImage="https://public-assets.toggl.space/58c88da8-9f59-4fb5-ae83-1ebcfa063516/static/79e1ffc8fb5fba4debd371fb0ef251d8/c4eba/hero-large-teams.avif"
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
          Save time, manage your team, and plan better. All with just a few clicks.
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
          Time is the most powerful force in the universe. Toggl Track helps you harness it. Listen closely: your minutes are telling an important story.
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
         Drive discovery with data
         
          </Text>

          <Text 
           fontFamily="sans-serif"
            fontWeight="400"
            fontSize="18px"
            lineHeight="27px"
            color="#2c1338"
            >
          You used to have ideas about where your time goes. Now you have proof. With data-driven insights, Track shows whether your expectations match the reality. Because we only like surprises at birthday parties.
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
        Stay on track, automatically
         
          </Text>

          <Text 
           fontFamily="sans-serif"
            fontWeight="400"
            fontSize="18px"
            lineHeight="27px"
            color="#2c1338"
            >
        Why spend man-hours on admin and compliance? Automate with Track. Whether you're navigating GDPR or your own internal standards—Track has you covered. Track's simple, breezy interface delivers powerful, enterprise-level reporting.
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
        Be a well-oiled machine
         
          </Text>

          <Text 
           fontFamily="sans-serif"
            fontWeight="400"
            fontSize="18px"
            lineHeight="27px"
            color="#2c1338"
            >
                Banish "underworked" and "overworked" at once. Analyze your time reports and assign work to those with bandwidth. Estimate timelines and ROI, so your lightweight team packs a heavyweight punch. Because happy teams make clients even happier.
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
          Bill better
         
          </Text>

          <Text 
           fontFamily="sans-serif"
            fontWeight="400"
            fontSize="18px"
            lineHeight="27px"
            color="#2c1338"
            >
         To bill, or not to bill? That is the question. Toggl Track is simple to use, so your billing is fast and accurate. Understand the split between billable and non-billable time for everyone on your team, and charge out accurately.
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

export default Big;
