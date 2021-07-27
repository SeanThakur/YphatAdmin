/* eslint-disable */ 
import {
  Box,
  Button
} from '@material-ui/core';
import { useNavigate } from "react-router-dom";
import React from 'react'

const CharityListToolbar = (props) => {

  const navigate = useNavigate()

  const handleRoute = () => {
    navigate('/app/post/charity')
  }

  return (
    <Box {...props}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end'
        }}
      >
        <Button
          color="primary"
          variant="contained"
          onClick={handleRoute}
        >
          Add Charity
        </Button>
      </Box>
    </Box>
  )
}

export default CharityListToolbar

