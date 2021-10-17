const langArr = {
	"unit"      :  {
		    "ru":  "Белпочта",
            "en":  "Belpochta",
	},
	"procedures":  {
			"ru": "административные процедуры",
			"en": "administrative procedures",
	},
	"management":  {
			"ru":  "руководство",
			"en":  "management",
	},
	"schedule"  :  {
			"ru":  "график приёма",
			"en":  "appointment schedule",
	},
	"structure" :  {
			"ru":  "структура",
			"en":  "structure",
	},
	"operator"  :  {
			"ru":  "Национальный оператор почтовой связи Республики Беларусь",
			"en":  "National postal operator of the Republic of Belarus",
	},
	"goods"     :  {
			"ru":  "Покупайте белорусские товары на shop.belpost.by",
			"en":  "Buy Belarusian goods at shop.belpost.by",
	},
	"company"   :  {
			"ru":  "Разработано компанией",
			"en":  "Developed by",
	},
}
const select = document.querySelector('select');
const allLang = ['en', 'ru']
select.addEventListener('change', changeURLLanguage);

function changeURLLanguage() {
	let lang = select.value;
	location.href = window.location.pathname + '#' + lang;
	location.reload();
}
function changeLanguage() {
	let hash = window.location.hash;
	hash = hash.substr(1);
	console.log(hash);
	if (!allLang.includes(hash)){
		location.href = window.location.pathname + '#ru';
		location.reload();
	}
	select.value = hash;
	document.querySelector("title").innerHTML = langArr["unit"][hash];
	document.querySelector(".lng-procedures").innerHTML = langArr["procedures"][hash];
	document.querySelector(".lng-management").innerHTML = langArr["management"][hash];
	document.querySelector(".lng-schedule").innerHTML = langArr["schedule"][hash];
	document.querySelector(".lng-structure").innerHTML = langArr["structure"][hash];
	document.querySelector(".lng-operator").innerHTML = langArr["operator"][hash];
	document.querySelector(".lng-goods").innerHTML = langArr["goods"][hash];
	document.querySelector(".lng-company").innerHTML = langArr["company"][hash];

	// for (let key in langArr){
	// 	document.querySelector(".lng-" + key).innerHTML = langArr[key][hash];
	// }
}
changeLanguage();