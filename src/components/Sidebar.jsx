import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import { FaBell, FaClock, FaMobileAlt, FaDesktop } from 'react-icons/fa'
import { TiDocumentText, TiFolder } from "react-icons/ti";
import { BsTag } from "react-icons/bs";
import { IoHelpCircleSharp } from "react-icons/io5";
import { FiCreditCard } from "react-icons/fi";
import { TbPlug } from "react-icons/tb";
import { CgOrganisation, CgProfile } from "react-icons/cg";
import { RiSettings3Fill } from "react-icons/ri";
import { MdInsights, MdImportExport } from 'react-icons/md';
import { AiOutlineTeam, AiTwotoneMedicineBox } from 'react-icons/ai';
import { BsBullseye } from 'react-icons/bs'
import style from './Sidebar.module.css'
import { useNavigate } from 'react-router-dom';


export default function Sidebar() {
    const redirect = useNavigate();
    return (

        // position: fixed;
        // top: 0;
        // left: 0;
        // z-index: 10;
        <Box position={'fixed !important'} top={'0 !important'} left={'0 !important'} zIndex={'10 !important'}>
            <Box id={style.sidebar_main_div}>
                <Box id={style.sidebarLogo}>
                    <Image src="https://toggl.com/blog/wp-content/uploads/2020/09/toggl-track_logotype_horizontal_pink_rgb-e1599116263835.png" alt="logo" />
                    <Box w="50px" display="flex" justifyContent="center">
                        <FaBell height="42px" color='white' />
                    </Box>
                </Box>
                <Box id={style.sidebar_scroll}>
                    <p className={style.sidebar_head}>TRACK</p>
                    <Box>
                        <Box onClick={() => redirect('/timer')} className={style.sidebar_icon}>
                            <FaClock color='white' />
                            Timer
                        </Box>
                    </Box>

                    <p className={style.sidebar_head}>ANALYSIS</p>
                    <Box>
                        <Box className={style.sidebar_icon}>
                            <TiDocumentText color='white' />
                            Reports
                        </Box>
                        <Box className={style.sidebar_icon}>
                            <MdInsights color='white' />
                            Insights
                        </Box>
                    </Box>

                    <p className={style.sidebar_head}>MANAGEMENT</p>
                    <Box>
                        <Box onClick={() => redirect('/project')} className={style.sidebar_icon}>
                            <TiFolder color='white' />
                            Projects
                        </Box>
                        <Box className={style.sidebar_icon}>
                            <CgProfile color='white' />
                            Clients
                        </Box>
                        <Box className={style.sidebar_icon}>
                            <AiOutlineTeam color='white' />
                            Teams
                        </Box>
                        <Box className={style.sidebar_icon}>
                            <BsTag color='white' />
                            Tags
                        </Box>
                        <Box className={style.sidebar_icon}>
                            <IoHelpCircleSharp color='white' />
                            Help
                        </Box>
                        <Box className={style.sidebar_icon}>
                            <FiCreditCard color='white' />
                            Subscription
                        </Box>
                        <Box className={style.sidebar_icon}>
                            <TbPlug color='white' />
                            Integrations
                        </Box>
                        <Box className={style.sidebar_icon}>
                            <MdImportExport color='white' />
                            Import/Export
                        </Box>
                        <Box className={style.sidebar_icon}>
                            <FaMobileAlt color='white' />
                            Mobile App
                        </Box>
                        <Box className={style.sidebar_icon}>
                            <FaDesktop color='white' />
                            Desktop App
                        </Box>
                    </Box>

                    <p className={style.sidebar_head}>ADMIN</p>
                    <Box>
                        <Box className={style.sidebar_icon}>
                            <CgOrganisation color='white' />
                            Organisation
                        </Box>
                        <Box className={style.sidebar_icon}>
                            <RiSettings3Fill color='white' />
                            Setting
                        </Box>
                    </Box>
                </Box>
                <Box bg='#422A4C' mt='40px'>
                    <p>Trial: 29 days left</p>
                    <p id={style.end_para}>Upgrade today</p>
                </Box>
                <p className={style.sidebar_head}>WORKSHOP</p>
                <Box className={style.sidebar_icon}>
                    <AiTwotoneMedicineBox color='white' />
                    Enter Email Id
                </Box>
                <Box className={style.sidebar_icon}>
                    Enter Email Id
                    <BsBullseye color='white' />
                </Box>
            </Box>
        </Box >
    )
}
