import { useState } from "react";
import { Box, Button, Container, FormControl, FormLabel, Heading, Input, Textarea, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const NewPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = { title, content };

    // Save the new post to localStorage or send it to a server
    const savedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    savedPosts.push(newPost);
    localStorage.setItem("posts", JSON.stringify(savedPosts));

    navigate("/");
  };

  return (
    <Container maxW="container.md" p={4}>
      <VStack spacing={8} align="stretch">
        <Box p={6} boxShadow="md" borderRadius="md" bg="white">
          <Heading as="h2" size="lg" mb={4}>Create a New Post</Heading>
          <form onSubmit={handleSubmit}>
            <FormControl id="title" mb={4}>
              <FormLabel>Title</FormLabel>
              <Input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </FormControl>
            <FormControl id="content" mb={4}>
              <FormLabel>Content</FormLabel>
              <Textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
              />
            </FormControl>
            <Button type="submit" colorScheme="teal" size="md">Submit</Button>
          </form>
        </Box>
      </VStack>
    </Container>
  );
};

export default NewPost;