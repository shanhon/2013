     //判断登录
     var name1 = getCookie("name");
     if (name1) {
         name1 = name1.replace(name1.substring(3, 8), "*****")
         $(".sy_header_top").find("li").last().find("i").text(decodeURIComponent(name1))
     }
     //获取商品
     var cartList = localStorage.getItem('cartList')
     if (cartList) {
         cartList = JSON.parse(cartList)
         var str = ''
         cartList.forEach((item) => {
                 $(".gwc").append(`
        <div class="gwc_yl" data-id="${item.id}">
        <div class="xuan" data-xuan="${item.xuan}"><span class="iconfont ${item.xuan}">&#xe633;</span></div>
        <div class="img">
            <a href="#"><img src="${item.image}" alt=""></a>
        </div>
        <div class="zl">
            <p class="gwc_til">${item.name}</p>
            <p class="gwc_code">${item.color.split("(")[1].split(")")[0]}</p>
            <p>颜色：<span class="gwc_col">${item.color}</span></p>
            <p>尺码：<span class="gwc_siz">A/S</span></p>
            <p><span class="gwc_bj">编辑</span><span class="gwc_sc" data-id="${item.id}">删除</span>
                <b class="gwc_sum">¥<span>${item.price.split("¥")[1]*item.num}</span></b></p>
            <div class="gwc_pn">¥<span class="gwc_pric">${item.price.split("¥")[1]}</span> ×
                <p class="gwc_gsl">${item.num}<span></span></p>
                <div class="yincang">
                    <ul class="ul">
                        <li class="ulli1">
                            <p>1</p>
                        </li>
                        <li>
                            <p>2</p>
                        </li>
                        <li>
                            <p>3</p>
                        </li>
                        <li>
                            <p>4</p>
                        </li>
                        <li>
                            <p>5</p>
                        </li>
                        <li>
                            <p>6</p>
                        </li>
                        <li>
                            <p>7</p>
                        </li>
                        <li>
                            <p>8</p>
                        </li>
                        <li>
                            <p>9</p>
                        </li>
                        <li>
                            <p>10</p>
                        </li>
                    </ul>
                    <div class="gundongcao">
                        <div class="gundongkuai"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
`)

             })
             //全选
         $(".quan").on("click", function() {
                 if ($(this).find("span").hasClass("inp1")) {
                     $(this).find("span").addClass("inp2").removeClass("inp1").html("&#xe633;")
                     cartList.forEach(item => {
                         item.xuan = "inp2"
                     })
                     localStorage.setItem("cartList", JSON.stringify(cartList))
                     $(".xuan").each(function(i) {
                         $(this).find("span").addClass("inp2").removeClass("inp1").html("&#xe633;")
                         $(".gw_num").find("span").text(i + 1)

                     })

                 } else {
                     $(this).find("span").addClass("inp1").removeClass("inp2").html("")
                     cartList.forEach(item => {
                         item.xuan = "inp1"
                     })
                     localStorage.setItem("cartList", JSON.stringify(cartList))
                     $(".xuan").each(function() {
                         $(this).find("span").addClass("inp1").removeClass("inp2").html("")
                     })
                 }
                 xuanzhong()
                 danjia()
             })
             //单选
         $(".xuan").on("click", function() {
                 var n1 = $(this).parents(".gwc_yl").attr("data-id")
                 if ($(this).find("span").hasClass("inp1")) {
                     $(this).find("span").addClass("inp2").removeClass("inp1").html("&#xe633;")

                     cartList.forEach(item => {
                         if (item.id == n1) {
                             item.xuan = "inp2"
                         }
                     })
                     localStorage.setItem("cartList", JSON.stringify(cartList))
                 } else {
                     $(this).find("span").addClass("inp1").removeClass("inp2").html("")

                     cartList.forEach(item => {
                         if (item.id == n1) {
                             item.xuan = "inp1"
                         }
                     })
                     localStorage.setItem("cartList", JSON.stringify(cartList))
                 }
                 panduan()
                 xuanzhong()
                 danjia()
             })
             //删除
         $(".gwc").click(function(e) {
                 var e = e || window.event
                 var target = e.target
                 if (target.className == "gwc_sc") {
                     var n1 = target.getAttribute("data-id")
                     cartList = cartList.filter(item => {
                         return item.id != n1
                     })
                     localStorage.setItem("cartList", JSON.stringify(cartList))
                     location.reload()
                 }


             })
             //数量点击其他地方隐藏
         $(document).click(function() {
                 $(".yincang").hide()
                 $(".gwc_gsl").removeClass("zhankai")
                 $(".gwc_gsl").find("span").removeClass("zhishang")
             })
             //改变数量
         $(".gwc_gsl").on("click", function(event) {
             $(this).parents(".gwc_pn").find(".yincang").toggle()
             event.stopPropagation()
             $(this).toggleClass("zhankai")
             $(this).find("span").toggleClass("zhishang")
         })
         $("li").click(function(event) {
                 var n1 = $(this).parents(".zl").find(".gwc_sc").attr("data-id")
                 event.stopPropagation()
                 $(this).parents(".gwc_pn").find(".gwc_gsl").html($(this).find("p").text() + "<span></span>")
                 cartList.forEach(item => {
                     if (item.id == n1) {
                         item.num = $(this).find("p").text()
                     }
                 })
                 localStorage.setItem("cartList", JSON.stringify(cartList))
                 $(".yincang").hide()
                 $(".gwc_gsl").removeClass("zhankai")
                 $(this).parents(".zl").find(".gwc_sum").find("span").text($(this).find("p").text() * $(this).parents(".gwc_pn").find(".gwc_pric").text())
                 danjia()
             })
             //数量滚动条
         var hei = 160 * 160 / 400
         $(".gundongkuai").css("height", hei + 'px')
         $(".ul").on("scroll", function() {
                 var $top = ($(this).find(".ulli1").position().top) * 160 / 400
                 $(this).parents(".yincang").find(".gundongkuai").css("top", -$top)
             })
             //结算价
         function danjia() {
             var sum = 0
             var a = 0
             $(".gwc_yl").each(function() {
                 if ($(this).find(".xuan").find("span").hasClass("inp2")) {
                     sum += parseFloat($(this).find(".gwc_sum").find("span").text())
                     a++
                 }
                 if (a == 0) {
                     sum = 0
                 }
                 $(".sum").text(sum)
                 $(".zuisum").text($(".sum").text() - $(".youhui").text())
             })
         }

         danjia()
             //购物袋的数量
         function gwd() {
             var num_yl = 0
             $(".gwc_yl").each(function(i) {
                 num_yl++
             })
             $(".gw_num").find("span").text(num_yl)
         }
         gwd()
             //选中的数量
         function xuanzhong() {
             var num_xuan = 0
             $(".xuan").find(".inp2").each(function(i) {
                 num_xuan++
             })
             $(".gwc_head").find("span").eq(1).text(num_xuan)
             $(".dd_num").find("span").text(" " + num_xuan + " ")
         }
         xuanzhong()
             //全选按钮判断
         function panduan() {
             var num_xuan = 0
             var num_yl = 0
             $(".xuan").find(".inp2").each(function() {
                 num_xuan++
             })
             $(".gwc_yl").each(function() {
                 num_yl++
             })
             if (num_xuan == num_yl) {
                 $(".quan").find("span").addClass("inp2").removeClass("inp1").html("&#xe633;")
             } else {
                 $(".quan").find("span").addClass("inp1").removeClass("inp2").html("")
             }
         }
         panduan()
             //shouye
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

         }
         cart_lth()
         if (cartList == "") {
             $(".gw_num").find("p").html("购物袋空")
             $(".gouwu").append("<p class='n_xuangou'><a href='./lb.html'>立即购买<span class='jian iconfont'>&#xeae3;</span></a></p>")
             $(".dingdan").hide()
             $(".sy_header_input_right_num").hide()
             $(".p1").hide()
             $(".gwc").hide()
             $(".gw").css("height", "350px")
         }

     } else {
         $(".gw_num").find("p").html("购物袋空")
         $(".gouwu").append("<p class='n_xuangou'><a href='./lb.html'>立即购买<span class='jian iconfont'>&#xeae3;</span></a></p>")
         $(".dingdan").hide()
         $(".sy_header_input_right_num").hide()
         $(".p1").hide()
         $(".gwc").hide()
         $(".gw").css("height", "350px")
     }