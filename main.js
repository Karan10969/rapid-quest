const slider = document.getElementById("myRange1")

slider.addEventListener( "change", (e)=>{

    slider.style.backgroundSize = `${e.target.value}%`
    document.getElementById("rangeNumber1").textContent = e.target.value
} )


const slider2 = document.getElementById("myRange2")

slider2.addEventListener( "change", (e)=>{

    slider2.style.backgroundSize = `${e.target.value}%`
    document.getElementById("rangeNumber2").textContent = e.target.value
} )


