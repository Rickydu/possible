define('carousel', function(require, exports, module){

    var tools = require('./tools');
    var Carousel = function(options){
        this._initCarousel(options);
    };

    Carousel.prototype = {
        _initCarousel: function(options){
            tools.EventEmitter.call(this);
            this.options = tools.mix({
                container: '', 
                ul: 'ul',
                item: 'li',
                btnPrev: '',
                btnNext: '',
                src: [],
                space: 300,
                animateInterval: 200,
                orginWidth: 172,
                orginHeight: 130
            }, options);

            this.panel = $(this.options.container);
            this.pointer = 0;
            this.total = this.panel.find('li').length;
            this.maxIndex = this.total - 1;
            this.minIndex = 0;
            this.midIndex = (this.total - 1) / 2;
            this.max = this.easeOutQuad(this.midIndex, 0, this.options.space, this.midIndex + 1);
            this.isAnimate = false;
            this.initUI();
            this.initEvents();
        },

        initUI: function(){
            var self = this;
            this.panel.find(this.options.item).each(function(index){
                this.innerHTML = '<img src="' + self.options.src[self.getPointer(index + self.pointer - 3)] + '">';
                // this.innerHTML = self.getPointer(index + self.pointer - 3);
                $(this).css(self.getPosition(index));
            });
            self.emit('show', {index: self.pointer});
        },

        initEvents: function(){
            var self = this;
            var options = self.options;
            this.panel.find(options.btnNext).click(function(){
                self.next();
            });

            this.panel.find(options.btnPrev).click(function(){
                self.prev();
            });
        },

        next: function(){
            var self = this;
            var options = self.options;
            if(self.isAnimate){
                    return;
                }
                self.pointer--;
                self.pointer %= this.options.src.length;

                self.isAnimate = true;
                self.panel.find(options.item).each(function(index){
                    $(this).animate(self.getPosition(index + 1, 1), options.animateInterval);
                });
                self.emit('show', {index: self.getPointer(self.pointer)});
                console.log(self.getPointer(self.pointer));
                setTimeout(function(){
                    self.panel.find(options.ul).prepend(self.panel.find(options.item).eq(self.total - 1));
                    self.panel.find(options.item).eq(0)
                        .stop(true).css(self.getPosition(0))
                        .html('<img src="' + self.options.src[self.getPointer(0 + self.pointer - 3)] + '">');
                        // .html(self.getPointer(0 + self.pointer - 3));
                    self.isAnimate = false;
                }, 300);
        },

        prev: function(){
            var self = this;
            var options = self.options;
            if(self.isAnimate){
                    return;
                }
                self.pointer++;
                self.pointer %= this.options.src.length;

                self.isAnimate = true;
                self.panel.find(options.item).each(function(index){
                    $(this).animate(self.getPosition(index - 1, -1), options.animateInterval);
                });
                self.emit('show', {index: self.getPointer(self.pointer)});
                console.log(self.getPointer(self.pointer));
                setTimeout(function(){
                    self.panel.find(options.ul).append(self.panel.find(options.item).eq(0));
                    self.panel.find(options.item).eq(self.total - 1)
                        .stop(true).css(self.getPosition(self.total - 1))
                        // .html(self.getPointer(self.total + self.pointer - 4 ));
                        .html('<img src="' + self.options.src[self.getPointer(self.total + self.pointer - 4)] + '">');
                    self.isAnimate = false;
                }, 300); 
        },
        //t time, b begin, c change, d duration 
        easeOutQuad : function(t, b, c, d){
            return -c*(t/=d)*(t-2)+b;
        }, 

        getPosition : function(index, dir){
            var p = index;
            var middleIndex = this.midIndex;
            if(index > middleIndex){
                p = this.maxIndex - index;
            }
            var percent = (10 - 3 + p) / 10;

            var symbol = 1;
            if(index == middleIndex){
                symbol = 1;
            }else{
                symbol = (index - middleIndex) / Math.abs(index - middleIndex);
            }

            var left = symbol * this.easeOutQuad(Math.abs(index - middleIndex), 0, 300, middleIndex + 1) + this.max;

            var properties = {
                left: 100 + left - (this.options.orginWidth * percent) / 2, 
                top: this.options.orginHeight / 2 - ((this.options.orginHeight * percent) / 2), 
                zIndex: p * 10, 
                width: this.options.orginWidth * percent, 
                height: this.options.orginHeight * percent
            };

            if(dir === undefined){
                if(index == 0 || index == this.total - 1){
                    properties.opacity = 0;
                }
            }else{
                if(dir > 0 && index == 1 || dir < 0 && index == this.total - 2){
                    properties.opacity = 1;
                }

                if(dir > 0 && index == this.total || dir < 0 && index == 0){
                    properties.opacity = 0;
                }
            }

            return properties;
        },

        getPointer: function(pointer){
            pointer %= this.options.src.length;
            if(pointer < 0){
                return this.options.src.length + pointer % 10;
            }
            return pointer;
        }
    };

    tools.extend(Carousel, tools.EventEmitter);
    module.exports = Carousel;
});