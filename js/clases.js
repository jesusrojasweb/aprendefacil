const $burguer = document.getElementById('burguer')
const $menu = document.getElementById('menu')
const $navigation = document.getElementById('navigation')
const $left = document.getElementById('left')

$burguer.addEventListener('click', mostrar)
$left.addEventListener('click', mover)
function mostrar() {
	$menu.classList.toggle('active')
}
function mover() {
	$navigation.classList.toggle('active')
}