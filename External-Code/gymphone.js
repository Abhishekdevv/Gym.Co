 gymburger = document.querySelector('.gymburger')
gymmenu = document.querySelector('.gymmenu')
gymcontainer = document.querySelector('.gymcontainer')



gymburger.addEventListener('click', ()=>{
    gymmenu.classList.toggle('gymvisibility');
  gymcontainer.classList.toggle('gymheight');
    
})