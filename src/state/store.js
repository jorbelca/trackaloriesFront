import create from 'zustand'

export const useStore = create(set => ({
  meals: [],
  setMeal: (newMeal) =>
    set(state => ({
      meals: [...state.meals, { id: state.meals.length + 1, ...newMeal }]
    }))
  ,
  removeMeal: (id) =>
    set(state => ({
      meals: state.meals.filter((meal) => meal.id !== id)
    })),
  resetSearchedMeals: () =>
    set(() => ({
      meals: []
    })),


  user: {},
  setUser: (data) => set(() => ({ user: data })),
  setUserWeight: (user, weight) =>
    set(state => ({
      user: { ...state.user, weight }
    }
    )),

  removeUser: () => {
    set(() => ({ user: {} }))
  }
  ,

  search: [],
  setSearch: (newSearch) => set(() => ({ search: newSearch })),

  errors: [],
  setErrors: (error) => set((state) => {
    state.errors = [error]
  }),
  removeErrors: () => set(() => ({
    errors: []
  })),

  messages: [],
  setMessages: (notification) => set((state) => {

    state.messages = [notification]
  }),
  removeMessages: () => set(() => ({
    messages: []
  }))

}))


