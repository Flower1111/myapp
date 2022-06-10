<template>
  <div class="upload">
    <h1>Upload image:</h1>
      <div v-if="message"
        :class="`message ${error ? 'is-danger' : 'is-success'}`"
      >
      <div class="message-body">{{ message }}</div>
      </div>
    <input  type="file" @change="onFileSelected">
    <button @click="onUpload">Upload</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'UploadView',
  data () {
    return {
      selectedFile: null,
      message: "",
      error: false
  }
}, 
  methods: {
    onFileSelected(event) {
      this.selectedFile = event.target.files[0];
      this.error = false;
      this.message = "";
    },
    async onUpload() {
      axios.defaults.headers.common['x-api-key'] = "DEMO-API-KEY";
      let formData = new FormData();
      formData.append('file', this.selectedFile);
      try {
          await axios.post('https://api.thecatapi.com/v1/images/upload',
          formData, {headers: {'Content-Type':'multipart/form-data' }});
          this.message = "File has been uploaded!";
          this.selectedFile = "";
          this.error = false;
      } catch(err) {
        this.message = "Something went wrong.";
        this.error = true;
      }
    }
  }
}
</script>
