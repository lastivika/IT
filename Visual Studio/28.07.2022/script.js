// const container = document.querySelector('.container');
// console.log(container);

// const firstChildContainer = container.firstElementChild;
// console.log(firstChildContainer); //отримуємо першу дитину контейнера(перший елемент в контейнері) (box1)

// const lastChildContainer = container.lastElementChild;
// console.log(lastChildContainer); //отримуємо останню дитину контейнера(останній елемент в контейнері) (cards)

// const previousSibling = lastChildContainer.previousElementSibling;
// console.log(previousSibling); //отримуємо попередній елемент (ласт чайлд - cards, попередній - box3)

// const nextSibling = lastChildContainer.nextElementSibling;
// console.log(nextSibling); //отримуємо наступній елемент (ласт чайлд - кардс, наступний - в нас його нема, тому null)

// const cards = lastChildContainer;
// const parentElement = cards.parentElement; 
// console.log(parentElement); //отримуємо батьківський елемент (container)

// const children = container.childNodes;
// console.log(children); //отримуємо список всіх елементів, що є у контейнері

// const children = container.children;
// console.log(children); //отримуємо список всіх елементів, що є у контейнері(HTML колекція)

// for (let i = 0; i< children.length; i++) {
//     console.log(children[i]);
// }



// const box = document.querySelectorAll(".box");
// for (let i = 0; i < box.length; i++) {
//     // box[i].addEventListener('click', function () {
//     //     // console.log(this);
//     //     this.style.background = 'blue'  //коли клікаєш на бокс - він робиться з червоного в синій
//     // })
//     box[i].addEventListener('click', (e) => { //стрілочна функція // через window
//         console.log(this);
//         e.target.style.background = 'blue';
//     })
// }

