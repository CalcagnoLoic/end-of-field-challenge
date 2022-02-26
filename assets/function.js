$btnMenu = document.querySelector('.menu');
$dropdownLink = document.querySelector('.btn');


function toggleNavbar() {
    if (!$btnMenu.getAttribute('style') || $btnMenu.getAttribute('style') === 'display: none;') {
        $btnMenu.style.display = 'block';
        $dropdownLink.setAttribute('aria-expanded', 'true');
    } else {
        $btnMenu.style.display = 'none';
        $dropdownLink.setAttribute('aria-expanded', 'false');
    }
}

$dropdownLink.addEventListener('click', function(e) {
    e.preventDefault();
    toggleNavbar();
})