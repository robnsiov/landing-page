const _ = document,
changeInp = _.querySelector('.main'),
subscribe = _.querySelector('.subcribe'),
toggle = _.querySelector('.toggle'),
close = _.querySelector('.fa-close'),
menu = _.querySelector('.menu');
changeInp.addEventListener('click', ()=>{
    if (changeInp.parentElement.children.item(0).value.length)
        subscribe.classList.add('change-inp');
}) 
toggle.addEventListener('click',()=>{
    menu.classList.toggle('change');
})
close.addEventListener('click', ()=>{
    subscribe.classList.add('change-inp');
})
