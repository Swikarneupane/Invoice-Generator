let totalMoney = 0;

const washCarBtn = document.getElementById('washCarBtn')
const mowLawnBtn = document.getElementById('mowLawnBtn')
const pullWeedsBtn = document.getElementById('pullWeedsBtn')
const totMoneyTab = document.getElementById('totMoney')
const totMoney = document.getElementById('totMoney')
const sendInvoice = document.getElementById('send-invoice')

const removeWashCar = document.getElementById('removeWashCar')
const removeMowLawn = document.getElementById('removeMowLawn')
const removePullWeeds = document.getElementById('removePullWeeds')

document.getElementById('second').style.display = "none"
document.getElementById('third').style.display = "none"
document.getElementById('fourth').style.display = "none"
document.getElementById('sixth').style.display = "none"

washCarBtn.addEventListener("click", function() {
    document.getElementById('second').style.display = "flex"
    document.getElementById('sixth').style.display = "flex"
    totalMoney += 10
    document.getElementById('totMoney').innerText = `${totalMoney}`
    washCarBtn.disabled = true
})

mowLawnBtn.addEventListener("click", function() {
    document.getElementById('third').style.display = "flex"
    document.getElementById('sixth').style.display = "flex"
    totalMoney += 20
    document.getElementById('totMoney').innerText = `${totalMoney}`
    mowLawnBtn.disabled = true
})

pullWeedsBtn.addEventListener("click", function() {
    document.getElementById('fourth').style.display = "flex"
    document.getElementById('sixth').style.display = "flex"
    totalMoney += 30
    document.getElementById('totMoney').innerText = `${totalMoney}`
    pullWeedsBtn.disabled = true
})

sendInvoice.addEventListener("click", function() {
    totalMoney = 0
    window.location.reload()
})

removeWashCar.addEventListener("click", function() {
    totalMoney -= 10
    document.getElementById('second').style.display = "none"
    document.getElementById('sixth').style.display = "flex"
    document.getElementById('totMoney').innerText = `${totalMoney}`
    washCarBtn.disabled = false 
})

removeMowLawn.addEventListener("click", function() {
    totalMoney -= 20
    document.getElementById('third').style.display = "none"
    document.getElementById('sixth').style.display = "flex"
    document.getElementById('totMoney').innerText = `${totalMoney}`
    mowLawnBtn.disabled = false 
})

removePullWeeds.addEventListener("click", function() {
    totalMoney -= 30
    document.getElementById('fourth').style.display = "none"
    document.getElementById('sixth').style.display = "flex"
    document.getElementById('totMoney').innerText = `${totalMoney}`
    pullWeedsBtn.disabled = false 
})