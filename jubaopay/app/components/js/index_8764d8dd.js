; /*!server/author.js*/
/*=============================================================================
 * Author:Kyle|张大漾
 * Website:http://yhtml5.com
 * Gihub:https://github.com/yhtml5
 * Description: A Website disgned by AngularJS Boostrap and NodeJS
 *              It requires AngularJS 1.5.x or higher and it has been tested
 *              Do something awesome and have fun !
 *=============================================================================*/

; /*!components/js/router.js*/
'use strict';
angular.module('yhtml5', ['ui.router', 'controllers']).config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise("/index");
	$stateProvider.state('index', {
		url: "/index",
		views: {
			"nav": {
				templateUrl: "view/nav/nav.html"
			},
			"nav-right": {
				templateUrl: "view/nav-right/nav-right.html"
			},
			"content": {
				templateUrl: "view/show/show.html"
			},
			"footer": {
				templateUrl: "view/footer/footer.html"
			}
		}
	}).state('download', {
		url: "/download",
		views: {
			"nav": {
				templateUrl: "view/nav-blue/nav-blue.html"
			},
			"nav-right": {
				templateUrl: "view/nav-right/nav-right.html"
			},
			"content": {
				templateUrl: "view/download/download.html"
			},
			"footer": {
				templateUrl: "view/footer/footer.html"
			}
		}
	}).state('production', {
		url: "/production",
		views: {
			"nav": {
				templateUrl: "view/nav-blue/nav-blue.html"
			},
			"nav-right": {
				templateUrl: "view/nav-right/nav-right.html"
			},
			"content": {
				templateUrl: "view/production/production.html"
			},
			"footer": {
				templateUrl: "view/footer/footer.html"
			}
		}
	}).state('production.accounting', {
		url: "/accounting",
		views: {
			"content": {
				templateUrl: "view/production.accounting/production.accounting.html"
			}
		}
	}).state('production.credit', {
		url: "/credit",
		views: {
			"content": {
				templateUrl: "view/production.credit/production.credit.html"
			}
		}
	}).state('cost', {
		url: "/cost",
		views: {
			"nav": {
				templateUrl: "view/nav-blue/nav-blue.html"
			},
			"nav-right": {
				templateUrl: "view/nav-right/nav-right.html"
			},
			"content": {
				templateUrl: "view/cost/cost.html"
			},
			"footer": {
				templateUrl: "view/footer/footer.html"
			}
		}
	}).state('contact', {
		url: "/contact",
		views: {
			"nav": {
				templateUrl: "view/nav-blue/nav-blue.html"
			},
			"nav-right": {
				templateUrl: "view/nav-right/nav-right.html"
			},
			"content": {
				templateUrl: "view/contact/contact.html"
			},
			"footer": {
				templateUrl: "view/footer/footer.html"
			}
		}
	});
});; /*!components/js/ctrl.js*/
'use strict';
angular.module('controllers', ['ui.bootstrap', 'ngAnimate']).controller('controllers', function($scope, $http, $uibModal) {
	$scope.downloadRecord = [{
		"name": "对接文档",
		"note": "商户接入指南",
		"class": "icon-iconshtjrz",
		"url": "http://fwstatic.oss-cn-hangzhou.aliyuncs.com/project/jubaopay/demo/%E5%95%86%E6%88%B7%E6%8E%A5%E5%85%A5%E6%8C%87%E5%8D%97.pdf"
	}, {
		"name": "Andorid",
		"note": "SDK开发包",
		"class": "icon-iconanzhuo",
		"url": "http://fwstatic.oss-cn-hangzhou.aliyuncs.com/project/jubaopay/demo/android/android-docking-document.zip"
	}, {
		"name": "IOS包",
		"note": "SDK开发包",
		"class": "icon-ios",
		"url": "http://fwstatic.oss-cn-hangzhou.aliyuncs.com/project/jubaopay/demo/ios/ios-docking-document.zip"
	}, {
		"name": "PC",
		"note": "PC端",
		"class": "icon-windows",
		"url": "http://fwstatic.oss-cn-hangzhou.aliyuncs.com/project/jubaopay/demo/cocs2d/cocos-docking-document.zip"
	}, {
		"name": "WAP",
		"note": "wap demo",
		"class": "icon-java",
		"url": "http://fwstatic.oss-cn-hangzhou.aliyuncs.com/project/jubaopay/res/sdk/java-demo.zip"
	}, {
		"name": "COCOS",
		"note": "SDK开发包",
		"class": "icon-weibiaoti4zhuanhuan",
		"url": "http://fwstatic.oss-cn-hangzhou.aliyuncs.com/project/jubaopay/demo/cocs2d/cocos-docking-document.zip"
	}];
	$scope.paymentRecord = [{
		"name": "支付宝",
		"note": "移动支付",
		"class": "icon-zhifubao1"
	}, {
		"name": "支付宝",
		"note": "扫码支付",
		"class": "icon-zhifubao1"
	}, {
		"name": "支付宝",
		"note": "WAP支付",
		"class": "icon-zhifubao1"
	}, {
		"name": "支付宝",
		"note": "即时到帐",
		"class": "icon-zhifubao1"
	}, {
		"name": "微信支付",
		"note": "App 支付",
		"class": "icon-weixinzhifu"
	}, {
		"name": "微信支付",
		"note": "公众号支付",
		"class": "icon-weixinzhifu"
	}, {
		"name": "银联",
		"note": "银联支付",
		"class": "icon-yinlian"
	}, {
		"name": "银联",
		"note": "网银支付",
		"class": "icon-yinlian"
	}, {
		"name": "Apple",
		"note": "Apple Pay",
		"class": "icon-apple"
	}, {
		"name": "百度钱包",
		"note": "移动网页支付",
		"class": "icon-baiduqianbao"
	}, {
		"name": "京东支付",
		"note": "移动网页支付",
		"class": "icon-jingdong-1"
	}, {
		"name": "财付通",
		"note": "PC 支付",
		"class": "icon-caifutong"
	}, {
		"name": "快钱",
		"note": "PC 支付",
		"class": "icon-kuaiqian"
	}, {
		"name": "易宝支付",
		"note": "移动网页支付",
		"class": "icon-yibao"
	}];
	$scope.costRecord = [{
		"channel": "支付宝",
		"type": "PC网站",
		"cost": "/",
		"time": "实时到帐"
	}, {
		"channel": "支付宝",
		"type": "手机网站",
		"cost": "/",
		"time": "实时到帐"
	}, {
		"channel": "支付宝",
		"type": "APP",
		"cost": "/",
		"time": "实时到帐"
	}, {
		"channel": "支付宝",
		"type": "扫码支付",
		"cost": "/",
		"time": "实时到帐"
	}, {
		"channel": "微信",
		"type": "公共帐号",
		"cost": "300/年",
		"time": "T+1、T+7"
	}, {
		"channel": "微信",
		"type": "APP",
		"cost": "300/年",
		"time": "T+1、T+7"
	}, {
		"channel": "微信",
		"type": "扫码支付",
		"cost": "300/年",
		"time": "T+1、T+7"
	}, {
		"channel": "京东支付",
		"type": "0-50万",
		"cost": "",
		"time": "T+7"
	}, {
		"channel": "京东支付",
		"type": "50万-200万",
		"cost": "",
		"time": "T+7"
	}, {
		"channel": "京东支付",
		"type": "200以上",
		"cost": "",
		"time": "T+7"
	}, {
		"channel": "银联",
		"type": "所有形式",
		"cost": "2000-3000",
		"time": "T+1"
	}, {
		"channel": "百度钱包",
		"type": "所有形式",
		"cost": "2000-3000",
		"time": "T+1"
	}, {
		"channel": "快钱",
		"type": "所有形式",
		"cost": "2000-3000",
		"time": "T+1"
	}, {
		"channel": "易宝",
		"type": "所有形式",
		"cost": "2000-3000",
		"time": "T+1"
	}];
	$scope.contactRecord = [{
		"name": "杜晓涵",
		"des": "4年产品顾问经验，曾服务过手游、页游、端游和工具类APP等200个多个项目。",
		"emaill": "chenlin.xu@jubaobar.com",
		"img": "http://static.jubaobar.cn/project/jubaopay/res/img/girl1.jpg"
	}, {
		"name": "玲珑",
		"des": "4年产品顾问经验，曾服务过手游、页游、端游和工具类APP等200个多个项目。",
		"emaill": "rong.ling@jubaobar.com",
		"img": "http://static.jubaobar.cn/project/jubaopay/res/img/girl2.jpg"
	}, {
		"name": "杨小佳",
		"des": "5年产品顾问经验，曾服务过手游、页游、端游和工具类APP等300个多个项目，经验丰富，服务到位。",
		"emaill": "yu.duan@jubaobar.com",
		"img": "http://static.jubaobar.cn/project/jubaopay/res/img/girl3.jpg"
	}]
});; /*!components/js/tj.js*/
var _hmt = _hmt || [];
var _bdhmProtocol = (("https:" == document.location.protocol) ? " https://" : " http://");
document.write(unescape("%3Cscript src='" + _bdhmProtocol + "hm.baidu.com/h.js%3F01234567890ABCDEF01234567890ABCDEF' type='text/javascript'%3E%3C/script%3E"));; /*!node.js*/
/*
 * @require bower_components/html5-boilerplate/dist/js/vendor/modernizr-2.8.3.min.js
 * @require bower_components/angular/angular.min.js
 * @require bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js
 * @require bower_components/angular-animate/angular-animate.min.js
 * @require bower_components/angular-ui-router/release/angular-ui-router.min.js
 * @require server/author.js
 * @require components/js/router.js
 * @require components/js/ctrl.js
 * @require components/js/tj.js
 *
 */