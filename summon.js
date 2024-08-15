var myName = "KDH";
sessionStorage.setItem("myName", myName);
var loadednum = sessionStorage.getItem("snum");


const num = Math.floor(Math.random() * 10);

if(num<3){
    const content = document.getElementById('summonlog');
    content.textContent = '타락한 기사도,야일';
    $img = document.querySelector(".img-container > img");
    $img.src = `ch2.svg`;
}

if(num>2 && num<6){
    const content = document.getElementById('summonlog');
    content.textContent = '기사단장,루크';
    $img = document.querySelector(".img-container > img");
    $img.src = `ch1.svg`;
}

if(num>5 && num<10){
    const content = document.getElementById('summonlog');
    content.textContent = '모든걸꿰뚫는 천개의 화살,베르세나';
    $img = document.querySelector(".img-container > img");
    $img.src = `ch3.svg`;
}

var num1 = Number(loadednum)- 20;
sessionStorage.setItem("snum", num1);