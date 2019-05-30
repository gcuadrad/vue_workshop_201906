let app = new Vue({
  el: '#app',
  data: {
    title: 'Métodos y computed properties',
    inputText: ''
  },
  methods: {
    showAlert () {
      alert('HOLA')
    },
    alertInputText() {
      alert(this.inputText)
    }
  }
})
