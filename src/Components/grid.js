import React from "react";
import  "../App.css";
import video from '../video.mp4'

  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


var first_move=0

const exit=()=>{
    var setting=document.getElementById('setting')//exit settings
    setting.style.display='none'
    var text=document.getElementById('text')
    text.style.display="block"
    var main=document.getElementById('main')
    main.style.display="none"
    
    
}

const set=()=>{
    var text=document.getElementById('text')//opens settings
    text.style.display="none"
    var setting=document.getElementById('setting')
    setting.style.display='block'
    var main=document.getElementById('main')
    main.style.display="none"
}
const play=()=>{
    var text=document.getElementById('text')//opens settings
    text.style.display="none"
    var setting=document.getElementById('setting')
    setting.style.display='none'
    var main=document.getElementById('main')
    main.style.display="block"
    toast.warning(`If the game is not rendered correctly please use landscape mode (mobile devices)`, {
        position: "top-center",
        autoClose: 5000,
        
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        });
    
}
  const winCombos = [
    ["g1", "g2", "g3"],
    ["g4", "g5", "g6"],
    ["g7", "g8", "g9"],
    ["g1", "g4", "g7"],
    ["g2", "g5", "g8"],
    ["g3", "g6", "g9"],
    ["g1", "g5", "g9"],
    ["g5", "g7", "g3"]
]
// const algoEasy=(name)=>{ // experimental
//     var g1=document.getElementById('g1').title
//     var g2=document.getElementById('g2').title
//     var g3=document.getElementById('g3').title
//     var g4=document.getElementById('g4').title
//     var g5=document.getElementById('g5').title
//     var g6=document.getElementById('g6').title
//     var g7=document.getElementById('g7').title
//     var g8=document.getElementById('g8').title
//     var g9=document.getElementById('g9').title
// const move=[]

// move.push(g1,g2,g3,g4,g5,g6,g7,g8,g9)
// console.log(move)
// console.log(name)
// const arr=[0,1,2,3,4,5,6,7,8]

//  console.log('Easy algorithm choosing random')
//             //random
           
            
//            var arrr= arr.sort(() => Math.random() - 0.5);
//            for (let i=0; i<arr.length;i++){
            
//             if(move[arrr[i]]==="empty"){
//                 console.log(`choosing ${arrr[i]+1}box`)
//                 turns(`g${arrr[i]+1}`)
//                 break
//             }
            
            
//             }


// }
const algoNormal=(name)=>{
    
    var g1=document.getElementById('g1').title
    var g2=document.getElementById('g2').title
    var g3=document.getElementById('g3').title
    var g4=document.getElementById('g4').title
    var g5=document.getElementById('g5').title
    var g6=document.getElementById('g6').title
    var g7=document.getElementById('g7').title
    var g8=document.getElementById('g8').title
    var g9=document.getElementById('g9').title
const move=[]

move.push(g1,g2,g3,g4,g5,g6,g7,g8,g9)
console.log(move)
console.log(name)
const arr=[0,1,2,3,4,5,6,7,8]
       
        
      console.log (move.map((values)=>values=="empty"))
      var possible_moves=move.map((values)=>values=="empty")
      console.log(possible_moves)
      if (first_move===1){
        if (move[0] ==="Circle" && move[1] ==="Circle" && move[2] ==="empty"){
            console.log('first row g3')
            turns('g3') //first row
            
        }
        else if (move[0] ==="Circle" && move[2] ==="Circle" && move[1] ==="empty"){
            console.log('first row g2')
            turns('g2')// first row alternative
        }
        else if (move[2] ==="Circle" && move[1] ==="Circle" && move[0] ==="empty"){
            console.log('first row g1')
            turns('g1')// first row alternative
        }
        else if (move[0] ==="Circle" && move[3] ==="Circle" && move[6] ==="empty"){
            console.log('first column g7')
            turns('g7')//first column
        }

        else if (move[0] ==="Circle" && move[6] ==="Circle" && move[3] ==="empty"){
            console.log('first column g4')
            turns('g4') // first colum alternative
        }
        else if (move[6] ==="Circle" && move[3] ==="Circle" && move[0] ==="empty"){
            console.log('first column g1')
            turns('g1') // first colum alternative
        }
        else if (move[0] ==="Circle" && move[4] ==="Circle" && move[8] ==="empty"){
            console.log('first cross g9')
            turns('g9')// first cross
        }
        else if (move[0] ==="Circle" && move[8] ==="Circle" && move[4] ==="empty"){
            console.log('first column g5')
            turns('g5')// first cross alternative
        }
        else if (move[8] ==="Circle" && move[4] ==="Circle" && move[0] ==="empty"){
            console.log('first column g1')
            turns('g1')// first cross alternative
        }
        else if (move[1] ==="Circle" && move[4] ==="Circle" && move[7] ==="empty"){
            console.log('second column g8')
            turns('g8')// second column
        }
        else if (move[1] ==="Circle" && move[7] ==="Circle" && move[4] ==="empty"){
            console.log('second column g5')
            turns('g5')//second column alternative
        }
        else if (move[7] ==="Circle" && move[4] ==="Circle" && move[1] ==="empty"){
            console.log('second column g2')
            turns('g2')//second column alternative
        }
        else if (move[2] ==="Circle" && move[5] ==="Circle" && move[8] ==="empty"){
            console.log('third column g7')
            turns('g9')// thrid column 
        }
        else if (move[2] ==="Circle" && move[8] ==="Circle" && move[5] ==="empty"){
            console.log('third column g6')
            turns('g6')// third column alternative
        }
        else if (move[8] ==="Circle" && move[5] ==="Circle" && move[2] ==="empty"){
            console.log('third column g3')
            turns('g3')// third column alternative
        }
        else if (move[2] ==="Circle" && move[4] ==="Circle" && move[6] ==="empty"){
            console.log('other side cross g7')
            turns('g7')// other side cross
        }
        else if (move[2] ==="Circle" && move[6] ==="Circle" && move[4] ==="empty"){
            console.log('other side cross g5')
            turns('g5')// other side cross alternative
        }
        else if (move[4] ==="Circle" && move[6] ==="Circle" && move[2] ==="empty"){
            console.log('other side cross g3')
            turns('g3')// other side cross alternative
        }
        else if (move[3] ==="Circle" && move[4] ==="Circle" && move[5] ==="empty"){
            console.log('second row g6')
            turns('g6')// second row
        }
        else if (move[3] ==="Circle" && move[5] ==="Circle" && move[4] ==="empty"){
            console.log('second row g5')
            turns('g5')// second row alternative
        }
        else if (move[5] ==="Circle" && move[4] ==="Circle" && move[3] ==="empty"){
            console.log('second row  g4')
            turns('g4')// second row alternative
        }
        else if (move[6] ==="Circle" && move[7] ==="Circle" && move[8] ==="empty"){
            console.log('third row g9')
            turns('g9')// third row 

        }
        else if (move[6] ==="Circle" && move[8] ==="Circle" && move[7] ==="empty"){
            console.log('third row g8')
            turns('g8')// third row alternative
        }
        else if (move[8] ==="Circle" && move[7] ==="Circle" && move[6] ==="empty"){
            console.log('third row g7')
            turns('g7')// third row alternative
        }
        // Cross:
        else if (move[0] ==="Cross" && move[1] ==="Cross" && move[2] ==="empty"){
            turns('g3') //first row Cross
        }
        else if (move[0] ==="Cross" && move[2] ==="Cross" && move[1] ==="empty"){
            turns('g2')// first row alternative Cross
        }
        else if (move[2] ==="Cross" && move[1] ==="Cross" && move[0] ==="empty"){
            turns('g1')// first row alternative Cross
        }
        else if (move[0] ==="Cross" && move[3] ==="Cross" && move[6] ==="empty"){
            turns('g7')//first column Cross
        }
        else if (move[0] ==="Cross" && move[6] ==="Cross" && move[3] ==="empty"){
            turns('g4') // first colum alternative Cross
        }
        else if (move[6] ==="Cross" && move[3] ==="Cross" && move[0] ==="empty"){
            turns('g1') // first colum alternative Cross
        }
        else if (move[0] ==="Cross" && move[4] ==="Cross" && move[8] ==="empty"){
            turns('g9')// first cross (algo)
        }
        else if (move[0] ==="Cross" && move[8] ==="Cross" && move[4] ==="empty"){
            turns('g5')// first cross alternative (algo)
        }
        else if (move[8] ==="Cross" && move[4] ==="Cross" && move[0] ==="empty"){
            turns('g1')// first cross alternative (algo)
        }
        else if (move[1] ==="Cross" && move[4] ==="Cross" && move[7] ==="empty"){
            turns('g8')// second column Cross
        }
        else if (move[1] ==="Cross" && move[7] ==="Cross" && move[4] ==="empty"){
            turns('g5')//second column alternative Cross
        }
        else if (move[7] ==="Cross" && move[4] ==="Cross" && move[1] ==="empty"){
            turns('g2')//second column alternative Cross
        }
        else if (move[2] ==="Cross" && move[5] ==="Cross" && move[8] ==="empty"){
            turns('g9')// thrid column alternative Cross
        }
        else if (move[2] ==="Cross" && move[8] ==="Cross" && move[5] ==="empty"){
            turns('g6')// third column alternative Cross
        }
        else if (move[8] ==="Cross" && move[5] ==="Cross" && move[2] ==="empty"){
            turns('g3')// second column alternative Cross
        }
        else if (move[2] ==="Cross" && move[4] ==="Cross" && move[6] ==="empty"){
            turns('g7')// other side cross (algo)
        }
        else if (move[2] ==="Cross" && move[6] ==="Cross" && move[4] ==="empty"){
            turns('g5')// other side cross alternative (algo)
        }
        else if (move[4] ==="Cross" && move[6] ==="Cross" && move[2] ==="empty"){
            turns('g3')// other side cross alternative (algo)
        }
        else if (move[3] ==="Cross" && move[4] ==="Cross" && move[5] ==="empty"){
            turns('g6')// second row Cross
        }
        else if (move[3] ==="Cross" && move[5] ==="Cross" && move[4] ==="empty"){
            turns('g5')// second row alternative Cross
        }
        else if (move[5] ==="Cross" && move[4] ==="Cross" && move[3] ==="empty"){
            turns('g4')// second row alternative Cross
        }
        else if (move[6] ==="Cross" && move[7] ==="Cross" && move[8] ==="empty"){
            turns('g9')// third row Cross
        }
        else if (move[6] ==="Cross" && move[8] ==="Cross" && move[7] ==="empty"){
            turns('g8')// third row alternative Cross
        }
        else if (move[8] ==="Cross" && move[7] ==="Cross" && move[6] ==="empty"){
            turns('g7')// third row alternative Cross
        }

        
        
        else{
            console.log('dont know what to do choosing random')
            //random
           const arr=[0,1,2,3,4,5,6,7,8]
            
           var arrr= arr.sort(() => Math.random() - 0.5);
           for (let i=0; i<arr.length;i++){
            
            if(move[arrr[i]]==="empty"){
                console.log(`choosing ${arrr[i]+1}box`)
                turns(`g${arrr[i]+1}`)
                break
            }
            
            
            }
            
        }

    
    
    }
      if (first_move===0){
       var arrr= arr.sort(() => Math.random() - 0.5);;
        console.log(arrr)
        if(move[arrr[0]]==="empty"){
            console.log(`choosing ${arrr[0]+1}box`)
            turns(`g${arrr[0]+1}`)
            first_move=1
        
        }
        else{
            const arr=[0,1,2,3,4,5,6,7,8]
            var arrr= arr.sort(() => Math.random() - 0.5);
            if(move[arrr[0]]==="empty"){
                console.log(`choosing ${arrr[0]+1}box`)
                turns(`g${arrr[0]+1}`)
                first_move=1
            }
            else if(move[arrr[0]]!=="empty"){
                var arrr= arr.sort(() => Math.random() - 0.5);
                console.log(`choosing ${arrr[0]+1}box`)
                turns(`g${arrr[0]+1}`)
                first_move=1
            }
            
        }
      }

    }
    


    var bot=1
    var Normal=false
const modeSelector=()=>{
    
if(bot===0){
    
    console.log("Player has chosen two player mode")
    bot=1
    toast.success(`Game mode is changed to two-player mode`, {
        position: "top-center",
        autoClose: 5000,
        
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        });
}
else{
     document.getElementById('')
     console.log("Player has chosen bot mode")
     bot=0
     toast.success(`Game mode is changed to Bot mode`, {
        position: "top-center",
        autoClose: 5000,
        
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        });
}
}

    


    
    




var won=0
var turn=0
const matchDraw=()=>{
    var title=document.getElementById('title')
    title.innerText=`Match Draw`
    title.style.color="#E21717"
}
const titleChange=(name)=>{
    var title=document.getElementById('title')
    title.innerText=`${name} Won`
    title.style.color="#00D84A"
}
const checkWIn=()=>{
    var g1=document.getElementById('g1')
    var g2=document.getElementById('g2')
    var g3=document.getElementById('g3')
    var g4=document.getElementById('g4')
    var g5=document.getElementById('g5')
    var g6=document.getElementById('g6')
    var g7=document.getElementById('g7')
    var g8=document.getElementById('g8')
    var g9=document.getElementById('g9')
   
    var sword=document.getElementById('sword')
    if (g1.title===g2.title && g1.title===g3.title &&g1.title!=="empty"){ //first row
    if(window.screen.width>=375 && window.screen.width<=667){
        console.log("mobile device")
        sword.style.marginTop="55px"
        sword.style.display="block"
    }
    else{
        sword.style.marginTop="80px"
        sword.style.display="block"}
        toast.success(`${g1.title} Won`, {
            position: "top-center",
            autoClose: 5000,
            
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            });
        titleChange(g1.title)
        won=1
        
    }
    else if (g1.title===g5.title && g1.title===g9.title &&g1.title!=="empty"){ //cross
                //mobile works as it is
            sword.style.transform="rotatez(45deg)"
            sword.style.display="block"
            toast.success(`${g1.title} Won`, {
                position: "top-center",
                autoClose: 5000,
                
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                });
                titleChange(g1.title)
        won=1  }
    else if (g3.title===g5.title && g3.title===g7.title &&g3.title!=="empty"){ // back word cross
         //mobile works as it is
        sword.style.transform="rotatez(-45deg)"
        sword.style.display="block"
        toast.success(`${g3.title} Won`, {
            position: "top-center",
            autoClose: 5000,
            
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            });
            titleChange(g3.title)
        won=1    }
    else if (g4.title===g5.title && g4.title===g6.title &&g4.title!=="empty"){ //second row
           //mobile works as it is
           
            sword.style.display="block"
            toast.success(`${g4.title} Won`, {
                position: "top-center",
                autoClose: 5000,
                
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                });
                titleChange(g4.title)
                won=1  
    }
    else if (g7.title===g8.title && g7.title===g9.title &&g7.title!=="empty"){//third row
        if(window.screen.width>=375 && window.screen.width<=667){
            console.log("mobile device")//mobile
            sword.style.marginTop="270px"
            sword.style.display="block"
        }else{
        sword.style.marginTop="400px"
        sword.style.display="block"}
        toast.success(`${g7.title} Won`, {
            position: "top-center",
            autoClose: 5000,
            
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            });
            titleChange(g7.title)
        won=1 
     }
     else if (g1.title===g4.title && g1.title===g7.title &&g1.title!=="empty"){//first coloumn
        if(window.screen.width>=375 && window.screen.width<=667){
            console.log("mobile device")
            sword.style.transform="rotatez(90deg)"
            sword.style.marginLeft="-105px"
            sword.style.display="block"
        }else{
        sword.style.transform="rotatez(90deg)"
        sword.style.marginTop="235px"
        sword.style.marginLeft="-160px"
        sword.style.display="block"}
        toast.success(`${g1.title} Won`, {
            position: "top-center",
            autoClose: 5000,
            
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            });
            titleChange(g1.title)
        won=1 
     }
     else if (g2.title===g5.title && g2.title===g8.title &&g2.title!=="empty"){//second coloumn
        if(window.screen.width>=375 && window.screen.width<=667){
            console.log("mobile device")    //mobile
            sword.style.transform="rotatez(90deg)"
            
            sword.style.display="block"
        }else{
        sword.style.transform="rotatez(90deg)"
        sword.style.marginTop="235px"
        
        sword.style.display="block"}
        toast.success(`${g2.title} Won`, {
            position: "top-center",
            autoClose: 5000,
            
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            });
            titleChange(g2.title)
        won=1 
     }
     else if (g3.title===g6.title && g3.title===g9.title &&g3.title!=="empty"){//thrid coloumn
        if(window.screen.width>=375 && window.screen.width<=667){
            console.log("mobile device")
            sword.style.transform="rotatez(90deg)"  //mobile
            sword.style.marginLeft="105px"
            sword.style.display="block"
            sword.style.position="fixed"
        }else{
        sword.style.transform="rotatez(90deg)"
        sword.style.marginTop="235px"
        sword.style.marginLeft="160px"
        sword.style.display="block"}
        toast.success(`${g3.title} Won`, {
            position: "top-center",
            autoClose: 5000,
            
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            });  
            titleChange(g3.title)
        won=1 
     }
    else if (g1.title!=="empty" && g2.title!=="empty" &&g3.title!=="empty" &&g4.title!=="empty" &&g5.title!=="empty" &&g6.title!=="empty" &&g7.title!=="empty" &&g8.title!=="empty" &&g9.title!=="empty" && won===0){
        toast.error(`Match Draw`, {
            position: "top-center",
            autoClose: 5000,
            
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            }); 
            matchDraw() 
        
    }
}
const turns =(name)=>{
    if (turn===0 && won===0){
        console.log("circle turn")

        console.log(name)
        
        var title=document.getElementById('title')
        var grid=document.getElementById(name)
        title.style.color="#03C6C7"
        title.innerText="Cross's Turn"
        if (grid.title==="empty"){
            var circle=document.createElement('div')
            circle.className="circle"
            grid.appendChild(circle)
            grid.title="Circle"
            turn=1
            if (bot===0){
                console.log("bot mode")
                algoNormal(name)
            }
           
        }
        
        else{
           
            toast.warning('Oh oh Box already filled', {
                position: "top-center",
                autoClose: 5000,
                
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                });
        }
       

    }
    else if(turn===1 && won===0){
        
        console.log("cross turn")
        console.log(name)
        var title=document.getElementById('title')
        title.style.color='#E07C24'
        title.innerText="Circle's Turn"
        var grid=document.getElementById(name)
        if (grid.title==="empty"){
            var cross=document.createElement('div')
            cross.className="cross"
            grid.appendChild(cross)
            grid.title="Cross"
            turn=0
        }
        else{
            
            toast.warning('Oh oh Box already filled', {
                position: "top-center",
                autoClose: 5000,
                
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                });
        }
        
    }}

const reset=()=>{
    console.log('empty')
    var sword=document.getElementById('sword')
    var title=document.getElementById('title')
    var g1=document.getElementById('g1')
    var g2=document.getElementById('g2')
    var g3=document.getElementById('g3')
    var g4=document.getElementById('g4')
    var g5=document.getElementById('g5')
    var g6=document.getElementById('g6')
    var g7=document.getElementById('g7')
    var g8=document.getElementById('g8')
    var g9=document.getElementById('g9')
    g1.title="empty"
    g2.title="empty"
    g3.title="empty"
    g4.title="empty"
    g5.title="empty"
    g6.title="empty"
    g7.title="empty"
    g8.title="empty"
    g9.title="empty"
    g1.innerHTML=" "
    g2.innerHTML=" "
    g3.innerHTML=" "
    g4.innerHTML=" "
    g5.innerHTML=" "
    g6.innerHTML=" "
    g7.innerHTML=" "
    g8.innerHTML=" "
    g9.innerHTML=" "
    title.style.color="#E07C24"
    title.innerText="Circle's Turn"
    sword.style=sword.style
    turn=0
    won=0

}
const Grid =()=>(

<div classNameName="landing">

<section className="showcase">
   
   <video src={video} muted loop autoPlay></video>
   <div className="overlay">
    
   </div>
   <div className="text" id="text">
   
     <h2>Tic Tac Toe </h2> 
     
     <p>Just a Simple Tic Tac Toe Game. Expect some bugs as I built it just for fun and realistically didn't put full effort into this. You could play with the bot I have designed by changing the mode in the settings menu. Also, small screen users are requested to use landscape mode as I couldn't write media queries for every device in the world. Thank you And I hope you like it :)</p>
     <a href="#" className="play" onClick={play}>Play</a>
     <a href="#" style={{marginLeft: '20px'}} className="play" id="set" onClick={set}>settings</a>
    
   </div>




   {/* Settings Menu */}
   <div className="settings" id="setting">
    <div className="exit">
<a href="#" className="play " onClick={exit}>Exit</a></div>
<div className="topbar"><h2>SETTINGS</h2></div>
<br></br>
<div className="solid"></div>


<div className="modes"><h2>CHANGE MODES:</h2>
<br></br>
<label><h2>Two Player</h2></label>
<label class="switch" style={{marginLeft: '10px'}}>
<input type="checkbox" id="mode" class="modechecker"  onClick={()=>{modeSelector()}}></input>
<span class="slider round"></span>
</label><label class="switch" style={{marginLeft: '10px'}}> <h2 >Bot</h2></label>

</div>

<br></br>



<div className="footer">
    <h2> A Vishwa's Build</h2>
    The best is yet to come :)

</div>

</div>
   
 
 
  

 
   
 









<div className="Main "  id="main" >


    <ToastContainer theme="dark"></ToastContainer>

  
<div className="grid" id="g1" title="empty" onClick={()=>{turns('g1');checkWIn(); 
}}/>
<div className="grid" id="g2"title="empty" onClick={()=>{turns('g2'); checkWIn();
}}/>
<div className="grid" id="g3"title="empty" onClick={()=>{turns('g3'); checkWIn();
}}/>
<div className="grid" id="g4"title="empty" onClick={()=>{turns('g4'); checkWIn();
}}/>
<div className="grid" id="g5"title="empty" onClick={()=>{turns('g5'); checkWIn();
}}/>
<div className="grid" id="g6"title="empty" onClick={()=>{turns('g6'); checkWIn();
}}/>
<div className="grid"id="g7"title="empty" onClick={()=>{turns('g7'); checkWIn();
}}/>
<div className="grid" id="g8"title="empty" onClick={()=>{turns('g8'); checkWIn();
}}/>
<div className="grid" id="g9"title="empty" onClick={()=>{turns('g9'); checkWIn();
}}/>
<div className="sword red" id="sword"></div>
<br></br>
<div className="bottom">
<h1 id="title"> Cross Turn</h1> 
<br></br>
<a href="#" className="play " style={{marginLeft: '0px'}} onClick={reset}>Reset</a>
<a href="#" className="play " style={{marginLeft: '20px'}} onClick={set}>Settings</a>
</div>
</div>


</section>





</div>

)


export default Grid
