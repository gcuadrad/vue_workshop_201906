cons app = new Vue({
el: "#app",
data: {
  title: 'Vue Life circle hooks'
},
beforeCreate() {
  // Primer hook, se ejecuta antes de crear el contenido del componente
},
created() {
  // Se ejecuta al crear todo el contenido del componente (computed, métodos, etc) pero antes de crear el DOM
  // (Todavía no accede al el:)
},
beforeMount() {
  // Se ejecuta antes de insertar el DOM
},
mounted() {
  // Después de insertar el DOM, ideal para métodos que muestren datos, (Por ejemplo consultar un api externa)
},
beforeUpdate() {
 // Al detectar un cambio pero antes de que se ejecute
},
updated() {
  // Luego de realizar un cambio
},
beforeDestroy() {
  // Antes de matar la instancia
},
destroyed() {
  // Al destruir la instancia
}
});
