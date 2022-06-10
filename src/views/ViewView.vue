<template>
  <div class="view">
    <h1>My cats</h1>
      <div v-for="image in images" xs4 d-flex v-bind:key="image">{{image[""]}}
        <img :src="image.url" contain>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'ViewView',
  data () {
    return {
      images: [],
      limit: 20,
      }
  },
  created(){
    axios.defaults.headers.common['x-api-key'] = "DEMO-API-KEY";
    this.loadImages();
  },
  methods:{
    async loadImages()
    {
      try{
          let query_params = {
          limit: this.limit
          };
          let response = await axios.get('https://api.thecatapi.com/v1/images', 
          { params: query_params });
          this.images = response.data
      }catch(err){
        console.log(err)
      }
    }
  }
}
</script>