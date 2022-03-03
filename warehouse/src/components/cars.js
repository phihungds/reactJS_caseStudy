import React, { Component } from 'react';
import axios from 'axios';
import { Button, Card, CardActions, CardContent, CardMedia, CssBaseLine, Grid, Typography, Container, } from '@mui/material';



class Cars extends Component {
    constructor (props) {
        super(props)
        this.state = {cars : [], loading: false}
    }
    componentDidMount() {
        this.setState({loading : true })
        this.getCars()
            .then((res) => {this.setState({cars: res.data})})
            .catch((err) => { throw err })
            .finally(() => { this.setState({loading: false}) })
    }
    getCars = () => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            axios.get('http://localhost:3001/cars')
              .then((res) => { resolve(res) })
              .catch((err) => { reject(err) })
          }, 1000);
        })
      }
    render() {
        const {cars, loading} = this.state
        
        if (loading) return (<Typography align='center' component="h2">Loading...</Typography>)
        return (
            <Container sx={{ py: 8 }} maxWidth="md">
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
                    <Typography gutterBottom variant="h5" component="h3">
                      {car.brand}
                    </Typography>
                    <Typography gutterBottom  component="h4">
                      {car.name}
                    </Typography>
                    {/* <Typography>
                      This is a media card. You can use this section to describe the
                      content.
                    </Typography> */}
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Edit</Button>
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