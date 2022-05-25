import React from 'react'
import {IconButton, Spacer} from '@chakra-ui/react'
import { FaArrowLeft } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

export default function BackButton() {
    const location = useLocation();
  return (
      <>
      {location.pathname === '/' ? <Spacer/> :
    <IconButton

    marginBottom={"10"}
    size="md"
    fontSize="lg"
    variant="ghost"
    color="current"
    marginLeft="2"
    icon={<FaArrowLeft/>}
    onClick={() => window.history.back()}
    />
}
</>
  )
}
