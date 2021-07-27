/* eslint-disable */ 
import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon
} from '@material-ui/core';
import React, {useEffect, useState} from 'react'
import { useDispatch , useSelector} from "react-redux";
import { getAllUsers } from 'src/feature/actions';
import CustomerListResults from 'src/components/customer/CustomerListResults';
import { Search as SearchIcon } from 'react-feather';

const Dashboard = () => {

  const [searchField, setSearchField] = useState('')
  const [searchResult, setSearchResult] = useState([])

  const dispatch = useDispatch();
  const fetchedUser = useSelector(state => state.fetchedUser)
  const {
    isLoad, users
  } = fetchedUser

  useEffect(() => {
    dispatch(getAllUsers())
  }, [dispatch])

  const handleSearchChange = (e) => {
    setSearchField(e.target.value)
    if(searchField !== '') {
      let newSearchUserResult = users.filter((user) => Object.values(user).join(" ").toLowerCase().includes(searchField.toLowerCase()))
      setSearchResult(newSearchUserResult)
    }else {
      setSearchResult(users)
    }
  }

  return (
    <>
      <Helmet>
        <title>Dashboard | Yapth</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 3
        }}
      >
        <Container maxWidth={false}>
            <Box sx={{ my: 3 }}>
              <Card>
                <CardContent>
                  <Box>
                    <TextField
                      fullWidth
                      value={searchField}
                      onChange={handleSearchChange}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <SvgIcon
                              fontSize="small"
                              color="action"
                            >
                              <SearchIcon />
                            </SvgIcon>
                          </InputAdornment>
                        )
                      }}
                      placeholder="Search..."
                      variant="outlined"
                    />
                  </Box>
                </CardContent>
              </Card>
            </Box>
          <CustomerListResults customers={searchField.length < 1 ? users : searchResult} />
        </Container>
      </Box>
    </>
  )
}

export default Dashboard

