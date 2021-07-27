/* eslint-disable */ 
import {
  Box,
  Button
} from '@material-ui/core';
import React from 'react'
import { useNavigate } from 'react-router';

const VeganShopListToolbar = (props) => {

  const navigate = useNavigate()

  const handleRoute = () => {
    navigate('/app/post/shop')
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
          Add Vegan Shop
        </Button>
      </Box>
    </Box>
  )
}

export default VeganShopListToolbar

  