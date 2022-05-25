import React from 'react';
import {
  Alert,
  AlertIcon,
  Table,
  Tr,
  Td,
  Tbody,
  TableContainer,
  Box,
  Progress,
  Center,
  Stack,
  Text
} from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { personalityTypes } from '../../data';
export default function Type() {
  const { type } = useParams();
  const personalityType = personalityTypes.find(
    personalityType => personalityType.code.toLowerCase() === type
  );

  const getProgressBarColor = (percentage) => {
    if (percentage <= 20) {
        return 'red';
    } else if (percentage <= 40) {
        return 'yellow';
    } else if (percentage <= 60) {
        return 'orange';

    }else if (percentage <= 80) {
        return 'green';
    }
    return 'blue';
    }
  return (
    <>
      <Stack spacing={10}>
        <Box>
          <Center>
            <Box
              fontWeight="bold"
              letterSpacing="wide"
              textTransform="uppercase"
              display="flex"
              fontSize={'4xl'}
              alignItems="baseline"
            >
              {personalityType.code}

              <Box
                color="gray.500"
                fontWeight="semibold"
                letterSpacing="wide"
                fontSize="3xl"
                textTransform="uppercase"
                ml="2"
              >
                {personalityType.name}
              </Box>
            </Box>
          </Center>
          <TableContainer>
            <Table variant="simple" size={'lg'}>
              <Tbody>
                {personalityType?.compatibility
                  ?.sort((a, b) => (a.score > b.score ? -1 : 1))
                  .map((type, i) => (
                    <Tr key={i}>
                      <Td width={2}>
                        <Text textTransform="uppercase">{type.code}</Text>
                      </Td>
                      <Td>
                        <Progress colorScheme={getProgressBarColor(type.score)} value={type.score} size="lg" />
                      </Td>
                    </Tr>
                  ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
        <Center>
          <Alert status="warning" variant={'left-accent'}>
            <AlertIcon />
            Please don't make real-life decisions based on this!
          </Alert>
        </Center>
      </Stack>
    </>
  );
}
