function genStar(v){
    for(var i=1, html='';i<6; i++){
        if(Math.ceil(v) >=i) html += '< class="star fa fa-star"></i>';   
   }
$(html).eq($(html).length-1).addClass("mask");
console.log($(html));   
return $(html);
}


function onGet(r){
    var i, html;
    for(i in r){
html+='<li class="product">';
html+='<div class="img-wrap">';
 html+='<img src="'+r[i].src+'" class="w-100">';
 html+='</div>';
html+='<div class="info-wrapper">';
html+='<i class="far fa-heart"></i>';
html+='<h3 class="title"></h3>';
html+='<span>'+r[i].title+'</span>';
html+='<p class="summary">'+r[i].summary+'</p>';
html+='<div class="price">'+r[i].salePrice+'</div>';
html+='<div class="star-wrap"></div>';
html+='</div>';
html+='</li>';
        $(html).appendTo(".wrapper > .pred-wrapper").find(".star-wrap").html(genStar(r[i].star));
}
$.get('../json/products.json', onGet);
}