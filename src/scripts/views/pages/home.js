import restaurantSource from '../../data/restodb-source'
import { createRestoItemTemplate } from '../templates/template-creator'

const Detail = {
  async render () {
    return `
      <div class="content">
        <h2 class="content-header">Explore Restaurant</h2>
        <div id="restos" class="restos"></div>
      </div>
    `
  },

  async afterRender () {
    const restoran = await restaurantSource.restaurantList()
    const restaurantContainer = document.querySelector('#restos')
    restoran.forEach((resto) => {
      restaurantContainer.innerHTML += createRestoItemTemplate(resto)
    })
  }
}

export default Detail
