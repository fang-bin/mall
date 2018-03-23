function ball_animate(obj0, obj1, obj2, obj3) {
    //		tween函数
    var Tween = {
        bounceIn: function (t, b, c, d) {    //弹球减振（弹球渐出）
            return c - Tween['bounceOut'](d - t, 0, c, d) + b;
        },
        bounceOut: function (t, b, c, d) {
            if ((t /= d) < (1 / 2.75)) {
                return c * (7.5625 * t * t) + b;
            } else if (t < (2 / 2.75)) {
                return c * (7.5625 * (t -= (1.5 / 2.75)) * t + 0.75) + b;
            } else if (t < (2.5 / 2.75)) {
                return c * (7.5625 * (t -= (2.25 / 2.75)) * t + 0.9375) + b;
            }
            return c * (7.5625 * (t -= (2.625 / 2.75)) * t + 0.984375) + b;
        }
    }
    var pendant = obj0,
        menu = obj1,
        feiji0 = obj2,
        feiji1 = obj3,
        posX = parseInt(pendant.offsetLeft),  //初试位置
        posY = parseInt(pendant.offsetTop),
        pW = pendant.clientWidth,  //小球自身宽度
        pH = pendant.clientHeight,  //小球自身高度
        screenWidth = document.documentElement.clientWidth,  //设备宽度
        screenHeight = document.documentElement.clientHeight,   //设备高度
        mW = menu.clientWidth,  //菜单栏自身宽度
        isBounce = false,  //记录是否正在执行小球吸附弹性动画
        ofX,   //touchstart的x位置
        ofY,  //touchstart的y位置
        innerW,  //点击位置距离元素边缘位置的距离
        innerH,
        moveX,  //touchmove的x位置
        moveY,  //touchmove的y位置
        mX,  //小球移动阶段位置
        mY,
        isTrans = false,  //记录是否已经打开了菜单
        isTransAni = false,  //记录是否正在执行呼出菜单动画
        isWeiYi = false,  //用来区分touch事件和click事件，通过位移量来判断是否执行touchend之中的bounce函数
        isL = localStorage.getItem('startX') ? (localStorage.getItem('startX') == 0 ? false : true) : false,  //记录小球是否在屏幕的左边
        startX,   //记录小球初始位置
        startY;

    menu.style.webkitTransitionDuration = '0s';
    get_storage();  //查看是否有记录
    //	console.log(isL,startX,startY);
    //根据是否有记录来对小球和菜单栏设置初始位置
    pendant.style.right = startX + 'px';
    pendant.style.top = startY + 'px';
    menu.style.top = (startY <= pH / 2) ? '0px' : (startY - pH / 2 + 'px');
    menu.style.right = isL ? screenWidth + 'px' : -mW + 'px';

    borderRad();
    //		根据是否是在左边来判断border-raduis的方向
    function borderRad() {
        if (isWeiYi || isBounce) {
            pendant.style.borderRadius = '50%';
            return false;
        }
        //		console.log('判断');
        pendant.style.borderRadius = '0';
        pendant.style.borderTopLeftRadius = 'none';
        pendant.style.borderBottomLeftRadius = 'none';
        pendant.style.borderTopRightRadius = 'none';
        pendant.style.borderBottomRightRadius = 'none';

        if (isL) {  //在左边
            pendant.style.borderTopRightRadius = '50%';
            pendant.style.borderBottomRightRadius = '50%';
        } else {  //在右边
            pendant.style.borderTopLeftRadius = '50%';
            pendant.style.borderBottomLeftRadius = '50%';
        }

    }


    //		按下
    pendant.addEventListener('touchstart', function (event) {
        isWeiYi = false;
        //event.stopPropagation(); 禁止事件冒泡
        if (isBounce) {
            return false;
        }
        posX = parseInt(pendant.offsetLeft);
        posY = parseInt(pendant.offsetTop);
        var _touchs = event.touches[0];
        ofX = _touchs.clientX;
        ofY = _touchs.clientY;
        innerW = ofX - posX;
        innerH = ofY - posY;
    });
    //		移动
    pendant.addEventListener('touchmove', function (event) {
        if (isBounce || isTrans || isTransAni) {
            return false;
        }
        feiji0.style.display = 'none';
        feiji1.style.display = 'inline-block';
        //event.stopPropagation();  禁止事件冒泡
        event.preventDefault();  //禁止默认事件
        var _touchs = event.touches[0];
        moveX = _touchs.clientX;
        moveY = _touchs.clientY;
        mX = (moveX - innerW) > (screenWidth - pW) ? (screenWidth - pW) : ((moveX - innerW) > 0 ? (moveX - innerW) : 0);
        mY = (moveY - innerH) > (screenHeight - pH) ? (screenHeight - pH) : ((moveY - innerH) > 0 ? (moveY - innerH) : 0);
        //			判断是用touch事件触发还是click事件触发
        if (Math.abs(mX - ofX) >= 5 || Math.abs(mY - ofY) >= 5) {
            isWeiYi = true;
        }
        borderRad();  //判断小球是否需要变化
        pendant.style.left = mX + 'px';
        pendant.style.top = mY + 'px';
    });
    //		松开
    document.addEventListener('touchend', function (event) {
        if (isBounce || isTrans || isTransAni || !isWeiYi) {
            return false;
        }
        isWeiYi = false;
        isBounce = true;
        posX = parseInt(pendant.offsetLeft);
        //取消左右判断,全部靠右,以后需要添加左右判断时候,重新打开即可,其他判断依旧起作用...
        //		if (posX + (pW/2) >= screenWidth/2) {
        //			靠右
        isL = false;
        set_storage();  //记录位置
        setTimeout(function () {
            bounce();
        }, 200);

		/*}else{
//			靠左
			isL = true;
			set_storage();  //记录位置
			setTimeout(function () {
				bounce();
			},200);
		}*/
    });
    var t, b, c, d;
    //		弹性动画
    function bounce() {
        t = 0;
        b = posX;
        c = (isL ? 0 : screenWidth - pW) - posX;
        d = 50;
        function sport() {
            t += 1;
            if (t == d) {
                clearInterval(timer);
                isBounce = false;
                feiji0.style.display = 'inline-block';
                feiji1.style.display = 'none';
                //					变换菜单栏位置
                pendant.style.webkitTransitionDuration = '0s';
                menu.style.webkitTransitionDuration = '0s';
                pendant.style.right = isL ? (screenWidth - pW + 'px') : '0px';
                menu.style.right = isL ? (screenWidth + 'px') : (-mW + 'px');
                //					菜单栏顶部位置
                //				menu.style.top = pendant.offsetTop + 'px';
                menu.style.top = (pendant.offsetTop <= pH / 2) ? '0px' : (pendant.offsetTop - pH / 2 + 'px');
            }
            pendant.style.left = Tween.bounceOut(t, b, c, d) + 'px';
        }
        setTimeout(function () {
            borderRad();
        }, 900);
        var timer = setInterval(sport, 10);
    }

    //		呼出菜单
    pendant.addEventListener('click', function () {
        if (isTransAni || isWeiYi || isBounce) {
            return false;
        } else {
            isTransAni = true;
        }

        //判断方向
        borderRad();

        pendant.style.webkitTransitionDuration = '0.6s';
        menu.style.webkitTransitionDuration = '0.6s';
        if (isTrans) {  //关闭菜单栏
            pendant.style.right = isL ? (screenWidth - pW + 'px') : '0px';  //根据小球是在左边还是右边来判断从那个方向关闭
            pendant.style.left = 'auto';  //靠，left和right会互相影响的，必加！！！
            menu.style.left = 'auto';
            menu.style.right = isL ? (screenWidth + 'px') : (-mW + 'px');

        } else {  //打开菜单栏
            //getCartStatus();    //获取购物车状态
            pendant.style.left = 'auto';
            menu.style.left = 'auto';
            pendant.style.right = isL ? (screenWidth - pW - mW + 'px') : (mW + 'px');
            menu.style.right = isL ? (screenWidth - mW + 'px') : '0px';
        }
        isTrans = !isTrans;
        setTimeout(function () {
            isTransAni = false;
            if (!isTrans) {
                feiji0.style.display = 'inline-block';
                feiji1.style.display = 'none';
            } else {
                feiji0.style.display = 'none';
                feiji1.style.display = 'inline-block';
            }
        }, 600);
    });

    //		记录位置
    function set_storage() {
        if (window.localStorage) {
            localStorage.setItem('startX', isL ? screenWidth - pW : 0);
            localStorage.setItem('startY', mY);
        } else {
            return false;
        }
    }
    //		获取位置
    function get_storage() {
        if (window.localStorage) {
            startX = localStorage.getItem("startX") ? localStorage.getItem("startX") : 0;
            startY = localStorage.getItem('startY') ? localStorage.getItem('startY') : 400;
        } else {
            return false;
        }
    }


    window.onscroll = function () { //当页面滚动的时候,收起菜单栏
        if (!isTrans) {
            return false;
        }
        if (isTransAni || isWeiYi || isBounce) {
            return false;
        } else {
            isTransAni = true;
        }
        //判断方向
        borderRad();
        pendant.style.webkitTransitionDuration = '0.6s';
        menu.style.webkitTransitionDuration = '0.6s';
        pendant.style.right = isL ? (screenWidth - pW + 'px') : '0px'; //根据小球是在左边还是右边来判断从那个方向关闭
        pendant.style.left = 'auto'; //靠，left和right会互相影响的，必加！！！
        menu.style.left = 'auto';
        menu.style.right = isL ? (screenWidth + 'px') : (-mW + 'px');
        isTrans = !isTrans;
        setTimeout(function () {
            isTransAni = false;
            if (!isTrans) {
                feiji0.style.display = 'inline-block';
                feiji1.style.display = 'none';
            } else {
                feiji0.style.display = 'none';
                feiji1.style.display = 'inline-block';
            }
        }, 600);
    }

}
export default ball_animate;