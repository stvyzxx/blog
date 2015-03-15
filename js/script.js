

function fixedMenu(){
	var freeze = 1;

	if(document.body.clientWidth > 700){
		

		addEvent(window, "scroll", onScrollMenu);
		function onScrollMenu(){
			var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
			var wrapper = document.body;
			var header = document.getElementsByTagName("header")[0];
			var nav  = document.getElementById("navigation");
			var temp, timer, i = 0;
			if(scrollTop>200){
				if(freeze){
					freeze = 0;
					temp = header.removeChild(nav);
					temp.setAttribute("class", "fixedMenu");					
					temp.getElementsByTagName("ul")[0].appendChild(callback());  
					wrapper.insertBefore(temp, wrapper.firstChild);					
					
					timer = setInterval(function(){
						animate();
						if(i>=1){
							clearInterval(timer);
							i = 0;
						}							
					}, 30);
				}
				
			}else if(scrollTop<=200){
				freeze = 1;
				if(wrapper.getElementsByClassName("fixedMenu")[0]){
					temp = wrapper.getElementsByClassName("fixedMenu")[0];
					var callLinkDel = temp.children[0].lastChild;					
					temp.getElementsByTagName("ul")[0].removeChild(callLinkDel);				
					temp.removeAttribute("class");
					
					header.insertBefore(temp, header.getElementsByClassName("tags-block")[0]);					
				}					
			}

			//------- animate function			
			function animate(){
				wrapper.getElementsByClassName("fixedMenu")[0].style.opacity = i;
				i+=0.1		
			}
			
			//------- callback function
			function callback(){
				var callLi =  document.createElement("li");
				var callLink = document.createElement("a");
				callLink.setAttribute("id","fixedCallLink");
				callLink.setAttribute("href","#");
				callLink.innerHTML = "Передзвонити?";
				callLi.appendChild(callLink);
				return callLi;
			}
			
		}
	}
}	

function addEvent(elem, type, handler){
  if (elem.addEventListener){
    elem.addEventListener(type, handler, false)
  } else {
    elem.attachEvent("on"+type, handler)
  }
}



fixedMenu();	