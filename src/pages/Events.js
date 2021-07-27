/* eslint-disable */ 
import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Grid,
  Pagination,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon
} from '@material-ui/core';
import { Search as SearchIcon } from 'react-feather';
import EventsListToolbar from 'src/components/Events/EventsListToolbar';
import EventsCard from 'src/components/Events/EventsCard';
import React, {useEffect, useState} from 'react'
import { useDispatch , useSelector} from "react-redux";
import { getAllEvents } from 'src/feature/actions';

const Events = () => {

  const dispatch = useDispatch();
  const [searchField, setSearchField] = useState('')
  const [searchResult, setSearchResult] = useState([])

  const EventsInfo = useSelector(state => state.EventsInfo);

  const {
    eventsAllDetails
  } = EventsInfo;

  const handleSearchChange = (e) => {
    setSearchField(e.target.value)
    if(searchField !== '') {
      let newSearchUserResult = eventsAllDetails.filter((events) => Object.values(events).join(" ").toLowerCase().includes(searchField.toLowerCase()))
      setSearchResult(newSearchUserResult)
    }else {
      setSearchResult(eventsAllDetails)
    }
  }

  useEffect(() => {
    dispatch(getAllEvents());
  }, [dispatch])

  return (
      <>
        <Helmet>
          <title>Events | Ypath</title>
        </Helmet>
        <Box
          sx={{
            backgroundColor: 'background.default',
            minHeight: '100%',
            py: 3
          }}
        >
          <Container maxWidth={false}>
            <EventsListToolbar />
            <Box sx={{ mt: 3 }}>
              <Card>
                <CardContent>
                  <Box sx={{ maxWidth: '100%' }}>
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
            <Box sx={{ pt: 3 }}>
              <Grid
                container
                spacing={3}
              >
                {(searchField.length < 1 ? eventsAllDetails : searchResult)?.map((temple) => (
                  <Grid
                    item
                    key={temple._id}
                    lg={4}
                    md={6}
                    xs={12}
                  >
                    <EventsCard data={temple} />
                  </Grid>
                ))}
              </Grid>
            </Box>
            {/* <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                pt: 3
              }}
            >
              <Pagination
                color="primary"
                count={3}
                size="small"
              />
            </Box> */}
          </Container>
        </Box>
      </>
  )
}

export default Events