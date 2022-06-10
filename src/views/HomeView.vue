<template>
  <div class="home">
    <button @click="loadNextImage">Show more cats</button>
    <div v-for="image in images" xs4 d-flex v-bind:key="image">{{image[""]}}
        <img :src="image.url" contain> 
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HomeView',
  data () {
    return {
      images: [],
      limit: 5,
      }
  },
  created(){
    axios.defaults.headers.common['x-api-key'] = "DEMO-API-KEY";
    this.loadNextImage();
  },
  methods:{
    async loadNextImage()
    {
      try{
          let query_params = {
          limit: this.limit
          };
          let response = await axios.get('https://api.thecatapi.com/v1/images/search', 
          { params: query_params } );
          this.images = response.data;
      }catch(err){
        console.log(err)
      }
    }
  }
}
</script>

