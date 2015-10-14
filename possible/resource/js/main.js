define('main', function(require){
    require('./rwd-picture');

    var data = [
    	{
    		qas: [
    			{
    				q: '笔记本电脑与投影仪总连接不上，原因是？',
    				a: [
    					'A. 连接线损坏',
    					'B. 连接线接头接触不良',
    					'C. 连接线没有插入正确接口',
    					'D. 因为种种问题，连接线不太高兴'
    				],
    				right: 3,
    				url: 'http://www.intel.cn/content/www/cn/zh/enterprise-security/wireless-display-video.html'
    			},
    			{
    				q: '在不同电脑之间切换投影时经常出现连接问题，什么技术可以摆脱这种窘境？',
    				a: [
    					'A. WIFI',
    					'B. WIDI Pro',
    					'C. BLUETOOTH',
    					'D. INFRARED'
    				],
    				right: 1,
    				url: 'http://www.intel.cn/content/www/cn/zh/architecture-and-technology/intel-pro-wireless-display.html'
    			},
    			{
    				q: '拿着笔记本来到台式机前，即可连接键鼠、显示器，绝无性能延迟，是因为？',
    				a: [
    					'A. 无线蓝牙',
    					'B. 无线坞站',
    					'C. 无线映射',
    					'D. 无线基站'
    				],
    				right: 1,
    				url: 'http://www.intel.cn/content/www/cn/zh/enterprise-security/benefits-of-intel-core-vpro-infographic.html'
    			},
    			{
    				q: '英特尔无线底座连接与无线显示技术，得益于？',
    				a: [
    					'A. 性能强悍的英特尔锐炬显卡',
    					'B. 英特尔设备搭载的订制蓝牙模块',
    					'C. 英特尔酷睿博锐处理器',
    					'D. 英特尔全新一代14nm工艺Broadwell架构'
    				],
    				right: 2,
    				url: 'http://www.intel.cn/content/www/cn/zh/processors/vpro/core-processors-with-vpro-technology.html'
    			}
    		],
    		end: '1挑战“解救大数据” &gt;',
            title: '线缆之灾'
    	},
    	{
    		qas: [
    			{
    				q: '在金融电信等领域，为了释放不断增长的数据集潜力，处理器急需的功能是？',
    				a: [
    					'A. 海量内存，自动备份数据',
    					'B. 更好的安全技术，阻断病毒安全威胁',
    					'C. 智能优化通道选择',
    					'D. 满足内存计算的密集需求，提供实时分析'
    				],
    				right: 3,
    				url: 'http://www.intel.cn/content/www/cn/zh/processors/xeon/xeon-e7-v3-family-solution-brief.html'
    			},
    			{
    				q: '与前代相比，以下关于英特尔® 至强™ E7 v3处理器，正确的是？',
    				a: [
    					'A. 最高支持8路平台，不支持拓展',
    					'B. 新一代处理器可将性能提高40%',
    					'C. 可将事务密集型工作负荷处理性能提高7.5倍',
    					'D. 支持多达12TB的DDR2内存'
    				],
    				right: 1,
    				url: 'http://www.intel.cn/content/www/cn/zh/processors/xeon/xeon-e7-v3-family-overview-animation.html'
    			},
    			{
    				q: '以下哪些关于新一代至强E7 v3处理器的属性是正确的？',
    				a: [
    					'A. 对企业工作负载进行虚拟化',
    					'B. 虚拟机控制结构技术可阻止虚拟机管理程序运行',
    					'C. 为虚拟机提供近乎原生的性能，并实时传输数据',
    					'D. 高速缓存技术可在性能受影响后找到争用虚拟机'
    				],
    				right: 2,
    				url: 'http://www.intel.cn/content/www/cn/zh/processors/xeon/xeon-e7-v3-family-brief.html'
    			},
    			{
    				q: '新一代至强处理器采用的英特尔可靠运行技术的特性有：',
    				a: [
    					'A. 99%的可靠运行时间',
    					'B. 稳定系统弹性，降低错误率',
    					'C. 固件错误恢复功能',
    					'D. 固定内存技术'
    				],
    				right: 2,
    				url: 'http://www.intel.cn/content/www/cn/zh/architecture-and-technology/intel-run-sure-technology.html'
    			}
    		],
    		end: '2挑战“解救大数据” &gt;',
            title: '数据危机'
    	}
    ];



    var status = {
    	a: 0,
    	b: 0,
        c: false
    };

    $('.sense-1 .cards .card').each(function(index){
    	this.index = index;
    }).click(function(){
    	var index = this.index;
    	status.a = index;
    	status.b = 0;
    	renderQA(getQAs());
        $('.q-and-a').show();
    	$('.sense-1').hide();
    	$('.sense-2').show();
        $('.sense-2 .cards .card').removeClass('active').eq(status.a).addClass('active');

        $(".sense-2 .ttl .big").html(data[status.a].title);
    });

    $('.q-and-a .a li').each(function(index){
    	this.index = index;
    }).click(function(){

        if(status.c){
            return;
        }        
        status.c = true;
    	var index = this.index;
    	// status.b = index;
    	var qas = getQAs();
    	if(index == qas.right){
    		$(this).addClass('success');
    		showSuccess(qas);
    	}else{
    		$(this).addClass('error');
    		showError(qas);
    	}

    });

    //显示正确信息
    var showSuccess = function(qas){
    	setTimeout(function(){
            status.c = false;
    		if(status.b <3){
    			$('.q-and-a').hide();
    			$('.middle-result.success .link').attr('href', qas.url);
    			$('.middle-result.success').show();
    			$('.q-and-a .a li').removeClass('error').removeClass('success');
    		}else{
    			//显示最终界面
    			$('.q-and-a').hide();
    			$('.end-result').show();
                $(".progress .remark span").hide();
                $(".progress .remark em").show();
    			$('.q-and-a .a li').removeClass('error').removeClass('success');
    		}
    	}, 1000);
    };

    //显示错误信息
    var showError = function(qas){
    	setTimeout(function(){
            status.c = false;
    		$('.q-and-a').hide();
    		$('.middle-result.error .link').attr('href', qas.url);
    		$('.middle-result.error').show();
    		$('.q-and-a .a li').removeClass('error').removeClass('success');
    	}, 1000);
    };

    //重新挑战
    $('.middle-result.error .replay').click(function(e){
        e.preventDefault();
    	$('.middle-result.error').hide();
        // status.b = 0;
    	renderQA(getQAs());
    	$('.q-and-a').show();
    });

    //下一关
    $('.middle-result.success .next').click(function(e){
        e.preventDefault();
    	$('.middle-result.success').hide();
    	status.b++;
    	console.log(status.b);
    	renderQA(getQAs());
    	$('.q-and-a').show();
    });

    //结束下一关
    $('.end-result .next').click(function(){
    	status.a = status.a == 1? 0 : 1;
    	status.b = 0;
    	renderQA(getQAs());
    	$('.end-result').hide();
    	$('.q-and-a').show();
    });

	//获取当前的问答
    var getQAs = function(){
        $(".sense-2 .pix-bg").attr("class", 'pix-bg').addClass('b' + status.a + "_" + (status.b + 1));
    	return data[status.a].qas[status.b];
    }

    //显示指定的问题
    var renderQA = function(qa){
        $(".progress .info i").html(status.b + 1);
    	var panel = $('.q-and-a');
        $(".progress .remark span").show();
        $(".progress .remark em").hide();
    	panel.find('.q p').html(qa.q);
    	panel.find('.a li').each(function(index){
    		this.innerHTML = qa.a[index];
    	});
    };

    
    $('.mask .btn-close').click(function(){
        $('.mask').hide();
        $(this.parentNode).hide();
    });

    $('.sense-2 .cards').click(function(){
        // status.a = 0, status.b = 0, status.c = false;
        $(".mask").show();
        $('.mask .confirm-box').show();
    });


    $('.mask .btn-confirm').click(function(e){
        e.preventDefault();
        $('.middle-result.error').hide();
        $('.middle-result.success').hide();
        $('.end-result').hide();
        $('.mask').hide();
        $('.mask .confirm-box').hide();
        $('.sense-2').hide();
        $('.sense-1').show();
        status.a = 0, status.b = 0, status.c = false;
    });
    $('.mask .btn-cancel').click(function(e){
        e.preventDefault();
        $('.mask').hide();
        $('.mask .confirm-box').hide();
    });
    $('.btn-regist').click(function(e){
        e.preventDefault();
        $('.mask').show();
        $('.mask .regist').show();
    });
    var share = require("./share");
    // answer is wrong weibo weixin share
    $('.middle-result.error .btn-weibo').click(function(){
        share.postToWeibo({url: 'http://www.intel.cn/content/www/cn/zh/it-management/it-possible', content: '通关失败！你只能眼睁睁看别人进入IT名人榜了。快去英特尔商用中心好好学习，天天向上吧！', pic: 'http://prcappzone.intel.com/itdm/possible/Intel_ITC_ITP_weibo.jpg'});
    })
    //微信按钮
    $('.middle-result.error .btn-weixin').click(function(){
        $('.mask').show();
        $('.mask .qrbar').show();
    });
    // end weibo weixin share
    $('.end-result .btn-weibo').click(function(){
        share.postToWeibo({url: 'http://www.intel.cn/content/www/cn/zh/it-management/it-possible', content: '我在“IT极限挑战”中全部通关，成功进入IT名人榜，快来和我比一比！', pic: 'http://prcappzone.intel.com/itdm/possible/Intel_ITC_ITP_weibo.jpg'});
    })
    //微信按钮
    $('.end-result .btn-weixin').click(function(){
        $('.mask').show();
        $('.mask .qrbar').show();
    });

    $("#frm_regist").submit(function(e){

        if($("#input_email").val() == ''){
            alert("请输入您的邮箱地址");
            e.preventDefault();
        }

    });
 });
