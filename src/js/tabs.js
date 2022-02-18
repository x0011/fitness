"use strict";

document.addEventListener('DOMContentLoaded', function(){
    let tabsContent = document.querySelectorAll('.catalog__content');
    let tabs = document.querySelectorAll('.catalog__tab');
    console.log(tabs);
    tabs.forEach(tab => {
        tab.addEventListener('click', event => {
            clearAllActivesTabs(tabs);
            clearAllDisplayContent();
            tab.classList.add('catalog__tab_active');
            setContent(tabs, tabsContent);
        });
    });

    tabsContent.forEach((content, i) => {
        content.style.display = "none";
        // tabs.forEach((tab, k)=>{
        //     console.log(content);
        // });
    });

    function clearAllActivesTabs(tabs){
        tabs.forEach(tab =>{
            tab.classList.remove('catalog__tab_active');
        });
    }

    function clearAllDisplayContent(){
        tabsContent.forEach(elem =>{
            elem.style.display = "none";
        })
    }

    function setContent(tabs, content){
        tabs.forEach((tab, i)=>{
            // if(tab.classList.contains('catalog__tab_active')){
            //         content[i].style.display = "flex";
            //     }
            // }
            if(tab.classList.contains('catalog__tab_active')){
                content[i].style.display = "flex";
            }
        })
    }

    setContent(tabs, tabsContent);
});