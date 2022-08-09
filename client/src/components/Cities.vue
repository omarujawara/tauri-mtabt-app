<template>
  <div class="container">
    <div>({{ $store.state.counter }}) </div>
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" checked>
      <label class="form-check-label" for="inlineCheckbox1">Brooklyn</label>
    </div>
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" checked>
      <label class="form-check-label" for="inlineCheckbox2">Bronx</label>
    </div>
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" checked>
      <label class="form-check-label" for="inlineCheckbox3">Manhattan</label>
    </div>
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option4" checked>
      <label class="form-check-label" for="inlineCheckbox2">Quuens</label>
    </div>
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option5" checked>
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
  name: 'cities-aa',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
