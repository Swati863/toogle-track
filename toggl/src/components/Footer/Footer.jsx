import { Heading, Box, Image } from '@chakra-ui/react'
import React from 'react'
import style from './Footer.module.css'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
export default function Footer() {
  return (
    <Box id={style.footer_main}>
      <Box>
        <Image w='200px' paddingTop='50px' paddingLeft='50px' className={style.logo1} src='https://toggl.com/blog/wp-content/uploads/2020/09/toggl-track_logotype_horizontal_pink_rgb-e1599116263835.png'></Image>
      </Box>
      <Box className={style.footer_grid}>
        <Box className={style.footer_divs}>
          <Heading className={style.foot_head}>TOGGL GLOBAL</Heading>
          <Heading className={style.foot_para}>Blog</Heading>
          <Heading className={style.foot_para}>Our Mission</Heading>
          <Heading className={style.foot_para}>Working at Toggl</Heading>
          <Heading className={style.foot_para}>Legal Terms</Heading>
          <Heading className={style.foot_para}></Heading>
        </Box>
        <Box className={style.footer_divs}>
          <Heading className={style.foot_head}>PRODUCT</Heading>
          <Heading className={style.foot_para}>Features</Heading>
          <Heading className={style.foot_para}>Pricing</Heading>
          <Heading className={style.foot_para}>Integrations</Heading>
          <Heading className={style.foot_para}>Case Studies</Heading>
          <Heading className={style.foot_para}>API</Heading>
        </Box>
        <Box className={style.footer_divs}>
          <Heading className={style.foot_head}>USE CASES</Heading>
          <Heading className={style.foot_para}>Billing and Invoicing</Heading>
          <Heading className={style.foot_para}>Employee Time Tracking</Heading>
          <Heading className={style.foot_para}>Project Budgeting</Heading>
          <Heading className={style.foot_para}>Reporting</Heading>
          <Heading className={style.foot_para}>Payroll</Heading>
        </Box>
        <Box className={style.footer_divs}>
          <Heading className={style.foot_head}>DOWNLOAD</Heading>
          <Heading className={style.foot_para}>Mobile Apps</Heading>
          <Heading className={style.foot_para}>Desktop Apps</Heading>
          <Heading className={style.foot_para}>Browser Extensions</Heading>
          <Heading className={style.foot_para}></Heading>
          <Heading className={style.foot_para}></Heading>
        </Box>
        <Box className={style.footer_divs}>
          <Heading className={style.foot_head}>HELP</Heading>
          <Heading className={style.foot_para}>Support & Knowledge Base</Heading>
          <Heading className={style.foot_para}>Request A Demo</Heading>
          <Heading className={style.foot_para}>Contact Us</Heading>
          <Heading className={style.foot_para}></Heading>
          <Heading className={style.foot_para}></Heading>
        </Box>
        <Box className={style.footer_divs}>
          <Heading className={style.foot_head}>RESOURCES</Heading>
          <Heading className={style.foot_para}>Time Management Hub</Heading>
          <Heading className={style.foot_para}>Work From Home Hub</Heading>
          <Heading className={style.foot_para}>Business Resources</Heading>
          <Heading className={style.foot_para}>Timesheet Templates</Heading>
          <Heading className={style.foot_para}>Media Kit</Heading>
        </Box>
      </Box>
      <Box id={style.footer_icons_div}>
        <Box id={style.footer_aDiv}>
          <a href='' target='_blank' rel="noreferrer"><FaTwitter /></a>
          <a href='' target='_blank' rel="noreferrer"><FaFacebook /></a>
          <a href='' target='_blank' rel="noreferrer"><FaInstagram /></a>
          <a href='' target='_blank' rel="noreferrer"><FaYoutube /> </a>
          <a href='' target='_blank' rel="noreferrer"><FaLinkedin /></a>
          <a href='' target='_blank' rel="noreferrer"><FaGithub /> </a>
        </Box>
      </Box>
      <Box id={style.footer_toggle_div}>
        <Box className={style.foot_toggle_box1} w='100px' textAlign='left' marginLeft='50px'>
          <Heading className={style.foot_icon_para} marginTop='25px' lineHeight='40px'>Discover other</Heading>
          <Heading className={style.foot_icon_para}>Toggl tools:</Heading>
        </Box>
        <Box className={style.foot_toggle_box2} marginLeft='50px'>
          <Image w='120px' h='50px' marginTop='20px' src='https://comparecamp.com/media/uploads/2020/06/Toggl-Plan-logo-1.png'></Image>
          <Heading className={style.foot_icon_para} marginTop='-5px'>Beautifully simple work planning</Heading>
        </Box>
        <Box className={style.foot_toggle_box3} marginLeft='40px'>
          <Image w='130px' h='70px' marginTop='10px' src='https://www.howtoweb.co/wp-content/uploads/2020/06/Logos-website-12-1200x667.png'></Image>
          <Heading className={style.foot_icon_para} marginTop='-15px'>Skills-based hiring</Heading>
        </Box>
      </Box>
      <Box id={style.footer_end_div}>
        <p>© 2022 Toggl. All rights reserved.</p>
      </Box>
    </Box>
  )
}
