var right_con = document.querySelector(".right_con");
var pagination1 = document.querySelector(".pagination");
var kuaisuchakan = document.querySelector(".kuaisuchakan");
(async function() {

    var search = decodeURI(location.search)
    if (search) {
        var gclass = search.split("=")[1];
        var dt = await promiseAjax({
            url: '../php/lbsearch.php',
            data: 'gclass=' + gclass,
            datatype: 'json'
        })
        $(".sumnum").text(gclass + dt.length)
        $(".nav_lei").text(gclass)
        $(".nav_i").show()
    } else {
        var dt = await promiseAjax({
            url: '../php/lb.php',
            datatype: 'json'
        })
        $(".sumnum").text(dt.length)
    }

    new Pagination(pagination1, {
            pageInfo: {
                pagenum: 1,
                pagesize: 59,
                totalsize: dt.length,
                totalpage: Math.ceil(dt.length / 59)
            },
            textInfo: {
                first: '首页',
                prev: "上一页",
                next: "下一页",
                last: "尾页"
            },
            cb(m) {
                // 获取当前页需要显示的数据

                var ar1 = dt.slice((m - 1) * 59, m * 59)
                    //创建拼接所有数据的字符串
                var str = ''
                    //遍历当前ar1数组中所有的数据
                ar1.forEach(item => {
                        str += `
                <div class="right_con_box" onclick="window.location.href='./xq.html?id=${item.id}'">
                    <div class="right_con_xuanfu">
                        <div class="img_con">
                            <a><img src="${item.image}" alt=""></a>
                            <p>新品</p>
                            <span>快速查看</span>
                        </div>
                        <div class="lei_con">
                            <span>${item.class.split(" ")[0]}</span>
                            <span>${item.class.split(" ")[2]}</span>
                        </div>
                        <div class="title_con">
                            <p>${item.name}</p>
                        </div>
                        <div class="price_con">
                            <span class="zhekou">${"¥"+item.price.split("¥")[1]}</span>
                            <span class="yuanjia"><s>${"¥"+item.price.split("¥").pop()}</s></span>
                        </div>
                        <div class="pingjia_con">
                            <p>★★★★★<a>${item.pingjia}</a></p>
                        </div>
                    </div>
                </div>
                `
                    })
                    //把当前拼接好的字符串，添加到row盒子中
                right_con.innerHTML = str

                //移入移出
                $(".right_con_box").on({
                        mouseenter: function() {
                            $(this).find(".right_con_xuanfu").css({
                                "box-shadow": "1px 2px 6px 0 rgb(136 136 136 /50%)",
                                "z-index": "2"
                            })
                            $(this).find(".right_con_xuanfu").find(".img_con").find("span").css("opacity", "1")
                        },
                        mouseleave: function() {
                            $(this).find(".right_con_xuanfu").css({
                                "box-shadow": "",
                                "z-index": ""
                            })
                            $(this).find(".right_con_xuanfu").find(".img_con").find("span").css("opacity", "0")
                        }
                    })
                    //详情
                $(".img_con").find("span").on("click", function(event) {
                    event.stopPropagation()
                    var xid = $(this).parents(".right_con_box").prop("outerHTML").split("?id=")[1].split("'")[0];
                    (async function() {
                        var dt = await promiseAjax({
                            url: '../php/xq.php',
                            data: 'id=' + xid,
                            datatype: 'json'
                        })
                        var str = `
                    <div class="shangpin">
                        <div class="shangpin_left"></div>
                        <div class="tupian">
                            <img src="${dt.image}" alt="">
                        </div>
                        <div class="xiangqing">
                            <p class="xiangqing_tit">${dt.name}</p>
                            <p class="xiangqing_pri">
                            <span class="zhekou">${"¥"+dt.price.split("¥")[1]}</span>
                            <span class="yuanjia"><s>${"¥"+dt.price.split("¥").pop()}</s></span>
                            </p>
                            <div class="size_con">
                                <a href="#"><span class="iconfont">&#xe634;</span><i>查看尺码对照表</i></a>
                            </div>
                            <div class="xuansize_con">
                                <div class="xuan_left">
                                    <a>选择尺码</a>
                                    <span></span>
                                </div>
                                <div class="xuan_right">
                                    <a>1</a>
                                    <span></span>
                                </div>
                            </div>
                            <div class="mai_con">
                                <p><a href="#">立即购买<span class="jian iconfont">&#xeae3;</span></a></p>
                                <p></p>
                            </div>
                            <div class="gou_con">
                                <p><a href="#">加入购物袋<span class="jian iconfont">&#xeae3;</span></a></p>
                                <p></p>
                            </div>

                        </div>
                        <div class="gengduo">
                            <a href="./xq.html?id=${dt.id}">查看商品详情</a>
                        </div>
                        <div class="close">
                            <div class="cha"></div>
                        </div>
                    </div>
                    `
                        kuaisuchakan.innerHTML = str;
                        //折扣价
                        $("xiangqing_pri").each(function() {
                                if ($(this).find(".zhekou").html() == $(this).find(".yuanjia").find("s").html()) {
                                    $(this).find(".yuanjia").hide()
                                }
                            })
                            //弹出层
                        $(".kuaisuchakan").on("click", function() {
                            $(".kuaisuchakan").hide()
                            $("html").css("overflow", "visible")
                        })
                        $(".shangpin").on("click", function(event) {
                            event.stopPropagation()
                        })
                        $(".close").on("click", function() {
                                $(this).parents(".kuaisuchakan").hide()
                                $("html").css("overflow", "visible")
                            })
                            //立即购买
                        $(".mai_con").on("click", function() {
                                if (document.cookie) {
                                    window.location.href = "./gw.html"
                                } else {
                                    window.location.href = "./dl.html"
                                }
                            })
                            //加入购物袋
                        $(".gou_con").on("click", function() {

                            var obj1 = {
                                id: dt.id,
                                name: dt.name,
                                price: dt.price,
                                image: dt.image,
                                num: 1,
                                color: dt.color,
                                xuan: "inp2",
                            }
                            var cartList = localStorage.getItem("cartList")
                            if (cartList) {
                                cartList = JSON.parse(cartList)
                                var a = 0
                                cartList.forEach(function(item) {
                                    if (item['name'] === dt.name) {
                                        a++
                                        item['num']++
                                    }
                                })
                                if (!a) {
                                    cartList.push(obj1)
                                }
                                localStorage.setItem("cartList", JSON.stringify(cartList))
                            } else {
                                var arr = [obj1]
                                localStorage.setItem("cartList", JSON.stringify(arr))
                            }
                        })
                    })()
                    //弹出层
                    $(".kuaisuchakan").toggle()
                    $("html").css("overflow", "hidden")
                })

            }
        })
        //折扣价
    $(".price_con").each(function() {
            if ($(this).find(".zhekou").html() == $(this).find(".yuanjia").find("s").html()) {
                $(this).find(".yuanjia").hide()
            } else {
                $(this).find(".zhekou").css("color", "#c53622");
            }
        })
        //滚动
    var scr = 0
    var a1 = 1
    var lt = $(".left").offset().top
    $(window).on("scroll", function() {
        // if ($("html").scrollTop() - $(".left").scrollTop() > scr) {
        //     console.log("向下" + ($("html").scrollTop() - $(".left").scrollTop() - scr))
        // } else if ($("html").scrollTop() - $(".left").scrollTop() < scr) {
        //     console.log("向上" + (scr - ($("html").scrollTop() - $(".left").scrollTop())))
        // }

        if ($("html").scrollTop() - scr > 2800 - $(window).height() * a1) {
            scr = $("html").scrollTop()
            if (scr > lt + $(".con").height()) {
                scr = lt + $(".con").height()
            }
            a1 = 2
                // console.log(scr + "a")
            $(".left").css({
                "position": "fixed",
                "top": -2800 + $(window).height() + "px",
            })
        } else if (scr - ($("html").scrollTop()) > 2800 - $(window).height() * a1) {
            scr = $("html").scrollTop()
            if (scr > lt + $(".con").height()) {
                scr = lt + $(".con").height()
            }
            // console.log(scr + "b")
            $(".left").css({
                "position": "fixed",
                "top": "140px",
            })
        } else if ($("html").scrollTop() < lt) {

            $(".left").css({
                "position": "absolute",
                "top": "0px",
            })
        } else if ($("html").scrollTop() > $(".con").height()) {
            // console.log("d")
            $(".left").css({
                "position": "absolute",
                "top": $(".con").height() - 2800 + "px",
            })
        }
        // else {
        //     if ($("html").scrollTop() > scr && scr - ($("html").scrollTop()) > 2800 - $(window).height() * a1) {
        //         $(".left").css({
        //             "position": "fixed",
        //             "top": -$("html").scrollTop() + scr + "px"
        //         })
        //     } else if ($("html").scrollTop() < scr && $("html").scrollTop() - scr > 2800 - $(window).height() * a1) {
        //         $(".left").css({
        //             "position": "fixed",
        //             "top": scr - $("html").scrollTop() + "px"
        //         })
        //     }

        // }
        // else if (scr - ($("html").scrollTop() - $(".left").scrollTop()) < 2800 - $(window).height()) {

        //         $(".left").css({
        //             "position": "fixed",
        //             "top": -($("html").scrollTop() - $(".left").scrollTop() - scr),
        //         })

        //     } else if ($("html").scrollTop() - $(".left").scrollTop() < scr) {
        //         $(".left").css({
        //             "position": "fixed",
        //             "top": -(scr - ($("html").scrollTop() - $(".left").scrollTop())),
        //         })

        //     }

        // }
        // if ($("html").scrollTop() > 2800 && $("html").scrollTop() < $(".con").height() - $(window).height()) {
        //     $(".left").css({
        //         "position": "fixed",
        //         "top": -2800 + $(window).height() + "px",


        // } else if ($("html").scrollTop() > $(".con").height() - $(window).height()) {
        //     $(".left").css({
        //         "position": "absolute",
        //         "top": $(".con").height() - 2800 + "px",

        //     })
        // }
        // else if ($("html").scrollTop() < 2800)
    })

})()
//shouye
//广告
$(".close1").on("click", function() {
    $(".sy_banner_1_1").css("display", "none")
    $(this).css("display", "none")
    $(".fangkuai").css("height", "80px")
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
    //数量滚动条
var hei = 150 * 150 / 275
$(".scrollblock").css("height", hei + 'px')
$(".size").on("scroll", function() {
        var $top = ($(this).find(".sizeli1").position().top) * 150 / 275
        $(this).find(".scrollblock").css("top", -$top)
    })
    //判断登录
var name1 = getCookie("name");
if (name1) {
    name1 = name1.replace(name1.substring(3, 8), "*****")
    $(".sy_header_top").find("li").last().find("i").text(decodeURIComponent(name1))
}