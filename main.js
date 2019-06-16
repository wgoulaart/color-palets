Vue.component('palet', {
  template: ''
})

new Vue({
  el: '#app',
  component: 'pallet',
  data: {
    colors: ['#fd3d39', '#fe9526', '#ffcb2f', '#53d86a']
  },
})

document.querySelector('#botao').addEventListener('click', (e) => {
  document.querySelector('body').classList.toggle('darkmode')
})
