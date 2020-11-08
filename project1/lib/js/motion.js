let num = 1;

function etcMenuOpen() {
    // 더보기 메뉴 옆 화살표 애니메이션
    num++;

    if (num % 2 === 0) {
        $(".btn_etcMenu").removeClass('off');
        $(".btn_etcMenu").addClass('on');
    } else {
        $(".btn_etcMenu").removeClass('on');
        $(".btn_etcMenu").addClass('off');
    }

    // 더보기 메뉴 열기
    $(".screen").stop().fadeToggle(100);
    $(".section_etcMenu").delay(50).stop().slideToggle(300);
};

// 최근 검색어
function keywordDel(obj) {
    const li = $(obj).parents("li"),
          len = $(obj).parents("ol").find("li").length;

    // 검색어 삭제
    $(li).remove();

    // 최근 검색기록 없을 때
    if (len === 1) {
        $(".empty").show();
    }
}

function keywordAllClear() {
    // 목록 전체 삭제
    $(".inner_newKeyword").find("ol").find("li").remove();

    // 검색 유도 글 노출
    $(".empty").show();
}

// 최근 검색어 및 인기 검색어 탭
function kwTab(obj, val) {
    const me = $(".inner_" + val + "Keyword");
    $(obj).addClass("on");
    $(obj).siblings("li").removeClass("on");

    me.show();
    $(me).siblings("nav").hide()
}

// 비주얼 애니메이션 효과
function visual(){
    const tit = $(".section_visual").children(".title"),
          txt = $(".section_visual").children(".subTxt"),
          date = $(".section_visual").children(".period"),
          img = $(".section_visual").children(".model"),
          vdo = $(".section_video").children("article");

    const arr = [tit, txt, date, img, vdo];
    
    for(let i=0; i<arr.length; i++) {
        arr[i].css("opacity","0");
    }
    
    $(txt).delay(500).animate({
        "opacity":"1",
        "top":"95px"
    });

    $(date).delay(500).animate({
        "opacity":"1"
    });

    $(img).delay(1000).animate({
        "opacity":"1",
        "left":"50%"
    });

    $(tit).delay(1800).animate({
        "opacity":"1",
        "top":"0"
    });
    
    $(vdo).delay(2200).animate({
        "opacity":"1",
        "top":"-195px"
    },500);
    
}

// 유튜브 탭
function youtubeTab(num,obj) {
    const urlArr = [
        "https://www.youtube.com/embed/8ZZTBrYEBx8",    // 히어로 비긴즈
        "https://www.youtube.com/embed/fBVeoRa2s4M",    // 기쁜 우리 시작하는 날
        "https://www.youtube.com/embed/H1yaS0tgJwA",    // 카페 푸른 시작
        "https://www.youtube.com/embed/sBIsx13AnsY"     // 야망의 시작
    ];

    let url = urlArr[num];

    $(".iframeBox").children("iframe").attr('src', url);
    $(obj).siblings("li").removeClass("on");
    $(obj).addClass("on");
}

// 이벤트 탭 스크롤 이동
function scrollMove(num){
    let st = $(window).scrollTop(),
        ct = $(".section_event" + num).offset().top;

    $("html,body").stop().animate({
        "scrollTop" : ct
    }, 1000);
}

// 링크 복사하기
function urlCopy(obj){ 
    let url = window.location.href;

    // url복사
    $(".inp_url").val(url).select();
     document.execCommand("Copy");

    // 메세지 출력
    $(".toastMsg").stop().animate({
        "opacity":"1",
        "bottom":"90px"
    },500).delay(1000).animate({
        "opacity":"0",
        "bottom":"80px"
    },500)
}

// 팝업 열기 공통
function popOpen(obj) {
    $(".screen").css("opacity", "0").stop().fadeIn(100);
    $("." + obj).stop().fadeIn(300);
}

// 팝업 닫기 공통
function popClose(obj) {
    $(".screen").css("opacity", "0.5").stop().fadeOut(100);
    $("." + obj).stop().fadeOut(300);
}

// 팝업 열고닫기 공통
function popToggle(obj) {
    // $(".screen").css("opacity", "0").stop().fadeToggle(100);
    $("." + obj).delay(50).stop().fadeToggle(300);

}

// 버튼 onmouseenter 공통
function on(obj) {
    $(obj).removeClass("off").addClass("on");
}

// 버튼 onmouseleave 공통
function off(obj) {
    $(obj).removeClass("on").addClass("off");
}

$(document).ready(function () {
    // 화면 초기값 셋팅
    const hideArr = [
        ".screen",
        ".section_etcMenu",
        ".article_keyword",
        ".ariticle_pjtOpen",
        ".inner_newKeyword .empty",
        ".inner_hotKeyword"
    ];
    
    for(let i=0; i<hideArr.length; i++) {
        $(hideArr[i]).hide();
    }

    // 광고 포스터 슬라이드 효과
    $('.lst_adPoster').slick();

    visual();
})


let lastScrollTop = 0;

// 이벤트 탭 스크롤 효과
$(window).on("scroll",function(){
    const tab = $(".tab_eventCon").find("li"),
          tabHeight = $(".tab_eventCon").height(),
          evt2Height = $(".section_event2").height(),
          vdo_st = $(".section_video").offset().top - tabHeight,
          evt1_st = $(".section_event1").offset().top - tabHeight,
          evt2_st =  $(".section_event2").offset().top - tabHeight,
          exh_st = $(".tit_exhibition").offset().top - tabHeight,
          exh1_st = $(".section_exhibition1").offset().top,
          exh2_st = $(".section_exhibition2").offset().top,
          exh3_st = $(".section_exhibition3").offset().top,
          intro_st = $(".section_introduce").offset().top;
    
    let st = $(this).scrollTop(),
        win_st = $(window).scrollTop();

    // 이벤트 마우스 업/다운 탭 고정
    if(st > lastScrollTop){
        if(win_st >= evt1_st){
            evtTab_on(tabHeight);
        }
        
        if(win_st >= exh_st){
            evtTab_off(0,tab);
        }
    }else{
        if(win_st <= (evt1_st + tabHeight) || win_st >= exh_st){
            evtTab_off(0,tab);
        }else{
            evtTab_on(tabHeight,tab);
        }
    }

    lastScrollTop = st;
    
    // 이벤트별 탭 on/off
    if(win_st < evt2_st && win_st >= evt1_st){
        $(tab).removeClass("on");
        $(tab).eq(0).addClass("on");
    }else if(win_st < exh_st && win_st >= evt2_st){
        $(tab).removeClass("on");
        $(tab).eq(1).addClass("on");
    }else{
        $(tab).removeClass("on")
    }

    // 이벤트 스크롤 다운 애니메이션
    if(win_st >= vdo_st){
        evt_on("section_event1",-19);
    }

    // 이벤트 스크롤 다운 애니메이션
    if(win_st >= (evt2_st - 400)){
        evt_on("section_event2",-3);
    }
})

function evt_on(obj,n){
    const tit = $("." + obj).find(".article_info .infoBox h3"),
          txt = $("." + obj).find(".article_info .infoBox p"),
          img = $("." + obj).find(".article_info .infoBox .img")

    $(tit).animate({
        "opacity":"1"
    },500)

    $(tit).find("em").delay(500).animate({
        "opacity":"1",
        "bottom":"0"
    },500);

    $(txt).delay(1000).animate({
        "opacity":"1",
        "bottom":"0"
    },500);

    if(obj == 'section_event1'){
        $(img).delay(1000).animate({
            "opacity":"1",
            right: n + "%"
        })
    }

    if(obj == 'section_event2'){
        $(img).delay(1000).animate({
            "opacity":"1",
            left: n + "%"
        })
    }
}

function evtTab_on(m,t){
    $(".tab_eventCon").addClass("fix");
    $(".section_event1").css("padding-top",m+"px");
    $(t).removeClass("on")
}

function evtTab_off(m,t){
    $(".tab_eventCon").removeClass("fix");
    $(".section_event1").css("padding-top",m+"px");
    $(t).removeClass("on")
}

function exh_on(obj){
    console.log(idx)
    $(obj).find(".lstCon").delay(500).animate({
        "opacity":"0"
    })
}

