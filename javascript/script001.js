let button = document.getElementById("button")
button.addEventListener("click", Calcular)
let message = document.createElement("div")
message.setAttribute("id", "msg")
document.querySelector("section").appendChild(message)
message.style.display = "none"

function Calcular() {
    message.style.display = "block"
    let productName = (document.getElementById("iname").value.trim())
    let productPrice = Number(document.getElementById("iprice").value)
    let productAmount = Number(document.getElementById("iamount").value)
    
    if (productName == "" || productPrice <= 0 || Number.isNaN(productPrice) || productAmount <= 0 || Number.isNaN(productAmount)) {
        message.style.color = "red"
        message.innerHTML = "ERROR. Fill in correctly!"
    } else {
        let totalPrice = productPrice * productAmount
        message.innerHTML = `Product Name: ${productName} <br> Product Price: R$ ${productPrice.toFixed(2)} <br> Product Amount: ${productAmount.toFixed(1)} <br> Total Price: R$ ${totalPrice.toFixed(2)}`
    }
}
