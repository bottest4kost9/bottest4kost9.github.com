$(document).ready(function () {

	$('a[href^="#"]').click(function () {
		//Сохраняем значение атрибута href в переменной:
		var target = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(target).offset().top//можно вычесть высоту меню
		}, 700);
		return false;
	});

});

let elem = document.getElementById('arrow')
window.onscroll = function showArrow() {
	if (window.pageYOffset > 300) {
		elem.classList.remove('none')
	}
	else {
		elem.classList.add('none')
	}
}
