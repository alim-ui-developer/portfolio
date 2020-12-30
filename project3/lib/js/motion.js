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
	$("." + g + "Graph").find(".graph").find("ul").addClass("active");
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

$(window).on("scroll",function(){
	let st = $(window).scrollTop();

	const record1 = $("#timelineWrap").offset().top - 800,
		  record2 = $("#firstRecordWrap").offset().top - 800,
		  record3 = $("#toneWrap").offset().top - 800,
		  record4 = $("#secondRecordWrap").offset().top - 800,
		  record5 = $("#historyWrap").offset().top - 800;

	if(st >= 0){
		// timelineWrap
		$(".time").addClass("active");
		$(".timeline").addClass("active");
		$(".btn_hitsong").addClass("active");
	}

	if(st >= record2){
		// firstRecordWrap
		$("#firstRecordWrap").addClass("active");	
	}

	if(st >= record3){
		// toneWrap
		$("#toneWrap").addClass("active");	
	}

	if(st >= record4){
		// secondRecordWrap
		$("#secondRecordWrap").addClass("active");	
	}

	if(st >= record5){
		// historyWrap
		$("#historyWrap").find("article").each(function(){
			const conTop = $(this).offset().top - 1000;

			if(st >= conTop){
				$(this).addClass("active");
			}
		})
	}
 });

