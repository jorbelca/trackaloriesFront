import create from 'zustand'

export const useStore = create(set => ({
  meals: [],
  setMeal: (newMeal) =>
    set(state => ({
      meals: [...state.meals, { id: state.meals.length + 1, ...newMeal }]
    }))
  ,
  removeMeal: (id) => {
    set(state => ({
      meals: state.meals.filter((meal) => meal.id !== id)
    }))
  },

  user: {},
  setUser: (loggedUser) => set(() => ({ user: loggedUser })),
  removeUser: () => {
    set(() => ({ user: {} }))
  }
  ,

  search: [],
  setSearch: (newSearch) => set(() => ({ search: newSearch })),

  errors: [],
  setErrors: (error) => set(() => ({
    errors: [error]
  })),
  removeErrors: () => set(() => ({
    errors: []
  }))
  ,
  notifications: [],
  setNotification: (notification) => set(() => ({ notifications: [notification] })),
  removeNotification: () => set(() => ({
    notifications: []
  })),
}))


