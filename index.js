const translateCarrossel = document.querySelector(".translate-carrossel")
const arrowLeft = document.querySelector(".bi-arrow-left")
const arrowRight = document.querySelector(".bi-arrow-right")




let count = 0;
arrowRight.addEventListener("click", ()=>{
    
    if(count <= 4 -1){
            count++
            translateCarrossel.style.transform = `translateX(-${count * 100}%)`;

        }
        console.log(translateCarrossel)
        console.log(count)


})


arrowLeft.addEventListener("click", ()=>{
     
    if(count <= 5 && count > 0){
        count--
        translateCarrossel.style.transform = `translateX(-${count * 100}%)`;

    }

})