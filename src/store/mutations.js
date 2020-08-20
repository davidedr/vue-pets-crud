export default {
  append_pet: (state, { species, pet }) => {
    state[species].push(pet)
  }
}
