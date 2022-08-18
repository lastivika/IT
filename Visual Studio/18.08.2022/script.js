// Map
// filter
// reduce


// let arr = ['Oleg', 'Ivan', 'Vasylyna'];
// let arr2 = arr.map(item => item.length);
// console.log(arr2);
// console.log(arr);

// let arr = [1, 2, 3, 4, 5];

// let result = arr.reduce(function (accumulator, item) {
//     return accumulator + item
// }, 0)

// console.log(result)






//-----------------------------------------------------------------------

const tasks = [

    {
        _id: '36hu4h6ubhbjhbgj65hk5t6kk5khk4k',
        completed: true,
        body: 'Зробити щось',
        tetle: "Заголовок для нашої задачі"
    },
    {
        _id: '34sdafsdfsd',
        completed: true,
        body: 'Зробити щось 2',
        tetle: "Заголовок для нашої задачі 2"
    },
    {
        _id: '36hu4h6ubhbjhbgj6f3rsf5hk5t6kk5khk4k',
        completed: true,
        body: 'Зробити щось 3',
        tetle: "Заголовок для нашої задачі 3"
    }

];

    (function (arrOfTasks) {
        const objOfTasks = arrOfTasks.reduce((acc, task) => {
            acc[task._id] = task;
            return acc;
        }, {});

        renderAllTasks(objOfTasks)

        // function renderAllTasks(taskList){
        //     console.log(Object.values(taskList))
        //     if(taskList){
        //         console.log("Ви не заповнили список задач")
        //         return
        //     }

        //     const fragment = document.createDocumentFragment();
        //     Object.values(taskList)
        // }


        function renderAllTasks(taskList){
            if(!taskList){
                console.log("Ви не заповнили список задач")
                return
            }

            const fragment = document.createDocumentFragment();
            Object.values(taskList).forEach(task => { //values з значень об'єкта робить масив
                const taskCard = listItemTemplate(task)
            })
        }


        function listItemTemplate(task){
            const col = document.createElement('div');
            col.classList.add('col-lg-4');

            const card = document.createElement('div');
            col.classList.add('card', 'text-light', 'bg-dark', 'm-3', 'p-3');

            const cardHeader = document.createElement('div');
            col.classList.add('card-header');

            const cardBody = document.createElement('div');
            col.classList.add('card-body');

            const cardTitle = document.createElement('h5');
            col.classList.add('card-title');

            const cardText = document.createElement('div');
            col.classList.add('card-text');

            const deleteBtn = document.createElement('button');
            col.classList.add('btn', 'btn-danger', 'delete-btn');
        }
    })(tasks);