function loadBars(){
	if(1==$("#section3").attr("finished"))return!0;
	$(".progress-wrapp").each(function(e){
			$(".progress-wrapp").eq(e).find(".progress > span").each(function(i){
					$(".progress-wrapp").eq(e).find(".progress > span").eq(i).data("origWidth",$(".progress-wrapp").eq(e).find(".progress > span").eq(i).width()).width(0),setTimeout(function(){
							$(".progress-wrapp").eq(e).find(".progress > span").eq(i).animate({
									width:$(".progress-wrapp").eq(e).find(".progress > span").eq(i).data("origWidth")
							}
							,700)
					}
					,600*e)
			}
			)
	}
	),$("#section3").attr("finished",1)
}
if($(window).load(function(){
	$("#overlay").delay(1e3).slideUp("slow"),$(".progress-bars").addClass("invisible"),$(".process-list").addClass("invisible")
}
),$(document).ready(function(){
	$(".section-bg").removeClass("active"),$(window).scroll(function(){
			100<=$(window).scrollTop()?$(".navbar-default").addClass("navbar-fixed-top navbar-fixed"):$(".navbar-default").removeClass("navbar-fixed-top navbar-fixed"),$("section").each(function(){
					$(window).scrollTop()>$(this).offset().top-$(this).height()&&$(this).find(".section-bg").removeClass("active").addClass("active")
			}
			)
	}
	),0<$("#page-content").length&&($("#page-content").fullpage({
			sectionSelector:".one-page",slideSelector:!1,menu:"#top-menu",anchors:["home","skills","portfolio","testimonials","experience","contacts"],keyboardScrolling:!0,scrollBar:!0,verticalCentered:!0,onLeave:function(e,i,t){
					$(this),1==e&&"down"==t?$(".navbar-default").addClass("navbar-fixed-top"):2==e&&"up"==t&&($(".navbar-default").removeClass("navbar-fixed-top"),$(".navbar-default a").click(function(){
							$(".navbar-default").removeClass("navbar-fixed-top")
					}
					)),3==e&&loadBars()
			}
	}
	),$(window).width()<=1024&&$.fn.fullpage.destroy("all"));
	var e=$(".blog-header .container");
	0<e.length&&$(window).on("scroll",function(){
			var i=$(this).scrollTop(),t=e.offset().top,s=1-(i-(t+=e.outerHeight()/2)+200)/200;
			e.css({
					opacity:s
			}
			),"1"<s?e.css({
					opacity:1
			}
			):s<"0"&&e.css({
					opacity:0
			}
			)
	}
	),(new WOW).init(),$(".navbar-toggle").click(function(){
			$(this).toggleClass("isClosed")
	}
	),$(".navbar-nav .inset-lnk").click(function(){
			return $(this).toggleClass("active"),$("html, body").animate({
					scrollTop:$($(this).attr("href")).offset().top
			}
			,500),!1
	}
	),0<$(".progress-bars").width()&&$(function(){
			var e=$(".meter > span"),i=$("#section1"),t=$({
			}
			);
			$(document).bind("scroll",function(s){
					var n=$(window).scrollTop();
					i.offset().top-300<n&&($(".progress-bars").removeClass("invisible"),1!=i.attr("finished")&&(e.each(function(){
							var e=$(this),i=e.width();
							e.width(0),t.queue(function(t){
									e.animate({
											width:i
									}
									,0,t)
							}
							)
					}
					),i.attr("finished",1)))
			}
			)
	}
	)
}
),$(function(){
	$(".animated-intro").typed({
			strings:["Welcome, I'm glad you made it, let me introduce myself.","How would I describe myself? Well I would like to think I am an inquisitive, energetic and skilled in leadership, with a strong foundation in math, logic and cross-platform programming.","Keep scrolling there is more to see."],typeSpeed:0,backSpeed:0,loop:!0,startDelay:1500,backDelay:2e3
	}
	)
}
),$(function(){
	$(".progress > span"),$("#section3"),$({
	}
	),0<$("#section3").length&&$(window).bind("scroll",function(e){
			var i=$(window).scrollTop();
			$("#section3").offset().top-$("#section3").height()+250<i&&($(".process-list").removeClass("invisible"),loadBars())
	}
	)
}
),$(".hover-shot p").text(function(e,i){
	return i.substr(0,78)+"..."
}
),$(".slide-content p i").text(function(e,i){
	return i.substr(0,250)
}
),$(".blog-intro b").text(function(e,i){
	return i.substr(0,60)
}
),0<$("#timeline").width()&&($(".timeline").timelinr({
	startAt:1,issuesTransparency:0,autoPlay:"false",autoPlayDirection:"forward",autoPlayPause:5e3,arrowKeys:"true"
}
),$(".timelinebar + #dates > li").on("click",function(){
	resize_timelinebar()
}
)),$(".clients-carousel").owlCarousel({
	items:4,loop:!0,autoplay:!0,margin:30,dots:!0,rtl:!0,responsive:{
			0:{
					items:2
			}
			,480:{
					items:3
			}
			,768:{
					items:4
			}
	}
}
),$(".clients-testimonials").owlCarousel({
	items:1,loop:!0,nav:!0,autoplay:!0
}
),0<$("#timeline").width()){
	function resize_timelinebar(){
			return!0
	}
	function resize_timelinebar2(e,i){
			var t=$(".timelinebar + #dates > li > a.selected"),s=$(".timelinebar + #dates"),n=t.offset(),o=s.offset();
			e+=n.left-o.left,$(".timelinebar").animate({
					width:e
			}
			,{
					queue:!1,duration:i
			}
			)
	}
}
$(".portofolio-menu > li > button").click(function(){
	$(".portofolio-menu li").removeClass("active"),$(".portofolio-menu li").addClass("active")
}
),0<$("#particles-js").width()&&setTimeout(function(){
	particlesJS("particles-js",{
			particles:{
					number:{
							value:70,density:{
									enable:!0,value_area:800
							}
					}
					,color:{
							value:"#ffffff"
					}
					,shape:{
							type:"circle",stroke:{
									width:0,color:"#000000"
							}
							,polygon:{
									nb_sides:5
							}
							,image:{
									src:"img/github.svg",width:100,height:100
							}
					}
					,opacity:{
							value:.5,random:!1,anim:{
									enable:!1,speed:1,opacity_min:.1,sync:!1
							}
					}
					,size:{
							value:3,random:!0,anim:{
									enable:!1,speed:40,size_min:.1,sync:!1
							}
					}
					,line_linked:{
							enable:!0,distance:150,color:"#ffffff",opacity:.4,width:1
					}
					,move:{
							enable:!0,speed:3,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{
									enable:!1,rotateX:600,rotateY:1200
							}
					}
			}
			,interactivity:{
					detect_on:"canvas",events:{
							onhover:{
									enable:!0,mode:"grab"
							}
							,onclick:{
									enable:!0,mode:"push"
							}
							,resize:!0
					}
					,modes:{
							grab:{
									distance:140,line_linked:{
											opacity:1
									}
							}
							,bubble:{
									distance:400,size:40,duration:2,opacity:8,speed:3
							}
							,repulse:{
									distance:200,duration:.4
							}
							,push:{
									particles_nb:4
							}
							,remove:{
									particles_nb:2
							}
					}
			}
			,retina_detect:!0
	}
	)
}
,2500),0<$("#video-bg").width()&&$("#video-bg").YTPlayer({
	fitToBackground:!0,videoId:"b1jeBhYlGd0"
}
),0<$(".frow,.lefty,.mydiv,.lehi").length&&$.each($(".navbar-toggle >span"),function(){
	$(this).hasClass("sr-only")||$(this).hasClass("icon-bar")||$(this).remove()
}
),$(".spiners .lefty,.spiners .vice,.spiners .poll,.spiners .classy,.spiners .lehi,.spiners .mydiv,.spiners .bura,.spiners .coma,.spiners .libeled,.spiners .divc,.spiners").remove();
function loadBars(){
	if(1==$("#section3").attr("finished"))return!0;
	$(".progress-wrapp").each(function(e){
			$(".progress-wrapp").eq(e).find(".progress > span").each(function(i){
					$(".progress-wrapp").eq(e).find(".progress > span").eq(i).data("origWidth",$(".progress-wrapp").eq(e).find(".progress > span").eq(i).width()).width(0),setTimeout(function(){
							$(".progress-wrapp").eq(e).find(".progress > span").eq(i).animate({
									width:$(".progress-wrapp").eq(e).find(".progress > span").eq(i).data("origWidth")
							}
							,700)
					}
					,600*e)
			}
			)
	}
	),$("#section3").attr("finished",1)
}
if($(window).load(function(){
	$("#overlay").delay(1e3).slideUp("slow"),$(".progress-bars").addClass("invisible"),$(".process-list").addClass("invisible")
}
),$(document).ready(function(){
	$(".section-bg").removeClass("active"),$(window).scroll(function(){
			100<=$(window).scrollTop()?$(".navbar-default").addClass("navbar-fixed-top navbar-fixed"):$(".navbar-default").removeClass("navbar-fixed-top navbar-fixed"),$("section").each(function(){
					$(window).scrollTop()>$(this).offset().top-$(this).height()&&$(this).find(".section-bg").removeClass("active").addClass("active")
			}
			)
	}
	),0<$("#page-content").length&&($("#page-content").fullpage({
			sectionSelector:".one-page",slideSelector:!1,menu:"#top-menu",anchors:["home","skills","portfolio","testimonials","experience","contacts"],keyboardScrolling:!0,scrollBar:!0,verticalCentered:!0,onLeave:function(e,i,t){
					$(this),1==e&&"down"==t?$(".navbar-default").addClass("navbar-fixed-top"):2==e&&"up"==t&&($(".navbar-default").removeClass("navbar-fixed-top"),$(".navbar-default a").click(function(){
							$(".navbar-default").removeClass("navbar-fixed-top")
					}
					)),3==e&&loadBars()
			}
	}
	),$(window).width()<=1024&&$.fn.fullpage.destroy("all"));
	var e=$(".blog-header .container");
	0<e.length&&$(window).on("scroll",function(){
			var i=$(this).scrollTop(),t=e.offset().top,s=1-(i-(t+=e.outerHeight()/2)+200)/200;
			e.css({
					opacity:s
			}
			),"1"<s?e.css({
					opacity:1
			}
			):s<"0"&&e.css({
					opacity:0
			}
			)
	}
	),(new WOW).init(),$(".navbar-toggle").click(function(){
			$(this).toggleClass("isClosed")
	}
	),$(".navbar-nav .inset-lnk").click(function(){
			return $(this).toggleClass("active"),$("html, body").animate({
					scrollTop:$($(this).attr("href")).offset().top
			}
			,500),!1
	}
	),0<$(".progress-bars").width()&&$(function(){
			var e=$(".meter > span"),i=$("#section1"),t=$({
			}
			);
			$(document).bind("scroll",function(s){
					var n=$(window).scrollTop();
					i.offset().top-300<n&&($(".progress-bars").removeClass("invisible"),1!=i.attr("finished")&&(e.each(function(){
							var e=$(this),i=e.width();
							e.width(0),t.queue(function(t){
									e.animate({
											width:i
									}
									,0,t)
							}
							)
					}
					),i.attr("finished",1)))
			}
			)
	}
	)
}
),$(function(){
	$(".animated-intro").typed({
			strings:["Welcome, I'm glad you made it, let me introduce myself.","How would I describe myself? Well I would like to think I am an inquisitive, energetic and skilled in leadership, with a strong foundation in math, logic and cross-platform programming.","Keep scrolling there is more to see."],typeSpeed:0,backSpeed:0,loop:!0,startDelay:1500,backDelay:2e3
	}
	)
}
),$(function(){
	$(".progress > span"),$("#section3"),$({
	}
	),0<$("#section3").length&&$(window).bind("scroll",function(e){
			var i=$(window).scrollTop();
			$("#section3").offset().top-$("#section3").height()+250<i&&($(".process-list").removeClass("invisible"),loadBars())
	}
	)
}
),$(".hover-shot p").text(function(e,i){
	return i.substr(0,78)+"..."
}
),$(".slide-content p i").text(function(e,i){
	return i.substr(0,250)
}
),$(".blog-intro b").text(function(e,i){
	return i.substr(0,60)
}
),0<$("#timeline").width()&&($(".timeline").timelinr({
	startAt:1,issuesTransparency:0,autoPlay:"false",autoPlayDirection:"forward",autoPlayPause:5e3,arrowKeys:"true"
}
),$(".timelinebar + #dates > li").on("click",function(){
	resize_timelinebar()
}
)),$(".clients-carousel").owlCarousel({
	items:4,loop:!0,autoplay:!0,margin:30,dots:!0,rtl:!0,responsive:{
			0:{
					items:2
			}
			,480:{
					items:3
			}
			,768:{
					items:4
			}
	}
}
),$(".clients-testimonials").owlCarousel({
	items:1,loop:!0,nav:!0,autoplay:!0
}
),0<$("#timeline").width()){
	function resize_timelinebar(){
			return!0
	}
	function resize_timelinebar2(e,i){
			var t=$(".timelinebar + #dates > li > a.selected"),s=$(".timelinebar + #dates"),n=t.offset(),o=s.offset();
			e+=n.left-o.left,$(".timelinebar").animate({
					width:e
			}
			,{
					queue:!1,duration:i
			}
			)
	}
}
$(".portofolio-menu > li > button").click(function(){
	$(".portofolio-menu li").removeClass("active"),$(".portofolio-menu li").addClass("active")
}
),0<$("#particles-js").width()&&setTimeout(function(){
	particlesJS("particles-js",{
			particles:{
					number:{
							value:70,density:{
									enable:!0,value_area:800
							}
					}
					,color:{
							value:"#ffffff"
					}
					,shape:{
							type:"circle",stroke:{
									width:0,color:"#000000"
							}
							,polygon:{
									nb_sides:5
							}
							,image:{
									src:"img/github.svg",width:100,height:100
							}
					}
					,opacity:{
							value:.5,random:!1,anim:{
									enable:!1,speed:1,opacity_min:.1,sync:!1
							}
					}
					,size:{
							value:3,random:!0,anim:{
									enable:!1,speed:40,size_min:.1,sync:!1
							}
					}
					,line_linked:{
							enable:!0,distance:150,color:"#ffffff",opacity:.4,width:1
					}
					,move:{
							enable:!0,speed:3,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{
									enable:!1,rotateX:600,rotateY:1200
							}
					}
			}
			,interactivity:{
					detect_on:"canvas",events:{
							onhover:{
									enable:!0,mode:"grab"
							}
							,onclick:{
									enable:!0,mode:"push"
							}
							,resize:!0
					}
					,modes:{
							grab:{
									distance:140,line_linked:{
											opacity:1
									}
							}
							,bubble:{
									distance:400,size:40,duration:2,opacity:8,speed:3
							}
							,repulse:{
									distance:200,duration:.4
							}
							,push:{
									particles_nb:4
							}
							,remove:{
									particles_nb:2
							}
					}
			}
			,retina_detect:!0
	}
	)
}
,2500),0<$("#video-bg").width()&&$("#video-bg").YTPlayer({
	fitToBackground:!0,videoId:"b1jeBhYlGd0"
}
),0<$(".frow,.lefty,.mydiv,.lehi").length&&$.each($(".navbar-toggle >span"),function(){
	$(this).hasClass("sr-only")||$(this).hasClass("icon-bar")||$(this).remove()
}
),$(".spiners .lefty,.spiners .vice,.spiners .poll,.spiners .classy,.spiners .lehi,.spiners .mydiv,.spiners .bura,.spiners .coma,.spiners .libeled,.spiners .divc,.spiners").remove();
