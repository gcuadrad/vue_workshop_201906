Vue.component('counter-button', {
  template:
  `
  <div>
  {{count}}<button v-on:click="count++">+</button>
  </div>
  `,
  data: function() {
    return {
      count: 0
    }
  }
})
