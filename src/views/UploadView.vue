<template>
  <div class="upload">
    <h1>This is an upload page</h1>
    <input 
     style="display: none"
     type="file"
     @change="onFileSelected"
     ref="fileInput">
    <button @click="$refs.fileInput.click()">Pick File</button>
    <button @click="onUpload">Upload</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'UploadView',
  data () {
    return {
      selectedFile: null
  }
}, 
  methods: {
    onFileSelected(event) {
      this.selectedFile = event.target.files[0]
    },
    onUpload() {
      axios.defaults.headers.common['x-api-key'] = "DEMO-API-KEY"
      let formData = new FormData();
      formData.append('file', this.selectedFile, this.selectedFile.name)
      axios.post('https://api.thecatapi.com/v1/images/upload',
          formData, {headers: {'Content-Type':'multipart/form-data' }})
      .then(res => {console.log(res)}).catch(err => {console.log(err)})
    },
  }
}
</script>
