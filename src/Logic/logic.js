import React from "react";

class MOR extends React.Component{
    
  
    render(){

        setTimeout(() => {
            alert('Close black holes')
          }, 1);
        
        let m = 600;
        let n = 400;
        let arr = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
                   1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
                   1,1,1,1,1,5,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
                   1,1,1,1,1,0,0,6,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
                   1,1,1,0,0,4,0,0,7,0,1,1,1,1,1,1,1,1,1,1,1,1,
                   1,1,1,0,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,
                   1,0,0,0,1,0,1,1,1,0,1,1,1,1,1,1,1,0,0,0,0,1,
                   1,0,3,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
                   1,1,1,1,1,0,1,1,1,1,0,1,0,1,1,1,1,0,0,0,0,1,
                   1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,
                   1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
                  ];
        let i = 188;
        function WIN(){
            if(arr[196] + arr[195] + arr[174] + arr[173] + arr[152] + arr[151] == 27){
             setTimeout(() => {
                 alert('Good job!')
               }, 1);
             }
         }

        function UP() {  
            if(arr[i - 22] == 0){
                n = n-50;
              const element = document.getElementsByClassName('MOR')[0];
                 element.style.top= n + "px";  
                 i = i - 22;
                
                } else {
                if(arr[i - 22] > 1 && arr[i - 44] == 0){
                    let boxname = 'BOX' + arr[i - 22];
                    let bp = n - 100;
                    n = n-50;
                    const boxp = document.getElementsByClassName(boxname)[0];
                        boxp.style.top= bp + "px"; 
                    const element = document.getElementsByClassName('MOR')[0];
                        element.style.top= n + "px";  
                        arr[i - 44] = arr[i - 22];
                        arr[i - 22] = 0;
                        i= i - 22;
                        WIN();
                        return; 
                      
                    
                     }
                    }
        }
        
        function DOWN() {
            if(arr[i + 22] == 0){
                n = n+50;
                const element = document.getElementsByClassName('MOR')[0];
                   element.style.top= n + "px";  
                   i= i + 22;
                } else {
                if(arr[i + 22] > 1 && arr[i + 44] == 0){
                    let boxname = 'BOX' + arr[i + 22];
                    let bp = n + 100;
                    n = n+50;
                    const boxp = document.getElementsByClassName(boxname)[0];
                        boxp.style.top= bp + "px"; 
                    const element = document.getElementsByClassName('MOR')[0];
                        element.style.top= n + "px";  
                         arr[i + 44] = arr[i + 22];
                         arr[i + 22] = 0;
                        i= i + 22;
                        WIN();
                        return;
                    
                     }
                    }
          }

        function LEFT() { 
             if(arr[i - 1] == 0){
            m = m-50;
             const element = document.getElementsByClassName('MOR')[0];
                element.style.left= m + "px";  
                i= i - 1;
            } else {
            if(arr[i - 1] > 1 && arr[i - 2] == 0){
                let boxname = 'BOX' + arr[i-1];
                let bp = m - 100;
                m = m-50;
                const boxp = document.getElementsByClassName(boxname)[0];
                    boxp.style.left= bp + "px"; 
                const element = document.getElementsByClassName('MOR')[0];
                    element.style.left= m + "px";  
                    arr[i - 2] = arr[i - 1];
                    arr[i - 1] = 0;
                    i= i - 1;
                    WIN();
                    return;
                  
                
                 }
                }     }
        function RIGHT() {
             if(arr[i + 1] == 0){
            m = m+50;
            const element = document.getElementsByClassName('MOR')[0];
                element.style.left= m + "px";  
                i= i + 1;
                
              
                
             } else {
             if(arr[i + 1] > 1 && arr[i + 2] == 0){
                let boxname = 'BOX' + arr[i+1];
                let bp = m + 100;
                m = m+50;
                const boxp = document.getElementsByClassName(boxname)[0];
                    boxp.style.left= bp + "px"; 
                const element = document.getElementsByClassName('MOR')[0];
                    element.style.left= m + "px";  
                    arr[i + 2] = arr[i + 1];
                    arr[i + 1] = 0;
                    i= i + 1;
                    WIN();
                    return;
                  
                
                 }
                }  
            }

    document.onkeypress = function(event) {
         if (event.key == "d" || event.key == "D" || event.key == "В" || event.key == "в"){
            RIGHT();
           } 
          if (event.key == "a" || event.key == "A" || event.key == "Ф" || event.key == "ф"){
            LEFT() ;
           } 
         if (event.key == "w" || event.key == "W" || event.key == "Ц" || event.key == "ц"){
            UP();
            } 
             
         if (event.key == "s" || event.key == "S" || event.key == "Ы" || event.key == "ы"){
            DOWN();
           }     
           
           
 }

return(
    <div>
    <div  className="fieldstyle2 BOX2" />
    <div  className="fieldstyle2 BOX3" />
    <div  className="fieldstyle2 BOX4" />
    <div  className="fieldstyle2 BOX5" />
    <div  className="fieldstyle2 BOX6" />
    <div  className="fieldstyle2 BOX7" />
     

    <div  className="fieldstyle2 MOR" ></div>

    <div  className="fieldstyle2 BLACKHOLE BLACKHOLEpos1" ></div>
    <div  className="fieldstyle2 BLACKHOLE BLACKHOLEpos2" ></div>
    <div  className="fieldstyle2 BLACKHOLE BLACKHOLEpos3" ></div>
    <div  className="fieldstyle2 BLACKHOLE BLACKHOLEpos4" ></div>
    <div  className="fieldstyle2 BLACKHOLE BLACKHOLEpos5" ></div>
    <div  className="fieldstyle2 BLACKHOLE BLACKHOLEpos6" ></div>

    <button className="fieldstyle2 BUTUP"  onClick={UP}></button>
    <button className="fieldstyle2 BUTLEFT" onClick={LEFT}></button>
    <button className="fieldstyle2 BUTRIGH" onClick={RIGHT}></button>
    <button className="fieldstyle2 BUTDOWN" onClick={DOWN}></button>
    </div>

);
    
    }

}
export default MOR;
/* mapKeyCodeToDirection = {
    KeyA: directions.LEFT,
    KeyS: directions.DOWN,
    KeyD: directions.RIGHT,
    KeyW: directions.UP,
  }*/ 