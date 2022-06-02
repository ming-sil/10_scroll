(function(){

    const wrapEl = document.querySelector('.wrap')
    const gageEl = document.querySelector('.gage');

    const handleGage = () => {
      
        const scrlTop = window.pageYOffset;
        // gageEl.style.width = scrlTop + "px"



        // console.log("페이지 전체 높이값: ", wrapEl.offsetHeight);
        // console.log("브라우저 높이값: ", window.innerHeight);
        // console.log("실제 사용할 수 있는값: ", wrapEl.offsetHeight - window.innerHeight);
        const useScroll = wrapEl.offsetHeight - window.innerHeight;
        const per = scrlTop / useScroll * 100;
        console.log(per)
        gageEl.style.width = per + "%"

        // *공식
        // =>사용할 스크롤값: 문서의 높이값 - 브라우저의 높이값
            // (선택자.offsetHeight - window.innerHeight);
        // =>사용할 스크롤 퍼센트처리: 사용할 스크롤 / 사용할 수 있는 스크롤값 * 100 + '%'
            // (pageYOffset / 계산해둔 사용할 스크롤값 * 100);
    }

    window.addEventListener('scroll', handleGage);

})();//end