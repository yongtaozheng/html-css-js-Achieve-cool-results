window.onload = function(){
	var htp = document.getElementById('htp');
	var inf = document.getElementById("inf");
	var close = document.getElementById('close');
	htp.addEventListener('click',function(){
		inf.style.display = "block";
	},false);
	close.addEventListener('click',function(){
		inf.style.display = "none";
	},false);
	console.log("keyboardjs");
		var i;
		//设定钢琴键的事件
		if(document.addEventListener){				
			console.log(111);
			for(i = 1; i <= 88; i ++){
				setKeyEventListener(i);
			}
		}else if(document.attachEvent){
			for(i = 1; i <= 88; i ++){
				setKeyAttachEvent(i);
			}
		}
	}
	
	//设定钢琴键的点击事件(EventListener版)
	function setKeyEventListener(noteNumber){
		var keyId = 'key' + noteNumber;
		var key = document.getElementById(keyId);
		if(key){
			key.addEventListener('click', keyClick, false);
		}
	}
	
	//设定钢琴键的点击事件(AttachEvent版)
	function setKeyAttachEvent(noteNumber){
		var keyId = 'key' + noteNumber;
		var key = document.getElementById(keyId);
		if(key){
			key.attachEvent('onclick', keyClick);
		}
	}
	//按下钢琴键时
	function keyClick(){
		var that = this;
		var noteNumber = that.id.replace('key','');
		console.log(noteNumber);
		playSound(noteNumber);
	}

//指定发出的声音
	function playSound(noteNumber){
		var soundId = 'sound' + noteNumber;
		var keyId = 'key' + noteNumber;
		var key = document.getElementById(keyId);
		var audio = null;
		
		if(key){
			audio = new Audio("sound/"+noteNumber+".mp3");
			audio.play();
			key.style.backgroundColor = '#9cf';
			setTimeout('setOriginColor(' + noteNumber + ')', 100);
		}
	}
//返回原来的钢琴键颜色
	function setOriginColor(noteNumber){
		var keyId = 'key' + noteNumber;
		var key = document.getElementById(keyId);
		if(noteNumber<53){
			key.style.backgroundColor = '#eee';
			}
		else{
			key.style.backgroundColor = 'black';
		}
	}
//键音对照表 
//1-./#在前表示./#在数字下方，在后则反之
//2-.表示白键，#表示黑键
	keyfrom = {
		'....6':1,
		'....7':2,
		'...1':3,
		'...2':4,
		'...3':5,
		'...4':6,
		'...5':7,
		'...6':8,
		'...7':9,
		'..1':10,
		'..2':11,
		'..3':12,
		'..4':13,
		'..5':14,
		'..6':15,
		'..7':16,
		'.1':17,
		'.2':18,
		'.3':19,
		'.4':20,
		'.5':21,
		'.6':22,
		'.7':23,
		'1':24,
		'2':25,
		'3':26,
		'4':27,
		'5':28,
		'6':29,
		'7':30,
		'1.':31,
		'2.':32,
		'3.':33,
		'4.':34,
		'5.':35,
		'6.':36,
		'7.':37,
		'1..':38,
		'2..':39,
		'3..':40,
		'4..':41,
		'5..':42,
		'6..':43,
		'7..':44,
		'1...':45,
		'2...':46,
		'3...':47,
		'4...':48,
		'5...':49,
		'6...':50,
		'7...':51,
		'1....':52,
		'#':53,
		'###A':54,
		'###B':55,
		'###C':56,
		'###D':57,
		'###E':58,
		'##A':59,
		'##B':60,
		'##C':61,
		'##D':62,
		'##E':63,
		'#A':64,
		'#B':65,
		'#C':66,
		'#D':67,
		'#E':68,
		'A':69,
		'B':70,
		'C':71,
		'D':72,
		'E':73,
		'A#':74,
		'B#':75,
		'C#':76,
		'D#':77,
		'E#':78,
		'A##':79,
		'B##':80,
		'C##':81,
		'D##':82,
		'E##':83,
		'A###':84,
		'B###':85,
		'C###':86,
		'D###':87,
		'E###':88,
	}
	
	var ii = 0,musi;
	var autoplay = function(){
		playSound(keyfrom[music[ii]]);
		ii++;
		if(ii<music.length)
			if(music[ii] == 0 ) {
				setTimeout('autoplay()', 300);
				}
			else {
				setTimeout('autoplay()', 250);
			}
	}
	var autoPlayMusic = function(e){
		ii = 0;
		e.replace("/n","");
		e.replace(" ",",");
		music = e.split(',');
		
		setTimeout('autoplay()', 2000);
		console.log(music);
	}
	
//按下键盘时
	document.onkeydown = function(e) {
		var pressEvent = e || window.event;
		var keyCode = '';
		if(pressEvent.keyCode){
			keyCode = pressEvent.keyCode;
		}else if(pressEvent.charCode){
			keyCode = pressEvent.charCode;
		}else if(pressEvent.which){
			keyCode = pressEvent.which;
		}
		
		switch(keyCode){
			case 97:    //1
				playSound(24);
				break;
			case 98:    //2
				playSound(25);
				break;
			case 99:    //3
				playSound(26);
				break;
			case 100:    //4
				playSound(27);
				break;
			case 101:    //5
				playSound(28);
				break;
			case 102:    //6
				playSound(29);
				break;
			case 103:    //7
				playSound(30);
				break;
				
			case 104:    //8
				playSound(31);
				break;
			case 105:    //9
				playSound(32);
				break;
			case 111:    ///
				playSound(33);
				break;
			case 106:    //*
				playSound(34);
				break;
			case 109:    //-
				playSound(35);
				break;
			case 107:    //+
				playSound(36);
				break;
			case 13:    //enter
				playSound(37);
				break;
				
			case 65:	// a
				playSound(17);
				break;
			case 83:	// s
				playSound(18);
				break;
			case 68:	// d
				playSound(19);
				break;
			case 70:	// f
				playSound(20);
				break;
			case 71:	// g
				playSound(21);
				break;
			case 72:	// h
				playSound(22);
				break;
			case 74:	// j
				playSound(23);
				break;
				
			case 75:	// k
				break;
				
			case 87:	// w
				playSound(64);
				break;
			case 69:	// e
				playSound(65);
				break;
			case 84:	// t
				playSound(66);
				break;
			case 89:	// y
				playSound(67);
				break;
			case 85:	// u
				playSound(68);
				break;
				
			case 86:	// v
				playSound(38);
				break;
			case 66:	// b
				playSound(39);
				break;
			case 78:	// n
				playSound(40);
				break;
			case 77:	// m
				playSound(41);
				break;
			case 188:	// ,
				playSound(42);
				break;
			case 190:	// .
				playSound(43);
				break;
			case 191:	// /
				playSound(44);
				break;
				
			case 49:	//1
				playSound(10);
				break;
			case 50:	//2
				playSound(11);
				break;
			case 51:	//3
				playSound(12);
				break;
			case 52:	//4
				playSound(13);
				break;
			case 53:	//5
				playSound(14);
				break;
			case 54:	//6
				playSound(15);
				break;	
			case 55:	//7
				playSound(16);
				break;
				
			default:
				break;
		}
	}