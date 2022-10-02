
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'
import { Box, Heading } from '@chakra-ui/react'
import { getByDisplayValue } from '@testing-library/react'
import React, { useState } from 'react'
import style from './Faqs.module.css'



export default function Faqs() {
  const [faq1, setFaq1] = useState(false)

  const faq1Func = () => {
    setFaq1(!faq1)
  }


  const [faq2, setFaq2] = useState(false)

  const faq2Func = () => {
    setFaq2(!faq2)
  }

  const [faq3, setFaq3] = useState(false)

  const faq3Func = () => {
    setFaq3(!faq3)
  }


  const [faq4, setFaq4] = useState(false)

  const faq4Func = () => {
    setFaq4(!faq4)
  }


  const [faq5, setFaq5] = useState(false)

  const faq5Func = () => {
    setFaq5(!faq5)
  }

  const [faq6, setFaq6] = useState(false)

  const faq6Func = () => {
    setFaq6(!faq6)
  }

  const [faq7, setFaq7] = useState(false)

  const faq7Func = () => {
    setFaq7(!faq7)
  }


  const [faq8, setFaq8] = useState(false)

  const faq8Func = () => {
    setFaq8(!faq8)
  }

  const [faq9, setFaq9] = useState(false)

  const faq9Func = () => {
    setFaq9(!faq9)
  }
  return (
    <Box id={style.main_box} mb={'-25px !important'}>
      <Box id={style.main_box_1}>
        <Heading className={style.head1} textAlign='center'>FAQS</Heading>
        <Box style={faq1 ? { backgroundColor: 'rgb(229, 124, 216)', color: 'black', height: 'auto' } : { backgroundColor: "transparent" }}>
          <hr />
          <Heading onClick={faq1Func} className={style.head} fontSize='25px'>Is Toggl Track free for an unlimited number of users? {faq1 ? <ChevronUpIcon /> : <ChevronDownIcon />}</Heading>
          <p style={faq1 ? { display: "block", textAlign: 'left', paddingBottom: '30px', marginLeft: '20px', marginRight: '20px' } : { display: "none" }}>Toggl Track is free for teams of up to 5 members. </p>
        </Box>


        <Box style={faq2 ? { backgroundColor: 'rgb(229, 124, 216)', color: 'black', height: 'auto' } : { backgroundColor: "transparent" }}>
          <hr />
          <Heading onClick={faq2Func} className={style.head} fontSize='25px'>How is the subscription fee calculated for paid plans? {faq2 ? <ChevronUpIcon /> : <ChevronDownIcon />}</Heading>
          <p style={faq2 ? { display: "block", textAlign: 'left', paddingBottom: '30px', marginLeft: '20px', marginRight: '20px' } : { display: "none" }}>You will be charged a monthly fee for each member of your team. For paid plans, this fee applies even if you have under 5 active users. You will not be charged for deactivated users. If you deactivate a user, all data associated with the deactivated user will be retained.</p>
        </Box>

        <Box style={faq3 ? { backgroundColor: 'rgb(229, 124, 216)', color: 'black', height: 'auto' } : { backgroundColor: "transparent" }}>
          <hr />
          <Heading onClick={faq3Func} className={style.head} fontSize='25px'>You mentioned that Toggl Track is free for up to 5 users. If I’m on a paid plan, do I only need to pay for the 2th user? {faq3 ? <ChevronUpIcon /> : <ChevronDownIcon />}</Heading>
          <p style={faq3 ? { display: "block", textAlign: 'left', paddingBottom: '30px', marginLeft: '20px', marginRight: '20px' } : { display: "none" }}>No, you will have to pay for all 6 members on your plan. We charge for every user because all users benefit from the extra features enabled by paid plans, not just the 6th. For example, all users can create Tasks or assign entries as Billable—all paid plan features.</p>
        </Box>


        <Box style={faq4 ? { backgroundColor: 'rgb(229, 124, 216)', color: 'black', height: 'auto' } : { backgroundColor: "transparent" }}>
          <hr />
          <Heading onClick={faq4Func} className={style.head} fontSize='25px'>Does Toggl Track offer discounts? {faq4 ? <ChevronUpIcon /> : <ChevronDownIcon />}</Heading>
          <p style={faq4 ? { display: "block", textAlign: 'left', paddingBottom: '30px', marginLeft: '20px', marginRight: '20px' } : { display: "none" }}>Yes, Toggl Track offers discounts for nonprofits, students, and educational institutions. Visit this page to see if you can qualify. For those who do not qualify, Toggl Track offers a volume discount for large teams if you purchase a yearly subscription.</p>
        </Box>


        <Box style={faq5 ? { backgroundColor: 'rgb(229, 124, 216)', color: 'black', height: 'auto' } : { backgroundColor: "transparent" }}>
          <hr />
          <Heading onClick={faq5Func} className={style.head} fontSize='25px'>How is the subscription fee calculated for paid plans? {faq5 ? <ChevronUpIcon /> : <ChevronDownIcon />}</Heading>
          <p style={faq5 ? { display: "block", textAlign: 'left', paddingBottom: '30px', marginLeft: '20px', marginRight: '20px' } : { display: "none" }}>You will be charged a monthly fee for each member of your team. For paid plans, this fee applies even if you have under 5 active users. You will not be charged for deactivated users. If you deactivate a user, all data associated with the deactivated user will be retained.</p>
        </Box>

        <Box style={faq6 ? { backgroundColor: 'rgb(229, 124, 216)', color: 'black', height: 'auto' } : { backgroundColor: "transparent" }}>
          <hr />
          <Heading onClick={faq6Func} className={style.head} fontSize='25px'>You mentioned that Toggl Track is free for up to 5 users. If I’m on a paid plan, do I only need to pay for the 2th user? {faq6 ? <ChevronUpIcon /> : <ChevronDownIcon />}</Heading>
          <p style={faq6 ? { display: "block", textAlign: 'left', paddingBottom: '30px', marginLeft: '20px', marginRight: '20px' } : { display: "none" }}>No, you will have to pay for all 6 members on your plan. We charge for every user because all users benefit from the extra features enabled by paid plans, not just the 6th. For example, all users can create Tasks or assign entries as Billable—all paid plan features.</p>
        </Box>


        <Box style={faq7 ? { backgroundColor: 'rgb(229, 124, 216)', color: 'black', height: 'auto' } : { backgroundColor: "transparent" }}>
          <hr />
          <Heading onClick={faq7Func} className={style.head} fontSize='25px'>Is Toggl Track free for an unlimited number of users? {faq7 ? <ChevronUpIcon /> : <ChevronDownIcon />}</Heading>
          <p style={faq7 ? { display: "block", textAlign: 'left', paddingBottom: '30px', marginLeft: '20px', marginRight: '20px' } : { display: "none" }}>Toggl Track is free for teams of up to 5 members. </p>
        </Box>


        <Box style={faq8 ? { backgroundColor: 'rgb(229, 124, 216)', color: 'black', height: 'auto' } : { backgroundColor: "transparent" }}>
          <hr />
          <Heading onClick={faq8Func} className={style.head} fontSize='25px'>How is the subscription fee calculated for paid plans? {faq8 ? <ChevronUpIcon /> : <ChevronDownIcon />}</Heading>
          <p style={faq8 ? { display: "block", textAlign: 'left', paddingBottom: '30px', marginLeft: '20px', marginRight: '20px' } : { display: "none" }}>You will be charged a monthly fee for each member of your team. For paid plans, this fee applies even if you have under 5 active users. You will not be charged for deactivated users. If you deactivate a user, all data associated with the deactivated user will be retained.</p>
        </Box>

        <Box style={faq9 ? { backgroundColor: 'rgb(229, 124, 216)', color: 'black', height: 'auto' } : { backgroundColor: "transparent" }}>
          <hr />
          <Heading onClick={faq9Func} className={style.head} fontSize='25px'>You mentioned that Toggl Track is free for up to 5 users. If I’m on a paid plan, do I only need to pay for the 2th user? {faq9 ? <ChevronUpIcon /> : <ChevronDownIcon />}</Heading>
          <p style={faq9 ? { display: "block", textAlign: 'left', paddingBottom: '30px', marginLeft: '20px', marginRight: '20px' } : { display: "none" }}>No, you will have to pay for all 6 members on your plan. We charge for every user because all users benefit from the extra features enabled by paid plans, not just the 6th. For example, all users can create Tasks or assign entries as Billable—all paid plan features.</p>
        </Box>
        {/* <Heading className={style.head} fontSize='25px'>You mentioned that Toggl Track is free for up to 5 users. If I’m on a paid plan, do I only need to pay for the 2th user? <ChevronDownIcon /></Heading>
        <hr />
        <Heading className={style.head} fontSize='25px'>Does Toggl Track offer discounts? <ChevronDownIcon /></Heading>
        <hr />
        <Heading className={style.head} fontSize='25px'>It keeps taking me to a page where it says I’m signing up for a trial of Premium. I’d just like to sign up for a Free plan. <ChevronDownIcon /></Heading>
        <hr />
        <Heading className={style.head} fontSize='25px'>If I sign up for a Free plan but add 6 users to my Workspace during my free Premium trial, what will happen to the 2th user once the 30 days are up? <ChevronDownIcon /></Heading>
        <hr />
        <Heading className={style.head} fontSize='25px'>If I use your Premium features during the trial, what happens to all the data related to paid features (Tasks, Billable Rates, etc.) once my Workspace downgrades to the Free plan? <ChevronDownIcon /></Heading>
        <hr />
        <Heading className={style.head} fontSize='25px'>Does Toggl Track have desktop or mobile apps? Are they free? <ChevronDownIcon /></Heading>
        <hr />
        <Heading className={style.head} fontSize='25px'>If I have a paid Toggl Plan subscription, do I need to pay for Toggl Track? <ChevronDownIcon /></Heading>
        <hr />  */}
      </Box>
    </Box>
  )
}
