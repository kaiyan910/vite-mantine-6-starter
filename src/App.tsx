import { Container, Flex, Text, Image } from '@mantine/core';
import react from './assets/react.svg';
import vite from './assets/vite.svg';

function App() {
  return (
    <Container size="md" h="100vh" fluid>
      <Flex justify="center" align="center" h="100%" direction="column" gap="xl">
        <Flex justify="center" align="center" direction="row" gap="md">
          <Image width="5rem" mx="auto" src={react} alt="Logo of React.JS" />
          <Image width="5rem" mx="auto" src={vite} alt="Logo of Vite.JS" />
        </Flex>
        <Text
          variant="gradient"
          gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}
          sx={{ fontFamily: 'Greycliff CF, sans-serif' }}
          ta="center"
          fz="xl"
          fw={700}
        >
          Template for Vite + React + Mantine v6
        </Text>
      </Flex>
    </Container>
  );
}

export default App;
