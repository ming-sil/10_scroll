(function(){

    const gageEl = document.querySelector('.gage');

    const handleGage = () => {
        const scrlTop = window.pageYOffset;
        const scrlGage = gageEl.getBoundingClientRect().width;

        for(let i = 0; i >= scrlTop; i++;){

        }
    }

    window.addEventListener('scroll', handleGage);

})();//end