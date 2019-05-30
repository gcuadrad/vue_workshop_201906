let app = new Vue({
  el: '#app',
  data: {
    title: 'Manejo de eventos e inputs',
    message: 'Mensaje por defecto',
    counter: 0
  },
  methods: {
    goToMamoth (bool) {
      let message = bool === true ? 'YA :D' : 'Nopes :('
      alert(message)
    }
  }
})
