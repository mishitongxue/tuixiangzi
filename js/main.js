var col = 12; //每行12箱子
var level = 0; //初始关卡为第一关
var goalList = [4, 3, 4, 4, 3, 5, 5, 6, 5, 4, 9]; //每关箱子数量
var origin = [54, 15, 39, 29, 17, 21, 45, 94, 39, 56, 57]; //每关初始皮卡丘的位置
var goal = goalList[level]; //本关箱子数量
var position = origin[level]; //本关皮卡丘出生位置

var map = [
    //地图
    [
        0, 0, 0, 0, 3, 3, 3, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 3, 1, 3, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 3, 2, 3, 3, 3, 3, 0, 0,
        0, 0, 3, 3, 3, 4, 2, 4, 1, 3, 0, 0,
        0, 0, 3, 1, 2, 4, 2, 3, 3, 3, 0, 0,
        0, 0, 3, 3, 3, 3, 4, 3, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 3, 1, 3, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 3, 3, 3, 0, 0, 0, 0
    ],
    [
        0, 0, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0,
        0, 0, 3, 2, 2, 2, 3, 0, 0, 0, 0, 0,
        0, 0, 3, 2, 4, 4, 3, 0, 3, 3, 3, 0,
        0, 0, 3, 2, 4, 2, 3, 0, 3, 1, 3, 0,
        0, 0, 3, 3, 3, 2, 3, 3, 3, 1, 3, 0,
        0, 0, 0, 3, 3, 2, 2, 2, 2, 1, 3, 0,
        0, 0, 0, 3, 2, 2, 2, 3, 2, 2, 3, 0,
        0, 0, 0, 3, 2, 2, 2, 3, 3, 3, 3, 0,
        0, 0, 0, 3, 3, 3, 3, 3, 0, 0, 0, 0
    ],
    [
        0, 0, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0,
        0, 0, 3, 2, 2, 2, 2, 2, 3, 3, 3, 0,
        0, 3, 3, 4, 3, 3, 3, 2, 2, 2, 3, 0,
        0, 3, 2, 2, 2, 4, 2, 2, 4, 2, 3, 0,
        0, 3, 2, 1, 1, 3, 2, 4, 2, 3, 3, 0,
        0, 3, 3, 1, 1, 3, 2, 2, 2, 3, 0, 0,
        0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0
    ],
    [
        0, 0, 0, 0, 3, 3, 3, 3, 0, 0, 0, 0,
        0, 0, 0, 3, 3, 2, 2, 3, 0, 0, 0, 0,
        0, 0, 0, 3, 2, 2, 4, 3, 0, 0, 0, 0,
        0, 0, 0, 3, 3, 2, 2, 3, 3, 0, 0, 0,
        0, 0, 0, 3, 3, 4, 4, 2, 3, 0, 0, 0,
        0, 0, 0, 3, 1, 4, 2, 2, 3, 0, 0, 0,
        0, 0, 0, 3, 1, 1, 2, 1, 3, 0, 0, 0,
        0, 0, 0, 3, 3, 3, 3, 3, 3, 0, 0, 0
    ],
    [
        0, 0, 0, 3, 3, 3, 3, 3, 0, 0, 0, 0,
        0, 0, 0, 3, 2, 2, 3, 3, 3, 0, 0, 0,
        0, 0, 0, 3, 2, 4, 2, 2, 3, 0, 0, 0,
        0, 0, 3, 3, 3, 2, 3, 2, 3, 3, 0, 0,
        0, 0, 3, 1, 3, 2, 3, 2, 2, 3, 0, 0,
        0, 0, 3, 1, 4, 2, 2, 3, 2, 3, 0, 0,
        0, 0, 3, 1, 2, 2, 2, 4, 2, 3, 0, 0,
        0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0
    ],
    [
        0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 0,
        0, 0, 0, 3, 3, 2, 2, 3, 2, 2, 3, 0,
        0, 0, 0, 3, 2, 2, 2, 3, 2, 2, 3, 0,
        0, 0, 0, 3, 4, 2, 4, 2, 4, 2, 3, 0,
        0, 0, 0, 3, 2, 4, 3, 3, 2, 2, 3, 0,
        0, 3, 3, 3, 2, 4, 2, 3, 2, 3, 3, 0,
        0, 3, 1, 1, 1, 1, 1, 2, 2, 3, 0, 0,
        0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0
    ],
    [
        0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 0, 0,
        0, 0, 3, 3, 3, 2, 2, 2, 2, 3, 0, 0,
        0, 3, 3, 1, 2, 4, 3, 3, 2, 3, 3, 0,
        0, 3, 1, 1, 4, 2, 4, 2, 2, 2, 3, 0,
        0, 3, 1, 1, 2, 4, 2, 4, 2, 3, 3, 0,
        0, 3, 3, 3, 3, 3, 3, 2, 2, 3, 0, 0,
        0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 0, 0
    ],
    [
        0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0,
        0, 0, 3, 2, 2, 3, 3, 2, 2, 2, 3, 0,
        0, 0, 3, 2, 2, 2, 4, 2, 2, 2, 3, 0,
        0, 0, 3, 4, 2, 3, 3, 3, 2, 4, 3, 0,
        0, 0, 3, 2, 3, 1, 1, 1, 3, 2, 3, 0,
        0, 3, 3, 2, 3, 1, 1, 1, 3, 2, 3, 3,
        0, 3, 2, 4, 2, 2, 4, 2, 2, 4, 2, 3,
        0, 3, 2, 2, 2, 2, 2, 3, 2, 2, 2, 3,
        0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3
    ],
    [
        0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 0, 0,
        0, 0, 0, 0, 3, 2, 2, 2, 2, 3, 0, 0,
        0, 0, 3, 3, 3, 4, 4, 4, 2, 3, 0, 0,
        0, 0, 3, 2, 2, 4, 1, 1, 2, 3, 0, 0,
        0, 0, 3, 2, 4, 1, 1, 1, 3, 3, 0, 0,
        0, 0, 3, 3, 3, 3, 2, 2, 3, 0, 0, 0,
        0, 0, 0, 0, 0, 3, 3, 3, 3, 0, 0, 0
    ],
    [
        0, 3, 3, 3, 3, 0, 0, 3, 3, 3, 3, 3,
        3, 3, 2, 2, 3, 0, 0, 3, 2, 2, 2, 3,
        3, 2, 4, 2, 3, 3, 3, 3, 4, 2, 2, 3,
        3, 2, 2, 4, 1, 1, 1, 1, 2, 4, 2, 3,
        3, 3, 2, 2, 2, 2, 3, 2, 2, 2, 3, 3,
        0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3 ,0
    ],
    [
        0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,3,3,3,3,3,3,3,0,0,0,
        0,0,3,2,2,1,4,2,3,3,3,0,
        0,0,3,2,1,4,1,4,2,2,3,0,
        0,0,3,14,4,1,4,1,2,2,3,0,
        0,0,3,2,1,4,1,4,2,3,3,0,
        0,0,3,2,2,1,4,2,2,3,0,0,
        0,0,3,3,3,3,3,3,3,3,0,0

    ]
];


var box = $('.box div');
//创建地图
function create() {
    box.each(function (index) {
        box.eq(index).removeClass(); //清除上关数据
    });
    box.each(function (index, element) {
        if (map[level][index]) { 
            box.eq(index).addClass('type' + map[level][index]);
        }
    });
    box.eq(position).addClass("player");
    $('.type14').addClass('type1').addClass('type4');
    $('#level-text').text(function () {
        return(Number(level)+1); //先把关卡值转为数字
    })
};
create();

//计时
var time = 0;
setInterval(function () {
    $('#time').text(
        function () {
            return(time)
        }
    )
    time++;
},990)

//选关
$('#choose-button').click(
    function choose() {
        time = 0;
        level = $('#choose-level').val();
        goal = goalList[level];
        position = origin[level]; 
        create();
    }
)

//重玩本关
$('#replay').click(
    function () {
        goal = goalList[level];
        position = origin[level]; 
        time = 0;
        create();     
    }
)

//触发移动
$('#top').click(function () {
    move(-col);
    setTimeout(win, 100);
});
$('#bottom').click(function () {
    move(col);
    setTimeout(win, 100);
});
$('#left').click(function () {
    move(-1);
    setTimeout(win, 100);
});
$('#right').click(function () {
    move(1);
    setTimeout(win, 100);
});

//按键触发
$(document).keydown(function (e) { //keydown为键盘触发函数
    var key = e.which;
    switch (key) { //switch根据不同的条件来执行不同的代码块
        //方向键上或者w
        case 87:
        case 38:
            move(-col);
            break;
        //方向键下或者s
        case 83:
        case 40:
            move(col);
            break;
        //方向键左或者a
        case 65:
        case 37:
            move(-1);
            break;
        //方向键右或者d
        case 68:
        case 39:
            move(1);
            break;
    }
    setTimeout(win, 100); //按键之后调判断是否过关
});

//玩家移动
function move(step) {
    var player1 = box.eq(position); //当前位置
    var player2 = box.eq(position + step); //移动后位置
    var pushbox = box.eq(position + step * 2); //箱子移动后位置
    //普通移动
    if (player2.hasClass('type2') || (player2.hasClass('type1') && !player2.hasClass('type4'))) {
        player1.removeClass('player');
        player2.addClass('player');
        position = position + step;

        //推箱子移动
    } else if (player2.hasClass('type4') && pushbox.hasClass('type2')) {
        //玩家目的地有箱子  且  箱子目的地是路  
        player2.removeClass("type4").removeClass('type14');
        player1.removeClass("player");
        pushbox.addClass("type4").removeClass('type2');
        player2.addClass("player").addClass("type2");
        position = position + step;
    } else if (player2.hasClass('type4') && !pushbox.hasClass('type4') && pushbox.hasClass('type1')) {
        //玩家目的地有箱子  且  箱子目的地是没有箱子的标记       
            player2.removeClass("type4");
            player1.removeClass("player");
            pushbox.addClass("type4");
            player2.addClass("player").addClass('type2');
            position = position + step;
            //移除误加的type2,以免进去第一个推箱子移动
            if (player2.hasClass('type1')) {
                player2.removeClass('type2')
            }
            if (pushbox.hasClass('type1') && !player2.hasClass('type1')) {
                pushbox.addClass('type14');
            } else if (pushbox.hasClass('type1') && player2.hasClass('type1')) {
                pushbox.addClass('type14');
                player2.removeClass('type14');
            }        
    } 
}

//过关
function win() {
    if ($('.type1.type4').length === goal) {
        if (level<9) {
            clearInterval();
            alert('哎呦,不错哦!---用时:' + (time - 1) + 'S');
            time = 0;
            level++;
            position = origin[level];
            goal = goalList[level];
            create();
        }else{
            clearInterval();
            alert('你还真他娘的是个人才!---用时:' + time + 'S');
            time = 0;
        }        
    }   
}
