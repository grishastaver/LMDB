function makeMapHTML(){
    var newHTML = '<div class="map_button_bar">';
    for(var i in maps) {
        newHTML += '<button class="map_button" id="' + maps[i] + '" >' + i + '</button>';
    }
    newHTML += '</div><img class="pic_holder"></img>';
    return newHTML;
}



function showMap(but) {
    var p = 'img/karta_' + $(but).attr("id") + '.png';
    $(".pic_holder").attr('src', p);
    return true;
}