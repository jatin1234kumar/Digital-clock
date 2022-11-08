const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const sec = document.getElementById('sec');
const sub = document.getElementById('subBox');
const swap = document.getElementById('swap');

const btn = document.getElementById('btn');
const btn2 = document.getElementById('btn2');

let stop;

const clockStart = function () {
    stop = setInterval(function () {
        const today = new Date();
        let h = today.getHours();
        let m = today.getMinutes();
        let s = today.getSeconds();

        hours.innerHTML = h;
        minutes.innerHTML = m;
        sec.innerHTML = s;

        if (h >= 12) {
            sub.innerHTML = "pm";
        } else {
            sub.innerHTML = "am"
        }
    }, 1000);
};

btn.addEventListener('click', function () {
    clockStart();
    btn2.classList.remove('hidden');
});

btn2.addEventListener('click', function () {
    clearInterval(stop);
    btn2.classList.add('hidden');
});

swap.addEventListener('click', function () {
    const rand = Math.floor(Math.random() * 2) + 1;
    let img = `url('img/${rand}.jpg')`
    document.getElementById('body').style.backgroundImage = img;
});
