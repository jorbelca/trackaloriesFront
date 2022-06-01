import React from 'react'

const Dropdown = ({ data }) => {
  const { date } = data


  return (
    <>
      <div className="dropdown is-active ">
        <div className="dropdown-trigger">
          <button className="button" aria-haspopup="true" aria-controls="dropdown-menu">
            <span>{date}</span>
            <span className="icon is-small">
              <i className="fas fa-angle-down" aria-hidden="true"></i>
            </span>
          </button>
        </div>
        <div className="dropdown-menu" id="dropdown-menu2" role="menu" >
          {data.data.map(indMeal =>

            <div className="dropdown-content">
              <div className="dropdown-item">
                <span className="image is-32x32">
                  <img className="is-rounded" src={`${indMeal.photo.thumb}`} />

                </span><p>{indMeal.food_name} / {indMeal.nf_calories} / {indMeal.nf_proteins} </p>


              </div>


            </div>
          )}
        </div>

      </div>

    </>
  )
}

export default Dropdown