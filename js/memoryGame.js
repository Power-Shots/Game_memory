/*
    Plagin
    Game memory
    v1.0
*/

;(function($){
    $.fn.pluginMemory = function(options){
        options = $.extend({
            quantity: 5,
            time: 1000,
            margin: 2,
            delay: 500,
            img: '',
        }, options);

        if(options.quantity<0 || options.quantity> 5){
            options.quantity = 5;
        }

        class Game{
            constructor(el){
                this.memorySection = el;
                this.arr = [];
                this.id = '';
            }

            generateArr(){
                let arr = Array.from( Array(options.quantity), (_,x)=> x+1);
                arr = [...arr, ...arr];
                this.arr = arr.sort(() => Math.random() - .5)
            }

            generateHTML(){
                let backgroundImg = 
                this.memorySection
                    .css({
                        'display': 'grid',
                        'grid-template-columns': `repeat(${options.quantity}, 1fr)`,
                        'gap': options.margin
                    })
                    .html(this.arr.map(item => `
                        <div class="item">
                            <img src="images/${item}.jpg">
                            <div class="cover" data-id="${item}" style="background-image: url(${options.img}); background-size: cover;"></div>
                        </div>
                    `));
            }

            gamePlay(){
                let id = this.id;
                $('.cover')
                    .hide(0)
                    .delay(options.time)
                    .show(0)
                    .on('click', function(e){
                        $(e.target).hide(0);
                        if(!id){
                            id = $(e.target);
                        }
                        else{
                            if(id.data('id') === $(e.target).data('id')){
                                console.log('Одинаковые')
                                $(id).addClass('disable');
                                $(e.target).addClass('disable');
                            }
                            else{
                                $(id).delay(options.time).show(0);
                                $(e.target).delay(options.time).show(0)
                                console.log('разные')
                            }
                            id = '';
                        }

                        if($('.disable').length === options.quantity*2){
                            setTimeout(function(){
                               let result = confirm('Вы выиграли, хотите продолжить играть?');
                                if(result === true){
                                    this.init();
                                }
                            }.bind(this), 1000);
                        }
                    }.bind(this));
            }

            init(){
                this.generateArr();
                this.generateHTML();
                this.gamePlay();
            }
        };

        let game = new Game( $(this) );
        game.init();
        return this;
    }
})(jQuery);