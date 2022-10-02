import { Heading, Box, Image } from '@chakra-ui/react'
import React from 'react'
import styles from './Footer.module.css'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
export default function Footer() {
  return (
    <Box id={styles.footer_main} background='rgb(44, 19, 56)'>
      <Box>
        <Image w='200px' paddingTop='50px' paddingLeft='50px' className={styles.logo1} src='https://toggl.com/blog/wp-content/uploads/2020/09/toggl-track_logotype_horizontal_pink_rgb-e1599116263835.png'></Image>
      </Box>

      <Box className={styles.footer_grid}>
        <Box className={styles.footer_divs}>
          {/* font-size: 15px;
        line-height: 30px;
        text-align: left;
        color: #FCE5D8;
        font-weight: 400; */}
          <Heading className={styles.foot_head} textAlign={'left !important'} mt={'20px !important'} mb={'15px !important'} color={'#a09f9f !important'} fontSize={'17px'}>TOGGL GLOBAL</Heading>
          <Heading className={styles.foot_para} fontWeight={'400'} color={'#FCE5D8'} textAlign={'left'} lineHeight={'30px'} fontSize={'15px'} >Blog</Heading>
          <Heading className={styles.foot_para} fontWeight={'400'} color={'#FCE5D8'} textAlign={'left'} lineHeight={'30px'} fontSize={'15px'} >Our Mission</Heading>
          <Heading className={styles.foot_para} fontWeight={'400'} color={'#FCE5D8'} textAlign={'left'} lineHeight={'30px'} fontSize={'15px'} >Working at Toggl</Heading>
          <Heading className={styles.foot_para} fontWeight={'400'} color={'#FCE5D8'} textAlign={'left'} lineHeight={'30px'} fontSize={'15px'} >Legal Terms</Heading>
          <Heading className={styles.foot_para} fontWeight={'400'} color={'#FCE5D8'} textAlign={'left'} lineHeight={'30px'} fontSize={'15px'} ></Heading>
        </Box>
        <Box className={styles.footer_divs}>
          <Heading className={styles.foot_head} textAlign={'left !important'} mt={'20px !important'} mb={'15px !important'} color={'#a09f9f !important'} fontSize={'17px'}>PRODUCT</Heading>
          <Heading className={styles.foot_para} fontWeight={'400'} color={'#FCE5D8'} textAlign={'left'} lineHeight={'30px'} fontSize={'15px'} >Features</Heading>
          <Heading className={styles.foot_para} fontWeight={'400'} color={'#FCE5D8'} textAlign={'left'} lineHeight={'30px'} fontSize={'15px'} >Pricing</Heading>
          <Heading className={styles.foot_para} fontWeight={'400'} color={'#FCE5D8'} textAlign={'left'} lineHeight={'30px'} fontSize={'15px'} >Integrations</Heading>
          <Heading className={styles.foot_para} fontWeight={'400'} color={'#FCE5D8'} textAlign={'left'} lineHeight={'30px'} fontSize={'15px'} >Case Studies</Heading>
          <Heading className={styles.foot_para} fontWeight={'400'} color={'#FCE5D8'} textAlign={'left'} lineHeight={'30px'} fontSize={'15px'} >API</Heading>
        </Box>
        <Box className={styles.footer_divs}>
          <Heading className={styles.foot_head} textAlign={'left !important'} mt={'20px !important'} mb={'15px !important'} color={'#a09f9f !important'} fontSize={'17px'}>USE CASES</Heading>
          <Heading className={styles.foot_para} fontWeight={'400'} color={'#FCE5D8'} textAlign={'left'} lineHeight={'30px'} fontSize={'15px'} >Billing and Invoicing</Heading>
          <Heading className={styles.foot_para} fontWeight={'400'} color={'#FCE5D8'} textAlign={'left'} lineHeight={'30px'} fontSize={'15px'} >Employee Time Tracking</Heading>
          <Heading className={styles.foot_para} fontWeight={'400'} color={'#FCE5D8'} textAlign={'left'} lineHeight={'30px'} fontSize={'15px'} >Project Budgeting</Heading>
          <Heading className={styles.foot_para} fontWeight={'400'} color={'#FCE5D8'} textAlign={'left'} lineHeight={'30px'} fontSize={'15px'} >Reporting</Heading>
          <Heading className={styles.foot_para} fontWeight={'400'} color={'#FCE5D8'} textAlign={'left'} lineHeight={'30px'} fontSize={'15px'} >Payroll</Heading>
        </Box>
        <Box className={styles.footer_divs}>
          {/* color: #a09f9f;
        font-size: 17px;
        text-align: left;
        margin-top: 20px;
        margin-bottom: 15px; */}
          <Heading className={styles.foot_head} textAlign={'left !important'} mt={'20px !important'} mb={'15px !important'} color={'#a09f9f !important'} fontSize={'17px'}>DOWNLOAD</Heading>
          <Heading className={styles.foot_para} fontWeight={'400'} color={'#FCE5D8'} textAlign={'left'} lineHeight={'30px'} fontSize={'15px'} >Mobile Apps</Heading>
          <Heading className={styles.foot_para} fontWeight={'400'} color={'#FCE5D8'} textAlign={'left'} lineHeight={'30px'} fontSize={'15px'} >Desktop Apps</Heading>
          <Heading className={styles.foot_para} fontWeight={'400'} color={'#FCE5D8'} textAlign={'left'} lineHeight={'30px'} fontSize={'15px'} >Browser Extensions</Heading>
          <Heading className={styles.foot_para} fontWeight={'400'} color={'#FCE5D8'} textAlign={'left'} lineHeight={'30px'} fontSize={'15px'} ></Heading>
          <Heading className={styles.foot_para} fontWeight={'400'} color={'#FCE5D8'} textAlign={'left'} lineHeight={'30px'} fontSize={'15px'} ></Heading>
        </Box>
        <Box className={styles.footer_divs}>
          <Heading className={styles.foot_head} textAlign={'left !important'} mt={'20px !important'} mb={'15px !important'} color={'#a09f9f !important'} fontSize={'17px'}>HELP</Heading>
          <Heading className={styles.foot_para} fontWeight={'400'} color={'#FCE5D8'} textAlign={'left'} lineHeight={'30px'} fontSize={'15px'} >Support & Knowledge Base</Heading>
          <Heading className={styles.foot_para} fontWeight={'400'} color={'#FCE5D8'} textAlign={'left'} lineHeight={'30px'} fontSize={'15px'} >Request A Demo</Heading>
          <Heading className={styles.foot_para} fontWeight={'400'} color={'#FCE5D8'} textAlign={'left'} lineHeight={'30px'} fontSize={'15px'} >Contact Us</Heading>
          <Heading className={styles.foot_para} fontWeight={'400'} color={'#FCE5D8'} textAlign={'left'} lineHeight={'30px'} fontSize={'15px'} ></Heading>
          <Heading className={styles.foot_para} fontWeight={'400'} color={'#FCE5D8'} textAlign={'left'} lineHeight={'30px'} fontSize={'15px'} ></Heading>
        </Box>
        <Box className={styles.footer_divs}>
          <Heading className={styles.foot_head} textAlign={'left !important'} mt={'20px !important'} mb={'15px !important'} color={'#a09f9f !important'} fontSize={'17px'}>RESOURCES</Heading>
          <Heading className={styles.foot_para} fontWeight={'400'} color={'#FCE5D8'} textAlign={'left'} lineHeight={'30px'} fontSize={'15px'} >Time Management Hub</Heading>
          <Heading className={styles.foot_para} fontWeight={'400'} color={'#FCE5D8'} textAlign={'left'} lineHeight={'30px'} fontSize={'15px'} >Work From Home Hub</Heading>
          <Heading className={styles.foot_para} fontWeight={'400'} color={'#FCE5D8'} textAlign={'left'} lineHeight={'30px'} fontSize={'15px'} >Business Resources</Heading>
          <Heading className={styles.foot_para} fontWeight={'400'} color={'#FCE5D8'} textAlign={'left'} lineHeight={'30px'} fontSize={'15px'} >Timesheet Templates</Heading>
          <Heading className={styles.foot_para} fontWeight={'400'} color={'#FCE5D8'} textAlign={'left'} lineHeight={'30px'} fontSize={'15px'} >Media Kit</Heading>
        </Box>
      </Box>
      <Box id={styles.footer_icons_div}>
        <Box id={styles.footer_aDiv}>
          <a href='' target='_blank' rel="noreferrer"><FaTwitter /></a>
          <a href='' target='_blank' rel="noreferrer"><FaFacebook /></a>
          <a href='' target='_blank' rel="noreferrer"><FaInstagram /></a>
          <a href='' target='_blank' rel="noreferrer"><FaYoutube /> </a>
          <a href='' target='_blank' rel="noreferrer"><FaLinkedin /></a>
          <a href='' target='_blank' rel="noreferrer"><FaGithub /> </a>
        </Box>
      </Box>
      <Box id={styles.footer_toggle_div}>
        <Box className={styles.foot_toggle_box1} w='100px' textAlign='left' marginLeft='50px'>
          {/* font-size: 15px;
        color: #faf9f9;
        font-weight: 400; */}
          <Heading className={styles.foot_icon_para} fontWeight={'400'} color={'#faf9f9'} fontSize={'15px'} marginTop='25px' lineHeight='40px'>Discover other</Heading>
          <Heading className={styles.foot_icon_para} fontWeight={'400'} color={'#faf9f9'} fontSize={'15px'}>Toggl tools:</Heading>
        </Box>
        <Box className={styles.foot_toggle_box2} marginLeft='50px'>
          <Image w='120px' h='50px' marginTop='20px' src='https://comparecamp.com/media/uploads/2020/06/Toggl-Plan-logo-1.png'></Image>
          <Heading className={styles.foot_icon_para} fontWeight={'400'} color={'#faf9f9'} fontSize={'15px'} marginTop='-5px'>Beautifully simple work planning</Heading>
        </Box>
        <Box className={styles.foot_toggle_box3} marginLeft='40px'>
          <Image w='130px' h='70px' marginTop='10px' src='https://www.howtoweb.co/wp-content/uploads/2020/06/Logos-website-12-1200x667.png'></Image>
          <Heading className={styles.foot_icon_para} fontWeight={'400'} color={'#faf9f9'} fontSize={'15px'} marginTop='-15px'>Skills-based hiring</Heading>
        </Box>
      </Box>
      <Box id={styles.footer_end_div}>
        <p>© 2022 Toggl. All rights reserved.</p>
      </Box>
    </Box>
  )
}
