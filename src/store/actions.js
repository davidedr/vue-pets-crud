export default {
  add_pet: (context, payload) => {
    context.commit('append_pet', payload)
  }
}
