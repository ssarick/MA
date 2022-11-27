<template>
  <v-row class="mt-5 flex-column">
    <v-col class="text-center">
      <div class="text-h6">{{ title }}</div>
    </v-col>
    <v-col>
      <v-file-input
          v-model="files"
          color=" primary accent-4"
          counter
          label="File input"
          multiple
          placeholder="Select your files"
          prepend-icon="mdi-paperclip"
          outlined
          :show-size="1000"
      >
        <template #selection="{ index, text }">
          <v-chip v-if="index < 2" color="primary accent-4" dark label small>
            {{ text }}
          </v-chip>

          <span
              v-else-if="index === 2"
              class="text-overline grey--text text--darken-3 mx-2"
          >
            +{{ files.length - 2 }} File(s)
          </span>
        </template>
      </v-file-input>
    </v-col>
    <v-col class="mt-5 text-center">
      <v-btn large color="primary" @click="uploadFiles(files, type)">Send</v-btn>
    </v-col>
    <v-col class="mt-5 text-center">
      <v-btn v-if="!processedFile" large color="success" @click="save">Download</v-btn>
    </v-col>
  </v-row>
</template>

<script>

import axios from "axios";

export default {
  name: 'FunctionsPage',
  data: () => ({
    files: [],
    processedFile: []
  }),
  props: {
    title:{
      type: String,
      default: () => " "
    },
    type:{
      type: String,
      default: () => " "
    }
  },
  methods: {
    uploadFiles(documents, transformType) {
      return new Promise( (resolve, reject) => {
        let result = []
        const formData = new FormData()
        documents.forEach((item, i) => {
          formData.append(i, item)
        })
        axios.post('uploadImg', {
          img: formData,
          'transform-type': transformType
        }, {
          params: {
            headers: { 'Content-Type': 'multipart/form-data' },
          },
        })
            .then((res) => {
              this.processedFile = res
              result = res
            })
            .catch((err) => reject(err))
        resolve(result)
      })
    },
    save(){
      //
    }
  },
}
</script>
