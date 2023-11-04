// change image color 
function imgSlider(anything){
    document.querySelector(".drinks").src = anything;
}

//change background color
function changeBgColor(color){
    const bg = document.querySelector(".slider-bg");
    bg.style.background = color;
}

let icons = document.querySelectorAll(".icons li");
let counter = [...new Array(icons.length).keys()];

//change color in each items
let autoslide = setInterval(()=>{
    let index = counter.shift();
    counter.push(index);
    icons[index].click();
}, 3000)

//function to stop slide
const stopSlide = ()=>{
    clearInterval(autoslide)
};

//function to add active class on selected icons
function toggle(e){
    //clicked manually
    if (e.isTrusted){
        stopSlide();
    }
    
    //remove active class from all icons
    const oldIcons = document.querySelectorAll(".icons li");
    oldIcons.forEach((icon) => icon.classList.remove("active"));

    //add active class to clicked icon
    this.classList.add("active");

    //change slider image
    const img = this.children[0].src;
    imgSlider(img);
    
    //change background color
    const color = this.children[0].dataset.color;
    changeBgColor(color);

    //logic to re-arrange the array on click start here
    const num = this.dataset.num;
    let current = Number(num);
    counter = [...new Array(icons.length).keys()];

    counter = counter.map((item) =>{
        let total = item + current;
        if (total >= icons.length){
            total = total - icons.length;
        }
        return total;
    });

    counter.shift();

    //if clicked manually
    if (e.isTrusted){
        autoslide = setInterval(()=>{
            let index = counter.shift();
            counter.push(index);
            icons[index].click();
        }, 3000)
    }
}

//add event listener to all icon on click

icons.forEach((icon)=>{
    icon.addEventListener("click",toggle)
})


