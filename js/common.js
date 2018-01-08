
window.onload = function(){

	/create slider/ 
	var images = document.querySelectorAll('.slider__items img'),
			btns = document.querySelectorAll('.slider__btns li'),
			index = 0;
			
	

	for(var i = 0 ; btns.length > i ; i++){
		btns[i].onclick = function(){
			btns[index].classList.remove('slider__btns--active');	
			images[index].classList.remove('slider__item--active');
			this.classList.add('slider__btns--active');			
			index = this.getAttribute('data-index');
			images[index].classList.add('slider__item--active');
		}
	}





}