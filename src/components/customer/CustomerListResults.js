/* eslint-disable */ 
// import { useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Avatar,
  Box,
  Card,
  // Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  // TablePagination,
  TableRow,
  Typography
} from '@material-ui/core';
import getInitials from 'src/utils/getInitials';
import { useDispatch } from "react-redux";
import { setUserStatus } from 'src/feature/actions';

const CustomerListResults = ({ customers, ...rest }) => {
  const dispatch = useDispatch();

  // const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
  // const [limit, setLimit] = useState(10);
  // const [page, setPage] = useState(0);

  // const handleSelectAll = (event) => {
  //   let newSelectedCustomerIds;

  //   if (event.target.checked) {
  //     newSelectedCustomerIds = customers.map((customer) => customer.id);
  //   } else {
  //     newSelectedCustomerIds = [];
  //   }

  //   setSelectedCustomerIds(newSelectedCustomerIds);
  // };

  // const handleSelectOne = (event, id) => {
  //   const selectedIndex = selectedCustomerIds.indexOf(id);
  //   let newSelectedCustomerIds = [];

  //   if (selectedIndex === -1) {
  //     newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds, id);
  //   } else if (selectedIndex === 0) {
  //     newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds.slice(1));
  //   } else if (selectedIndex === selectedCustomerIds.length - 1) {
  //     newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds.slice(0, -1));
  //   } else if (selectedIndex > 0) {
  //     newSelectedCustomerIds = newSelectedCustomerIds.concat(
  //       selectedCustomerIds.slice(0, selectedIndex),
  //       selectedCustomerIds.slice(selectedIndex + 1)
  //     );
  //   }

  //   setSelectedCustomerIds(newSelectedCustomerIds);
  // };

  // const handleLimitChange = (event) => {
  //   setLimit(event.target.value);
  // };

  // const handlePageChange = (event, newPage) => {
  //   setPage(newPage);
  // };

  const handleStatus = (id, name, status) => {
    window.alert(`Are you sure you want to change the status of ${name}`)
    dispatch(setUserStatus(id, !status))
    window.location.reload();
  }

  return (
    <Card {...rest}>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead>
              <TableRow>
                {/* <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedCustomerIds.length === customers.length}
                    color="primary"
                    indeterminate={
                      selectedCustomerIds.length > 0
                      && selectedCustomerIds.length < customers.length
                    }
                    onChange={handleSelectAll}
                  />
                </TableCell> */}
                <TableCell>
                  Full Name
                </TableCell>
                <TableCell>
                  Email
                </TableCell>
                <TableCell>
                  Phone
                </TableCell>
                <TableCell>
                  Status
                </TableCell>
                <TableCell>
                  Role
                </TableCell>
                <TableCell>
                  Registration date
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {customers?.map((customer) => (
                <TableRow
                  hover
                  key={customer._id}
                  // selected={selectedCustomerIds.indexOf(customer._id) !== -1}
                >
                  {/* <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedCustomerIds.indexOf(customer._id) !== -1}
                      onChange={(event) => handleSelectOne(event, customer._id)}
                      value="true"
                    />
                  </TableCell> */}
                  <TableCell>
                    <Box
                      sx={{
                        alignItems: 'center',
                        display: 'flex'
                      }}
                    >
                      <Avatar
                        src={customer.avatarUrl}
                        sx={{ mr: 2 }}
                      >
                        {getInitials(customer.firstName)}
                      </Avatar>
                      <Typography
                        color="textPrimary"
                        variant="body1"
                      >
                        {customer.firstName + " " + customer.lastName}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    {customer.email}
                  </TableCell>
                  <TableCell>
                    {customer.phone}
                  </TableCell>
                  <TableCell>
                    <Box 
                      onClick={() => handleStatus(customer._id, customer.firstName, customer.active)}
                      sx={{
                        cursor: 'pointer'
                      }}
                    >
                      <Typography
                        color="textPrimary"
                        variant="body1"
                      >
                        {customer.active === true ? 'Activated': 'Deactivated'}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    User
                  </TableCell>
                  <TableCell>
                    {moment(customer.createdAt).format('DD/MM/YYYY')}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      {/* <TablePagination
        component="div"
        count={customers.length}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      /> */}
    </Card>
  );
};

CustomerListResults.propTypes = {
  customers: PropTypes.array.isRequired
};

export default CustomerListResults;
