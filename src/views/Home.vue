<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button v-on:click="toggle_pet_form" class="btn btn-primary">Add new Pet</button>
    <b-form @submit.prevent="handle_submit" v-if="show_pet_form">

      <b-form-group id="input-group-2" label="Pet's Name:" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form_data.name"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Species:" label-for="input-2">
        <b-form-select
          id="input-2"
          v-model="form_data.species"
          :options="['cats', 'dogs']"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-2" label="Pet's Age:" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="form_data.age"
          required
          placeholder="Enter Age"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { mapActions } from 'vuex'
export default {
  name: 'Home',
  data () {
    return {
      show_pet_form: false,
      form_data: {
        name: '',
        age: 0,
        species: 'cats'
      }
    }
  },
  components: {
    HelloWorld
  },
  methods: {
    ...mapActions([
      'add_pet'
    ]),
    toggle_pet_form () {
      this.show_pet_form = !this.show_pet_form
    },
    handle_submit () {
      const { species, age, name } = this.form_data
      const payload = { species, pet: { name, age } }
      this.add_pet(payload)
    }
  }
}
</script>
