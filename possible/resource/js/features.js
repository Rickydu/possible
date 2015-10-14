define('features', function(require){
    var move = require('./move');
    var RL = require('./resource-loader');
    var rl = new RL();
    rl.on('progress', function(e){
        var percent = e.loadedCount / e.totalCount;
        $('.loading .progress .bar').width((percent) * 100 + '%');
        $('.loading .txt span').css({left: percent * 100 + '%'}).html(parseInt(percent * 100) + "%");
    });
    rl.on('load', function(e){
        $('.loading').fadeOut();
        s1Animate.emit('moveInComplete', {});

    });
    rl.load([
        {type: 'image', src: 'resource/images/features/logo-left.png'},
        {type: 'image', src: 'resource/images/features/logo-right.png'},
        {type: 'image', src: 'resource/images/features/arrow.png'},
        {type: 'image', src: 'resource/images/features/dot.png'},
        {type: 'image', src: 'resource/images/features/s1-1.png'},
        {type: 'image', src: 'resource/images/features/s1-2.png'},
        {type: 'image', src: 'resource/images/features/s1-3.png'},
        {type: 'image', src: 'resource/images/features/s1-4.png'},
        {type: 'image', src: 'resource/images/features/s2-1.png'},
        {type: 'image', src: 'resource/images/features/s2-2.png'},
        {type: 'image', src: 'resource/images/features/s2-3.png'},
        {type: 'image', src: 'resource/images/features/s2-4.png'},
        {type: 'image', src: 'resource/images/features/s3-1.png'},
        {type: 'image', src: 'resource/images/features/s3-2.png'},
        {type: 'image', src: 'resource/images/features/s3-3.png'},
        {type: 'image', src: 'resource/images/features/s4-1.png'},
        {type: 'image', src: 'resource/images/features/s4-2.png'},
        {type: 'image', src: 'resource/images/features/s4-3.png'}
    ]);

    setTimeout(function(){
        s1Animate.emit('moveIn', {});
    }, 10);
	// setTimeout(function(){
	// 	$('.loading').fadeOut();
	// 	s1Animate.emit('moveInComplete', {});
	// }, 3000);

	var tools = require('./tools');
    var animations = [];
	var Animation = require('./animate');
	var s1Animate = new Animation({container: '.s1'});
    animations.push(s1Animate);
    var s2Animate = new Animation({container: '.s2'});
    animations.push(s2Animate);
    var s3Animate = new Animation({container: '.s3'});
    animations.push(s3Animate);
    var s4Animate = new Animation({container: '.s4'});
    animations.push(s4Animate);
    var s5Animate = new Animation({container: '.s5'});
    animations.push(s5Animate);
    var s6Animate = new Animation({container: '.s6'});
    animations.push(s6Animate);
    var s7Animate = new Animation({container: '.s7'});
    animations.push(s7Animate);


    s1Animate.on('moveIn', function(e){
        $(".arrow").show();
        $('.s1 .f1').css({top: -200});
        $('.s1 .f2').css({top: 632});
        $('.s1 .f3').css({top: 432});
        $('.s1 .f4').css({top: 200});
        $('.s1 .e1').css({top: 700});
        $('.s1 .e2').css({top: 700});
        move('.s1 .f1 .dot i').scaleX(.001).duration(0).end();
    });
    s1Animate.on('moveInComplete', function(e){
        var self = this;
        self.panel.find('.f1').animate({top: 0}, 'slow',function(){
            move('.s1 .f1 .dot i').scaleX(1).end(function(){
               self.panel.find('.f2').animate({top: 0}, 'slow', function(){
                    self.panel.find('.e1').animate({top: '45.85987261146497%'}, 'slow', function(){
                        self.panel.find('.f3').animate({top: 0}, 'slow', function(){});
                        self.panel.find('.e2').animate({top: '69.53290870488323%'}, 'slow', function(){});
                        self.panel.find('.f4').animate({top: 0}, 'slow', function(){});
                    });
                });
            });
        });
    });
    s1Animate.on('moveOut', function(e){
    });

    s2Animate.on('moveIn', function(e){
        $(".arrow").show();
        var self = this;
        self.panel.find('.f1').css({top: -200});
        self.panel.find('.f2').css({top: 632});
        self.panel.find('.f3').css({top: 500});
        self.panel.find('.f4').css({top: 200});
        self.panel.find('.e1').css({top: 700});
        self.panel.find('.e2').css({top: 700});
        move('.s2 .f1 .dot i').scaleX(.001).duration(0).end();
    });
    s2Animate.on('moveInComplete', function(e){
        var self = this;
        self.panel.find('.f1').animate({top: 0}, 'slow',function(){
            move('.s2 .f1 .dot i').scaleX(1).end(function(){
               self.panel.find('.f2').animate({top: 0}, 'slow', function(){
                    self.panel.find('.e1').animate({top: '52.016985138004245%'}, 'slow', function(){
                        self.panel.find('.f3').animate({top: 0}, 'slow', function(){});
                        self.panel.find('.e2').animate({top: '69.53290870488323%'}, 'slow', function(){});
                        self.panel.find('.f4').animate({top: 0}, 'slow', function(){});
                    });
                });
            });
        });
    });
    s3Animate.on('moveIn', function(e){
        $(".arrow").show();
        var self = this;
        self.panel.find('.f1').css({top: -200});
        self.panel.find('.f2').css({top: 632});
        self.panel.find('.f3').css({top: 300});
        self.panel.find('.e1').css({top: 700});
        move('.s3 .f1 .dot i').scaleX(.001).duration(0).end();
    });
    s3Animate.on('moveInComplete', function(e){
        var self = this;
        self.panel.find('.f1').animate({top: 0}, 'slow',function(){
            move('.s3 .f1 .dot i').scaleX(1).end(function(){
               self.panel.find('.f2').animate({top: 0}, 'slow', function(){
                    self.panel.find('.e1').animate({top: '65.60509554140127%'}, 'slow', function(){
                        self.panel.find('.f3').animate({top: 0}, 'slow', function(){
                        });
                    });
                });
            });
        });
    });

    s4Animate.on('moveIn', function(e){
        $(".arrow").show();
        var self = this;
        self.panel.find('.f1').css({top: -200});
        self.panel.find('.f2').css({top: 632});
        self.panel.find('.f3').css({top: 300});
        self.panel.find('.e1').css({top: 700});
        move('.s4 .f1 .dot i').scaleX(.001).duration(0).end();
    });
    s4Animate.on('moveInComplete', function(){
        var self = this;
        self.panel.find('.f1').animate({top: 0}, 'slow',function(){
            move('.s4 .f1 .dot i').scaleX(1).end(function(){
               self.panel.find('.f2').animate({top: 0}, 'slow', function(){
                    self.panel.find('.e1').animate({top: '60.19108280254777%'}, 'slow', function(){
                        self.panel.find('.f3').animate({top: 0}, 'slow', function(){
                        });
                    });
                });
            });
        });
    });

    s5Animate.on('moveIn', function(){
        $(".arrow").hide();
    })

    $('.btn').click(function(){
    	scrollUp();
    });


    document.addEventListener('touchmove', function (event) {
        event.preventDefault();
        event.stopPropagation();
    }, false);


    function scrollUp(){
    	if(scrollAnimation){
            return;
        }
        if(currentId >= total - 1){
            return;
        }
        prevIndex = currentId;
        currentId++;
        animations[prevIndex]&&animations[prevIndex].emit('moveOut', {index: currentId - prevIndex});
        animations[currentId]&&animations[currentId].emit('moveIn', {index: currentId - prevIndex});
        gotoId();
    }
    function scrollDown(){
    	if(scrollAnimation){
            return;
        } 
        if(currentId <= 0){
            return;
        }
        prevIndex = currentId;
        currentId--;
        animations[prevIndex]&&animations[prevIndex].emit('moveOut', {index: currentId - prevIndex});
        animations[currentId]&&animations[currentId].emit('moveIn', {index: currentId - prevIndex});
        gotoId();	
    }

    var swipe = require('./swipe');
    var index = 0;
    swipe('body').on('swipeup', function(e){
    	scrollUp();
    });
    swipe('body').on('swipedown', function(e){
    	scrollDown();
    });

	var currentId = 0;
    var total = $('.scroller>section').length;
    $('.scroller>section').each(function(index){
        this.scrollIndex = index;
    });
    var gotoId = function(){
        // $('.header .nav li').removeClass('active');
        // if(currentId > 0)
        //     $('.header .nav li').eq(currentId - 1).addClass('active');
        scrollAnimation = true;
        $(".mc_container .scroller").scrollTo('section:eq(' + currentId + ")", 600, {
            onAfter: function(e, obj){
                ___(e[0].scrollIndex);
                scrollAnimation = false;
            },
            onBegin: function(e, obj){
                __(e[0].scrollIndex);
            }
        });
    };

    var scrollTimer = null;
    var scrollAnimation = false;

    var ___ = function(index){
        // animations[index]&&animations[index].moveInComplete();
        animations[index]&&animations[index].emit('moveInComplete', {});
    };

    var __ = function(index){
        // console.log(index);
    };
    $('.custom-radio').click(function(){
        $(".custom-radio").removeClass('checked');
        $(this).addClass('checked');
    });
    $('.submit button').click(function(){
        $('.tip').fadeIn();
        setTimeout(function(){
            $('.tip').fadeOut();
        }, 1000);
    })
});