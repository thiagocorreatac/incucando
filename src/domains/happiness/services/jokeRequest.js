import { getItem } from './../../../http/request'
const params = '/api?format=json'
export const getJoke = () => getItem({ params })
