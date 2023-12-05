import CONFIG from '../../globals/config'

const createRestaurantDetailTemplate = (resto) => `
  <h2 class="resto-title">${resto.name}</h2>
  <img class="resto-poster lazyload" data-src="${
  CONFIG.BASE_IMAGE_URL + resto.pictureId
}" alt="${resto.name}" />
  <div class="resto-info">
    <h4>Restoran ${resto.name}</h4>
    <br>
    <h4>Rating ⭐️ ${resto.rating}</h4>
    <br>
    <h4>Kota ${resto.city}</h4>
    <br>
    <h4>Alamat ${resto.address}</h4>
    <br>
    <h4>Menu Makanan </h4>
    <p>${resto.menus.foods.map((food) => food.name)}</p>
    <br>
    <h4>Menu Minuman</h4>
    <p>${resto.menus.drinks.map((drink) => drink.name)}</p>
  </div>
  <div class="resto-overview">
    <h3>Overview</h3>
    <p>${resto.description}</p>
  </div>
  <br>
  <hr>
  <div class="resto-review">
  <h2>Customer Reviews</h2>
  <p>${resto.customerReviews
    .map(
      (comment) => `
    <p class="name">${comment.name}</p>
    <p class="date">${comment.date}</p>
    <p class="comment">"${comment.review}"</p>
    
    `
    )
    .join('<br>')}
  </p>
  </div>
`

const createRestoItemTemplate = (restos) => `
  <div class="resto-item">
    <div class="resto-item-header">
      <img class="resto-item-poster lazyload" alt="${restos.name}"
      data-src="${CONFIG.BASE_IMAGE_URL + restos.pictureId}">
      <div class="resto-item-city">
        <span>${restos.city}</span>
      </div>
    </div>
    <div class="resto-item-content">
      <h3 class="resto-item-name"><a href="/#/detail/${restos.id}" id="contentTitle">${
  restos.name
}</a></h3>
      <p>⭐️<span class="resto-item-score">${restos.rating}</span></p>
      <p class="resto-item-description">${restos.description}</p>
    </div>
  </div>
`

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this  , urant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`

export {
  createRestoItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate
}
