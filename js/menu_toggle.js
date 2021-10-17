
var home = document.getElementById('home');
var procedures = document.getElementById('procedures');
var back = document.getElementById('back');


function getPageContent() {
	home.innerHTML = `<section id="procedures" class="second-menu">
				<div class="second-menu_flex">
					<h3 class="second-menu__h3">Административные процедуры</h3>
					<a id="back" class="back" href="#" onclick="goBack()"></a>
				</div>
				<div class="main-menu__row1">
					<a href="#" class="main-menu__block">
						<h3 class="main-menu__block_text">процедура 1</h3>
						<div class="main-menu__block_icon">
							<img src="img/icon.png" alt="icon">
						</div>
					</a>
					<a href="#"class="main-menu__block">
						<h3 class="main-menu__block_text">процедура 2</h3>
						<div class="main-menu__block_icon">
							<img src="img/icon.png" alt="icon">
						</div>
					</a>
					<a href="#"class="main-menu__block">
						<h3 class="main-menu__block_text">процедура 3</h3>
						<div class="main-menu__block_icon">
							<img src="img/icon.png" alt="icon">
						</div>
					</a>
				</div>
				<div class="main-menu__row2">
					<a href="#" class="main-menu__block">
						<h3 class="main-menu__block_text">процедура 4</h3>
						<div class="main-menu__block_icon">
							<img src="img/icon.png" alt="icon">
						</div>
					</a>
				</div>
			</section>`

}


function goBack() {
	window.history.back()
}









// var pages = {
// 	'home'
// 	'procedures': `<section id="procedures" class="second-menu">
// 				<h3 class="second-menu__h3">Административные процедуры</h3>
// 				<div class="main-menu__row1">
// 					<a href="#" onclick="getPageContent('procedures')" class="main-menu__block">
// 						<h3 class="main-menu__block_text">процедура 1</h3>
// 						<div class="main-menu__block_icon">
// 							<img src="img/icon.png" alt="icon">
// 						</div>
// 					</a>
// 					<a href="#" onclick="getPageContent('management')" class="main-menu__block">
// 						<h3 class="main-menu__block_text">процедура 2</h3>
// 						<div class="main-menu__block_icon">
// 							<img src="img/icon.png" alt="icon">
// 						</div>
// 					</a>
// 					<a href="#" onclick="getPageContent('schedule')" class="main-menu__block">
// 						<h3 class="main-menu__block_text">процедура 3</h3>
// 						<div class="main-menu__block_icon">
// 							<img src="img/icon.png" alt="icon">
// 						</div>
// 					</a>
// 				</div>
// 				<div class="main-menu__row2">
// 					<a href="#" onclick="getPageContent('structure')" class="main-menu__block">
// 						<h3 class="main-menu__block_text">процедура 4</h3>
// 						<div class="main-menu__block_icon">
// 							<img src="img/icon.png" alt="icon">
// 						</div>
// 					</a>
// 				</div>
// 			</section>`
// 	'management'
// 	'schedule'
// 	'structure'
// };

// function getPageContent(page) {
// 	var contentToReturn;
// 	switch(page){
// 		case'procedures':
// 				contentToReturn = pages.procedures;
// 				break;
// 		case'management':
// 				contentToReturn = pages.management;
// 				break;
// 		case'schedule':
// 				contentToReturn = pages.schedule;
// 				break;
// 		case'structure':
// 				contentToReturn = pages.home;
// 				break;
// 		defaolt:
										
// 	}
// 	document.getElementById('home').innerHTML = contentToReturn;
// }




