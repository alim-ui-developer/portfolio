// 탑 버튼 클릭
function topBtn(){
	$("html").animate({scrollTop : 0}, 800);
}

// 탭
function genreTab(obj,g){
	const graph = $(".genreBest").find("article[class$='Graph']");
	$(obj).siblings("li").removeClass("on");
	$(obj).addClass("on");

	$(graph).hide();
	$("." + g + "Graph").show();
}

// 흥미로운 기록 더 보기 버튼
function recordMore(obj){
	const parents = $(obj).parents("section[class^='recordLst']"),
		  moreLst = $(parents).find(".moreLst"),
		  btn = $(obj).find("span").text();

	$(moreLst).slideToggle(300);
	$(obj).toggleClass("on");

	if(btn === "더 보기"){
		$(obj).find("span").text("닫기");
	}else{
		$(obj).find("span").text("더 보기");
	}
}

$(function(){
	// 타임라인
	$('#timelineWrap').find(".time").find("em").counterUp({
		delay: 10,
		time: 1000
	});
});
