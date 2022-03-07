import React, { Component, useState } from "react";
import { Link, Table, TableBody, TableCell, TableHead, TableRow, Typography, Button } from "@mui/material";
import Title from "./title";
import axios from "axios";
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import ClearIcon from '@mui/icons-material/Clear';
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

class Warehouse extends Component {
    constructor(props) {
        super(props)
        this.state = { cars: [], loading: false, open: false }
    }
    componentDidMount() {
        this.setState({ loading: true })
        axios.get('http://localhost:3001/cars')
            .then((res) => { this.setState({ cars: res.data }) })
            .catch((err) => { throw err })
            .finally(() => { this.setState({ loading: false }) })
    }
    
    handleDelete = (event) => {
        if(event.target.id) {
        axios.delete(`http://localhost:3001/cars/${event.target.id}`);
        axios.get('http://localhost:3001/cars')
            .then((res) => { this.setState({ cars: res.data }) })
            .catch((err) => { console.log(err) })}
        else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
              })
        }
    }
    
    render() {
        const { cars, loading } = this.state
        if (loading) return (<Typography align='center' component="h2">Please wait...</Typography>)

        return (
            <React.Fragment>
                <Title>Car wharehouse</Title>
                <Table size="small">
                    <TableHead>
                        <TableRow sx={{ fontWeight: 'bold' }}>
                            <TableCell sx={{ fontWeight: 'bold' }}>ID</TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }}>Brand</TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }}>Name</TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }}>Debut</TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }}>Amount</TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }}>Price</TableCell>
                            <TableCell align="right" sx={{ fontWeight: 'bold' }}>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {cars.map((car) => (
                            <TableRow
                                key={car.id}
                            >
                                <TableCell>{car.id}</TableCell>
                                <TableCell>{car.brand}</TableCell>
                                <TableCell>{car.name}</TableCell>
                                <TableCell>{car.debut}</TableCell>
                                <TableCell>{car.inventory}</TableCell>
                                <TableCell>{car.price}</TableCell>
                                <TableCell align="right">
                                    <Button ><Link href={`/ecar/${car.id}`} underline='none' sx={{color: '#002884' }}>
                                        <ModeEditOutlineIcon sx={{ color: '#002884' }} /></Link>
                                    </Button>
                                    
                                    <Button id={car.id} onClick={(e)=> {this.handleDelete(e)}}>
                                        <ClearIcon sx={{ color: '#002884' }} />
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

            </React.Fragment>
        );
    }
}

export default Warehouse