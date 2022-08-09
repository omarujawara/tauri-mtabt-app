<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <Cities /> 
  <Alert v-if="alertData" :theData="alertData" :config="config"/>

</template>

<script>
import axios from 'axios'
import Cities from './components/Cities.vue'
import Alert from './components/Alerts.vue'

export default {
  name: 'App',
  components: {
    Cities,
    Alert
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
        key: 'Road Type Code',
        title: 'roadType'
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
  mounted() {
    axios.get("http://localhost:3000")
      .then(({data}) => {
        console.log(data.alerts)
        this.alertData = data.alerts
      }).catch((err) => {
        console.log(err)
      });   
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
