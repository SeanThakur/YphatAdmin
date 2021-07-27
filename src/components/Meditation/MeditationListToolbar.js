/* eslint-disable */ 
import {
  Box,
  Button
} from '@material-ui/core';
import React from 'react'
import { useNavigate } from 'react-router';

const MeditationListToolbar = (props) => {

  const navigate = useNavigate()

  const handleRoute = () => {
    navigate('/app/post/meditation')
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
          Add Meditation Class
        </Button>
      </Box>
    </Box>
  )
}

export default MeditationListToolbar

