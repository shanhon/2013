//手机号
$(".sjh").on("click", function() {
    $(".synum").focus()
})
$(".synum").on("focus", function() {
        $(".sjh").animate({
            "left": "17px",
            "top": "-8px",
            "font-size": "12px"
        }, 200, "linear")
        $(".synum").css("border", "solid 1px #000")
        $(".synum").css("border-bottom", "solid 2px #000")
    }).on("blur", function() {
        if (!$(".synum").val()) {
            $(".sjh").animate({
                "left": "10px",
                "top": "12px",
                "font-size": "13px"
            }, 200, "linear")
            $(".synum_false").show()
            $(".synum").css("border", "solid 1px #c8cbcc")
            $(".synum").css("border-bottom", "solid 2px #ff6d6d")
        } else {
            if (!/^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/.test($(".synum").val())) {
                $(".synum_false").show()
                $(".synum").css("border", "solid 1px #c8cbcc")
                $(".synum").css("border-bottom", "solid 2px #ff6d6d")
            } else {
                $(".synum_false").hide()
                $(".synum").css("border", "solid 1px #c8cbcc")
                $(".synum").css("border-bottom", "solid 1px #c8cbcc")
                $(".xuan_1").hide()
                $(".xuan_2").show()
            }
        }
    })
    //邮箱
$(".yxh").on("click", function() {
    $(".yxnum").focus()
})
$(".yxnum").on("focus", function() {
        $(".yxh").animate({
            "left": "17px",
            "top": "-8px",
            "font-size": "12px"
        }, 200, "linear")
        $(".yxnum").css("border", "solid 1px #000")
        $(".yxnum").css("border-bottom", "solid 2px #000")
    }).on("blur", function() {
        if (!$(".yxnum").val()) {
            $(".yxh").animate({
                "left": "10px",
                "top": "12px",
                "font-size": "13px"
            }, 200, "linear")
            $(".yxnum_false").show()
            $(".yxnum").css("border", "solid 1px #c8cbcc")
            $(".yxnum").css("border-bottom", "solid 2px #ff6d6d")
        } else {
            if (!(/^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/.test($(".yxnum").val()) || /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test($(".yxnum").val()))) {
                $(".yxnum_false").show()
                $(".yxnum").css("border", "solid 1px #c8cbcc")
                $(".yxnum").css("border-bottom", "solid 2px #ff6d6d")
            } else {
                $(".yxnum_false").hide()
                $(".yxnum").css("border", "solid 1px #c8cbcc")
                $(".yxnum").css("border-bottom", "solid 1px #c8cbcc")

            }
        }
    })
    //密码
$(".mima").on("click", function() {
    $(".mmnum").focus()

})
$(".mmnum").on("focus", function() {
        $(".mima").animate({
            "left": "17px",
            "top": "-8px",
            "font-size": "12px"
        }, 200, "linear")
        $(".mmnum").css("border", "solid 1px #000")
        $(".mmnum").css("border-bottom", "solid 2px #000")
    }).on("blur", function() {
        if (!$(".mmnum").val()) {
            $(".mima").animate({
                "left": "10px",
                "top": "12px",
                "font-size": "13px"
            }, 200, "linear")
            $(".mima_false").show()
            $(".mmnum").css("border", "solid 1px #c8cbcc")
            $(".mmnum").css("border-bottom", "solid 2px #ff6d6d")
        } else {
            if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,16}$/.test($(".mmnum").val())) {
                $(".mima_false").show()
                $(".mmnum").css("border", "solid 1px #c8cbcc")
                $(".mmnum").css("border-bottom", "solid 2px #ff6d6d")
            } else {
                $(".mima_false").hide()
                $(".mmnum").css("border", "solid 1px #c8cbcc")
                $(".mmnum").css("border-bottom", "solid 1px #c8cbcc")
            }
        }
    })
    //手机验证码
$(".sjyzm").on("click", function() {
    $(".sjyz").focus()
})
$(".sjyz").on("focus", function() {
        $(".sjyzm").animate({
            "left": "17px",
            "top": "-8px",
            "font-size": "12px"
        }, 200, "linear")
        $(".sjyz").css("border", "solid 1px #000")
        $(".sjyz").css("border-bottom", "solid 2px #000")
    }).on("blur", function() {
        if (!$(".sjyz").val()) {
            $(".sjyzm").animate({
                "left": "10px",
                "top": "12px",
                "font-size": "13px"
            }, 200, "linear")
            $(".sjyz").css("border", "solid 1px #c8cbcc")
        }

    })
    //选择
$(".dui").on("click", function() {
        if ($(this).hasClass("dui")) {
            $(this).addClass("dui2").removeClass("dui").html("&#xe633;")
        } else {
            $(this).addClass("dui").removeClass("dui2").html("&#xe601;")
        }

    })
    //短信账号
$(".zh").on("click", function() {
    $(".dl_content_left").hide()
    $(".dl_content_left2").show()
})
$(".dx").on("click", function() {
        $(".dl_content_left2").hide()
        $(".dl_content_left").show()
    })
    //登录
$(".dengl").find("a").on("click", function() {

        if ($(".dl_content_left").css("display") == "none") {
            $('#login2').submit()
        } else if ($(".dl_content_left2").css("display") == "none") {
            if (!$(".xuan_2").eq(0).find(".dui").hasClass("dui") && !$(".xuan_2").eq(1).find(".dui").hasClass("dui") && !$(".xuan_2").eq(2).find(".dui").hasClass("dui")) {
                if ($(".sjyz").val() == 1111) {
                    $("#login").attr("action", "./zc.php")
                }
                $('#login').submit()

            } else {
                alert("请勾选协议")
            }
        }
    })
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
    if (lth == 0) {
        $(".sy_header_input_right_num").hide()
    }
}
cart_lth()