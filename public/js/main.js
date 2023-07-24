const search_input = document.getElementById("search_input");
const rest_content = document.getElementById("rest_content");

search_input.addEventListener("click", function () {
    rest_content.classList.add("show");
});

window.addEventListener("click", function (event) {
    if (event.target != search_input && event.target.parentNode != rest_content) {
        rest_content.classList.remove("show");
    }
});





const btn_menu = document.getElementById('btn_menu');
const menu_pages = document.getElementById('menu_pages')
btn_menu.addEventListener('click', function () {
    btn_menu.classList.toggle('active_btn');
    btn_search.classList.remove('active_btn');
    menu_pages.classList.toggle('show');
    search_area.classList.remove('show');

});

const btn_search = document.getElementById('btn_search');
const search_area = document.getElementById('search_area')
btn_search.addEventListener('click', function () {
    btn_search.classList.toggle('active_btn');
    btn_menu.classList.remove('active_btn');
    menu_pages.classList.remove('show');
    search_area.classList.toggle('show');
});

/*  evitar dar click derecho
document.addEventListener('contextmenu', function (event) {
    event.preventDefault();
});*/
