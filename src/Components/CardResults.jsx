import React from "react"
import { mealStore, searchStore } from "../state/store"

const CardResults = () => {
  const search = searchStore((state) => state.search)
  const setMeal = mealStore((state) => state.setMeal)

  const {
    food_name,
    photo,
    nf_calories,
    nf_total_carbohydrate,
    nf_total_fat,
    nf_protein,
    serving_weight_grams,
  } = search

  return (
    <>
      <div className="card-results ">
        <article className="media">
          <figure className="media-left">
            <p className="image is-64x64">
              <img
                alt="photo of logo"
                className="is-rounded"
                src={`${photo.thumb}`}
                width={64}
                height={64}
              />
            </p>
          </figure>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>
                  {serving_weight_grams + " grams of " + food_name}
                </strong>
              </p>
            </div>
            <nav className="level is-mobile">
              <div className="level-item has-text-centered">
                <div>
                  <p className="heading">Calories</p>
                  <p className="is-size-6-mobile has-text-weight-bold">
                    {nf_calories} Kcal
                  </p>
                </div>
              </div>
              <div className="level-item has-text-centered">
                <div>
                  <p className="heading">Carbohidrates</p>
                  <p className="is-size-6-mobile has-text-weight-bold">
                    {nf_total_carbohydrate}g
                  </p>
                </div>
              </div>
              <div className="level-item has-text-centered">
                <div>
                  <p className="heading">Fat</p>
                  <p className="is-size-6-mobile has-text-weight-bold">
                    {nf_total_fat}g
                  </p>
                </div>
              </div>
              <div className="level-item has-text-centered">
                <div>
                  <p className="heading">Protein</p>
                  <p className="is-size-6-mobile has-text-weight-bold">
                    {nf_protein}g
                  </p>
                </div>
              </div>
            </nav>
          </div>
        </article>
      </div>
    </>
  )
}

export default CardResults
