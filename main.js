
let ubicacionPrincipal = window.pageYOffset;

window.addEventListener("scroll", function(){    
    let desplazamientoActual = window.pageYOffset; 
    if(ubicacionPrincipal >= desplazamientoActual){ 
        document.getElementsByTagName("header").style.top = "0px"
    }else{
        document.getElementsByTagName("header").style.top = "-100px"
    }
})