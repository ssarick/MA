import axios from "axios";

export const state = () => ({
  files: []
})
export const actions = {
  uploadFiles({commit, state}, {documents,transformType }) {
    return new Promise((resolve, reject) => {
      let result = []
      const formData = new FormData()
      documents.forEach((item, i) => {
        formData.append(i, item)
      })
      axios
        .post(
          'uploadImg',
          {
            img: formData,
            'transform-type': transformType,
          },
          {
            params: {
              headers: { 'Content-Type': 'multipart/form-data' },
            },
          }
        )
        .then((res) => {
          this.processedFile = res
          result = res
        })
        .catch((err) => reject(err))
      resolve(result)
    })
  },

}
export const mutations = {
  setFiles(state, documents) {
    state.files = documents
  }
}
export const getters = {
  getFile(state) {
    return state.files;
  },
}