/* eslint-disable */ 
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Typography
} from '@material-ui/core';
import RoomIcon from '@material-ui/icons/Room';

const ProductCard = ({ data, ...rest }) => (
  <Card
    sx={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%'
    }}
    {...rest}
  >
    <CardContent>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          pb: 3,
          height: '200px'
        }}
      >
        <CardMedia
          image={data.images[0].url || 'https://upload.wikimedia.org/wikipedia/commons/1/15/Buddhist_Temple_on_No._5_Road%2C_Richmond%2C_British_Columbia%2C_Canada.jpg'}
          title={data.name}
          style={{
            height: '100%',
            width: '100%'
          }}
        />
      </Box>
      <Typography
        align="center"
        color="textPrimary"
        gutterBottom
        variant="h4"
      >
        {data.name}
      </Typography>
      <Typography
        align="center"
        color="textPrimary"
        variant="body1"
      >
        {
          data.description.slice(0, 150) 
        }
        {
            data.description.length > 150 &&
            <span>
                {"..."}
            </span>
        }
      </Typography>
    </CardContent>
    <Box sx={{ flexGrow: 1 }} />
    <Divider />
    <Box sx={{ p: 2 }}>
      <Grid
        container
        spacing={2}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid
          item
          sx={{
            alignItems: 'center',
            display: 'flex'
          }}
        >
          <RoomIcon color="action" />
          <Typography
            color="textSecondary"
            display="inline"
            sx={{ pl: 1 }}
            variant="body2"
          >
            {data.country},{data.state}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  </Card>
);

export default ProductCard;
