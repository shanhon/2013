   //判断登录
   var name1 = getCookie("name");
   if (name1) {
       name1 = name1.replace(name1.substring(3, 8), "*****")
       $(".sy_header_top").find("li").last().find("i").text(decodeURIComponent(name1))
   }
   //广告
   $(".close1").on("click", function() {
           $(".sy_banner_1_1").css("display", "none")
           $(this).css("display", "none")
           $(".sy_k1").css("height", "80px")
       })
       //滚动公告
   var a = 0
   var dsq;
   dsq = setInterval(hua, 3000)

   function hua() {
       a++
       move($(".sy_banner_outer").find("ul").get(0), "left", -1000 * a, 110, function() {
           if (a == 3) {
               a = 0
               $(".sy_banner_outer").find("ul").css("left", "0px")
           }
       })
   }
   $(".sy_banner_outer").on({
       mouseenter: function() {
           clearInterval(dsq)
       },
       mouseleave: function() {
           dsq = setInterval(hua, 3000)
       }
   })
   $(".sy_banner_2_close").on("click", function() {
           $(this).parents(".sy_banner_2_con").css("display", "none")
       })
       //轮播图本月
   var a1 = 0
   var dsq1;
   dsq1 = setInterval(benyue, 3000)

   function benyue() {
       a1++

       if (a1 == 1) {
           $(".lubo1_con").find("ul").css("left", "-909px")
           $(".lubo1_con_left").css("background-position", "-216px -50px")
           $(".lubo1_con_right").css("background-position", "-36px -50px")
           $(".lubo1_con_kuail").css("border-bottom", "solid 1px #000")
           $(".lubo1_con_kuair").css("border-bottom", "solid 4px #000")
       } else if (a1 > 1) {
           a1 = 0
           $(".lubo1_con").find("ul").css("left", "0px")
           $(".lubo1_con_left").css("background-position", "0px -50px")
           $(".lubo1_con_right").css("background-position", "-252px -50px")
           $(".lubo1_con_kuail").css("border-bottom", "solid 4px #000")
           $(".lubo1_con_kuair").css("border-bottom", "solid 1px #000")
       }

   }
   //箭头
   $(".lubo1_con_left").on({
       click: function() {
           if (a1 == 1) {
               $(".lubo1_con").find("ul").css("left", "0px")
               $(".lubo1_con_left").css("background-position", "0px -50px")
               $(".lubo1_con_right").css("background-position", "-252px -50px")
               $(".lubo1_con_kuail").css("border-bottom", "solid 4px #000")
               $(".lubo1_con_kuair").css("border-bottom", "solid 1px #000")
               a1 = 0
           }
       },
       mouseenter: function() {
           if ($(this).css("background-position") == "-216px -50px") {
               $(".lubo1_con_left").css("background-position", "-288px -50px")
           }
       },
       mouseleave: function() {
           if ($(this).css("background-position") == "-288px -50px") {
               $(".lubo1_con_left").css("background-position", "-216px -50px")
           }
       }
   })
   $(".lubo1_con_right").on({
           click: function() {
               if (a1 == 0) {
                   $(".lubo1_con").find("ul").css("left", "-909px")
                   $(".lubo1_con_left").css("background-position", "-216px -50px")
                   $(".lubo1_con_right").css("background-position", "-36px -50px")
                   $(".lubo1_con_kuail").css("border-bottom", "solid 1px #000")
                   $(".lubo1_con_kuair").css("border-bottom", "solid 4px #000")
                   a1 = 1
               }
           },
           mouseenter: function() {
               if ($(this).css("background-position") == "-252px -50px") {
                   $(".lubo1_con_right").css("background-position", "-324px -50px")
               }
           },
           mouseleave: function() {
               if ($(this).css("background-position") == "-324px -50px") {
                   $(".lubo1_con_right").css("background-position", "-252px -50px")
               }
           }
       })
       //导航
   $(".lubo1_con_kuail").on("click", function() {
       if (a1 == 1) {
           $(".lubo1_con").find("ul").css("left", "0px")
           $(".lubo1_con_left").css("background-position", "0px -50px")
           $(".lubo1_con_right").css("background-position", "-252px -50px")
           $(".lubo1_con_kuail").css("border-bottom", "solid 4px #000")
           $(".lubo1_con_kuair").css("border-bottom", "solid 1px #000")
           a1 = 0
       }
   })
   $(".lubo1_con_kuair").on("click", function() {
       if (a1 == 0) {
           $(".lubo1_con").find("ul").css("left", "-909px")
           $(".lubo1_con_left").css("background-position", "-216px -50px")
           $(".lubo1_con_right").css("background-position", "-36px -50px")
           $(".lubo1_con_kuail").css("border-bottom", "solid 1px #000")
           $(".lubo1_con_kuair").css("border-bottom", "solid 4px #000")
           a1 = 1
       }
   })
   $(".lubo1_con").on({
           mouseenter: function() {
               clearInterval(dsq1)
           },
           mouseleave: function() {
               dsq1 = setInterval(benyue, 3000)
           }
       })
       //轮播图2
   var a2 = 0
   var speed
   var dsq2;
   dsq2 = setInterval(benzhou, 3000)

   function benzhou() {
       a2++
       if (a2 > 3) {
           a2 = 0
       }
       speed = -1212 * a2 + "px"
       $(".lubo2_con").find("ul").css("left", speed)
       panduan()
       set()
   }
   //panduan
   function panduan() {
       if (a2 == 0) {
           $(".lubo2_con").find("ul").css("left", "0px")
           $(".lubo2_con_left").css("background-position", "0px -50px")
           $(".lubo2_con_right").css("background-position", "-252px -50px")
       } else if (a2 == 3) {
           $(".lubo2_con_left").css("background-position", "-216px -50px")
           $(".lubo2_con_right").css("background-position", "-36px -50px")
       } else if (a2 > 0 && a2 < 3) {
           $(".lubo2_con_left").css("background-position", "-216px -50px")
           $(".lubo2_con_right").css("background-position", "-252px -50px")
       }
   }
   //箭头
   $(".lubo2_con_left").on({
       click: function() {
           if (a2 > 0) {
               a2--
               a2--
               console.log(a2)
               benzhou()
           }
       },
       mouseenter: function() {
           if ($(this).css("background-position") == "-216px -50px") {
               $(".lubo2_con_left").css("background-position", "-288px -50px")
           }
       },
       mouseleave: function() {
           if ($(this).css("background-position") == "-288px -50px") {
               $(".lubo2_con_left").css("background-position", "-216px -50px")
           }
       }
   })
   $(".lubo2_con_right").on({
           click: function() {
               if (a2 < 3) {
                   benzhou()
               }
           },
           mouseenter: function() {
               if ($(this).css("background-position") == "-252px -50px") {
                   $(".lubo2_con_right").css("background-position", "-324px -50px")
               }
           },
           mouseleave: function() {
               if ($(this).css("background-position") == "-324px -50px") {
                   $(".lubo2_con_right").css("background-position", "-252px -50px")
               }
           }
       })
       //导航
   function set() {
       $(".lubo2_con_kuai2").each(function(i) {
           $(".lubo2_con_kuai2").eq(i).css("border-bottom", "solid 1px #000")
       })
       $(".lubo2_con_kuai2").eq(a2).css("border-bottom", "solid 4px #000")

   }
   $(".lubo2_con_kuai2").each(function(i) {
       $(".lubo2_con_kuai2").eq(i).on("click", function() {
           a2 = i - 1
           benzhou()
       })
   })

   $(".lubo2_con").on({
           mouseenter: function() {
               clearInterval(dsq2)
           },
           mouseleave: function() {
               dsq2 = setInterval(benzhou, 3000)
           }
       })
       //搜索
   $(".search_class").find("p").on("click", function() {
       window.location.href = './lb.html?class=' + $(this).text()
   })
   $(".sy_input_1").on({
       focus: function() {
           $(".search_class").show()
           $(".sy_cart").show()
       },
       click: function(event) {
           event.stopPropagation()
       }
   })
   $(".search_class").on("click", function(event) {
       event.stopPropagation()
   })
   $(document).on("click", function() {
       $(".search_class").hide()
       $(".sy_cart").hide()
   })
   $(".sy_search").on("click", function() {
           if ($(".sy_input_1").val()) {
               window.location.href = './lb.html?class=' + $(".sy_input_1").val()
           }
       })
       //购物车标识数量
   function cart_lth() {
       var lth = JSON.parse(localStorage.getItem('cartList')).length
       $(".sy_header_input_right_num").text(lth)
       if (lth == 0) {
           $(".sy_header_input_right_num").hide()
       }
   }
   cart_lth()