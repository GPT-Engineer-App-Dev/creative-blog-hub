import { Box, Container, Heading, Text, VStack, HStack, IconButton } from "@chakra-ui/react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.lg" p={4}>
      <VStack spacing={8} align="stretch">
        <Box bg="teal.500" p={6} borderRadius="md" color="white">
          <Heading as="h1" size="xl">Welcome to My Blog</Heading>
          <Text fontSize="lg">Insights, stories, and ideas.</Text>
        </Box>

        <Box p={6} boxShadow="md" borderRadius="md" bg="white">
          <Heading as="h2" size="lg" mb={4}>Latest Posts</Heading>
          <VStack spacing={4} align="stretch">
            <Box p={4} borderWidth={1} borderRadius="md">
              <Heading as="h3" size="md">Post Title 1</Heading>
              <Text mt={2}>This is a short summary of the first blog post.</Text>
            </Box>
            <Box p={4} borderWidth={1} borderRadius="md">
              <Heading as="h3" size="md">Post Title 2</Heading>
              <Text mt={2}>This is a short summary of the second blog post.</Text>
            </Box>
            <Box p={4} borderWidth={1} borderRadius="md">
              <Heading as="h3" size="md">Post Title 3</Heading>
              <Text mt={2}>This is a short summary of the third blog post.</Text>
            </Box>
          </VStack>
        </Box>

        <Box p={6} boxShadow="md" borderRadius="md" bg="white">
          <Heading as="h2" size="lg" mb={4}>About Me</Heading>
          <Text mb={4}>
            Hello! I'm a passionate writer and developer who loves to share knowledge and insights on various topics. Follow me on social media to stay updated!
          </Text>
          <HStack spacing={4}>
            <IconButton as="a" href="https://twitter.com" aria-label="Twitter" icon={<FaTwitter />} />
            <IconButton as="a" href="https://linkedin.com" aria-label="LinkedIn" icon={<FaLinkedin />} />
            <IconButton as="a" href="https://github.com" aria-label="GitHub" icon={<FaGithub />} />
          </HStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;