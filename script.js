

const f = document.querySelectorAll('.fword');


for(let i = 0; i < f.length; i++ ){
    const fuck = f[i]; 


    fuck.addEventListener('mouseover',function(e){
        e.target.innerHTML="Fucking";

        setTimeout(function(){
            e.target.innerHTML="F*****g";
        },1000);


    
  
},false);

};