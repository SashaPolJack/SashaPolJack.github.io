new WOW().init();  
body = document.getElementsByTagName("body");
     right_menu = document.getElementsByClassName("right_menu");
     
     if(document.documentElement.clientWidth  <= 870){
         burg = document.getElementById("a_id_burg_min");
         
         
     }else{
       
         burg = document.getElementById("a_id_burg");
     }
     
     burg_line1=document.getElementsByClassName('burg');
   
    
     nav_hidden = document.getElementById("id_nav");
     nav_hidden.style.opacity = '0';
     
     burg.onclick = function() {
          
         if(nav_hidden.style.opacity == '0'){
            
         burg_line1[0].classList.add('active_nav');
         nav_hidden.style.transform = 'translateX(0)';
         nav_hidden.style.opacity = '1';
         
         body[0].style.overflow = 'hidden';
         }else{
             burg_line1[0].classList.remove('active_nav');
             body[0].style.overflow = 'visible';
             nav_hidden.style.opacity = '0';
             nav_hidden.style.transform = 'translateX(100%)';
         }
          
         
     }