<template>
  <div class="home">
    <button @click="loadNextImage">Load next image</button>
    <br/>
    <img :src="image.url" contain>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HomeView',
  data () {
    return {image: { url: ""}}
  },
  created(){
    this.loadNextImage();
  },
  methods:{
    async loadNextImage()
    {
      try{
        axios.defaults.headers.common['x-api-key'] = "DEMO-API-KEY"
        let response = await axios.get('https://api.thecatapi.com/v1/images/search',
            { params: { limit:1, size:"full" } } )
        this.image = response.data[0]
        console.log("Image id:", this.image.id)
        console.log("Image url:", this.image.url)
      }catch(err){
        console.log(err)
      }
    }
  }
}
</script>

