const tabsBtn = document.querySelectorAll(".tabs__nav-btn");

const tabsItem = document.querySelectorAll(".tabs__item");

tabsBtn.forEach(function (btn) {
    btn.addEventListener('click', function () {
        let activeBtn = btn;
        console.log(activeBtn);

        let tabId = activeBtn.getAttribute("data-tab");
        console.log(tabId);

        let activeTab = document.querySelector(tabId);

        tabsBtn.forEach(function(btn){  //скидаємо клас active всіх елементів
            btn.classList.remove('active');
        })

        tabsItem.forEach(function(item){  //скидаємо клас active всіх item tab
            item.classList.remove('active');
        })

        //додає клас active для табу і кнопки
        activeBtn.classList.add('active');
        activeTab.classList.add('active');
    })
})

