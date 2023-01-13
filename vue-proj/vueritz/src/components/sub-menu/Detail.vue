<template>
    <div>
        <h1>Detail</h1>
        <h2>{{ $route.params.id }}</h2>
        
    </div>
    
</template>

<script>
import Coffees from "../../assets/js/coffee.js"

export default {
    name:"Default",
    data(){
        return {
            Coffees : Coffees,
            idx : -1,
        }
    },
    mounted(){
        this.idx = this.$route.params.id
    }


}
</script>

<style>

</style>
