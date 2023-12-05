import favoriteRestaurantIdb from '../src/scripts/data/favoriteRestaurantIdb'
import * as TestFactories from './helpers/testFactories'

describe('Unliking a Restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>'
  }

  beforeEach(async () => {
    addLikeButtonContainer()
    await favoriteRestaurantIdb.putResto({ id: 1 })
  })

  afterEach(async () => {
    await favoriteRestaurantIdb.deleteResto(1)
  })

  it('should display unlike widget when the restaurant has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 })
    expect(
      document.querySelector('[aria-label="unlike this restaurant"]')
    ).toBeTruthy()
  })

  it('should not display like widget when the restaurant has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 })
    expect(
      document.querySelector('[aria-label="like this restaurant"]')
    ).toBeFalsy()
  })

  it('should be able to remove liked restaurant from the list', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 })
    document.querySelector('[aria-label="unlike this restaurant"]').dispatchEvent(new Event('click'))
    expect(await favoriteRestaurantIdb.getAllRestos()).toEqual([])
  })

  it('should not throw error if the unliked restaurant is not in the list', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 })
    await favoriteRestaurantIdb.deleteResto(1)
    document.querySelector('[aria-label="unlike this restaurant"]').dispatchEvent(new Event('click'))
    expect(await favoriteRestaurantIdb.getAllRestos()).toEqual([])
  })
})
