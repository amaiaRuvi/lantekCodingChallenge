import axios from 'axios'

export const getCuttingMachines = () => {
  return axios({
    method: 'get',
    url: process.env.REACT_APP_LANTEK_DEMO_API,
    auth: {
      username: process.env.REACT_APP_USER,
      password: process.env.REACT_APP_PASSWORD
    },
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
}