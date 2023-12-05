/* eslint-disable no-undef */
const assert = require('assert')

Feature('Liking Restaurants')

Before(({ I }) => {
  I.amOnPage('/#/favorite')
})

Scenario('showing empty liked restaurants', ({ I }) => {
  I.dontSeeElement('.resto-item')
})

Scenario('liking one restaurant', async ({ I }) => {
  I.dontSeeElement('.resto-item')
  I.amOnPage('/')
  I.seeElement('.resto-item-name a')
  const firstRestaurant = locate('.resto-item-name a').first()
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant)
  I.click(firstRestaurant)
  I.seeElement('#likeButton')
  I.click('#likeButton')
  I.amOnPage('/#/favorite')
  I.seeElement('.resto-item')
  const likedRestaurantName = await I.grabTextFrom('.resto-item-name')
  assert.strictEqual(firstRestaurantName, likedRestaurantName)
})
