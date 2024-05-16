$(document).ready(function(){
    $('#searchButton').click(function(){
        var searchText = $('input[type="search"]').val().toLowerCase();
        $('.card').each(function(){
            var cardName = $(this).find('h3').text().toLowerCase();
            if(cardName.includes(searchText)){
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });
});

