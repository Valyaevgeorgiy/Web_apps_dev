$(function(){
    let layoutContainer = $('.layout-container');
    $('button').on('click', function(){
        layoutContainer.css('display', 'flex');
    });

    layoutContainer.on('click', function(e){
        if (this === e.target) {
            layoutContainer.css('display', 'none');
        }
    });

    $('.layout button').on('click', function(){
        let request = {
            'name': $('.layout input[name="name"]').val(),
            'email': $('.layout input[name="email"]').val()
        };

        $.post('./api.php', request, function(response){
            if (response == '1'){
                layoutContainer.css('display', 'none');
            } else {
                alert('Что-то пошло не так...');
            };
        });
    });
});