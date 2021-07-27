/* eslint-disable */ 
import { useDispatch } from "react-redux";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Box,
  Drawer,
  Hidden,
  List,
} from '@material-ui/core';
import {
  BarChart as BarChartIcon,
  Lock as LockIcon,
  Settings as SettingsIcon,
  ShoppingCart as ShoppingBagIcon,
  Activity,
  Compass,
  DollarSign,
  BellOff,
  Server,
  User
} from 'react-feather';

import NavItem from './NavItem';
import { setLogout } from 'src/feature/actions';

const items = [
  {
    href: '/app/dashboard',
    icon: BarChartIcon,
    title: 'Dashboard'
  },
  {
    href: '/app/charity',
    icon: DollarSign,
    title: 'Charity'
  },
  {
    href: '/app/temple',
    icon: Server,
    title: 'Buddist Temple'
  },
  {
    href: '/app/meditation',
    icon: BellOff,
    title: 'Buddist Meditation'
  },
  {
    href: '/app/travel',
    icon: Compass,
    title: 'Tours / Travel'
  },
  {
    href: '/app/events',
    icon: Activity,
    title: 'Events / Activities'
  },
  {
    href: '/app/shop',
    icon: ShoppingBagIcon,
    title: 'Vegan Shop'
  },
  {
    href: '/app/settings',
    icon: SettingsIcon,
    title: 'Settings'
  },
  {
    href: '/app/account',
    icon: User,
    title: 'Account'
  }
];

const DashboardSidebar = ({ onMobileClose, openMobile }) => {
  const location = useLocation();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(setLogout())
  }
  
  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
  }, [location.pathname]);

  const content = (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}
    >
      <Box sx={{ p: 2 }}>
        <List>
          {items.map((item) => (
            <NavItem
              href={item.href}
              key={item.title}
              title={item.title}
              icon={item.icon}
            />
          ))}
          <NavItem
            href='#'
            onClick={handleLogout}
            title='Logout'
            icon={LockIcon}
          />
        </List>
      </Box>
    </Box>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
          PaperProps={{
            sx: {
              width: 256
            }
          }}
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden lgDown>
        <Drawer
          anchor="left"
          open
          variant="persistent"
          PaperProps={{
            sx: {
              width: 256,
              top: 64,
              height: 'calc(100% - 64px)'
            }
          }}
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

DashboardSidebar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool
};

DashboardSidebar.defaultProps = {
  onMobileClose: () => { },
  openMobile: false
};

export default DashboardSidebar;
