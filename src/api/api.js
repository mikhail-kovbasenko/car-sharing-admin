import { getRandomString } from "../utils/secondaryFunctions";
const { default: axios } = require("axios");

const defaultURL = 'https://api-factory.simbirsoft1.com/api/';
const getDefaultHeaders = (token = null) => {
	return {
		'X-Api-Factory-Application-Id': '5e25c641099b810b946c5d5b',
		'Authorization': 'Bearer ' + token
	}
}

export const authAPI = {
	authorizeAdmin(data) {
		return axios.post(`${defaultURL}auth/login`, data, {
			headers: {
				...getDefaultHeaders(), 
				'Authorization': `Basic ${btoa(`${getRandomString()}:4cbcea96de`)}`
			}
		})
	}
}
export const mainAPI = {
	getOrders(token, limit, page) {
		return axios.get(`${defaultURL}db/order?page=${page}&limit=${limit}`, {
			headers: {...getDefaultHeaders(token)}
		})
	},
	getCars(token, limit, page) {
		return axios.get(`${defaultURL}db/car?page=${page}&limit=${limit}`, {
			headers: {...getDefaultHeaders(token)}
		})
	},
	getCar(token, id) {
		return axios.get(`${defaultURL}db/car/${id}`, {
			headers: {...getDefaultHeaders(token)}
		})
	},
	setNewCar(token, data) {
		return axios.post(`${defaultURL}db/car`, data, {
			headers: {
				...getDefaultHeaders(token)
			}
		})
	},
	getCategories(token) {
		return axios.get(`${defaultURL}db/category`, {
			headers: {
				...getDefaultHeaders(token)
			}
		})
	},
	deleteCarById(token, id) {
		return axios.delete(`${defaultURL}db/car/${id}`, {
			headers: {
				...getDefaultHeaders(token)
			}
		})
	},
	updateCarById(token, id, data) {
		return axios.put(`${defaultURL}db/car/${id}`, data, {
			headers: {
				...getDefaultHeaders(token)
			}
		})
	}
}

