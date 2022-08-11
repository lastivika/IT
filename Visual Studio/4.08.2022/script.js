const inputColor = document.querySelector('#color-input');
const btnColorAdd = document.querySelector('#btn-color');
console.log(inputColor);

// btnColorAdd.addEventListener('click', function(){
//     // console.log('sfvfbchs')
//     let box = document.createElement('div');
//     box.className = "box";
//     box.style.background = `${inputColor.value}`
//     document.body.append(box);
// })


btnColorAdd.addEventListener('click', function () {
    let colors = inputColor.value.split(' ');
    console.log(colors)
    colors.forEach(element => {
        console.log(element);
        let box = document.createElement('div');
        box.className = "box";
        box.style.background = element;
        box.addEventListener('click', function () {
            this.remove()
        })
        box.addEventListener('mouseover', function (event){
            document.body.style.background = event.target.style.background
        })
        document.body.append(box);
    });
    // let box = document.createElement('div');
    // box.className = "box";
    // box.style.background = `${inputColor.value}`
    // document.body.append(box);
})

