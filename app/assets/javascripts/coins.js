$("tr[data-link]").click(function() {
  window.location = this.dataset.link;
  console.log('set up');
})
