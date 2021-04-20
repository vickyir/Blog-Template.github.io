/*var selector = document.querySelectorAll('section');

onscroll = function() {
    var scrollPosition = document.documentElement.scrollTop;

    selector.forEach(selector => {

        if(scrollPosition >= selector.offsetTop - selector.offsetHeight && scrollPosition < selector.offsetTop + selector.offsetHeight){
           var currentId = selector.attributes.id.value;
           removeAllActiveClasses();
           addActiveClass(currentId);
        }
        
    });
}

var removeAllActiveClasses = function(){
    document.querySelectorAll("nav a").forEach((el) =>{
        el.classList.remove("active");
    });
};

var addActiveClass = function(id){
    console.log(id);

    document.querySelector(section).classList.add("active");
}*/

function activeLinkControl(){
    $('.navbar-nav a').click(function(){
        $(this).closest('a').siblings().removeClass('active');
        $(this).closest('a').addClass('active');
    });
}