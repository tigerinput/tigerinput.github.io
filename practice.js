const onlyRootEle = document.getElementById("main-root");
const curEle = document.getElementById("cur");
const maxEle = document.getElementById("max");
const allEle = document.getElementById("all");
const rootEle = document.getElementById("root");
const codeEle = document.getElementById("code");
const inputEle = document.getElementById("input");
const progressEle = document.getElementById("progress");

var cpLock = false;


//inputEle.addEventListener('compositionstart',function(){cpLock = true;});
//inputEle.addEventListener('compositionend',function(){cpLock = false;});

//inputEle.addEventListener('input',function(){ setTimeout(function(){if(!cpLock) inputChanged();}, 0);  });



inputEle.addEventListener('compositionend',inputChanged);

var wrong = false;
inputEle.addEventListener('keyup',function(e){

    if (e.key == "Backspace")
        wrong = true;
}); 

let maxProgress = 1;


let words = new Array(); // 字队列
let counts = new Array(); // 字答对次数
let moves = [2,3,5,8,13,30, 50,90,200,300,600, 1200, 3000, 6000, 15000, 20000, 40000, 100000, 300000];

words_raw = "航税炮舰核湾炸俄疗扩爸萧础蒋曹购亿姆贸爆轰盟哲撤埃侠袭凶植援售汇粮玄订汽吓驻妖箭奴莱御估尸译骂币惨曼艾玛殿弗患仇债障郭虫幻赫裂刊慈吕役袁翼岂邪症爬霍狼躲疯辩咬炎猜艘哼兽魏狠衡汗崇岩堡巡仔撒偿愤阁盾矛侍矿拳润胞荷署摄曰租彭搜昏奏嘛艇酸黎岳辑戒躺菲炼苍驾驱凯埋拼乏冯诊皱桑蛇漂恭迪恋侦燃贼碍液邓呵阅欺牵殖综俩趋蒂慌慕晋卢储宪宙聪跌呈脉劫哦帕遵幼仗腹伪牧驶踏朵袖胁霸抛媒频盯勃扭弯抚册励颤键贡怜腊椅贺雾龄扣熊届券爹肥喷娇夹吾疼拟肚迁钻浑牢艰敲惧挡叛庞柏薛叙悟坡腐辽籍穆铜割旨擦抖沟掠狱揭晃怔娜猎祭猫诱寂遥羽昆吞昌哀牲晶厌柱剂绩搬筹鞋鹰瞪恼稿僧纠瘦睁弥猪践迈浅挣逻胖疲跪傻丛稀贾廷脏鉴贷葛耗粒戈赔悬拦遣捉赢拨趁仆澳贤贪削衰扔卓瞬湿桃鼠遂辖闷雕暖邮乾誉阔押枚祸梯豆歇嫌碗挖涂抑娃契嘉循丑烂斤勾渔寺滴吼赋惟邀坛赴械堪帽帅傲逊浩吨仓寸姿闯愚痕瑟牺赌蔡扁庙哩煤玻汪苗敦逆峡纹宅妥忌郁玲笼耀盐慎唇秩墓陵羞涨糖饿弓恒纽宏夸碧喘锐缝卧岗疏斥惩谨滋屏串漠悔溜扇挨雇档蛮砍欠鸿添刷歼糟聊啥柴屠肌勉唉桂齿赐肝捷喂舱磁嫁茫乙嘿瓜菌丘催粹披吩乳履煞廉伐扯儒兹狐姊矮缠姜卿穴绘斩肤鹏肿肖沃辅巫潘罩柄蜂缴窝舌晴悠隶耕爵奸辨绳孝溃丫怖婴愁亭泄携疫翠谭霞惹酷癌翰昂劈甜棉卑矣剥袍卜轨吟宰鞭尿脖俘辱莉臭吻咽抹疆愣饱芬凑畏骤禅炉填渴妨铃豫劣竭摔愉泡吵脆览顽毅吊扮腔鹿遮灌肠夕址氧屁壳饶摘棋狭芒胃杆翁倘讼拆盒驰鲍璃纲匪秒艳姚哎漏蓄妄柜掏函猴裤枯喉衫畜寨痴悦誓翅膀钦宴纤厨撑淮盈锅胎涛崩砸拐盆崖轩囊刹晕膜赚凄葬挽耸脾诞崔斑妃懒嫂佐棵颠尉陡眨蜜肺陕眠饲颈撕驳朴摊爪拘塑酬寇岭裕僵卵盼逝湘藤棍堵赠歪狮虹俯陌窃冻甫盲骄姻抄拓昭拱猩畅啸摧蓬菩踢浙铭氛洒饥泊捧琼锡咳滩讶筒嘱萍绵挪冈辟芝歧逢鼎钩谅廊吁巾栏溪罕链趟坑吏耍沾歉躯棒妮捏殷筋笨匠葡寡坠渊瞎舟冤剪辰鸭钉瞒漆耻孕擅昔阎骇诡蠢茅宠淋谦乖账胶媚胀庸乞膝衙逮翔宛夷杭骚荆裸姨旺叉嚷哑恍咒惶杖窜逸蝶恕搏焰爽淫绣碑哇丐蒲兆蔽弦豹鹅咐阐薪轿伞捐冥愧衷谎猿粘浦栽掀脂框俺嘲矩刮叠龟脊兔谊哨娶聘慨嗓舅寓戚仑瘤掘浴恳倡裹涵渠窄瓷祈钓拂泼巢茂贞纱绑砖谱坟硕侄蹲甩匈躬胳徽蜀篮焉竖颁浸玫萄僚壶攀撰旬蒸嘻媳裙霜愕滥讽躁厘憾巷帘溶晰咸勋亩滞舆辣挫雀衔桩搁踩喻哗屡窑株郊鸦卒厦丸秃禄雁聂琳汝虏肢咖咕煌耽肆哄弊耿叮腺倦彪焚鹤尴巩勿菊鄙瞄饼拢腕厢斋怯诈呜铸婉兜魄诀绢擒囚禀驴垄倚捞舶冀贱溢炭稽罐泣螺桶衍渗狡塌帆卸嘶逗侨昧坎棺雌荐棚靖榜栖啡钧贩衬兑魁谜毙纺掷肾烛膨嫩谬锻珊芦刃隙塘喇垒旱韵钥咨譬傍坊驼颂哟苹佣霉怡堤淘搂糕斧砰谍贬稻颖熙棠盏煮烤黯魅捆枕剿蕴骆咧谐笛斌逾轴挟壤淑弘沼捡淹辐娱呐犬灿禽绅蹄啪汁枢伺搅羡凛幢剖蚁瞅娟俏绞奢膊藉丙谴滨窥咋敞祷凰沸椎炒逛顷绸莹叩垫蜡侮捣芙屯沫屑谣瑰峻喧熬莽矢撇梳晒醇辜匙迄睹嫉嗅镑栗诵痒妒颊缅缚樱潭芯蛛凳揉堕梭妓勘垃篷乍桐趴缕朽磕隋鲸馨贿憎钞杏蔑苟腥栋昼萝碌垮寝燥姥砂帖沦哉铅虐嗡沮浆旷涯澄鳞滔寞蹦锤敷募眯妆褐汹嚼奠榴拙畴蚕暮甸吱蚀泌荫鸽蓉叭灶澡峨挠菱稚蔓秉泻彬遏溅熄膏朦琢泳绒凿畔敛庐惭沧酿阀侣拯藻匀莺屿沪蹈豁瘫捂陋揽坪冶氢懈蔬娥翘灼舵缔钮讥圾鄂纬歹澜茎枉杉琉梢戳庇跋毯萎佑裳硫狸窟蝉憋绰凹腻崎赎扛暑烁嚣凸揣匕怠焕孽觅呕簇芽矫僻碟潇沐浇枣宦蝇戎萌啼呻棕伶虾嵌暇碳删茵苑炕驯旭煎烫赦慷蚂惕悍坤禹噪匿缸簿颓坝涡蚊粟髓琐溯揪诫尬蝴窘盔棘涩嗜踱啤淳哺婶晌唾镶庵铲粪庚扼膛疤聋叨筷棱沁庶梨绷渺迂葫拣橡扳牡襟眷浏弧贮窍葱熏鞠稼匣霎栅岔厕磅斟粥缆肘搓晦拧尧鳍帜彰瞻邑枫吭皓嗽拽竿嚎瓣峭扒忿胧嘀梗蹬夭淌廓桨迭逞锥俭磷碱浊檀讳撼哆靴冉绽诬宵蛙沛擎硝槽崛礁腮哮栓刁蜘熔懊胚苛侥拇酌窒柬悼掐卦絮缀锣霄崭墅墟馈涕矗徘醋骏煽鞍槐寥袜薇挚缎摹闺唬悯痰炫颅钙杠霹懦酱蟹檐翩捅锯肋婿汰拴嗦洽瀑垦搀箫恃撩绊抒芭犀绎拎臀睦蕊渣橱巍粤亥辫靡瘟狞脯祠祀肪陨剔惫靶氯蔚啃徊叽钝缉皂舔疮氨鹃鲤骡拭闽秽紊咙苔殉肮幌剃砌氓屎栈巳篱悖揍犁呛濒拷趾榆苇掺肇侈兢恤擂猾韧隘饵蝗茄跺佃倔皖溺蕉褂噩糙咄狈畸亢瘾赁捻眶酥捍赣涤芜褪屉辙婪闸捶猖梧衅瞳勺椒卉吆烘淀炊洼痪稠戊咪轧钳铝烙疚憔搔篡驮赃喳隧瞩憨桔殴唠孵滇蝠锄疹狰垢蕾琅曙漱酝缰胰筛筐谤睫吠澈蠕酣徙惋睬赂褒蛾滤抡澎窖吝椭穗菇毡荧淆柿惰啄簧锈帷辗硅鲨脓巅娄萤馒蝎撮痊烹磊豚鹦贻寅茸咏忱弛匾疙羹墩雏禾曝缭袄壬乒隅鸥薯蒜惦璧槛驹淤捎蹭袱聆褥肛漓刨诽瓢沽祟蔼葵鬓炬恬楷笋埠橙筝蜈殃蝙痹蘑碾涧诲堰鸳羔鹊腋橄拗茧拌芹圃秧瑙癸偎橘锚唆砾撬肴渲绚籽叼笙钠氮悴鳄揩乓蜕俐渤粱茬屹撵赘蚤蛤榨饺瘪沥溉酵冗跤锌掂簸渝跛雳漾镰瘩谚卤吮藐秤瘸囱砚涣蜒帚蹂苞唧讹黔蜗蹋竣馅馋榄鹉跷卯酪戌晾汛藕缤筏芥彤碘峦铐酉坯叁挎蟋垛甥汞荔梆捺蚌鳖螃皿踊羚贰泵椰脐蜻蟀桦抠赡玷篓镀闰茉秸湃掰钾迢馍拄豺窿坷躏蟆椿蛀鸯臼箕蔗雹樟谆檬蚯荤泞睐焊灸镐耘舀榕痘耙癣痢铛蝌糯蚪蜓秆囤糠酗蚣锹岖疟盹蚓芋箩柠韭臊馁涝豌鲫纫埂柑锰鸵榔嘹涮茁夯猬菠壹矾誊馏唁玖瓤捌瞭柒啰";

let total = words_raw.length;

getProgress();
showQuest();



counter = 0;



function inputChanged() {
    // 只要有空格就是错的
    counter ++;


//    if(!cpLock)
    {
        if (inputEle.value.length >= 1) {


            let inputValue = inputEle.value;
            // 答对，该字根进度加1
            if (inputValue === words[0])
            {

                if (!wrong)
                {
                    console.log(counter.toString() + " right");
                    counts[0]++;

                }
                else
                {

                    console.log(counter.toString() + " wrong");
                    counts[0]--;
                    if (counts[0]<0)
                    {
                        counts[0] = 0;
                    }
                }
                wrong = false;
                nextRoot();
    
            }
            // 答错，该字根进度置为-1
            else {

                wrong = true;


            }
    
            showQuest();
    
        }
    }


}

function initWords()  //初始化进度，所有字根初始学习进度为-1
{

    total = words_raw.length;

    words = new Array();
    counts = new Array();

    for (let i = 0; i < total; i++) 
    {

        words.push (words_raw.substring(i, i+1));
        counts.push (2);
    }
    saveProgress();
}

function showQuest() // 显示问题
{

    rootEle.textContent = words[0];

    inputEle.value = ""; // 清空输入框

    index = words_raw.indexOf(words[0]) + 1;

    maxProgress = Math.max(maxProgress, index);

    curEle.textContent = index.toString();
    maxEle.textContent = maxProgress.toString();
    allEle.textContent = total.toString();
    progressEle.value = curEle.textContent.toString();
    progressEle.max = total.toString();
}



function nextRoot() // 下一个字根显示
{




    let tmp1;
    let tmp2;
    let move = 0;
    
    let move_index = counts[0] - 1;


    if (move_index >= moves.length)
        move_index = moves.length -1;

    if (move_index < 1)
        move_index = 1


    let move_pos = moves[move_index];
    if (move_pos >= total)
        move_pos = total -1;    



    tmp1 = words[0];
    tmp2 = counts[0];

    words.shift();
    words.splice (move_pos,0,tmp1);

    counts.shift();
    counts.splice (move_pos,0,tmp2);

    saveProgress();

}


function getProgress() {
    let progress = JSON.parse(window.localStorage.getItem("progress"));
    if (!progress) {
        initWords();
    } else {
        words = progress.words;
        counts = progress.counts;


        if (words.length != total || counts.length != total)
        {
            initWords();
        }
    }

}


function saveProgress() {
    window.localStorage.setItem("progress", JSON.stringify({
        "words": words,
        "counts": counts
    }));
}

function clearProgress() {
    localStorage.removeItem("progress");
    initWords();

    maxProgress = 1;
    showQuest();
}
