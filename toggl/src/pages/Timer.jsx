import {
    Box,
    useDisclosure,
    Button, Divider, Drawer, HStack, Input, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, SimpleGrid, Text,
    VStack,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Switch,
    FormControl,
    FormLabel,
} from '@chakra-ui/react'
import React, { useRef, useCallback, useState, useEffect } from 'react'
import "./Timer.css"
import { BsCurrencyDollar, BsFillCaretDownFill, BsFillCaretUpFill } from 'react-icons/bs'
import { BiChevronRight, BiChevronLeft, BiChevronsLeft } from "react-icons/bi";

const start = new Date();
const end = new Date(new Date().setMinutes(start.getMinutes() + 30));
const Timer = () => {
    const [play, setPlay] = useState(false);
    const [time, setTime] = useState({
        sec: 0,
        min: 0,
        hr: 0
    });
    const timerId = useRef(null);

    const updateTimer = () => {
        setTime((prev) => {
            let newTime = { ...prev };
            // update sec and see if we need to inc1rease min
            if (newTime.sec < 59) newTime.sec += 1;
            else {
                newTime.min += 1;
                newTime.sec = 0;
            }
            // min has inc1reased in *newTime* by now if it was updated, see if it has crossed 59
            if (newTime.min === 60) {
                newTime.min = 0;
                newTime.hr += 1;
            }

            return newTime;
        });
    };
    const pauseOrResume = () => {
        if (!timerId.current) {
            timerId.current = setInterval(updateTimer, 1000);
        } else {
            clearInterval(timerId.current);
            timerId.current = null;
        }
    };

    const reset = () => {
        clearInterval(timerId.current);
        setTime({
            sec: 0,
            min: 0,
            hr: 0
        });
    };
    const handlePlay = () => {
        if (!timerId.current) {
            timerId.current = setInterval(updateTimer, 1000);
        }
        setPlay(true);
    }
    const handlePause = () => {
        clearInterval(timerId.current);
        reset();
        timerId.current = null;
        setPlay(false);
    }

    //Calendar start from here
    const [checkT, setCheckT] = useState('');
    const [checkD, setCheckD] = useState('');
    const dateRef = useRef(null);
    const inc1 = useRef(1);
    const inc2 = useRef(1);
    dateRef.current = new Date();

    const [showData, setShowData] = useState([
        {
            time: "",
            day: "",
            task: ""
        }
    ]);
    const [value, setValue] = useState("");
    const [weekDate, setWeekDate] = useState({
        date4: (new Date(dateRef.current.setDate(dateRef.current.getDate()))).toString().split(' ')[2],
        date5: (new Date(dateRef.current.setDate(dateRef.current.getDate() + 1))).toString().split(' ')[2],
        date6: (new Date(dateRef.current.setDate(dateRef.current.getDate() + 1))).toString().split(' ')[2],
        date7: (new Date(dateRef.current.setDate(dateRef.current.getDate() + 1))).toString().split(' ')[2],
        date3: (new Date(dateRef.current.setDate(dateRef.current.getDate() - 4))).toString().split(' ')[2],
        date2: (new Date(dateRef.current.setDate(dateRef.current.getDate() - 1))).toString().split(' ')[2],
        date1: (new Date(dateRef.current.setDate(dateRef.current.getDate() - 1))).toString().split(' ')[2],
    });

    const firstFieldRef = React.useRef(null)
    const Scheduletime = [
        "1:00 AM",
        "2:00 AM",
        "3:00 AM",
        "4:00 AM",
        "5:00 AM",
        "6:00 AM",
        "7:00 AM",
        "8:00 AM",
        "8:00 AM",
        "10:00 AM",
        "11:00 AM",
        "12:00 PM",
        "1:00 PM",
        "2:00 PM",
        "3:00 PM",
        "4:00 PM",
        "5:00 PM",
        "6:00 PM",
        "7:00 PM",
        "8:00 PM",
        "9:00 PM",
        "10:00 PM",
        "11:00 PM",
    ]

    const daysGreed = [
        "monday",
        "tuesday",
        "wednesday",
        "thrusday",
        "friday",
        "saturday",
        "sunday"
    ]
    // const timeRef = useRef("");
    // const dayRef = useRef("")
    const handleEvent = ({ time, day }) => {
        setCheckD(day);
        setCheckT(time);
        // setTimeout(() => {
        //     setShowData([...showData, {
        //         time: time,
        //         day: day,
        //         task: value
        //     }]);
        // }, 3000);
    };

    //Dynamic week logic
    const prevWeek = () => {
        inc2.current = -1;
        // console.log((new Date(dateRef.current.setDate(dateRef.current.getDate() - 7))).toString().split(' ')[2])
        setWeekDate({
            date1: (new Date(dateRef.current.setDate(dateRef.current.getDate() - 7 * inc1.current++))).toString().split(' ')[2],
            date2: (new Date(dateRef.current.setDate(dateRef.current.getDate() + 1))).toString().split(' ')[2],
            date3: (new Date(dateRef.current.setDate(dateRef.current.getDate() + 1))).toString().split(' ')[2],
            date4: (new Date(dateRef.current.setDate(dateRef.current.getDate() + 1))).toString().split(' ')[2],
            date5: (new Date(dateRef.current.setDate(dateRef.current.getDate() + 1))).toString().split(' ')[2],
            date6: (new Date(dateRef.current.setDate(dateRef.current.getDate() + 1))).toString().split(' ')[2],
            date7: (new Date(dateRef.current.setDate(dateRef.current.getDate() + 1))).toString().split(' ')[2],
        });
    }
    const nextWeek = () => {
        inc1.current = -1;
        setWeekDate({
            date1: (new Date(dateRef.current.setDate(dateRef.current.getDate() + 7 * inc2.current++))).toString().split(' ')[2],
            date2: (new Date(dateRef.current.setDate(dateRef.current.getDate() + 1))).toString().split(' ')[2],
            date3: (new Date(dateRef.current.setDate(dateRef.current.getDate() + 1))).toString().split(' ')[2],
            date4: (new Date(dateRef.current.setDate(dateRef.current.getDate() + 1))).toString().split(' ')[2],
            date5: (new Date(dateRef.current.setDate(dateRef.current.getDate() + 1))).toString().split(' ')[2],
            date6: (new Date(dateRef.current.setDate(dateRef.current.getDate() + 1))).toString().split(' ')[2],
            date7: (new Date(dateRef.current.setDate(dateRef.current.getDate() + 1))).toString().split(' ')[2],
        });

    }
    //Create Task Logic
    const { onOpen, onClose, isOpen } = useDisclosure();
    const initialRef = React.useRef(null);

    const finalRef = React.useRef(null);
    const handleSubmit = (e) => {
        e.preventDefault();
        setShowData([...showData, {
            time: checkT,
            day: checkD,
            task: value
        }]);
        setValue("")
        onClose();
    }
    const handleChange = (e) => {
        setValue(e.target.value);

    }
    //Guru
    useEffect(() => {
        // console.log(showData, "data")
    }, [showData, checkD, checkT, weekDate]);
    return (


        <VStack pl={'3rem'} background={'white !important'}>
            <HStack position={'sticky'} top={'0'} background={'white'} boxShadow={'0px 10px 15px -15px #111'} gap={'0.8rem'} className='addProject' w={'100%'} p={'0.7rem 0rem'}  >
                <Input border={'none'} _focus={{ boxShadow: 'none' }} placeholder={'What are you working on?'} fontWeight={'600'} fontSize={'1.2rem'} width={'70%'} p={'1.8rem 1rem'} />
                <Box>
                    <svg width="16" height="13" viewBox="0 0 16 13"><path fill="#7E6E85" fill-rule="evenodd" d="M0 6h16v4.994A2.001 2.001 0 0114.006 13H1.994A1.993 1.993 0 010 10.994V6zm0-4a2 2 0 012.004-2h3.05c1.107 0 2.004.895 2.004 2h6.935C15.102 2 16 2.895 16 4H0V2z"></path></svg>
                </Box>
                <Box>
                    <svg class="e1x8mxgg1 css-1ihvt2w-Root-TriggerIcon eafgtu70" width="17" height="17" viewBox="0 0 17 17"><path d="M0 6.002c0 1.103.633 2.63 1.416 3.414l6.168 6.168a1.996 1.996 0 002.828.004l5.176-5.176c.78-.78.78-2.045-.004-2.828L9.416 1.416C8.634.634 7.113 0 6.002 0H1.998A1.993 1.993 0 000 1.998v4.004zM4 6a2 2 0 100-4 2 2 0 000 4z" fill="#7E6E85" fill-rule="evenodd"></path></svg>
                </Box>
                <Box>
                    <BsCurrencyDollar fill="#7E6E85" style={{
                        width: '19px',
                        height: '19px'
                    }} />
                </Box>

                <Box w={'5.2rem'} fontSize={'1.2rem'} fontWeight={'600'} color={!play ? "gray" : "black"}>
                    {`${time.hr < 10 ? 0 : ""}${time.hr}:${time.min < 10 ? 0 : ""}${time.min}:${time.sec < 10 ? 0 : ""}${time.sec}`}
                </Box>
                <Box w={'4rem'}>
                    {!play ? <Button onClick={handlePlay} _hover={{
                        background: '#eed4eb',
                        w: '2.8rem',
                        h: '2.7rem'
                    }} w={'3rem'} h={'2.9rem'} p={'0rem'} borderRadius={'50%'} background={'#f8e7f6'}>
                        <svg className={'play'} width="36" height="36" viewBox="0 0 36 36">
                            <g fill="none" fill-rule="evenodd">
                                <rect width="36" height="36" fill="#D164C5" rx="18"></rect>
                                <path fill="#FEFEFF" d="M13 11.994c0-1.101.773-1.553 1.745-.997l10.51 6.005c.964.55.972 1.439 0 1.994l-10.51 6.007c-.964.55-1.745.102-1.745-.997V11.994z"></path></g></svg>
                    </Button> : <Button onClick={handlePause} className='buttonAni'
                        _hover={{
                            background: '#fbe9e6',
                            w: '2.8rem',
                            h: '2.7rem'
                        }}
                        w={'3rem'} h={'2.9rem'} p={'0rem'} borderRadius={'50%'} background={'#f8e7f6'}>

                        <svg width="36" height="36" viewBox="0 0 36 36">
                            <g fill="none" fill-rule="evenodd">
                                <rect width="36" height="36" fill="#E87161" rx="18"></rect>
                                <rect width="14" height="14" x="11" y="11" fill="#FFFFFF" rx="1.5"></rect></g></svg>
                    </Button>
                    }
                </Box>
                <VStack background={'#efefef'} borderRadius={'1rem'} padding={'0.2rem'}>

                    <svg width="16" height="16" viewBox="0 0 36 36"><g fill="none" fill-rule="evenodd"><rect width="36" height="36" fill="#2C1338" rx="18"></rect><path fill="#f3f3f3" d="M13 11.994c0-1.101.773-1.553 1.745-.997l10.51 6.005c.964.55.972 1.439 0 1.994l-10.51 6.007c-.964.55-1.745.102-1.745-.997V11.994z"></path></g></svg>

                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" ><rect width="24" height="24" fill="#95899B" rx="12"></rect><path fill="#FFFFFF" fill-rule="evenodd" clip-rule="evenodd" d="M5 11H19V13H5V11Z"></path><path fill="#FFFFFF" fill-rule="evenodd" clip-rule="evenodd" d="M13 5L13 19H11L11 5H13Z"></path></svg>
                </VStack>
            </HStack>
            <VStack position={'sticky'} mt={'0.2rem'} top={'5rem'} pt={'1.5rem'} pb={'1.5rem'} fontSize={'0.8rem'} pr={'2rem'} justify={'space-between'} bg={'#fef9f7'} w={'100%'}>
                <HStack w={'100%'} className={'showWeek'} justify={'space-between'}>
                    <Text fontWeight={'bold'} >THIS WEEK</Text>
                    <HStack gap='0.8rem'>
                        <Text>WEEK TOTAL</Text>
                        <Text fontSize={'0.9rem'} fontWeight={'700'}>00:00:00</Text>

                        <HStack border={'0.5px solid gray'} w={'15rem'} fontSize={'1rem'} borderRadius='0.58rem' justify={'center'} >

                            <BiChevronLeft onClick={prevWeek} />

                            <Text style={{
                                display: 'flex',
                                alignItems: 'center',
                                borderRight: '1px solid',
                                borderLeft: '1px solid',
                                padding: '0.1rem 1.9rem',
                            }}>
                                <svg class="eq55pp43 css-15vmsiq-Root-EnhancedCalendarIcon ezhy5fr0" width="36" height="36" viewBox="0 0 36 36"><g fill="none" fill-rule="evenodd"><path d="M21 10c.552 0 1 .443 1 .999V12h.994c1.108 0 2.006.894 2.006 2.003v8.994A2.004 2.004 0 0122.994 25h-9.988A2.002 2.002 0 0111 22.997v-8.994c0-1.106.897-2.003 2.006-2.003H14v-1.001c0-.512.383-.935.883-.992L15 10c.552 0 1 .443 1 .999V12h4v-1.001c0-.512.383-.935.883-.992L21 10zm2 8H13v4c0 .556.446 1 .995 1h8.01c.54 0 .995-.448.995-1v-4zm-.995-4h-8.01c-.54 0-.995.448-.995 1v1h10v-1c0-.556-.446-1-.995-1z" fill="#757575"></path></g></svg>
                                This week</Text>
                            <BiChevronRight onClick={nextWeek} />
                        </HStack>
                        <Popover w={'5rem !important'}>
                            <PopoverTrigger>
                                <svg width="16" height="16" viewBox="0 0 16 16"><path d="M8 11a3 3 0 100-6 3 3 0 000 6zM5.182 2.702c.337-.18.693-.328 1.065-.442L6.778.666C6.9.299 7.313 0 7.7 0h.6c.387 0 .8.298.922.666l.531 1.594c.372.114.728.262 1.065.442l1.504-.752c.346-.173.85-.093 1.122.18l.425.426c.274.273.354.775.181 1.122l-.752 1.504c.18.337.328.693.442 1.065l1.594.531c.367.122.666.535.666.922v.6c0 .387-.298.8-.666.922l-1.594.531a5.963 5.963 0 01-.442 1.065l.752 1.504c.173.346.093.85-.18 1.122l-.426.425c-.273.274-.775.354-1.122.181l-1.504-.752c-.337.18-.693.328-1.065.442l-.531 1.594C9.1 15.701 8.687 16 8.3 16h-.6c-.388 0-.8-.298-.922-.666l-.531-1.594a5.963 5.963 0 01-1.065-.442l-1.504.752c-.346.173-.85.093-1.122-.18l-.425-.426c-.274-.273-.354-.775-.181-1.122l.752-1.504a5.963 5.963 0 01-.442-1.065L.666 9.222C.299 9.1 0 8.687 0 8.3v-.6c0-.388.298-.8.666-.922l1.594-.531c.114-.372.262-.728.442-1.065L1.95 3.678c-.173-.346-.093-.85.18-1.122l.426-.425c.273-.274.775-.354 1.122-.181l1.504.752z" fill="#00000" fill-rule="evenodd"></path></svg>
                            </PopoverTrigger>
                            <PopoverContent w={'15'}>
                                <PopoverArrow />
                                <PopoverCloseButton />
                                <PopoverHeader></PopoverHeader>
                                <PopoverBody fontWeight={'600'}>
                                    <Box _hover={{

                                        background: '#fef9f7'
                                    }} borderRadius={'0.2rem'} border={'1px solid transparent'} cursor={'pointer'} p={'0.2rem 1rem'}>External calendar settings</Box>
                                    <Box _hover={{
                                        background: '#fef9f7'
                                    }} borderRadius={'0.2rem'} border={'1px solid transparent'} cursor={'pointer'} p={'0.2rem 1rem'}> Connect Google Calendar</Box>
                                    <Box _hover={{

                                        background: '#fef9f7'
                                    }} borderRadius={'0.2rem'} border={'1px solid transparent'} cursor={'pointer'} p={'0.2rem 1rem'}>Connect Outlook Calendar</Box>
                                </PopoverBody>
                            </PopoverContent>
                        </Popover>
                        <HStack align={'center'}>

                            <Text>Views</Text>
                            {/* <BsFillCaretUpFill/> */}
                            <BsFillCaretDownFill style={{
                                display: 'inline',
                            }} />
                        </HStack>
                    </HStack>
                </HStack>
                <HStack w={'100%'}>
                    <VStack align={'flex-start'} w={'60%'}>
                        <Text fontSize={'1rem'} color={'gray'}>(No Project)</Text>
                        <Divider background={'black'} borderRadius={'5px'} height={'3.8px'} w={'100%'} />

                    </VStack>
                    <VStack align={'flex-start'} w={'35%'}>
                        <Text fontSize={'1rem'} color={'#9e5bd9'}>group</Text>
                        <Divider background={'#9e5bd9'} borderRadius={'5px'} height={'3.8px'} w={'100%'} />

                    </VStack>
                </HStack>
            </VStack>
            <HStack position={'sticky'} top={'13.55rem'} background={'white'} justify={'space-between'} w={'100%'} border={'1px solid red'}>
                <HStack border={'1px solid'} p={'0.4rem 0.8rem'} fontSize={'1.4rem'} color={'gray'} fontWeight={'700'}><Text>+ - </Text></HStack>
                <HStack className='Weeks' width={'94.5%'}>
                    {/* border: 1px solid;
    border-radius: 50%;
    width: 2.5rem;
    height: 2.6rem;
    background: ; */}
                    <HStack><Text fontSize={'1.8rem'}>{weekDate.date1[0] == 0 ? weekDate.date1[1] : weekDate.date1}</Text> <Text fontSizee={'1.1rem'}>Mon</Text></HStack>
                    <HStack><Text fontSize={'1.8rem'}>{weekDate.date2[0] == 0 ? weekDate.date2[1] : weekDate.date2}</Text> <Text fontSizee={'1.1rem'}>Tue</Text></HStack>
                    <HStack><Text fontSize={'1.8rem'}>{weekDate.date3[0] == 0 ? weekDate.date3[1] : weekDate.date3}</Text> <Text fontSizee={'1.1rem'}>Wed</Text></HStack>
                    <HStack><Text borderRadius={'50% !important'} w={'2.5rem !important'} h={'2.6rem'} background={'#fce8fa !important'} fontSize={'1.8rem'} >{weekDate.date4[0] == 0 ? weekDate.date4[1] : weekDate.date4}</Text> <Text fontSizee={'1.1rem'}>Thru</Text></HStack>
                    <HStack><Text fontSize={'1.8rem'}>{weekDate.date5[0] == 0 ? weekDate.date5[1] : weekDate.date5}</Text> <Text fontSizee={'1.1rem'}>Fri</Text></HStack>
                    <HStack><Text fontSize={'1.8rem'}>{weekDate.date6[0] == 0 ? weekDate.date6[1] : weekDate.date6}</Text> <Text fontSizee={'1.1rem'}>Sat</Text></HStack>
                    <HStack><Text fontSize={'1.8rem'}>{weekDate.date7[0] == 0 ? weekDate.date7[1] : weekDate.date7}</Text> <Text fontSizee={'1.1rem'}>Sun</Text></HStack>
                </HStack>
            </HStack>
            <HStack w={'100%'} border={'1px solid #ece5e5'} align={'flex-start'}>
                <VStack >
                    {Scheduletime.map((time) => {
                        return <Box mt={'0rem !important'} ml={'0rem !important'} p={'1.25rem 0rem'} w={'4rem'}><Text fontSize={'0.8rem'} fontWeight={'700'} color={'gray'} >{time}</Text></Box>
                    })}
                </VStack>
                {/* spacing='40px' */}
                <Modal
                    initialFocusRef={initialRef}
                    finalFocusRef={finalRef}
                    isOpen={isOpen}
                    onClose={onClose}
                >
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Create new Task</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody pb={4}>
                            <FormControl mt={1}>
                                <FormLabel>Task name</FormLabel>
                                <Input
                                    fontWeight={'700'}
                                    value={value}
                                    onChange={handleChange}
                                    placeholder="What you have done?"
                                />
                            </FormControl>
                            <HStack mt={'1rem'}>
                                <Box>
                                    <svg width="16" height="13" viewBox="0 0 16 13"><path fill="#7E6E85" fill-rule="evenodd" d="M0 6h16v4.994A2.001 2.001 0 0114.006 13H1.994A1.993 1.993 0 010 10.994V6zm0-4a2 2 0 012.004-2h3.05c1.107 0 2.004.895 2.004 2h6.935C15.102 2 16 2.895 16 4H0V2z"></path></svg>
                                </Box>
                                <Box>
                                    <svg class="e1x8mxgg1 css-1ihvt2w-Root-TriggerIcon eafgtu70" width="17" height="17" viewBox="0 0 17 17"><path d="M0 6.002c0 1.103.633 2.63 1.416 3.414l6.168 6.168a1.996 1.996 0 002.828.004l5.176-5.176c.78-.78.78-2.045-.004-2.828L9.416 1.416C8.634.634 7.113 0 6.002 0H1.998A1.993 1.993 0 000 1.998v4.004zM4 6a2 2 0 100-4 2 2 0 000 4z" fill="#7E6E85" fill-rule="evenodd"></path></svg>
                                </Box>
                                <Box>
                                    <BsCurrencyDollar fill="#7E6E85" style={{
                                        width: '19px',
                                        height: '19px'
                                    }} />
                                </Box>
                            </HStack>
                        </ModalBody>
                        <ModalFooter>
                            <Button colorScheme="pink" width={"100%"} onClick={handleSubmit}>
                                Create Project
                            </Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
                <SimpleGrid m={'0rem'} mt={'-1px'} w={'94%'} columns={[4, null, 7]} >
                    {
                        Scheduletime.map((time, t) => {
                            return daysGreed.map((day, d) => {
                                return (
                                    <Box _hover={{ 
                                        background: '#ece5e5 !important'
                                    }} display={'flex'} alignItems={'center'} justifyContent={'center'} h={'3.7rem'} onClick={() => {
                                        handleEvent({ time, day });
                                        onOpen();
                                    }} cursor={'pointer'} border={'0.1px solid #ece5e5 !important'}><Text>
                                            {
                                                showData?.map((ok) => {
                                                    // console.log(ok.time, ok.day, ok.task)
                                                    return ok.time != time ? '' : ok.day != day ? "" : ok.task;
                                                })
                                            }


                                        </Text></Box>
                                )
                            })
                        })
                    }

                </SimpleGrid>
            </HStack>
        </VStack>
    )
}

export default Timer