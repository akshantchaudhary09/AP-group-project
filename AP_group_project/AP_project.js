window.onload = function () {
    
    var images = document.querySelectorAll(".art");
    for (var i = 0; i < images.length; i++) {
	images[i].onmouseover = function() {
	    var newNode = document.createElement("img");
	    var oldsrc=this.src;
	    newNode.src=oldsrc;
	    newNode.style="border:solid 1px black;";
	    newNode.className='bigImg';
	    this.parentNode.appendChild(newNode);
	    console.log(this.src);
	}
	images[i].onmouseout = function(){
	    var images = document.querySelectorAll(".bigImg");
	    for (var i=0; i < images.length; i++){
		images[i].parentNode.removeChild(images[i]);
	    }
	}
    }
}