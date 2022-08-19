<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  {{this.$store.state.testVar}}
  <div style="float:left;">
      <span >Traffic Feed</span>
      <span><button @click="x" class="btn" >Export</button></span>
  </div>
  <div class=""><Polygon/></div>
  <div class=""><Cities /></div> 
  <div class=""><Alert :config="config"/></div>

</template>

<script>
// import axios from 'axios'
import Cities from './components/Cities.vue'
import Alert from './components/Alerts.vue'
import Polygon from './components/Polygon.vue'

export default {
  name: 'App',
  components: {
    Cities,
    Alert,
    Polygon,
},
  data : () => ({
    alertData : undefined,
    config : [
      {
        key: 'uuid',
        title: 'Incident Identifier'
      },
      {
        key: 'pubMillis',
        title: 'Last Update'
      },
      {
        key: 'city',
        title: 'City'
      },
      {
        key: 'street',
        title: 'Street'
      },
      {
        key: 'type',
        title: 'Incident Type'
      },
      {
        key: 'subtype',
        title: 'Incident Sub Type'
      },
      {
        key: 'roadType',
        title: 'Road Type'
      },
      {
        key: 'confidence',
        title: 'confidence'
      },
      {
        key: 'reliability',
        title: 'Reliability'
      },
      {
        key: 'reportRating',
        title: 'Report Rating'
      },
      {
        key: 'reportDescription',
        title: 'Report Description'
      },
      {
        key: 'magvar',
        title: 'Direction'
      },
    ],

  }),
  methods : {
    x:()=>{
      this.$store.state.testVar = "RRRRR"
    }
  }

}
</script>

<style >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  column-gap: normal;
  margin-top: 20px;
}
.grid-child-polygon , .grid-child-cities{
  margin-top: 20px;
}
</style>
  