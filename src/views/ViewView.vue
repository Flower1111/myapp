<template>
  <div class="view">
    <h1>My cats</h1>
      <img :src="image.url" contain>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'ViewView',
  data () {
    return {image: { url: ""}}
  },
  created(){
    this.loadImages();
  } ,
  methods:{
    async loadImages()
    {
      try{
        axios.defaults.headers.common['x-api-key'] = "DEMO-API-KEY"
        let response = await axios.get('https://api.thecatapi.com/v1/images')
        this.image = response.data[0]
      }catch(err){
        console.log(err)
      }
    }
  }
}
</script>