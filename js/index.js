const $boton = document.getElementById('button');
const $menu = document.getElementById('menu');

$boton.addEventListener('click', mostrar);

function mostrar(){
	$menu.classList.toggle('active');
	$menu.classList.toggle('aparecer');
}