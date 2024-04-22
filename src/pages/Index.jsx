// Square Root Game using Chakra UI and React Icons
import { useState } from "react";
import { Box, Button, Container, Input, Text, VStack, useToast, Heading, Image } from "@chakra-ui/react";
import { FaSquareRootAlt } from "react-icons/fa";

const Index = () => {
  const [number, setNumber] = useState("");
  const [userAnswer, setUserAnswer] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const toast = useToast();

  const generateNewNumber = () => {
    const newNumber = Math.floor(Math.random() * 100) + 1;
    setNumber(newNumber);
    setCorrectAnswer(Math.sqrt(newNumber).toFixed(2));
    setUserAnswer("");
  };

  const checkAnswer = () => {
    if (userAnswer === correctAnswer) {
      toast({
        title: "Correct!",
        description: "You've got the right answer!",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Incorrect!",
        description: `The correct answer was ${correctAnswer}`,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
    generateNewNumber();
  };

  return (
    <Container centerContent p={4}>
      <VStack spacing={8}>
        <Heading as="h1" size="xl">
          Square Root Game
        </Heading>
        <Image src="https://images.unsplash.com/photo-1509869175650-a1d97972541a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtYXRoJTIwZ2FtZXxlbnwwfHx8fDE3MTM3OTMxMjB8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Math Game" boxSize="150px" />
        <Text fontSize="xl">
          Guess the square root of the number: <strong>{number}</strong>
        </Text>
        <Box>
          <Input placeholder="Enter square root" value={userAnswer} onChange={(e) => setUserAnswer(e.target.value)} size="md" />
          <Button leftIcon={<FaSquareRootAlt />} colorScheme="teal" onClick={checkAnswer} ml={2}>
            Check Answer
          </Button>
        </Box>
        <Button colorScheme="blue" onClick={generateNewNumber}>
          Generate New Number
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;
