<template>
    <div>
        <div><h1>Dogs</h1></div>
        <div>
            <b-table striped hover :items="dogs">
                <template v-slot:cell(name)="data">
                    <router-link v-bind:to="`/pets/dogs/${data.index}`">{{ data.value }}</router-link>
                </template>
            </b-table>
        </div>
    </div>
</template>

<script>
// @ is a Vue-cli shortcut reference to the src folder, to avoid writing ../data/
// import dogs from '@/data/dogs'

import { mapState } from 'vuex'

export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapState([
      'dogs'
    ])
  }
}
</script>
