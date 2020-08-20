<template>
    <div>
        <div><h1>Dogs</h1></div>
        <div>
            <b-table striped hover :items="dogs"></b-table>
        </div>
    </div>
</template>

<script>
// @ is a Vue-cli shortcut reference to the src folder, to avoid writing ../data/
import dogs from '@/data/dogs'
export default {
  data() {
    return {
      // short hand for cats:cats
      dogs
    }
  }
}
</script>
