import React, { Component } from 'react';
import axios from 'axios'

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
    getUsers = () => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            axios.get('http://localhost:3001/cars')
              .then((res) => { resolve(res) })
              .catch((err) => { reject(err) })
          }, 1000);
        })
      }
}
