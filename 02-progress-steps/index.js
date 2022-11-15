 let progressItem=1;
console.log(progressItem);

 const buttonPrev=document.querySelector("#prev");
 const buttonNext=document.querySelector("#next");

 const numbers=document.querySelectorAll(".number-item");
 const buttons=document.querySelectorAll(".button-item");
 const progress=document.querySelector(".progress");

 const changeStyle=(progressItem)=>{
    console.log(progressItem)
    switch (progressItem) {
        case 1:
            progress.style.width="0%";
            buttons[0].classList.remove("button-active");
            buttons[1].classList.add("button-active");
        break;
        case 2:
            progress.style.width="33.33%";
            buttons[0].classList.add("button-active");
            buttons[1].classList.add("button-active");
        break;
        case 3:
            progress.style.width="66.66%";
            buttons[0].classList.add("button-active");
            buttons[1].classList.add("button-active");
        break;
        case 4:
            progress.style.width="100%";
            buttons[0].classList.add("button-active");
            buttons[1].classList.remove("button-active");
        break;                                      
        default:
            break;
    }
 }

 buttonNext.addEventListener('click',()=>{
    if (progressItem<4){
        progressItem++;
        numbers[progressItem-1].classList.add("number-active");

        changeStyle(progressItem);
    }
 })

 buttonPrev.addEventListener('click',()=>{
    if (progressItem>1){
        progressItem--;
        numbers[progressItem].classList.remove("number-active");
        changeStyle(progressItem);
    }
 })




