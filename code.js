let slider = $(".slider");
let sliderLenta = slider.find('.slider-lenta');
let sliderItems = slider.find(".slider-lenta-item.real");
sliderLenta.css('width', (sliderItems.length+2) * 100 + "%");

// MVC
//Model
let showIndex = 0;



slider.find('.slider-arrow-left').click(function(){
    if(sliderLenta.hasClass("animated")){
        return;
    }
    sliderLenta.addClass("animated");
    if( showIndex <= 0){
        showIndex--;

        sliderLenta.animate({
            left: -100 * (showIndex+1)+"%" // тут был fadeOut
        }, 600, function(){
            showIndex = sliderItems.length - 1;
            sliderLenta.css('left', -100 * (showIndex+1)+"%");
            sliderLenta.removeClass("animated");
        });
    } else{
        showIndex--;
        sliderLenta.animate({
            left: -100 * (showIndex + 1)+"%" // тут был fadeOut
        }, 600, function(){
            sliderLenta.removeClass("animated");
        }); 
    }
})

slider.find('.slider-arrow-right').click(function(){
    if(showIndex >= sliderItems.length - 1){
        sliderItems.eq(showIndex).fadeOut();
        showIndex = 0;
        sliderItems.eq(showIndex).css('display', 'flex');
    } else{
        sliderItems.eq(showIndex).fadeOut();
        sliderItems.eq(showIndex+1).css('display', 'flex');
        showIndex++;
    }
})