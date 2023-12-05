import favoriteRestaurantIdb from '../data/favoriteRestaurantIdb'
import {
  createFavoriteButtonTemplate,
  createFavoritedButtonTemplate
} from '../views/templates/template-creator'

const favoriteButtonInitiator = {
  async init ({ favoriteButtonContainer, restaurant }) {
    this._favoriteButtonContainer = favoriteButtonContainer
    this._restaurant = restaurant
    await this._renderButton()
  },

  async _renderButton () {
    const { id } = this._restaurant

    if (await this._isRestaurantExist(id)) {
      this._renderLiked()
    } else {
      this._renderLike()
    }
  },

  async _isRestaurantExist (id) {
    const resto = await favoriteRestaurantIdb.getResto(id)
    return !!resto
  },

  _renderLike () {
    this._favoriteButtonContainer.innerHTML = createFavoriteButtonTemplate()

    const favoriteButton = document.querySelector('#likeButton')
    favoriteButton.addEventListener('click', async () => {
      await favoriteRestaurantIdb.putResto(this._restaurant)
      this._renderButton()
    })
  },

  _renderLiked () {
    this._favoriteButtonContainer.innerHTML = createFavoritedButtonTemplate()

    const favoriteButton = document.querySelector('#likeButton')
    favoriteButton.addEventListener('click', async () => {
      await favoriteRestaurantIdb.deleteResto(this._restaurant.id)
      this._renderButton()
    })
  }
}

export default favoriteButtonInitiator
