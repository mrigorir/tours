
$(function(){
    $('li.dropdown.tours').hover(function () {
        $('.dropdown-menu.tours').toggle(300);        
    });
    $('#flag').hover(function () {
        $('.dropdown-menu.flags').toggle(300);
        $('#lang').hasClass('fa-angle-down') ? 
        $('#lang').removeClass('fa-angle-down')
        .addClass('fa-angle-up'): $('#lang')
        .removeClass('fa-angle-up')
        .addClass('fa-angle-down');
    });           
});
