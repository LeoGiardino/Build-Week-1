function cambiaColore(){
    let rate = document.querySelectorAll(".rate div > i")
    rate.forEach(element => {
        
    });
    for(let i = 0;i < rate.length;i++){
        rate[i].addEventListener("mouseover",()=> {
        rate[i].classList.toggle("colore")
        })
    }
}
cambiaColore()