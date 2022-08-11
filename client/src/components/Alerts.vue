<template>
    <div>
        <div>
            <table class="table table-striped .table-condensed ">
                <thead>
                    <tr>
                        <th scope="col" v-for="(obj, index) in config" :key="index">{{obj.title}}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(row,index) in theData" :key="index">
                        <td class="text-truncate" scope="row" v-for="(obj, index) in config" :key="index">
                            <span v-if="obj.key === 'pubMillis'">{{ new Date(row[obj.key]).toLocaleDateString("en-US",{weekday:"long",day:"numeric",month:"long",year:"numeric"}) }}</span>
                            <span v-else>{{ row[obj.key] }}</span>
                            <span></span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <!-- {{config}} -->

    </div>
</template>

<script>

export default {
    name : 'alert-list',
    props : ['theData', 'config'],
    data : () => {
        return {
            
        }
    },
    methods:{
        // getRows(row, obj) {
        //     console.log(row, obj)
        //     return row[obj.key]
        // }
    },
    computed : {
        }
    }
        

</script>
<style scoped>

</style>

