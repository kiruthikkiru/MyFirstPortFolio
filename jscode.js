var tablinks = document.getElementsByClassName("tab-links");
      var tabcontents = document.getElementsByClassName("tab-contents");

      function opentab(tabname){
        for(tablink of tablinks){
            tablink.classList.remove("active-link");
        }
        for(tabcontent of tabcontents){
            tabcontent.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
      }
       
      var sidemenu = document.getElementById("sidemenu");

      function openmenu() {
        sidemenu.style.right = "0";
      }

      function closemenu() {
        sidemenu.style.right = "-200px";
      }
	  
	  // typing text animation script
    var textWrapper= document.querySelector('.header-text');
	textWrapper.innerHTML=textWrapper.textContent.replace(/\S/g,"span class='letter'>$&</span>");
       anime.timeline({loop:true})
	   .add({
		   targets:'.header-text.letter',
		   opacity:[0,1],
		   easing:"easeInOutQuad",
		   duration:2250,
		   delay:(el,i)=>150*(i+1)
	   })
	   .add({
		 targets:'.header-text'  
	     opacity:0,
		 duration:1000,
		 easing:"easeOutExpo",
		 delay:1000
    });

    
   