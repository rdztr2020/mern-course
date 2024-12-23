import {
  Button,
  Container,
  Flex,
  HStack,
  Text,
  useColorMode,
  useColorModeValue
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { PlusSquareIcon } from "@chakra-ui/icons";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container maxW={"1440px"} px={4}>
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{
          base: "row",
          sm: "row",
        }}
      >
        <Text
          fontSize={{ base: "30", sm: "30" }}
          fontWeight={"bold"}
          textTransform={"uppercase"}
          textAlign={"center"}
        ></Text>
          
        <Text
          fontSize={{ base: "30", sm: "30" }}
          fontWeight={"bold"}
          textTransform={"uppercase"}
          textAlign={"center"}
          bg={useColorModeValue("black", "white")}
          //bgGradient={"linear(to-r, black, black)"}
          bgClip={"text"}
        >
          <Link to={"/"}>4 SALE 💎</Link>
        </Text>

        <HStack spacing={2} alignItems={"center"}>
          <Link to={"/create"}id="link">
            <Button aria-label="new product page">
              <PlusSquareIcon fontSize={20} />
            </Button>
          </Link>
          <Button onClick={toggleColorMode} aria-label="change dark light mode">
            {colorMode === "light" ? <IoMoon /> : <LuSun size="20" />}
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
};
export default Navbar;