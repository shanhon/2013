var search = location.search
var box = document.querySelector(".row")
if (search) {
    var id = search.split("=")[1];
    (async function() {
        var dt = await promiseAjax({
            url: '../php/xq.php',
            data: 'id=' + id,
            datatype: 'json'
        })
        var str = `
                <div class="nav clearfix">
                <ul>
                    <li><a href="./lb.html"><span class="iconfont">&#xe677;</span>返回</a></li>
                    <li>丨</li>
                    <li><a href="./sy.html">首页</a></li>
                    <li>&nbsp;/&nbsp;</li>
                    <li>${dt.name}</li>
                </ul>
            </div>
            <div class="xq_con_parent clearfix">
                <div class="xq_con">
                    <div class="bg"></div>
                    <div class="con">
                        <div class="con_box">

                        <div class="left ">
                            <div class="left_top"></div>
                            <ul>
                                <li>
                                    <a href="#"><img src="${dt.image}" alt=""></a>
                                </li>
                                <li>
                                    <a href="#"><img src="${dt.image}" alt=""></a>
                                </li>
                                <li>
                                    <a href="#"><img src="${dt.image}" alt=""></a>
                                </li>
                                <li>
                                    <a href="#"><img src="${dt.image}" alt=""></a>
                                </li>
                                <li>
                                    <a href="#"><img src="${dt.image}" alt=""></a>
                                </li>
                                <li>
                                    <a href="#"><img src="${dt.image}" alt=""></a>
                                </li>


                            </ul>
                            <div class="left_buttom"></div>
                        </div>
                        <div class="center">
                            <a><img src="${dt.image}" alt=""></a>
                            <span>新品</span>
                            <div class="zhezhang"><b class="zhun"></b></div>
                        </div>
                        <div class="bigimg">
                            <img src="${dt.image}" alt="">
                        </div>
                    </div>
                    <div class="right">
                        <div class="lei_con">
                            <span>${dt.class.split(" ")[0]}</span>
                            <span>${dt.class.split(" ")[1]}</span>
                            <span>${dt.class.split(" ")[2]}</span>
                        </div>
                        <div class="title_con">
                            <p>${dt.name}</p>
                        </div>
                        <div class="pingjia_con">
                            <p>★★★★★<a>${dt.pingjia}</a></p>
                        </div>
                        <div class="price_con">
                        <span class="zhekou">${"¥"+dt.price.split("¥")[1]}</span>
                        <span class="yuanjia"><s>${"¥"+dt.price.split("¥").pop()}</s></span>
                        </div>
                        <div class="color_con">${dt.color}</div>
                        <div class="xuan_con">
                            <a href="#" class="xuan_con1 dui"><img src="${dt.image}" alt=""></a>
                            <a href="#" class="xuan_con2"><img src="${dt.image}" alt=""></a>
                        </div>
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
                        <div class="kefu_con">
                            <div class="mianyun_con">
                                <a href="#"><span></span>该商品免运费</a>
                            </div>
                            <div class="zaixian_con">
                                <a href="#"><span></span>在线客服</a>
                            </div>
                        </div>
                        <div class="shuoming_con">
                            <span>价格说明：上文显示的划线价格系该商品的建议零售价（而非法律意义上的原价），仅供您参考。</span>
                        </div>
                        <div class="fenxiang_con clearfix">
                            <p class="s1"><span></span></p>
                            <p class="s2"><span></span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="mp">
            <div class="title_mp clearfix">
                <span class="title_m mp_title_black">商品描述</span>
                <span class="title_p">商品评价</span>
            </div>
            <div class="title_center">
                <h2>${dt.name}</h2>
                <p>${dt.title}</p>
            </div>
            <div class="title_footer clearfix">
                <div class="xzw">${dt.jieshao}</div>
                <ul class="right_good">
                    <li>常规型剪裁</li>
                    <li>系带松紧腰</li>
                    <li>织物鞋面</li>
                    <li>旨在适合天然偏硬草场的外底</li>
                </ul>
            </div>
            <div class="zhuyi">
                <p><strong>如需办理7天无理由退货，请确保退回的商品本身、原包装（例如：原装鞋盒等）、相关配（附）件（例如：吊牌、合格证、标签等）及赠品（如有）均保持完好状态且齐全。</strong></p>
                <p><strong>特别提醒：产品鞋盒含有合格证及商品信息条码，系产品的必要组成部分。如因鞋盒受损、涂鸦、脏污、丢失、非原装等原因无法保持商品原有完好状态、影响商品二次销售的，我们将无法为您提供无理由退货服务。</strong></p>
                <p><strong>敬请注意，由于灯光、显示器造成的细微色差或不同生产批次等因素，实物与图片可能略有差异；本页面中的商品信息以及介绍内容仅供参考，请以实物为准。</strong></p>
            </div>
        </div>
            `
        box.innerHTML = str;
        //折扣价
        $(".price_con").each(function() {
                if ($(this).find(".zhekou").html() == $(this).find(".yuanjia").find("s").html()) {
                    $(this).find(".yuanjia").hide()
                }
            })
            //放大镜
        function move1(e) {
            //获取当前光标的移动距离
            var x1 = e.pageX - $('.center').offset().left - parseInt($('.zhezhang').outerWidth() / 2)
            var y1 = e.pageY - $('.center').offset().top - parseInt($('.zhezhang').outerHeight() / 2)
                //设置遮藏层的边界

            var minX = 0,
                minY = 0
            var maxX = $('.center').innerWidth() - $('.zhezhang').outerWidth()
            var maxY = $('.center').innerHeight() - $('.zhezhang').outerHeight()

            //右边图片的移动距离
            var rightX, rightY
                //水平方向的判断，并且移动遮藏层
            if (x1 < minX) {
                var minxx = minX + 'px'
                $('.zhezhang').css("left", minxx)
                rightX = minX
            } else if (x1 > maxX) {
                var maxxx = maxX + 'px'
                $('.zhezhang').css("left", maxxx)
                rightX = maxX
            } else {
                var x1xx = x1 + "px"
                $('.zhezhang').css("left", x1xx)
                rightX = x1
            }

            //垂直方向的判断
            if (y1 < minY) {
                var minyy = minY + 'px'
                $('.zhezhang').css("top", minyy)
                rightY = minY
            } else if (y1 > maxY) {
                var maxyy = maxY + 'px'
                $('.zhezhang').css("top", maxyy)
                rightY = maxY
            } else {
                var y1yy = y1 + 'px'
                $('.zhezhang').css("top", y1yy)
                rightY = y1
            }

            //让右边的图片进行移动

            var rightxx = -4 * rightX + 'px'
            var rightyy = -4 * rightY + 'px'
            $(".bigimg").find("img").css("left", rightxx)
            $(".bigimg").find("img").css("top", rightyy)
        }
        //给box对象绑定三个事件
        $('.center').on({
                mouseenter: function() {
                    $(this).css("cursor", "url(../image/zoom.cur),default")

                },
                mousemove: function(e) {
                    var e = e || $.event
                    move1(e)
                },
                mouseleave: function() {
                    $('.zhezhang').css("display", "none")
                    $('.bigimg').css("display", "none")

                },
                click: function() {

                    if ($('.zhezhang').css("display") == "none") {
                        $(this).css("cursor", "none")
                    } else {
                        $(this).css("cursor", "url(../image/zoom.cur),default")
                    }
                    $('.zhezhang').toggle()
                    $('.bigimg').toggle()
                }
            })
            //换颜色
        $(".xuan_con1").on("click", function() {
            $(".xuan_con1").addClass("dui")
            $(".xuan_con2").removeClass("dui")

        })
        $(".xuan_con2").on("click", function() {
                $(".xuan_con1").removeClass("dui")
                $(".xuan_con2").addClass("dui")
            })
            //滚动
        $(window).on("scroll", function() {

                if ($("html").scrollTop() > 100 && $("html").scrollTop() < 335) {
                    $(".con_box").css("top", $("html").scrollTop() - 100 + "px")
                    $(".bg").css("top", $("html").scrollTop() - 100 + "px")
                } else if ($("html").scrollTop() < 100) {
                    $(".con_box").css("top", "0px")
                    $(".bg").css("top", "0px")
                }
            })
            //立即购买
        $(".mai_con").on("click", function() {
                if (document.cookie) {
                    window.location.href = "./gw.html"
                } else {
                    window.location.href = "./dl.html"
                }
            })
            //加入购物车
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
            alert("添加成功")
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
        //判断登录
    var name1 = getCookie("name");
    if (name1) {
        name1 = name1.replace(name1.substring(3, 8), "*****")
        $(".sy_header_top").find("li").last().find("i").text(decodeURIComponent(name1))
    }

} else {
    alert("你还没选中商品")
    location = "./lb.html"
}