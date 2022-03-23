const btn = document.querySelector(".btn")

const overlay = document.querySelector(".overlay")

const close = document.querySelector(".close")

const f1 = document.querySelectorAll(".f1")

const choices = document.querySelector(".choices")

const main_game = document.querySelector(".main-game")

const UserPick = document.getElementById("UserPick")

const HousePick = document.getElementById("HousePick")

const wait = document.querySelector(".wait")

const result = document.getElementById("result")

const decider = document.querySelector(".decider")

const PlayAgain = document.querySelector(".btn-play")

const circle1 = document.querySelector(".circle1")

const circle2 = document.querySelector(".circle2")

const circle3 = document.querySelector(".circle3")

const circle4 = document.querySelector(".circle4")

const circle5 = document.querySelector(".circle5")

const circle6 = document.querySelector(".circle6")

const score = document.getElementById("score")

console.log(decider)
const type = [
    
    {id:"rock"},

    

    {id:"scissors"},

    {id:"paper"},

]

console.log(type)

const colors =[
     
    {color:"red"},
    
    
    
    {color:"yellow"},

    {color:"blue"},

]


btn.addEventListener("click",(e)=>{

    overlay.style.display = "block"
    console.log(colors[0])

})

close.addEventListener("click",(e)=>{

    overlay.style.display = "none"
})

let count=0

score.innerHTML = count



f1.forEach(function(f1){

    f1.addEventListener("click",(e)=>{

        console.log(e.currentTarget.dataset.id)
        console.log(e.currentTarget.classList[1])

        

        choices.style.visibility = "hidden"
        main_game.style.visibility ="visible"

        const choose = e.currentTarget.dataset.id
        const color = (e.currentTarget.classList[1])

        let t = type.filter(function(item){


            if(item.id===choose){

                return ` <div id="UserPick">
                <div class="selected red">
               
                  <img src="./images/icon-rock.svg" alt="">
                </div>
        
              </div>`
            }
           
            

        })

        let value = t[0]["id"]

        let n = type.map(function (n){

            if(n.id===value){

                return `    <div id="UserPick">
                <div class="selected ${color}">
                    <img src="./images/icon-${value}.svg" alt="">
                </div>

            </div>`    
            }



        })

        .join(" ")
        
        console.log(n)

        UserPick.innerHTML = n
        
    
        let UserNumber = parseInt(e.currentTarget.getAttribute("value"))

        console.log((UserNumber)*5)
        
       
        
        let randomNumber = Math.floor(Math.random()*3)
        console.log(randomNumber)

        

        


        if((UserNumber==2) && (randomNumber==0)){

            result.innerHTML = "You Won"
            let work = setTimeout(ripples1,2000)
            let waitResult = setTimeout(mainResult,3000)
            setTimeout(randomChoice(randomNumber),3000)
            setTimeout(updateScore,2000)
            
            


        }else if((UserNumber==0) && (randomNumber==2)){

            result.innerHTML = "You lose"
            let news = setTimeout(ripples2,2000)
            let waitResult = setTimeout(mainResult,2000)
            setTimeout(randomChoice(randomNumber),3000)
           
            setTimeout(resetScore,2000)
           

        }else if(UserNumber<randomNumber){
            result.innerHTML = "You Won"
            let work = setTimeout(ripples1,2000)
            let waitResult = setTimeout(mainResult,3000)
            setTimeout(updateScore,2000)
           
            
           
            

        }else if(UserNumber==randomNumber){

            result.innerHTML = "Draw"
            let waitResult = setTimeout(mainResult,3000)
           

        }else if ((UserNumber==1) && (randomNumber==0)){

            result.innerHTML = "You lose"
            let news = setTimeout(ripples2,2000)
            let waitResult = setTimeout(mainResult,3000)
            
            setTimeout(resetScore,2000)
            
            
           

        }else if ((UserNumber==0) && (randomNumber==1)){

            result.innerHTML = "You Won"
            let work = setTimeout(ripples1,2000)
            let waitResult = setTimeout(mainResult,3000)
            setTimeout(updateScore,2000)
           
            
            
           

        }else if ((UserNumber==2) && (randomNumber==1)){

            result.innerHTML = "You lose"
            let news = setTimeout(ripples2,2000)
            let waitResult = setTimeout(mainResult,3000)
           
            setTimeout(resetScore,2000)
            
            
           

        }else if ((UserNumber==1) && (randomNumber==2)){

            result.innerHTML = "You Won"
            let work = setTimeout(ripples1,2000)
            let waitResult = setTimeout(mainResult,3000)
            setTimeout(updateScore,2000)
           
            
            
           

        }
        setTimeout(randomChoice,2000,randomNumber) 
        
    })
   

})





function ripples1(){

    circle1.style.visibility="visible"
    circle2.style.visibility="visible"
    circle3.style.visibility="visible"


}



function ripples2(){

    circle4.style.visibility="visible"
    circle5.style.visibility="visible"
    circle6.style.visibility="visible"


}

function updateScore(){
    count++
    score.innerHTML = count

}


let lose=0


function resetScore(){
    
  
    lose++
    console.log(lose)

    if(lose>=3){
        lose = 0;
        count=0;
        score.innerHTML = lose

    }else{
      
        score.innerHTML =count
    }
    
}



function randomChoice(randomNumber) {



    let HouseChoice = type[randomNumber]["id"]

    console.log(HouseChoice)

    let HouseColor = colors[randomNumber]["color"]

    console.log(HouseColor)


    let show = type.map(function(show){


        if(show.id===HouseChoice){

            return ` <div id="HousePick">
                        <div class="selected ${HouseColor}">
                            <img src="./images/icon-${HouseChoice}.svg" alt="">
                        </div>
                    </div>`


        }


    })

    .join(" ")

    console.log(show)

    HousePick.style.visibility = "visible"
    HousePick.style.height = "100%"
    HousePick.innerHTML = show
    wait.style.display ="none"
   
    

}




function mainResult() {

    decider.style.display ="block"
}

PlayAgain.addEventListener("click",(e)=>{

    main_game.style.visibility="hidden"
    HousePick.style.visibility="hidden"
    choices.style.visibility="visible"
    decider.style.display="none"
    wait.style.display="block"
    HousePick.style.height ="0"
    circle1.style.visibility="hidden"
    circle2.style.visibility="hidden"
    circle3.style.visibility="hidden"
    circle4.style.visibility="hidden"
    circle5.style.visibility="hidden"
    circle6.style.visibility="hidden"
    


})

 

