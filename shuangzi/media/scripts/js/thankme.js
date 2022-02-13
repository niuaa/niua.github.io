;(function($) {
    $(function() {
        if (!sessionStorage.getItem('yanggb-not-first-loading-flag')) {
            sessionStorage.setItem('yanggb-not-first-loading-flag', new Date().getTime());
        } else {
            $('#loadingmask').css('display', 'none');
        }
        var loadingStatementInterval = setInterval(function() {
            addLoadingStatement();
        }, 200);
        setTimeout(function() {
            clearInterval(loadingStatementInterval);
            $('#loadingmask').fadeOut(1000);
        }, 3000);

        $('#nothankmebtn').click(function() {
            $('#thankme').css('visibility', 'hidden');
            $('#thankmemask').css('visibility', 'hidden');
            $('#nothankmebtn').css('visibility', 'hidden');
        });
    });

    document.addEventListener('visibilitychange', function() { //浏览器切换事件
        if ((document.visibilityState === 'hidden') && (Math.random() > 0.7)) { //状态判断
            $('#thankme').css('visibility', 'visible');
            $('#thankmemask').css('visibility', 'visible');
            $('#nothankmebtn').css('visibility', 'visible');
        }
    });

    function addLoadingStatement() {
        $('#loadingmask').append('<div>加载资源【'
            + statt[(Math.random() + '').charAt(6)]
            + momoo[(Math.random() + '').charAt(6)]
            + '】完成。</div>');
    } 

    var statt = [];
    statt[0] = '蜡笔小新的';
    statt[1] = '出于淤泥而不染的';
    statt[2] = '破旧不堪的';
    statt[3] = '尼古拉斯赵四的';
    statt[4] = '哈利波特的';
    statt[5] = '新鲜的';
    statt[6] = '斯巴达士兵的';
    statt[7] = '古老埃及法王的';
    statt[8] = '买到就是赚到的';
    statt[9] = '坚固耐用的';

    var momoo = [];
    momoo[0] = '钢打姆机器人';
    momoo[1] = '大波浪元切薯片';
    momoo[2] = '卡通内裤';
    momoo[3] = '薄荷味风油精';
    momoo[4] = '飞科剃须刀';
    momoo[5] = 'la prairie鱼子酱黄金眼霜';
    momoo[6] = '无线蓝牙音响';
    momoo[7] = '一次性无纺布防护口罩';
    momoo[8] = '《深入了解Java虚拟机》';
    momoo[9] = '维生素C片';
})(jQuery);