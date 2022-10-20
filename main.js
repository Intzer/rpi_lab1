var languageBtn = document.getElementsByClassName("language-item")

function change_language(index) 
{		
	for (var i = languageBtn.length - 1; i >= 0; i--) {
		languageBtn[i].classList.remove("bold");
	}

	languageBtn[index].classList.add("bold");
}
