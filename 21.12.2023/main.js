'use strict';
// let text=document.querySelector('.text')
// let start=document.querySelector('.but')
// let stop=document.querySelector('.stop')
// let block1 = document.querySelector('.block1');
// let data = new Date()
// let hours=data.getHours()
// let minutes=data.getMinutes()
// let secondes=data.getSeconds()
// block1.innerHTML=addzero(hours)+":"+addzero(minutes)+":"+addzero(secondes)

// function addzero(num) {
//     if (num >= 0 && num <= 9) {
//         return '0'+num
//     }
//     return num
// }
// console.log();


// let i=0
// let timerId
// start.addEventListener('click', function(){
//      timerId=setInterval(() => {
//         i++
//         text.textContent=i
//     }, 1000);
// })

// stop.addEventListener('click', function(){
//     clearInterval(timerId)
// })




// setInterval(()=>{
//     i++
//     text.textContent = i
    
// }, 1000)

// setInterval(function(){
//     console.log('hello wolrd');
// }, 1000)


// setInterval(func, 2000)


// function func(){
//     text.textContent+='hello world   '
// }


// let inp = document.querySelector('.inp');

// let i = 0
//  let timerId;
//  start.addEventListener('click', function () {
    // setInterval(()=>{
        //     i++
        //   inp.textContent += i
        
        // }, 1000)
        
        // })
        // let block1 = document.querySelector('.block1');
        // let data = new Date()
        // let hours=data.getHours()
        // let minutes=data.getMinutes()
        // let secondes=data.getSeconds()
        // block1.innerHTML=addzero(hours)+":"+addzero(minutes)+":"+addzero(secondes)
        
        // function addzero(num) {
            //     if (num >= 0 && num <= 9) {
                //         return '0'+num
                //     }
                //     return num
                // }
// let start = document.querySelector('.but');
// let stop = document.querySelector('.stop');
// let inp = document.querySelector('.inp')

// let i = 0;
// let timerId;
// start.addEventListener('click', function (event) {
//      i++
//      if(event.code=="Enter")
//      timerId = setInterval(() => {
//     (inp.value)++
// }, 1000)
//  })

// stop.addEventListener('click', function(){
//     clearInterval(timerId)
// })
// let inp=document.querySelector('.inp')
// let text=document.querySelector('.text')
// inp.addEventListener('keypress', function (event) {
    // console.log(this);
    // console.log(event.code);
//     let i=0
//     let a
//     let timerId
//     if (event.code == 'Enter') {
//     i++
//     timerId=setInterval(() => {
//         (inp.value)++
//         a=inp.value
// }, 1000)
// }
// })
// if (a >= 10) {
//     clearInterval(timerId)
// }

// let but = document.querySelector('.but')
// but.addEventListener('click', function func() {
//     let i=0
//     setInterval(() => {
//         i++
//         console.log(i);
//     }, 1000);
//     this.removeEventListener('click', func)

// })

// let text=document.querySelector('.text')
// let inp=document.querySelector('.inp')
// // let text=document.querySelector('.text')
// inp.addEventListener('keypress', function (event) {
//     let i=0
//     let timerId
//     if (event.code == 'Enter') {
//     i++
//     timerId+=setTimeout(() => {
//     (inp.value)++
            
//     }, 10000)
// }
//     setTimeout(() => {
//         text.textContent='vaqt tugadi'
//     }, 1000);
// })
// but.addEventListener('click', function () {
//     inp.disabled = true
    
// })

// let text=document.querySelector('.text')
// let inp=document.querySelector('.inp')
// let timerId
// let body=document.querySelector('body')
// let but=document.querySelector('.but')
// inp.addEventListener('keypress', function (event) {
//     let i = inp.value
//     if (event.code == 'Enter') {
//         timerId = setInterval(() => {
//             i++
//             inp.value = i
//             if (i == 10) {
//                 clearInterval(timerId)
//                 text.textContent = 'vaqt tugadi'
//                 inp.disabled = true
//                 body.style.background = 'gold';
//                 but.style.display = 'none';
//             }
//         }, 1000);
//     }
// })

// let data = new Date()
// let hours=data.getHours()
// let minutes=data.getMinutes()
// let secondes=data.getSeconds()
// block1.innerHTML=addzero(hours)+":"+addzero(minutes)+":"+addzero(secondes)

// let timerId
//     // let i = 0;
//         timerId = setInterval(() => {
//             i++
//             if (i == 60) {
//                 clearInterval(timerId)
//                 text.textContent += i;
//             }
//         }, 1000);

        
    // let i = secondes.value
    //     timerId = setInterval(() => {
    //         i++
    //         secondes += i
    //         if (i == 60) {
    //             clearInterval(timerId)
    //             text.textContent = i
    //         }
    //     }, 1000);


    
// let inp=document.querySelector('.inp')
// let body=document.querySelector('body')
// let but=document.querySelector('.but')
// seconde.value += i
// let timerId
//         timerId = setInterval(() => {
//             if (text.secondes == 10) {
//             }
//                 clearInterval(timerId)
//                 block1.style.display = 'block';
//                 body.style.display = 'none';
//         }, 1000);
    

// let secondes
    




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
        text.classList.add('block1')
    }
    if (secondes == 25) {
        text.classList.remove('block1')
        text.classList.add('block3')
    }
    if (secondes == 50) {
        text.classList.remove('block3')
    }

}, 1000)
    function addzero(num) {
    if (num >= 0 && num <= 9) {
    return '0'+num
    }
    return num
}




