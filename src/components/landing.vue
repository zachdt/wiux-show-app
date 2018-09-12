<template>
    <div id="Landing">
        <br id="top-bar">
        <div id="monday">
            <div id="m-grid">
                <h2>Monday</h2>
                <show v-bind="show1"></show>
            </div>
        </div>
        <div id="tuesday">

        </div>
        <div id="wednesday">

        </div>
        <div id="thursday">

        </div>
        <div id="friday">
        </div>
    </div>
</template>

<script>
//importing show tile component
import Show from 'show.vue'

Vue.component('show', Show)
//show variable template
const show1 = {
    format: false,
    art: "/assests/coverphoto.preview",
    path: "/show1",
    name: "Hackfrauds",
    time: 15,
    catagory:"misc",
    hosts: "Zachary Thielemann, Connor Cocharne, Arman Dhar"
}

export default {
  name: 'Landing',
  components: {
      Show 
  }
}
</script>

<style>
</style>
