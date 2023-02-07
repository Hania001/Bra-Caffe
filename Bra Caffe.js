

window.addEventListener("load", function() {
	let kopfelement = document.getElementsByTagName("header")[0];
	function scrollueberwachung() {
		let abstandvonoben     = window.pageYOffset;
		document.getElementById('ylage').innerHTML = abstandvonoben;
		if (abstandvonoben > 100) {
			kopfelement.style.height = "30px";	
		}
		else {
			kopfelement.style.height = "120px";				
		}
	}
	window.addEventListener("scroll", scrollueberwachung);
} );

window.location.replace='file:///T:/Mohammad/Proect/index1.html' ;



