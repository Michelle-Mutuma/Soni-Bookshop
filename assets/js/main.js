document.addEventListener('DOMContentLoaded', function() {
    dropdownFunction()
    searchDisplay()
    sideNavDisplay()
    mainNavDisplay()
})
function dropdownFunction(){
    var dropdowns = document.querySelectorAll('.dropdown')
    dropdowns.forEach(function(dropdown) {
        var button = dropdown.querySelector('.dropdown-button')
        button.addEventListener('click', function() {
            if(dropdown.classList.contains('dropdown-clicked')){
                dropdown.classList.remove('dropdown-clicked')
            }else{
                dropdown.classList.add('dropdown-clicked')
            }
        })
    })
    document.addEventListener('click', function(event) {
        dropdowns.forEach(function(dropdown) {
            if (!dropdown.contains(event.target)) {
                dropdown.classList.remove('dropdown-clicked')
            }
        })
    });
}
function searchDisplay(){
    var searchBar = document.querySelector('.header-middle .header-center')
    var tools = document.querySelector('.header-middle .shopping-tools')
    document.querySelector('.search-tool').addEventListener('click', function() {
        searchBar.classList.add('show-search')
        tools.classList.add('no-tools')
    })
    searchBar.querySelector('.bi-x').addEventListener('click', function() {
        searchBar.classList.remove('show-search')
        tools.classList.remove('no-tools')
    })
}
function sideNavDisplay(){
    var categories = document.querySelectorAll('.category-nav ul > li')
    categories.forEach(function(category) {
        category.addEventListener('click', function() {
            if(category.classList.contains('active')){
                category.classList.remove('active')
            }else{
                category.classList.add('active')
            }
        })
    })
    document.addEventListener('click', function(event) {
        categories.forEach(function(category) {
            if (!category.contains(event.target)) {
                category.classList.remove('active')
            }
        })
    });
}
function mainNavDisplay(){
    var navButton = document.querySelector('.nav-button')
    var nav = document.querySelector('.header-bottom')
    navButton.addEventListener('click', function() {
        if(navButton.classList.contains('open-nav-button')){
            navButton.classList.remove('open-nav-button')
            nav.classList.remove('open-nav')
        }else{
            navButton.classList.add('open-nav-button')
            nav.classList.add('open-nav')
        }
    })
    document.addEventListener('click', function(event) {
        console.log(navButton.contains(event.target) )
        if (!navButton.contains(event.target) && !nav.contains(event.target)) {
            navButton.classList.remove('open-nav-button')
            nav.classList.remove('open-nav')
        }
    });

    var initialPosition = window.scrollY;
    window.addEventListener("scroll", function () {
        let currentScroll = window.scrollY;

        if (currentScroll > initialPosition + 50) {
            nav.classList.add('hide-nav')
            navButton.classList.add('show-nav-button')
        } else if (currentScroll <= initialPosition) {
            nav.classList.remove('hide-nav')
            navButton.classList.remove('show-nav-button')
        }
    });
}