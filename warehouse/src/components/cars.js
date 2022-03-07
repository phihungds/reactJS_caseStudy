import React, { Component } from 'react';
import axios from 'axios';
import { Button, Card, CardActions, CardContent, CardMedia, Link, Grid, Typography, Container, } from '@mui/material';




class Cars extends Component {
  constructor(props) {
    super(props)
    this.state = { cars: [], loading: false }
  }
  componentDidMount() {
    this.setState({ loading: true })
    this.getCars()
      .then((res) => { this.setState({ cars: res.data }) })
      .catch((err) => { throw err })
      .finally(() => { this.setState({ loading: false }) })
  }
  getCars = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        axios.get('http://localhost:3001/cars')
          .then((res) => { resolve(res) })
          .catch((err) => { reject(err) })
      }, 500);
    })
  }

  render() {
    const { cars, loading } = this.state

    if (loading) return (<Typography align='center' component="h2">Loading...</Typography>)
    return (
      <Container sx={{ py: 8 }} maxWidth="lg">
        {/* End hero unit */}
        <Grid container spacing={4}>
          {cars.map((car) => (
            <Grid item key={car} xs={12} sm={6} md={4}>
              <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    // 16:9

                  }}
                  src={require(`../photos/cars-photos/${car.name}-overview.jpg`)}
                  alt="random"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h3" sx={{ fontWeight: 'bold  ' }}>
                    {car.brand} - {car.name}
                  </Typography>
                  <Typography gutterBottom component="h5" sx={{ fontWeight: 'bold', color: "#002884", fontSize: 18 }}>
                    Price: ${car.price}
                  </Typography>
                  <Typography sx={{ color: "#002884" }}>
                    Remain: {car.inventory}
                  </Typography>
                  <Typography sx={{ fontWeight: 'bold' }}>
                    {car.slogan}
                  </Typography>
                </CardContent>
                <CardActions>
                <Button size='large'><Link href={`/car/${car.id}`} underline='none' sx={{color: '#002884' }}>VIEW</Link></Button>
                {/* <Button size='large'><Link href={`/car/${car.id}`} underline='none' sx={{color: '#002884'  }}>EDIT</Link></Button> */}
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    )
  }
}
export default Cars