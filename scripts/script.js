function dateNow(){
    const d = new Date();
    const day = d.getDate();
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const month = months[d.getMonth()];
    const year = d.getFullYear();
    document.querySelector('.fecha').innerHTML = `${month}-${day}-${year}`;
}

function currentTime(){
    const h = new Date();
    const hours = h.getHours();
    const mins = h.getMinutes();
    const secs = h.getSeconds();
    document.querySelector('.hora').innerHTML = `${hours}:${mins}:${secs}`;
}

dateNow();
setInterval(currentTime, 1000);