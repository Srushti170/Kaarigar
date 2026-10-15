const $ = (sel, root = document) => root.querySelector(sel)
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)]

$('#cta')?.addEventListener('click', () => {
  $('#cta').textContent = 'JS is working ✓'
})
