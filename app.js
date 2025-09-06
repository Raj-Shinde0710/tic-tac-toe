let boxes = document.querySelectorAll(".box")
let resetBtn = document.querySelector(".reset")
let msg = document.querySelector(".msg")
let newGame = document.querySelector(".newGame")
let msgCont = document.querySelector(".msgCont")




const winPatterns = [[0,1,2] , [0,3,6] , [0,4,8] , [1,4,7] , [2,5,8] , [2,4,6] , [3,4,5] , [6,7,8]]
 let start = "X"
boxes.forEach((box) => {
  box.addEventListener("click", () => {
   
    if(start == "X"){
        box.innerHTML = "X"
        start = "O"
        box.style.backgroundColor = "red"
    }
    else{
        box.innerHTML = "O"
        start = "X"
        box.style.backgroundColor = "blue"
    }
    box.disabled = true
    checkWinner()
  }
  )
}
)




const disBox = (box) => {
  for ( box of boxes) {
    
      box.disabled = true
  }
  
}
const enabBox = (box) => {
  for ( box of boxes) {
    box.innerText = ""
      box.disabled = false
      box.style.backgroundColor = "bisque"
  }
  
}
const resetGame = (params) => {
  start = "X"
  enabBox()
  msgCont.classList.add("hide")
  resetBtn.classList.remove("hide")
}


const showWinner = (pos1) => {
//   alert(`the winner is ${pos1}`)
  msgCont.classList.remove("hide")
  msg.innerText = `the winner is ${pos1}`
  disBox()
  resetBtn.classList.add("hide")

}



const checkWinner = () => {
  for (pattern of winPatterns) {
    console.log(pattern[0] , pattern[1] , pattern[2])
    // console.log(boxes[pattern[0]] , boxes[pattern[1]] , boxes[pattern[2]])
    let pos1 = boxes[pattern[0]].innerText
    let pos2 = boxes[pattern[1]].innerText
    let pos3 = boxes[pattern[2]].innerText
    if (pos1 != "" && pos3 != "" && pos2 != "") {
        
        if (pos1 == pos2 && pos2 == pos3) {
           
            showWinner(pos1)
        } 
    }
    
  }
}

resetBtn.addEventListener("click" , resetGame)
newGame.addEventListener("click" , resetGame)
