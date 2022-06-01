import React from 'react'

const Dropdown = ({ data }) => {
  const { date } = data


  return (
    <>
      <div class="dropdown is-active ">
        <div class="dropdown-trigger">
          <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
            <span>{date}</span>
            <span class="icon is-small">
              <i class="fas fa-angle-down" aria-hidden="true"></i>
            </span>
          </button>
        </div>
        
        <div class="dropdown-menu" id="dropdown-menu2" role="menu" >
          {data.data.map(indMeal =>

            <div class="dropdown-content">
              <div class="dropdown-item">
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