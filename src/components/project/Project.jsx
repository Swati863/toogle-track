import React, { useState, useEffect } from "react";
import axios from "axios";
import style from "./project.module.css";
import {
  Select,
  Stack,
  FormControl,
  FormLabel,
  Input,
  Button,
  Center,
  HStack,
  VStack,
  Text,
} from "@chakra-ui/react";
import {
  IoIosPerson,
  IoLogoUsd,
  IoIosPeople,
  IoMdListBox,
  IoMdSwitch,
  IoMdArrowDropdown,
} from "react-icons/io";
import { FaFirstOrderAlt } from "react-icons/fa";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Switch,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";

import { AiFillDelete, AiOutlineConsoleSql } from "react-icons/ai";
import Sidebar from "../Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { getProjectAPI, postProjectAPI, removeProjectAPI } from "../../store/projects/project.action";

const Project = () => {
  var token = localStorage.getItem("token");

  const dispatch = useDispatch();
  const projectData = useSelector((project) => project.projectData.data);

  console.log(projectData)

  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const [update, setUpdate] = useState(1)

  const [data, setData] = useState({
    projectName: "",
    client: "",
    private: false
  });



  const handleChange = (e) => {
    const { name, value, checked } = e.target
    let update = checked ? checked : value
    setData({ ...data, [name]: update })
  }


  const handleSubmit = () => {
    setUpdate((prev) => prev + 1)
    dispatch(postProjectAPI(data))
    onClose();
  };

  const handleDelete = (id) => {
    dispatch(removeProjectAPI(id))
  }

  useEffect(() => {
    dispatch(getProjectAPI())
  }, [dispatch])



  return (
    <HStack>
      <Sidebar />
      <div width={'88%'} marginLeft={'11rem'} className={style.container} >
        <div className={style.top1}>
          <p>Projects</p>
          <button className={style.newBtn} onClick={onOpen}>
            + New Project
          </button>
          <Modal
            initialFocusRef={initialRef}
            finalFocusRef={finalRef}
            isOpen={isOpen}
            onClose={onClose}
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Create new project</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                <FormControl>
                  <FormLabel>Name</FormLabel>
                  <Input
                    name="projectName"
                    placeholder="Project name"
                    onChange={handleChange}
                  />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Client name</FormLabel>
                  <Input
                    placeholder="Client"
                    name="client"
                    onChange={handleChange}
                  />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Template</FormLabel>
                  <Input placeholder="Template" />
                </FormControl>

                <FormControl
                  mt={4}
                  display="flex"
                  alignItems="center"
                  justifyContent={"space-between"}
                >
                  <FormLabel>Private</FormLabel>
                  <Switch id="email-alerts" name="private" onChange={handleChange} colorScheme={"pink"} />
                </FormControl>
              </ModalBody>

              <ModalFooter>
                <Button colorScheme="pink" width={"100%"} onClick={handleSubmit}>
                  Create Project
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </div>

        <div className={style.top2}>
          <Stack
            spacing={3}
            border={"1px solid grey"}
            width="121px"
            padding={"5px"}
            borderRadius="10px"
          >
            <Select placeholder="Show active" variant="unstyled" width="121px">
              <option value="Active">Active</option>
              <option value="Archived">Archived</option>
              <option value="Both">Both</option>
            </Select>
          </Stack>

          <div className={style.filter}>
            Filter by:
            <div>
              {" "}
              <IoIosPerson style={{ marginTop: "4px" }} />
              Client
            </div>
            <div>
              <IoIosPeople style={{ marginTop: "4px" }} />
              Team
            </div>
            <div>
              {" "}
              <IoLogoUsd style={{ marginTop: "4px" }} />
              Billable
            </div>
            <div>
              <IoMdListBox style={{ marginTop: "4px" }} />
              Project name
            </div>
          </div>
        </div>

        <div className={style.top3}>
          <div>
            <button className={style.bulkBtn}>
              {" "}
              <IoMdSwitch style={{ marginTop: "4px" }} />
              Bulk edit
            </button>
          </div>

          <div className={style.title}>
            <div>
              PROJECT <IoMdArrowDropdown style={{ marginTop: "4px" }} />
            </div>
            <div>
              CLIENT <IoMdArrowDropdown style={{ marginTop: "4px" }} />
            </div>
            <div>
              PROJECT CREATED DATE <IoMdArrowDropdown style={{ marginTop: "4px" }} />
            </div>
            <div>
              BILLABLE STATUS <IoMdArrowDropdown style={{ marginTop: "4px" }} />
            </div>
            <div>
              DELETE <IoMdArrowDropdown style={{ marginTop: "4px" }} />
            </div>
          </div>
        </div>
        <div>
          {projectData.length > 0 &&
            projectData?.map((item) => (
              <HStack justify={'start'} gap="7%" className={style.map} border={'1px solid'}>
                <HStack w={"10rem"} pl="3rem" style={{ display: "flex", gap: "5px" }} key={item.id}>
                  {" "}
                  <FaFirstOrderAlt
                    style={{ marginTop: "4px", marginLeft: "-20%" }}
                  />{" "}
                  <Text> {item.projectName}{" "}</Text>
                </HStack>
                <HStack textAlign={'start'} width={'9rem'} ><Text>{item.client}</Text></HStack>
                <HStack textAlign={'start'} width={'12rem'} ><Text>{item.created_at.split("T")[0]}</Text></HStack>
                <HStack textAlign={'center'} width={'10rem'} ><Text> 0</Text> </HStack>

                <Center>
                  <AiFillDelete onClick={() => handleDelete(item._id)}
                  />
                </Center>
              </HStack>
            ))}
        </div>
      </div>
    </HStack>
  );
};

export default Project;