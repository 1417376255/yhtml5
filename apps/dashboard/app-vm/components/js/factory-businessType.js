angular.module('factory', [])
    .factory('Data', function($http) {
        businessTypes = [{
            id: 1,
            name: "数字娱乐",
            children: [{
                id: 2,
                name: "网络游戏/网页游戏/手机网游"
            }, {
                id: 3,
                name: "互联网应用/无线互联网应用（小说/杀毒等）"
            }]
        }];
        //      businessTypes = {
        //          "数字娱乐": ["网络游戏/网页游戏/手机网游", "互联网应用/无线互联网应用（小说/杀毒等）", "直销行业", "SNS社区/微博", "软件/下载", "其他互联网", "视频网站/社区", "  虚拟增值"],
        //          "快消连锁": ["餐饮/娱乐休闲/美容/保健/生活服务等连锁行业", "连锁加盟（食品/饮料/化妆品/服装/日用百货等）", "网上商城（B2C,C2C）", "网上批发（B2B）", "团购（C2B）", "其他连锁零售", "批发市场", "物流配送/快递"],
        //          "电信运营": ["运营商（移动、联通、电信、铁通等）", " 其他与运营商合作的项目", " 运营商合作厅", "网上批发（B2B）"],
        //          "航空旅游": ["机票/火车票代理商", "旅行社/旅游网/旅游平台（OTA）", "旅游局/景区门票", "其他商业旅行", "航空公司", "分销平台", "差旅公司（TMC）", "租车行业", "GDS", "平台化订房中心"],
        //          "行政教育": ["政府考试/人才培训/检测认证/非税业务", "机构教育/学校/学术/研究", "顾问/信息咨询", "出版社", "会议会务", "其他行政教育行业"],
        //          "保险": ["保险公司", "保险代理公司", "其他保险行业"],
        //          "基金": ["基金行业", "其他基金行业"],
        //          "P2P": [],
        //          "跨境业务": ["货物贸易", "服务贸易"],
        //          "现货业务": ["现货交易所", "现货商城", "其他现货行业"],
        //          "其他": ["酒店行业（包括度假）", "会展行业", "医疗行业", "彩票行业", "物业行业", "其他行业"],
        //      };
        return businessTypes;
    });