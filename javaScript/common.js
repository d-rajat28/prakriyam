function nav_menu(){
    if(document.getElementById('navs').style.display == 'block'){
        document.getElementById('navs').style.display = 'none'; 
    }else{
        document.getElementById('navs').style.display = 'block';
    }
}

function search_pop(){
    if(document.getElementById('search_pop').style.display == 'flex'){
        document.getElementById('search_pop').style.display = 'none'; 
    }else{
        document.getElementById('search_pop').style.display = 'flex';
    }
}

$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if(scroll > 100){
        alert(scroll);
        document.getElementById('my_header').style.boxShadow = "1px 2px 8px 2px red"; 
    }
    else{
        document.getElementById('my_header').style.boxShadow = "none";
    }
});

