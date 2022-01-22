const canvas = document.getElementsByClassName("canvas")[0] as HTMLCanvasElement

if (canvas.getContext) {
  const context = canvas.getContext('2d')

  function draw() {
    context.fillStyle = "blue"
    context.fillRect(0, 0, 200, 250)
  }

  function resize() {
    canvas.width = canvas.getBoundingClientRect().width
    canvas.height = canvas.getBoundingClientRect().height
    draw()
    console.log(canvas.getBoundingClientRect().width)
  }

  resize()

  window.onresize = resize
}
