import auth from '../redux/reducers/auth';
import getRandomString from './../utils/randomString';
const { default: axios } = require("axios");

const defaultURL = 'https://api-factory.simbirsoft1.com/api/';

const instance = axios.create({
	baseURL: defaultURL,
	headers: {
		'X-Api-Factory-Application-Id': '5e25c641099b810b946c5d5b',
		'Authorization': `Basic ${btoa(`${getRandomString()}:4cbcea96de`)}`
	}
})

export const authAPI = {
	authorizeAdmin(data) {
		return instance.post(`auth/login`, data);
	}
}
export const mainAPI = {
	getOrders(token, limit, page) {
		return axios.get(`${defaultURL}db/order?page=${page}&limit=${limit}`, {
			headers: {
				'X-Api-Factory-Application-Id': '5e25c641099b810b946c5d5b',
				'Authorization': 'Bearer ' + token
			}
		})
	}
}

