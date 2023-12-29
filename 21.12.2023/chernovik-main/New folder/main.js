'use script';

  
VANTA.GLOBE({
  el: "#intro",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00
})


let text=document.querySelector('.text')
let block1 = document.querySelector('.block1');
let block3 = document.querySelector('.block3');

setInterval(() => {
    let data=new Date()
    let secondes=data.getSeconds()
    let minutes=data.getMinutes()
    let hours=data.getHours()
    let date=data.getDate()
    text.textContent=addzero(date) + ":" + addzero(hours)+":"+addzero(minutes)+":"+addzero(secondes)
    if (secondes ==10) {
      // text.classList.add('block1')
      VANTA.GLOBE({
        el: "#intro",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00
    })
    }
    if (secondes == 25) {
      // text.classList.remove('block1')
      VANTA.RINGS({
        el: "#intro",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        backgroundColor: 0xff1414
      })
    }
    if (secondes == 50) {
      // text.classList.add('block3')
      VANTA.BIRDS({
        el: "#intro",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00
    })
    }

}, 1000)
    function addzero(num) {
    if (num >= 0 && num <= 9) {
    return '0'+num
    }
    return num
}