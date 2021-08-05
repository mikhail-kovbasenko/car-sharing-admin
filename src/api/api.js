import getRandomString from './../utils/randomString';
const { default: axios } = require("axios");

const instance = axios.create({
	baseURL: 'https://api-factory.simbirsoft1.com/api/',
	headers: {
		'X-Api-Factory-Application-Id': '5e25c641099b810b946c5d5b',
		'Authorization': `Basic ${btoa(`${getRandomString()}:4cbcea96de`)}`
	}
})
const instanceGet = axios.create({
	baseURL: 'https://api-factory.simbirsoft1.com/api/',
	headers: {
		'X-Api-Factory-Application-Id': '5e25c641099b810b946c5d5b',
		'Authorization': 'Bearer'
	}
})


export const authAPI = {
	authorizeAdmin(data) {
		return instance.post(`auth/login`, data);
	}
}
export const mainAPI = {
	getOrders() {
		return instance.get('db/order?limit=10');
	}
}
