<template>
    <div>
        <div><h1>Cats</h1></div>
        <div>
            <b-table striped hover :items="cats">
                <template v-slot:cell(name)="data">
                    <router-link v-bind:to="`/pets/cats/${data.index}`">{{ data.value }}</router-link>
                </template>
            </b-table>
        </div>
    </div>
</template>

<script>
// @ is a Vue-cli shortcut reference to the src folder, to avoid writing ../data/
// import cats from '@/data/cats'

import { mapState } from 'vuex'

export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapState([
      'cats'
    ])
  }
}
</script>
