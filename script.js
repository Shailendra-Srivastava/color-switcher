

let mybtn = document.querySelectorAll(".color-button")
mybtn.forEach((button) => {
  button.addEventListener("click", (e)=>{
    document.body.style.backgroundColor = e.target.innerText;
  })
})







