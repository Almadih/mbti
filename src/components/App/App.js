import React from 'react';
import {
  ChakraProvider,
  theme,
  Grid,
  Box,
  Flex
} from '@chakra-ui/react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from '../Home';
import Type from '../Type';
import { ColorModeSwitcher } from '../DarkModeSwitcher/ColorModeSwitcher';
import BackButton from '../BackButton';
function App() {

  return (
    <Router>

      <ChakraProvider theme={theme}>
        <Box textAlign="center" fontSize="xl">
          <Grid minH="100vh" p={3}>
            <Flex justifyContent={'space-between'}>

            <BackButton/>
            <ColorModeSwitcher justifySelf="flex-end" />
                  </Flex>
            <Routes>
              <Route path="/type/:type" element={<Type />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </Grid>
        </Box>

      </ChakraProvider>
    </Router>
  );
}

export default App;
