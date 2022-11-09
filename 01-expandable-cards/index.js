
const element=document.querySelectorAll(".container-child")

element.forEach(item=>{
    item.addEventListener("click",()=>{
        removeClass();
        item.classList.add("active");
    })
})

const removeClass=()=>{
    element.forEach(item=>{
        item.classList.remove("active");
    })
}
