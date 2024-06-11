import React, { useState } from "react";
import { Box, Button, Container, FormControl, FormLabel, Heading, Input, Textarea, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = { title, content };
    const existingPosts = JSON.parse(localStorage.getItem("posts")) || [];
    localStorage.setItem("posts", JSON.stringify([...existingPosts, newPost]));
    navigate("/");
  };

  return (
    <Container maxW="container.md" p={4}>
      <VStack spacing={8} align="stretch">
        <Box bg="teal.500" p={6} borderRadius="md" color="white">
          <Heading as="h1" size="xl">Add a New Post</Heading>
        </Box>

        <Box p={6} boxShadow="md" borderRadius="md" bg="white">
          <form onSubmit={handleSubmit}>
            <VStack spacing={4} align="stretch">
              <FormControl isRequired>
                <FormLabel>Title</FormLabel>
                <Input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Content</FormLabel>
                <Textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />
              </FormControl>
              <Button type="submit" colorScheme="teal" size="lg">Add Post</Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </Container>
  );
};

export default AddPost;