const navBtn = document.querySelector('#menu_btn');
const  close_btn = document.querySelector('.close_btn');
const navigation = document.querySelector('.navbar_a');
const navigationItems=document.querySelectorAll('.navbar_a a');


navBtn.addEventListener('click',()=>{   
    close_btn.classList.toggle("active");
    navigation.classList.toggle('active');

});
console.log(navigationItems);
navigationItems.forEach(item=>{
    item.addEventListener('click',()=>{
        close_btn.classList.remove('active');
        navigation.classList.remove('active');
    })
});


close_btn.addEventListener('click',()=>{
    close_btn.classList.remove('active');
    navigation.classList.remove('active');
});





