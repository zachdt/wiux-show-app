<template>
    <div id="Show">
        <p>{{show.name}}</p>
    </div>
</template>

<script>
export default {
    props: {
        format: { Type:Boolean, default: false},
        art: String,
        path: String,
        name: String,
        time: Number,
        catagory: String,
        hosts: String
    },
    name: 'Show'
}
</script>

<style>
</style>

