import React from 'react';
import {
    Box,
    Flex,
    Image,
    Center,
    LinkBox,
} from '@chakra-ui/react';
import { personalityTypes } from '../../data';
import { Link } from 'react-router-dom';
function Home() {

    return (
        <>
            <Flex wrap="wrap" justifyContent="center">
                {personalityTypes.map(personalityType => (

                    <Center key={personalityType.code} >
                        <LinkBox marginBottom="10" p="6" marginLeft="2.5" borderWidth="1px" marginRight="2.5" boxShadow="md" maxW='sm' borderRadius='lg' overflow='hidden' key={personalityType.code}>
                            <Link to={`/type/${personalityType.code.toLowerCase()}`}>
                                <Image src={require(`../../assets/images/${personalityType.image}`)} boxSize="200" alt={personalityType.name} />
                                <Box p='6'>
                                    <Box
                                        fontWeight='semibold'
                                        letterSpacing='wide'
                                        textTransform='uppercase'
                                        display='flex'
                                        alignItems='baseline'>

                                        {personalityType.code}

                                        <Box
                                            color='gray.500'
                                            fontWeight='semibold'
                                            letterSpacing='wide'
                                            fontSize='xs'
                                            textTransform='uppercase'
                                            ml='2'
                                        >
                                            {personalityType.name}

                                        </Box>
                                    </Box>
                                </Box>
                            </Link>
                        </LinkBox>
                    </Center>
                ))}
            </Flex>
        </>
    );
}

export default Home;
