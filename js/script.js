// Selection id 
const inputValue = document.getElementById('input-value');
const addButton = document.getElementById('add-btn');
const parentItem = document.getElementById('parent-item');
const successButton = document.getElementById('success-btn');
const allClearButton = document.getElementById('all-clear-btn');

// items addition event 
addButton.addEventListener('click', function(){
    if(inputValue.value == ''){
        alert('Please input your shopping item !');
    }
    else if(inputValue.value.length <3){
        alert('Item name more than 3 character!');
    }
    else if(inputValue.value.length > 15){
        alert('Item name less than 20 character!');
    }

    else{
        const othersAddItem = document.createElement('div');
        othersAddItem.innerHTML = `
                        <div id="my-item" class="item flex justify-between pt-2 px-2 items-center">
                            <div class="h-3 w-3 bg-red-600 rounded-3xl"></div>

                            <span class="capitalize text-1xl md:text-2xl text-white font-normal md:font-bold  tracking-widest">${inputValue.value}</span>
                            <div class="item-action flex items-center">
                            <button  class="success-btn">
                                <img src="./image/success-icon-png-22.jpg" class="w-6 md:w-8 mr-2 ease-out duration-300 hover:opacity-[.8] " alt=""/>
                            </button>
                            <button class="delete-btn">
                                <img src="./image/cross-removebg-preview.png" class="w-6 md:w-8 ease-out duration-300 hover:opacity-[.8]" alt=""/>
                            </button>

                            </div>
                        </div>
                        `;
        parentItem.appendChild(othersAddItem);
        inputValue.value = '';
    // success event handler
    const successButton = document.getElementsByClassName('success-btn');
    for(const success of successButton){
        success.addEventListener('click', function(event){
            event.target.parentNode.parentNode.childNodes[3].style.display = "none";
            event.target.parentNode.parentNode.childNodes[1].style.opacity = "0.4";
            event.target.parentNode.parentNode.parentNode.childNodes[1].style.backgroundColor = 'green';
        });
    }

    // delete one element event 
    const deleteButton = document.getElementsByClassName("delete-btn");
        for (const button of deleteButton) {
            button.addEventListener("click", function (event) {
                event.target.parentNode.parentNode.parentNode.style.display = "none";
            });
        }
    }
});

// all clear event 
allClearButton.addEventListener('click',function (){
    const shopItems = document.getElementsByClassName('item');
    for(const shopItem of shopItems){
        shopItem.style.display = 'none';
    }
})

