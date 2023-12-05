import API_ENDPOINT from '../globals/api-endpoint'

class restaurantSource {
  static async restaurantList () {
    const response = await fetch(API_ENDPOINT.RESTO)
    const responseJson = await response.json()
    return responseJson.restaurants
  }

  static async detailRestaurant (id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id))
    const responseJson = await response.json()
    return responseJson.restaurant
  }
}

export default restaurantSource
