import { Box, Button, HStack, Text } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'

const Standup = () => {
    const timerId = useRef(null);
    const [time, setTime] = useState({
        sec: 0,
        min: 0,
        hr: 0
    });
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

    }
    useEffect(() => {
        handlePlay();
    }, [])
    const handlePause = () => {
        clearInterval(timerId.current);
        reset();
        timerId.current = null;

    }

    return (
        <HStack style={{
            background: 'white',
            borderRadius: '5px',
            color: 'black',
            boxShadow: '2em 4em 6em -2em rgba(0,0,0,.5)'
        }} w='97%' p={'0.5rem 1rem'} h={'5rem'} justify={'space-around'}  >
            <Text fontSize={'lg'} fontWeight={'bold'}>Stand up meeting</Text>
            <HStack>

                <Text><Box w={'5.2rem'} fontSize={'1.2rem'} fontWeight={'600'}>
                    {`${time.hr < 10 ? 0 : ""}${time.hr}:${time.min < 10 ? 0 : ""}${time.min}:${time.sec < 10 ? 0 : ""}${time.sec}`}
                </Box></Text>
                <Button className='buttonAni'
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
            </HStack>

        </HStack>
    )
}

export default Standup