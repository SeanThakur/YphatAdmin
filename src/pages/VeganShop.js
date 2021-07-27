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
import { Search as SearchIcon } from 'react-feather';import VeganShopListToolbar from 'src/components/VeganShop/VeganShopListToolbar';
import VeganShopCard from 'src/components/VeganShop/VeganShopCard';
import React, {useEffect, useState} from 'react'
import { useDispatch , useSelector} from "react-redux";
import { getAllVeganShops } from 'src/feature/actions';

const VeganShop = () => {

  const dispatch = useDispatch();
  const [searchField, setSearchField] = useState('')
  const [searchResult, setSearchResult] = useState([])

  const veganShopInfo = useSelector(state => state.veganShopInfo);

  const {
    VeganShopAllDetails
  } = veganShopInfo;

  const handleSearchChange = (e) => {
    setSearchField(e.target.value)
    if(searchField !== '') {
      let newSearchUserResult = VeganShopAllDetails.filter((veganShop) => Object.values(veganShop).join(" ").toLowerCase().includes(searchField.toLowerCase()))
      setSearchResult(newSearchUserResult)
    }else {
      setSearchResult(VeganShopAllDetails)
    }
  }

  useEffect(() => {
    dispatch(getAllVeganShops());
  }, [dispatch])

  return (
      <>
        <Helmet>
          <title>VeganShop | Ypath</title>
        </Helmet>
        <Box
          sx={{
            backgroundColor: 'background.default',
            minHeight: '100%',
            py: 3
          }}
        >
          <Container maxWidth={false}>
            <VeganShopListToolbar />
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
                {(searchField.length < 1 ? VeganShopAllDetails : searchResult)?.map((temple) => (
                  <Grid
                    item
                    key={temple._id}
                    lg={4}
                    md={6}
                    xs={12}
                  >
                    <VeganShopCard data={temple} />
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

export default VeganShop