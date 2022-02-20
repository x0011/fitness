document.addEventListener('DOMContentLoaded', function(){
    const btns = document.querySelectorAll('[data-modal]');
    const closeBtn = document.querySelectorAll('.modal__close');
    const btnsBuy = document.querySelectorAll('.btn_catalog-buy');

    btnsBuy.forEach(btn=>{
        btn.dataset.modal = 'order';
        btn.addEventListener('click', e=>{
            const itemTitle = btn.parentNode
                .parentNode
                .parentNode.querySelector('.catalog-item__title').innerHTML;
            replaceSubtitle(itemTitle);
            showModal(btn);
        });
    });

    btns.forEach(elem => {
        elem.addEventListener('click', (e, i)=>{
            showModal(elem);
        });
    });
    closeBtn.forEach(elem=>{
        elem.addEventListener('click', e => {
            closeModal(elem);
        });
    });
    function showModal(btn){
        const modalClassName = `${btn.dataset.modal}-modal`;
        const overlay = document.querySelector('.overlay');
        const modalView = document.querySelector(`#${modalClassName}`);
        modalView.classList.toggle('modal_active');
        overlay.classList.toggle('overlay_active');
    }

    function closeModal(elem){
        const overlay = document.querySelector('.overlay');
        overlay.classList.toggle('overlay_active');
        elem.parentNode.classList.toggle('modal_active');
    }

    function replaceSubtitle(title){
        const modalView = document.querySelector('#order-modal');
        modalView.querySelector('.modal__subtitle').innerHTML = title;
    };
});