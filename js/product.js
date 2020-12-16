function genStar(v) {
	for(var i=1, html=''; i<6; i++) {
		if(Math.ceil(v) >= i) html += '<i class="star fa fa-star"></i>';
	}
	return html;
}

function onGet(r) {
	var i, html;
	for(i in r) {
		html  = '<li class="prd">';
		html += '	<div class="img-wrap">';
		html += '		<img src="'+r[i].src+'" style="width: 100%;">';
		html += '	</div>';
		html += '	<div class="info-wrapper">';
		html += '		<h3 class="title">';
		html += '			<span>'+r[i].title+'</span>';
		html += '			<i class="far fa-heart"></i>';
		html += '		</h3>';
		html += '		<p class="summary">'+r[i].summary+'</p>';
		html += '		<div class="price">'+r[i].salePrice+'</div>';
		html += '		<div class="star-wrap">';
		for(var j=0; j<5; j++)	html += '<i class="star fa fa-star"></i>';
		html += '<div class="mask"></div>';
		html += '		</div>';
		html += '	</div>';
		html += '</li>';
		$(html)
		.appendTo(".wrapper > .prd-wrapper")
		.find(".star-wrap > .mask")
		.css("transform", "translateX("+(r[i].star * 20)+"%)");
	}
}
$.get('../json/products.json', onGet);

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

