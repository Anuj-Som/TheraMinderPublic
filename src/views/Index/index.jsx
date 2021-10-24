import React, { Component } from 'react'
import axios from 'axios'
import TherapistScreen from './TherapistScreen.js'

import appConfig from '../../../app.config.js'

axios.defaults.headers.common['api-key'] = appConfig.apiKey

class Index extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: ''
    }
  }

  fetchName = () => {
    axios.get('/api/name').then((response) => {
      this.setState({
        name: response.data.name
      })
    }).catch((error) => {
      console.log(error)
    })
  }

  componentDidMount = () => {
    this.fetchName()
  }

  render () {
    return (
        <TherapistScreen/>
    )
  }
}

export default Index
