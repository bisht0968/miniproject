const clock = () => {
    let elem = new Date()
    let d = elem.getDate()
    let month = elem.getMonth()
    let year = elem.getFullYear()
    let h = elem.getHours()
    let m = elem.getMinutes()
    let s = elem.getSeconds()
    let date = document.getElementById("date")
    date.innerHTML = d + "/" + month + 1 + "/" + year
    let hour = document.getElementById("hour")
    hour.innerHTML = h + " :"
    let minutes = document.getElementById("minute")
    minute.innerHTML = m + " :"
    let seconds = document.getElementById("seconds")
    seconds.innerHTML = s
}

setInterval(clock, 1000)
