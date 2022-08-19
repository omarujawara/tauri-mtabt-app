import { createStore } from 'vuex';
import axios from 'axios'
const store = createStore({
    state () {
        return {
            bronx : true,
            brooklyn : true,
            manhattan : true,
            queens : true,
            statenIsland : true,
            alerts : [],
            jams : [],
            endTime : "",
            startTime : "",
            startTimeMillis : 0,
            endTimeMillis : 0,
            cities : [],
            showAlerts : true,
            showJams : false,
            testVar:"v1"
            

        }
    },
    getters:{},
    mutations:{
        getFeed(state, data) {
            state.alerts = data.alerts;
            state.jams = data.jams;
            state.endTime = data.endTime;
            state.startTime = data.startTime;
            state.startTimeMillis = data.startTimeMillis;
            state.endTimeMillis = data.endTimeMillis;
        },
        filterBrooklynMutation : (state) => {
            if(state.brooklyn) {
                state.testVar = 'Brooklyn is True'
            }
            else {
                state.testVar = "Brooklyn is False"
            }
          }
    },
    actions:{
        loadFeed({commit}) {
            axios.get("http://localhost:3000/")
                .then(({data}) => {
                    console.log(data.alerts)
                    commit('getFeed', data)
                    }).catch((err) => {
                        console.log(err)
                    }); 
        }
    },
    modules:{}
})

export default store;

// https://www.waze.com/partnerhub-api/waze-feed-access-token/e4d80438-9dc1-4588-8e3a-93cddf1bb913?format=1\