var title = document.getElementById('#title');
title.onclick = function(){
    var text = document.querySelector('p.offer_text');
    text.classList.add('red');
}