window.addEventListener('scroll',function(){
    const navbar = this.document.getElementById("mainNavbar")

    if(window.scrollY > 100){
        navbar.classList.add('fixed-top', 'bg-white', 'shadow')
    }
    else{
        navbar.classList.remove('fixed-top', 'bg-white','shadow')
    }

})

