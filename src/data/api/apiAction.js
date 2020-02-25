import {instance} from './apiConfigs'

export const getProducts = async () => {
  const response = await instance.get('/products')
  return response
}

export const getServices = async () => {
  const response = await instance.get('/services')
  return response
}

export const getVehicles = async () => {
  const response = await instance.get('/vehicle')
  return response
}

export const getVehicleParts = async () => {
  const response = await instance.get('/parts')
  return response
}

export const getCategories = async () => {
  const response = await instance.get('/categories')
  return response
}
