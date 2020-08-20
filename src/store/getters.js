export default {
  animals_count: (state) => {
    return state.cats.length + state.dogs.length
  },
  get_all_cats: (state) => {
    return state.pets.filter((pet) => {
      return pet.species === 'cat'
    })
  }
}
