function makeEventHTML(){
    var newHTML = '<div class="events-block">';
    newHTML += '<div class="events-title"><select size="10" class ="event-selector">';
    for(var i in events) {
        newHTML += '<option class="sp-title" value="'+i+'">' + events[i].name + '</p>';
    }
    newHTML += '</select></div>';
    newHTML += '<div class ="events-content">';
    newHTML += '<div class="event-descr">Выберите Событие</div>';
    newHTML += '<div class="event-loc"></div>';
    newHTML += '<div>'
    newHTML += '<div class="event-cd"></div>';
    newHTML += '<div class="event-start"></div>';
    newHTML += '<div class="event-end"></div>';
    newHTML += '</div>';
    newHTML += '</div>';
    return newHTML;
}



function showEvent(event){
    $('.event-descr').html(event.description);
    $('.event-loc').html("Локация: "+event.location);
    $('.event-cd').html('КД: '+event.cd);
    $('.event-start').html("С "+event.start+" уровня");
    $('.event-end').html("До "+event.end+" уровня");
}