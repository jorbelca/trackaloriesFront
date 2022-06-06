import React from "react"
import { useStore } from "../state/store"

const CardResults = () => {
  const { search, setMeal } = useStore()

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
            <nav className="level">
              <div className="container mr-6">
                <div className="columns  is-flex-tablet is-mobile">
                  <div className="column is-variable has-text-centered">
                    <div className="has-text-centered">
                      <p className="heading">Calories</p>
                      <p className="is-size-6-mobile has-text-weight-bold">
                        {nf_calories} Kcal
                      </p>
                    </div>
                  </div>
                  <div className="column is-two-fifths">
                    <div className="columns is-variable is-0-mobile is-0-tablet ">
                      <div className="column has-text-centered">
                        <p className="heading">Carbohidrates</p>
                        <p className="is-size-6-mobile has-text-weight-bold">
                          {nf_total_carbohydrate}g
                        </p>
                      </div>

                      <div className="column has-text-centered">
                        <p className="heading">Fat</p>
                        <p className="is-size-6-mobile has-text-weight-bold">
                          {nf_total_fat}g
                        </p>
                      </div>

                      <div className="column has-text-centered">
                        <p className="heading">Protein</p>
                        <p className="is-size-6-mobile has-text-weight-bold">
                          {nf_protein}g
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="column is-8-mobile media-right">
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        setMeal(search)
                      }}
                      className="button button-add"
                    >
                      <span className="icon ">
                        <i className="fas fa-lg fa-solid fa-circle-plus"></i>
                      </span>
                    </button>
                  </div>
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
