import React, { Component } from "react";
import { Link, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import Title from "./title";

export default class Repairs extends Component {
    constructor(props) {
        super(props)
        this.state = { repairs: [], loading: false }
    }
    componentDidMount() {
        this.setState({ loading: true })
        this.getRepairs()
            .then((res) => { this.setState({ repairs: res.data }) })
            .catch((err) => { throw err })
            .finally(() => { this.setState({ loading: false }) })
    }
    getRepairs = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                axios.get('http://localhost:3001/repair')
                    .then((res) => { resolve(res) })
                    .catch((err) => { reject(err) })
            }, 1000);
        })
    }

    render() {
        const {repairs, loading} = this.state
        if (loading) return (<Typography align='center' component="h2">Please wait...</Typography>)

    }
}