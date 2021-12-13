<template>
 <div>
   <v-app>
   <v-container>
       <div
    class="uploader mt-15"
    @dragenter="OnDragEnter"
    @dragleave="OnDragLeave"
    @dragover.prevent
    @drop="onDrop"
    :class="{ dragging: isDragging }"
  >
    <div class="upload-control" v-show="images.length">
      <label for="file">Select a file</label>
      <button @click="upload">Upload</button>
    </div>

    <div v-show="!images.length">
      <i class="fa fa-cloud-upload"></i>
      <p>Drag your images here</p>
      <div>OR</div>
      <div class="file-input">
        <label for="file">Select a file</label>
        <input type="file" ref="file" id="file" @change="onInputChange" multiple />
      </div>
    </div>
    
  

     <v-cotaniner > 
       <v-row no-gutters justify="center" align="center" class="fill-height">
      <v-col cols="12"  >
        <v-card  class="img-wrapper" v-for="(image, index) in images" :key="index">
            <div class="images-preview" v-show="images.length">
        <img contain :src="image" :alt="`Image Uplaoder ${index}`" />
        <div class="details">
          <span class="name" v-text="files[index].name"></span>
          <span class="size" v-text="getFileSize(files[index].size)"></span>
          <span class="size" v-text="getFileDate(files[index].date)"></span>
        </div>
    </div>
        </v-card>
      </v-col>
       </v-row>
     </v-cotaniner>

  </div> 
     
   </v-container>  
   </v-app>

  </div>
 
</template>

<script>
// import axios from "axios";
export default {
  name:"imageUploader",
  data: () => ({
    isDragging: false,
    dragCount: 0,
    files: [],
    images: [],
    imgObject:{
      name:"",
      image:"",
    },
    
  }),
  methods: {

 
    OnDragEnter(e) {
      e.preventDefault();

      this.dragCount++;
      this.isDragging = true;

      return false;
    },
    OnDragLeave(e) {
      e.preventDefault();
      this.dragCount--;

      if (this.dragCount <= 0) this.isDragging = false;
    },
    onInputChange(e) {
      const files = e.target.files;

      Array.from(files).forEach((file) => this.addImage(file));
    },
    onDrop(e) {
      e.preventDefault();
      e.stopPropagation();

      this.isDragging = false;

      const files = e.dataTransfer.files;

      Array.from(files).forEach((file) => this.addImage(file));
    },
    addImage(file) {
      if (!file.type.match("image.*")) {
        console.log(`${file.name} is not an image`);
        this.$toastr.e(`${file.name} is not an image`);
        return;
      }

      this.files.push(file);

      const img = new Image();
      console.log(img);
       const reader = new FileReader();

      reader.onload = (e) =>
       this.imgObject.image = e.target.result;
       this.imgObject.name = file.name;
       this.images.push(this.imgObject);

      reader.readAsDataURL(file);
      console.log(reader)
    },
    getFileSize(size) {
      const fSExt = ["Bytes", "KB", "MB", "GB"];
      let i = 0;

      while (size > 900) {
        size /= 1024;
        i++;
      }

      return `${Math.round(size * 100) / 100} ${fSExt[i]}`;
    },
    getFileDate(date) {
      const d = new Date();
      date = `${d.getMonth()}/ ${d.getDate()}/ ${d.getFullYear()}`;
      return date;
    },
    upload() {

          this.$store.dispatch("postImages", this.images[0]);

    
    },

  },
};
</script>

<style lang="scss" scoped>
.uploader {
  width: 100%;
  background: #2e3737;
  color: #fff;
  padding: 40px 15px;
  text-align: center;
  border-radius: 10px;
  border: 3px dashed #fff;
  font-size: 20px;
  position: relative;

  &.dragging {
    background: #fff;
    color: #2196f3;
    border: 3px dashed #2196f3;

    .file-input label {
      background: #2196f3;
      color: #fff;
    }
  }

  i {
    font-size: 85px;
  }

  .file-input {
    width: 200px;
    margin: auto;
    height: 68px;
    position: relative;

    label,
    input {
      background: #fff;
      color: #2196f3;
      width: 100%;
      position: absolute;
      left: 0;
      top: 0;
      padding: 10px;
      border-radius: 4px;
      margin-top: 7px;
      cursor: pointer;
    }

    input {
      opacity: 0;
      z-index: -2;
    }
  }

  .images-preview {
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;

    .img-wrapper {
      width: 160px;
      display: flex;
      flex-direction: column;
      margin: 10px;
      height: 150px;
      justify-content: space-between;
      background: #fff;
      box-shadow: 5px 5px 20px #3e3737;

      img {
        min-height: 105px;
      }
    }

    .details {
      font-size: 12px;
      background: #fff;
      color: #000;
      display: flex;
      flex-direction: column;
      align-items: self-start;
      padding: 3px 6px;

      .name {
        overflow: hidden;
        height: 18px;
      }
    }
  }

  .upload-control {
    position: absolute;
    width: 100%;
    background: #fff;
    top: 0;
    left: 0;
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
    padding: 10px;
    padding-bottom: 4px;
    text-align: right;

    button,
    label {
      background: #2196f3;
      border: 2px solid #03a9f4;
      border-radius: 3px;
      color: #fff;
      font-size: 15px;
      cursor: pointer;
    }

    label {
      padding: 2px 5px;
      margin-right: 10px;
    }
  }
}
</style>