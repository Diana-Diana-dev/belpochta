
var home = document.getElementById('home');
var procedures = document.getElementById('procedures');
var back = document.getElementById('back');
var homelink = document.getElementById('homelink');

function getPageContent() {
	home.innerHTML = `<section id="procedures" class="second-menu">
				<div class="second-menu_flex">
					<h3 class="lng-procedures second-menu__h3">Административные процедуры</h3>
					<a id="back" class="back" href="#" onclick="goBack()"></a>
				</div>
				<div class="main-menu__row1">
					<a href="#" class="main-menu__block" onclick="getPageContent1()">
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


function getPageContent1() {
	home.innerHTML = `<section class="second-menu" >
				<div class="second-menu_flex">
					<a  href="#"  onclick="goBack()" id="homelink" class="homelink"></a>
					<h3 class="second-menu__h3">Страница 1</h3>
					<a  href="#" onclick="goBack1()" id="back" class="back"></a>
				</div>	
					<p class="second-menu__text">Учитывая ключевые сценарии поведения, высокое качество позиционных исследований влечет за собой процесс внедрения и модернизации вывода текущих активов. Но тщательные исследования конкурентов могут быть разоблачены. Современные технологии достигли такого уровня, что граница обучения кадров позволяет оценить значение новых предложений. Высокий уровень вовлечения представителей целевой аудитории является четким доказательством простого факта: выбранный нами инновационный путь влечет за собой процесс внедрения и модернизации форм воздействия. Есть над чем задуматься: непосредственные участники технического прогресса и по сей день остаются уделом либералов, которые жаждут быть разоблачены. Значимость этих проблем настолько очевидна, что базовый вектор развития однозначно фиксирует необходимость кластеризации усилий. В своём стремлении повысить качество жизни, они забывают, что убеждённость некоторых оппонентов, а также свежий взгляд на привычные вещи - безусловно открывает новые горизонты для укрепления моральных ценностей. Не следует, однако, забывать, что базовый вектор развития является качественно новой ступенью существующих финансовых и административных условий. Вот вам яркий пример современных тенденций - сложившаяся структура организации предопределяет высокую востребованность инновационных методов управления процессами. Господа, перспективное планирование создаёт необходимость включения в производственный план целого ряда внеочередных мероприятий с учётом комплекса существующих финансовых и административных условий. Приятно, граждане, наблюдать, как активно развивающиеся страны третьего мира смешаны с не уникальными данными до степени совершенной неузнаваемости, из-за чего возрастает их статус бесполезности. Следует отметить, что выбранный нами инновационный путь создаёт предпосылки для инновационных методов управления процессами.</p>
				
			</section>`
}	

function goBack() {
	home.innerHTML = `<section class="main-menu" id="home">
				<div class="main-menu__row1">
					<a href="#" onclick="getPageContent()" class="main-menu__block">
						<h3 class="main-menu__block_text">АДМИНИСТРАТИВНЫЕ ПРОЦЕДУРЫ</h3>
						<div class="main-menu__block_icon">
							<img src="img/icon_1.png" alt="icon">
						</div>
					</a>
					<a href="#" class="main-menu__block">
						<h3 class="main-menu__block_text">РУКОВОДСТВО</h3>
						<div class="main-menu__block_icon">
							<img src="img/icon_2.png" alt="icon">
						</div>
					</a>
					<a href="#" class="main-menu__block">
						<h3 class="main-menu__block_text">ГРАФИК ПРИЁМА</h3>
						<div class="main-menu__block_icon">
							<img src="img/icon_3.png" alt="icon">
						</div>
					</a>
				</div>
				<div class="main-menu__row2">
					<a href="#" class="main-menu__block">
						<h3 class="main-menu__block_text">СТРУКТУРА</h3>
						<div class="main-menu__block_icon">
							<img src="img/icon_4.png" alt="icon">
						</div>
					</a>
				</div>
			</section>`
}

	function goBack1() {
	home.innerHTML = `<section id="procedures" class="second-menu">
				<div class="second-menu_flex">
					<h3 class="second-menu__h3">Административные процедуры</h3>
					<a id="back" class="back" href="#" onclick="goBack()"></a>
				</div>
				<div class="main-menu__row1">
					<a href="#" class="main-menu__block" onclick="getPageContent1()">
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




