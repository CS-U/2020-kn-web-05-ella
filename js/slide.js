/**
 * 전역변수
 */
var $container = $('.csu-slide');
var $stage = $('.csu-slide').find('.slide-stage');
var $wrapper = $('.csu-slide').find('.slide-wrapper');
var $slide = $('.csu-slide').find('.slide');
var slideCnt = $slide.length; //슬라이드의 총 개수
var stageCnt = 4; // 스테이지에 보여질 개수
var now = 0;


/**
 * 사용자 함수
 */
function init(){
    $wrapper.empty();
    $slide.eq(now).clone().appenTo($wrapper);
   for(var i=1, n; i<=stageCnt; i++){
    now - i -      
}
   }
}

/**
 * 이벤트 콜백
 */

 
 /**
  * 이벤트 등록
  */
