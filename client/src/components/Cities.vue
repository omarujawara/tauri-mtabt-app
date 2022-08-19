<template>
  <div class="container">
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="checkbox" @change="filterBrooklyn" id="inlineCheckbox1" v-model="this.$store.state.brooklyn" checked>
      <label class="form-check-label" for="inlineCheckbox1">Brooklyn</label>
    </div>
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="checkbox" id="inlineCheckbox2" v-model="this.$store.state.bronx" checked>
      <label class="form-check-label" for="inlineCheckbox2">Bronx</label>
    </div>
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="checkbox" id="inlineCheckbox3" v-model="this.$store.state.manhattan" checked>
      <label class="form-check-label" for="inlineCheckbox3">Manhattan</label>
    </div>
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="checkbox" id="inlineCheckbox2" v-model="this.$store.state.queens" checked>
      <label class="form-check-label" for="inlineCheckbox2">Queens</label>
    </div>
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="checkbox" id="inlineCheckbox3" v-model="this.$store.state.statenIsland" checked>
      <label class="form-check-label" for="inlineCheckbox3">Staten Island</label>
    </div>
    <div>
      <!-- <button @click="$store.commit('decrease')" class="btn btn-primary btn-lg">-</button>
      <button @click="$store.dispatch('loadFeed')" class="btn btn-danger btn-lg">+</button> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'cities-component',
  data() {
    return {
      bronx : true,
      manhattan : true,
      queens : true,
      statenIsland : true,
    }
  },
  methods : {
    filterBrooklyn : () => {
      this.$store.commit('filterBrooklynMutation')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
