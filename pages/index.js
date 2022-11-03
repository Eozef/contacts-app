import {
  Center,
  Input,
  VStack,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useEffect, useState,useMemo } from "react";
import { Card } from "../components/Card";

const Index = () => {
  const [data, setData] = useState([]);
  const [filterText, setFilterText] = useState('');
  useEffect(() => {
    const run = async () => {
      await fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => setData(data));
    };
    run();
  }, []);

  const filteredData = useMemo(() => {
    return data.filter(item => item.name.includes(filterText))
  }, [data, filterText])

  return (
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
          minWidth:'50%',
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
              <SearchIcon />
            </InputRightElement>

            <Input type="search" placeholder="Search" onChange={event => setFilterText(event.target.value)} />
          </InputGroup>

          <div>
            {filteredData.map((contactList) => (
              <Card
                key={contactList.id}
                name={contactList.name}
                username={contactList.username}
                email={contactList.email}
                address={`${contactList.address.suite} ${contactList.address.street} ${contactList.address.city} ${contactList.address.zipcode}`}
                phone={contactList.phone}
                website={contactList.website}
              />
            ))}
          </div>
        </VStack>
      </div>
    </div>
  );
};

export default Index;
