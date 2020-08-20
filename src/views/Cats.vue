<template>
    <div>
        <div><h1>Cats</h1></div>
        <div>
            <b-table striped hover :items="cats"></b-table>
        </div>
    </div>
</template>

<script>
// @ is a Vue-cli shortcut reference to the src folder, to avoid writing ../data/
import cats from '@/data/cats'
export default {
  data() {
    return {
      // short hand for cats:cats
      cats
    }
  }
}
</script>
