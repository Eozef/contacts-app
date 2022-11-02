import {
  Center,
  flexbox,
  GridItem,
  Input,
  VStack,
  IconButton,
  InputGroup,
  InputRightElement,
  Stack,
  Wrap,
  WrapItem,
  Avatar,
  AvatarBadge,
  HStack,
  hover,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";
import { Card } from "../components/Card";

const Index = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const run = async () => {
      await fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => setData(data));
    };
    run();
  }, []);

  return (
    //background
    <div
      style={{
        backgroundColor: "darkblue",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          width: "40%",
          borderRadius: "25px",
          padding: "40px",
        }}
      >
        <Center>
          <h1>
            <strong>Contacts</strong>
          </h1>
        </Center>

        <VStack spacing={5} paddingY="20px" align="start">
          <InputGroup>
            <InputRightElement pointerEvents="none">
              {/* Implement a feature to filter the array and list the contacts */}
              {}
              <SearchIcon />
            </InputRightElement>

            <Input type="search" placeholder="Search" />
          </InputGroup>

          {/* 
            1. Map through the array and list the contact, by name
            2. Make it hover and clickable feel, background

         */}
          <div>
            {data.map((contactList) => (
              <Card
                key={contactList.id}
                name={contactList.name}
                username={contactList.username}
                email={contactList.email}
                address={`${contactList.address.suite} ${contactList.address.street} ${contactList.address.city} ${contactList.address.zipcode}`}
                phone={contactList.phone}
                website={contactList.website}
                // street={contactList.address.street}
              />
            ))}
          </div>
        </VStack>
      </div>
    </div>
  );
};

export default Index;
