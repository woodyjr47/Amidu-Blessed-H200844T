function myFunction()
 {
	var trElements = document.getElementsByTagName("tr");
	for (var i = 0; i < trElements.length; i++) {
		if (i === 0) {
		} else if (i % 2 === 0) {
		} else {
			trElements[i].style.background = "black";
			trElements[i].style.color = "white";
		}
	}
}
