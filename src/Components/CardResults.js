import React from 'react'
import { useStore } from '../state/store'


const CardResults = () => {
  const { setMeal, meals } = useStore()
  let food
  console.log(meals);
  meals.map(n => food = n.newMeal)

  const { food_name, photo, nf_calories, nf_total_carbohydrate, nf_total_fat, nf_protein, serving_weight_grams } = food



  const currentMeal = {
    name: food_name || '',
    photo: photo.thumb || '',
    calories: nf_calories || '',
    carbohidrates: nf_total_carbohydrate || '',
    proteins: nf_protein || '',
    fats: nf_total_fat || ''
  }



  return (<>

    <div className='card-results'>
      <article className="media">
        <figure className="media-left">
          <p className="image is-64x64">
            <img className="is-rounded" src={`${photo.thumb}`} />
          </p>
        </figure>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{serving_weight_grams + ' grams of ' + food_name}</strong>
            </p>
          </div>
          <nav className="level is-mobile">
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">Calories</p>
                <p className="title is-6">{nf_calories} Kcal</p>
              </div>
            </div>
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">Carbohidrates</p>
                <p className="title is-6">{nf_total_carbohydrate}g</p>
              </div>
            </div>
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">Fat</p>
                <p className="title is-6">{nf_total_fat}g</p>
              </div>
            </div>
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">Protein</p>
                <p className="title is-6">{nf_protein}g</p>
              </div>
            </div>
          </nav>
        </div>
        <div className="media-right">
          <button className="delete"></button>
          <button className="button">
            <span className="icon is-small">
              <i className="fas fa-add"></i>
            </span>
          </button>
        </div>

      </article >
    </div >
  </>
  )
}

export default CardResults