document.querySelector('.black-bg').addEventListener('click', function (e) {

    // e.target        //유저가 실제로 클릭한 것
    // console.log(e.target)
    // e.currentTarget //이벤트 리스너가 달린 곳
    // this
    // e.preventDefault() //이벤트 기본 동작 막아줌
    console.log(e.target)
    //e.stopPropagation() //내 상위 요소로 이벤트 버블링 막아줌
    if (e.target === document.querySelector('.black-bg')) {
        document.querySelector('.black-bg').classList.remove('show-modal')
    }
})

/**
 * 이벤트 버블링은 항상 일어난다! : 이벤트가 상위 html로 퍼지는 현상
 * 유용한 이벤트 관련 함수들
 * 
 */

