<template>
    <div id="landing">
        <b-progress :value="time" :max="max" show-progress animated></b-progress>
    </div>
</template>

<script>

export default {
    data () {
        return{
            time: new Date
            max: 
        }
    },
    created () {
        setInterval(() => this.time = new Date, 1000 * 60)
    },
    name: 'landing'
}
</script>

<style>
@import '@/bootstrap/dist/css/bootstrap.css';
@import '@/bootstrap-vue/dist/css/bootstrap-vue.cs';
</style>

