function showItems() {
    var k = counter*40;
    var newHTML = '';
    for(var i in items) {
        if(check(items[i]) && !items[i].hidden){
            if(k < 1){
                newHTML += makeItemBox(items[i]);
            }
            if (k < -38) break;
            k--;
        }
    }
    if(k > -39) {
        $('.moar_button').css("display", "none");
    }
    counter++;
    return newHTML;
}

function makeItemBox(item) {
    var is1 = '<tr><td class="itemstat';
    var is2 = '</td><td class="itemstat2">';
    var newHTML ='';
    newHTML += '<div class = "item">';
    newHTML += '<h6 class = "itemname ' + item.rarity + '_text">' + item.name + '</h6>';
    if($(curPage).attr('id') == 'items')
        newHTML += '<img class="' + item.rarity + ' borderedpic" src="' + path + '/play/lib/jpg/' + item.image + '.jpg">';
    newHTML += '<p class ="itemtype small">' + searchValues.items["type"][item.type] + '</p>';
    newHTML += (item.personal) ? ('<p class="small">Персональный предмет</p>') : ('');
    newHTML += (item.becomepersonal) ? ('<p class="small">Становится персональным при надевании</p>') : ('');
    newHTML += (item.instruction) ? ('<p class="small">' + item.instruction + '</p>') : ('');
    newHTML += '<table>'
    newHTML += Reqs(item);
    newHTML += '</table>'
    newHTML += '<table>'
    newHTML += (item.minhit || item.maxhit) ? (is1 + '">Урон:' + is2 + ((item.minhit)?(item.minhit):(0)) + ' - ' + ((item.maxhit)?(item.maxhit):(0)) + '</td></tr>') : ('');
    newHTML += (item.defence) ? (is1 + '">Защита:' + is2 + item.defence + '</td></tr>') : ('');
    newHTML += (item.strength) ? (is1 + '">Сила:' + is2 + item.strength + '</td></tr>') : ('');
    newHTML += (item.agility) ? (is1 + '">Ловкость:' + is2 + item.agility + '</td></tr>') : ('');
    newHTML += (item.stamina) ? (is1 + '">Выносливость:' + is2 + item.stamina + '</td></tr>') : ('');
    newHTML += (item.crit) ? (is1 + '">Крит:' + is2 + item.crit + '%</td></tr>') : ('');
    newHTML += (item.dodge) ? (is1 + '">Уворот:' + is2 + item.dodge + '%</td></tr>') : ('');
    newHTML += (item.mastery) ? (is1 + '">Мастерство:' + is2 + item.mastery + '</td></tr>') : ('');
    newHTML += (item.resilience) ? (is1 + '">Устойчивость:' + is2 + item.resilience + '</td></tr>') : ('');
    newHTML += (item.maxdur) ? (is1 + '">Прочность:' + is2 + item.maxdur + '</td></tr>') : ('');
    newHTML += '</table>'
    newHTML += (item.descr) ? ('<p class="goldentext">' + item.descr + '</p>') : ('');
    newHTML += '<table class = "bot">'
    newHTML += (item.price) ? (is1 + ' itemtype">Цена:' + is2 + getPrice(item.price) + '</td></tr>') : ('');
    newHTML += '</table>'
    newHTML += '</div>';
    return newHTML;
}

function getPrice(price) {
    var r = '';
    r += (price > 9999) ? ((Math.floor(price / 10000)) + ' <img src="img/gold.jpg"> ') : ('');
    r += ((Math.floor(price / 100)) % 100 > 0) ? ((Math.floor(price / 100)) % 100 + ' <img src="img/silver.jpg"> ') : ('');
    r += (price % 100 > 0) ? (price % 100 + ' <img src="img/bronze.jpg">') : ('');
    return r;
}

function Reqs(item) {
    var bool = false;
    var t = '<tr class="reqs"><td class="itemstat">Требования:</td>'
    var r = '';
    var s = '<tr class="reqs"><td></td>';
    if (item.reqlevel) {
        r += '<td class="itemstat2">Уровень ' + item.reqlevel + '</td></tr>';
        bool = true;
    }
    if (item.reqparagon) {
        r += (bool) ? (s) : ('');
        r += '<td class="itemstat2">Ступень ' + item.reqparagon + '</td></tr>';
        bool = true;
    }
    if (item.reqstrength) {
        r += (bool) ? (s) : ('');
        r += '<td class="itemstat2">Сила ' + item.reqstrength + '</td></tr>';
        bool = true;
    }
    if (item.reqagility) {
        r += (bool) ? (s) : ('');
        r += '<td class="itemstat2">Ловкость ' + item.reqagility + '</td></tr>';
        bool = true;
    }
    if (item.reqstamina) {
        r += (bool) ? (s) : ('');
        r += '<td class="itemstat2">Выносливость ' + item.reqstamina + '</td></tr>';
        bool = true;
    }
    return (bool) ? (t + r) : ('');
}

function check(a) {
    if (a[Property] == Value  || (typeof a[Property] == Value))
        return true;
    return false;
}