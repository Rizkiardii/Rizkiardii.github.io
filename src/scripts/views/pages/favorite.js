import favoriteRestaurantIdb from '../../data/favoriteRestaurantIdb'
import { createRestoItemTemplate } from '../templates/template-creator'

const Favorite = {
  async render () {
    return `
      <div class="content">
        <h2 class="content-header">Favourite Restaurant</h2>
        <div id="restos" class="restos"></div>
      </div>
    `
  },

  async afterRender () {
    const restos = await favoriteRestaurantIdb.getAllRestos()
    const restosContainer = document.querySelector('#restos')

    restos.forEach((resto) => {
      restosContainer.innerHTML += createRestoItemTemplate(resto)
    })
  }
}

export default Favorite
