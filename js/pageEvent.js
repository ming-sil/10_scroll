(function(){

    const gageEl = document.querySelector('.gage');

    const handleGage = () => {
        const scrlTop = window.pageYOffset;
        gageEl.style.width = scrlTop + "px"

    }

    window.addEventListener('scroll', handleGage);

})();//end