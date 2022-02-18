document.addEventListener('DOMContentLoaded', f=>{
    let moreBtn = document.querySelectorAll('.catalog-item__more-link');
    let returnBtn = document.querySelectorAll('.catalog-item__return-link');
    let faceContent = document.querySelectorAll('.catalog-item__face-content');
    let backContent = document.querySelectorAll('.catalog-item__back-content');
    moreBtn.forEach((elem,num)=>{
        elem.addEventListener('click', event=>{
            toggleContent(num);
        })
    });

    returnBtn.forEach((elem, num) =>{
        elem.addEventListener('click', event =>{
            toggleContent(num);
        });
    });

    function toggleContent(num){
        backContent[num].classList.toggle("catalog-item__back-content_active");
        faceContent[num].classList.toggle("catalog-item__face-content_active");
    }

});