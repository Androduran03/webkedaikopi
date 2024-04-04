const navbarNav=document.querySelector('.navbar-nav');
const hamburgerMenu=document.querySelector('#hamburger-menu');
const search=document.querySelector('#search');
const searchForm=document.querySelector('.search-form');
const searchBox=document.querySelector('#search-box');
const shoppingCartbutton=document.querySelector('#shopping-cart-button');
const shoppingCart=document.querySelector('.shopping-cart');

hamburgerMenu.addEventListener('click', function(e){
   navbarNav.classList.toggle('active');
   e.preventDefault();
})

// untuk menghilangkan  sidebar klik dimanapun

document.addEventListener('click', function(e){
if(!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)){
    navbarNav.classList.remove('active');
    e.preventDefault();
}

});
search.addEventListener('click', function(e){
   searchForm.classList.toggle('active')
   searchBox.focus();
   e.preventDefault();
})
document.addEventListener('click', function(e){
    if(!search.contains(e.target) && !searchForm.contains(e.target)){
        searchForm.classList.remove('active');
    }
});
shoppingCartbutton.addEventListener('click',function(e){
shoppingCart.classList.toggle('active');
e.preventDefault();
document.addEventListener('click',function(e){
    if(!shoppingCartbutton.contains(e.target)&&!shoppingCart.contains(e.target)){
        shoppingCart.classList.remove('active');
    }
})

})

const itemDetailModal=document.querySelector('#item-detail-modal');
const itemDetailButtons=document.querySelectorAll('.item-detail-button');

itemDetailButtons.forEach((btn) => {
    btn.onclick=(e)=>{
        itemDetailModal.style.display='flex'
        e.preventDefault();
    }
});


document.querySelector('.close-icon').onclick=(e)=>{
 
    itemDetailModal.style.display='none';
e.preventDefault();
}
// const modal=document.querySelector('#item-detail-modal');
window.onclick=(e)=>{
    if(e.target===itemDetailModal){
        itemDetailModal.style.display='none'
    }
}
