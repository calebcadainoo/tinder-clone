import axios from 'axios'

const instance = axios.create({
	// baseURL: 'http://localhost:8080'
	baseURL: "https://tinder-backend-2020.herokuapp.com/"
})

export default instance