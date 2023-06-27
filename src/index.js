import './less/index.less'

// Your code goes here!
// 1.load event
window.onload=function(){
   const nav= document.querySelectorAll(".nav-link")
   nav.forEach(item=>{
    item.style.color="red"
   })

    //2.copy event  ---choose one word or paragraph in page and press command+c
    window.addEventListener("copy", () => {
        navigator.clipboard.readText()
            .then(text => {
                document.querySelector("h1").textContent += text
            })
    })
    //3.click
    document.body.addEventListener("click", evt => {
        evt.target.classList.toggle("mirror")
    })
    //4.double click
    document.body.addEventListener("dblclick", evt => {
        evt.target.style.visibility = "hidden"
        //visibility="hidden" still occupies the original space
    })
    //5.keydown
    window.addEventListener("keydown", evt => {
        if (evt.key === 'Escape') {
            document.body.innerHTML = ""
        }
    })
    //6.mouseenter,mouseleave
    const dest = document.querySelectorAll(".destination")
    dest.forEach(item => {
        item.addEventListener("mouseenter", evt => {
            evt.target.style.fontWeight = "bold"
        })
        item.addEventListener("mouseleave", () => {
            setTimeout(() => {
                item.style.fontWeight = "initial"
            }, 500)

        })

    })
    //7.wheel
    // window.addEventListener("wheel",evt=>{

    //     const {deltaY,deltaX}=evt
    //     console.log(`deltaX=${deltaY},deltaX=${deltaX}`)
    // })

    //8.resize ---design the window size


    const img = document.querySelector(".intro img")
    window.addEventListener("resize", () => {
        if (window.innerWidth < 800) {
            img.style.width = "50%"

        } else {
            img.style.width = "100%"
        }
    })

    //9.drag and drop




    document.querySelector(".logo-heading").draggable="true"
    
    const dropTarget = document.querySelector(".nav")
    const dragItem = document.querySelector(".logo-heading")

    dragItem.addEventListener("dragstart", evt => {
        evt.dataTransfer.setData("text/plain", "Fun Bus")
    })


    dropTarget.addEventListener("dragover", evt => {
        evt.preventDefault()
    })
    dropTarget.addEventListener("drop", evt => {
        evt.preventDefault()
        const data = evt.dataTransfer.getData("text/plain")
        dropTarget.textContent = data
    })







}


       
    















