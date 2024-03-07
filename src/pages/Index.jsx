import React from "react";
import { Box, Heading, Text, Button, Stack, Image, Container, SimpleGrid, Link } from "@chakra-ui/react";
import { FaTicketAlt, FaSpotify, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

const Index = () => {
  const tourDates = [
    { date: "June 15", venue: "Madison Square Garden", city: "New York, NY" },
    { date: "June 20", venue: "Staples Center", city: "Los Angeles, CA" },
    { date: "June 25", venue: "United Center", city: "Chicago, IL" },
    { date: "July 2", venue: "TD Garden", city: "Boston, MA" },
  ];

  return (
    <Box>
      <Box bgImage="https://images.unsplash.com/photo-1521337581100-8ca9a73a5f79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyb2NrJTIwYmFuZCUyMHBlcmZvcm1pbmclMjBvbiUyMHN0YWdlfGVufDB8fHx8MTcwOTc5ODU3MHww&ixlib=rb-4.0.3&q=80&w=1080" bgPosition="center" bgSize="cover" h="100vh" display="flex" alignItems="center">
        <Container maxW="container.lg">
          <Heading as="h1" size="4xl" color="white" mb={4}>
            The Rockstars World Tour
          </Heading>
          <Text fontSize="xl" color="white" mb={8}>
            Get ready for an unforgettable night of rock music!
          </Text>
          <Button leftIcon={<FaTicketAlt />} size="lg" colorScheme="red" as={Link} href="#tickets">
            Get Tickets
          </Button>
        </Container>
      </Box>

      <Box py={20}>
        <Container maxW="container.lg">
          <Heading as="h2" size="2xl" mb={10} textAlign="center">
            Upcoming Tour Dates
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            {tourDates.map((date, index) => (
              <Box key={index} p={6} boxShadow="md" rounded="md">
                <Heading as="h3" size="lg" mb={2}>
                  {date.date}
                </Heading>
                <Text fontSize="xl">{date.venue}</Text>
                <Text fontSize="md" color="gray.500">
                  {date.city}
                </Text>
                <Button mt={4} colorScheme="red" as={Link} href="#tickets">
                  Get Tickets
                </Button>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      <Box bg="gray.100" py={20}>
        <Container maxW="container.lg" textAlign="center">
          <Heading as="h2" size="2xl" mb={10}>
            Connect with Us
          </Heading>
          <Stack direction="row" spacing={8} justify="center">
            <Link href="#" isExternal>
              <FaSpotify size={32} />
            </Link>
            <Link href="#" isExternal>
              <FaInstagram size={32} />
            </Link>
            <Link href="#" isExternal>
              <FaTwitter size={32} />
            </Link>
            <Link href="#" isExternal>
              <FaFacebook size={32} />
            </Link>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;
