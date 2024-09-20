var pupopoverlay=document.querySelector(".popup-overlay")
var pupoptext=document.querySelector(".popup-text")
var addbutton=document.querySelector(".add-button")

addbutton.addEventListener("click",function(){
    pupopoverlay.style.display = "block"
    pupoptext.style.display = "block"
})
  var cancel=document.getElementById("cancelbook")
  
   cancel.addEventListener("click",function(event){
    event.preventDefault()
    pupopoverlay.style.display = "none"
    pupoptext.style.display = "none"
   })

   var maincontainer=document.querySelector(".container")
   var addbook=document.getElementById("addbook")
   var h2=document.getElementById("book-title")
   var h5=document.getElementById("book-author")
   var pera=document.getElementById("book-text")

   addbook.addEventListener("click",function(event){
    event.preventDefault()
    

    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${h2.value}</h2>
    <h5>${h5.value}</h5>
    <p>${pera.value} </p>
    <button onclick="delbook(event)">Delete</button>`
    pupopoverlay.style.display = "none"
    pupoptext.style.display = "none"
    maincontainer.append(div)
   })
   function delbook(event){
    event.target.parentElement.remove()
   }