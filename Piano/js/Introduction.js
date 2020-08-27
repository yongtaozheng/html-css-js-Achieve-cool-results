window.onload = function(){
	var htp = document.getElementById('htp');
	var inf = document.getElementById("inf");
	var close = document.getElementById('close');
	console.log(htp);
	htp.addEventListener('click',function(){
		inf.style.display = "block";
	},false);
	close.addEventListener('click',function(){
		inf.style.display = "none";
	},false);
}