function update(e){
    var x = e.clientX || e.touches[0].clientX
    var y = e.clientY || e.touches[0].clientY
  
    document.body.style.setProperty('--cursorX', x + 'px')
    document.body.style.setProperty('--cursorY', y + 'px')
  }
  
  document.addEventListener('mousemove',update)
  document.addEventListener('touchmove',update)

  document.getElementById('switch').addEventListener('click', () => {
    console.log('test')
    const root = document.body
    root.classList.remove('root')
  })