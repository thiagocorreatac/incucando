import { axiosInstance } from './../plugins/axios'

export const getItem = async ({ params }) => {
  try {
    return await axiosInstance({
      method: 'get',
      url: params
    })
  } catch (e) {
    console.error(e)
    return e.response.data
  }
}
