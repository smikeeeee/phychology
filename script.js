$(function() {


//modal

$('[data-modal').on('click', function(event){
    event.preventDefault();

    let modal = $(this).data('modal')

    $('body').addClass('no-scroll');
    $(modal).addClass('show');

    setTimeout(function(){
        $(modal).find('.modal__content').css({
        transform: 'scale(1)',
        opacity: '1'
        });
    }, 200);
});

//modal close

function modalClose(modal) {
    
    modal.find('.modal__content').css({
        transform: 'scale(0.5)',
        opacity: '0'
        });

    setTimeout(function(){
        $('body').removeClass('no-scroll');
        modal.removeClass('show');
    }, 200);
}

$('.modal__close').on('click', function(event){
    event.preventDefault();

    let modal = $(this).parents('.modal');
    
        modalClose(modal);
})

$('.modal').on('click', function(){
    let modal = $(this);

    modalClose(modal);
});


$('.modal__content').on('click', function(event){
    event.stopPropagation();
})



});

