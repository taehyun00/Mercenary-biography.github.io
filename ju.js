var loadedName = sessionStorage.getItem("myName");

var loadednum = sessionStorage.getItem("snum");

document.getElementById('gold').value = loadednum;



let flag=0;

if(loadedName == "KDH"){
    document.getElementById("sec").style.display ='none';
}

function change(){

    if(flag == 0){
        const content = document.getElementById('npclog');
        content.textContent = '마침 떠들썩한 용병이 저희 마을에 와있거든요'
    }
    if(flag == 1){
        const content = document.getElementById('npclog');
        content.textContent = '이번 처음만 제가 도와드릴게요!';
    }
    if(flag == 2){
        const content = document.getElementById('npclog');
        content.textContent = '1회소집을 눌러보세요!';
        loadednum = Number(loadednum) + 20;
    }
        
    flag++;
}

function summon(){
    if(loadednum < 20) {
        alert("돈이 부족합니다!");
    }
    else if(loadednum >19){
        sessionStorage.setItem("snum", loadednum);
        location.href='summon.html';
    }
}   

sessionStorage.setItem("num", loadednum);

