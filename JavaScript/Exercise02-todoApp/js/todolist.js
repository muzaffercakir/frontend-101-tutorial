const inputDOM = document.querySelector("#task")
const elementDOM = document.querySelector("ul#list")
const alertDOM = document.querySelector('#toast')

for (let i = 0; i < elementDOM.children.length; i++) {
  let closeButton = document.createElement("span");
  closeButton.textContent = "\u00D7"; // çarpı işareti unicode
  closeButton.classList.add("close");
  closeButton.onclick = deleteButton;

  elementDOM.children[i].append(closeButton);
  elementDOM.children[i].onclick = check;

}

inputDOM.addEventListener("keypress",function(e){
  if(e.key === "Enter"){
    newElement();
  }
});

function newElement() {
    
    
    if(inputDOM.value.trim()) {      
        
        $(".success").toast("show");

        let liDOM = document.createElement("li");
        elementDOM.appendChild(liDOM);
        liDOM.innerHTML = inputDOM.value
      
        inputDOM.value = ""

        liDOM.onclick = check;
        let closeButton = document.createElement("span");
        closeButton.textContent = "\u00D7"; // çarpı işareti unicode
        closeButton.classList.add("close");
        closeButton.onclick = deleteButton;
        liDOM.append(closeButton);

    }else {
        
        $(".error").toast("show");
        
    }

}

function check(){
  this.classList.toggle("checked");  
}

function deleteButton() {
  this.parentElement.remove();
}

