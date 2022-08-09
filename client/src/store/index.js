import { createStore } from 'vuex';
// import axios from 'axios'
const store = createStore({
    state () {
        return {
            bronx : true,
            brooklyn : true,
            manhattan : true,
            queens : true,
            statenIsland : true,
            counter : 19,
            alerts : [],
            jams : [],
            endTime : "",
            startTime : "",
            startTimeMillis : 0,
            endTimeMillis : 0,
            

        }
    },
    getters:{},
    mutations:{
        decrease(state) {
            state.counter--
        },
        increase(state) {
            state.counter++
        }
    },
    actions:{
        loadFeed () {
            //  axios.get("https://www.waze.com/partnerhub-api/waze-feed-access-token/e4d80438-9dc1-4588-8e3a-93cddf1bb913?format=1")
            //     .then( res => {
            //         this.alerts = res.data.alerts;
            //     })
            //     .catch(err => console.error(err))
            console.log("Load action")
        }
    },
    modules:{}
})

export default store;

// https://www.waze.com/partnerhub-api/waze-feed-access-token/e4d80438-9dc1-4588-8e3a-93cddf1bb913?format=1\