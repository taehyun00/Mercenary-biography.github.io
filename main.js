var flag=0;
var loadednum = sessionStorage.getItem("num");

var lcount = sessionStorage.getItem("count");

document.getElementById('gold').value = loadednum;

if(lcount == "zero"){
    document.getElementById("sec").style.display ='none';
}

function change(){
    if(flag == 0){
        const content = document.getElementById('npclog');
        content.textContent = '책은 루아가 하는 훈련소지'
    }
    if(flag == 1){
        const content = document.getElementById('npclog');
        content.textContent = '주점은 말안해도 알지? 그대와 함께할 용병을 찾을곳아닌가!';
    }
    if(flag == 2){
        const content = document.getElementById('npclog');
        content.textContent = '마지막으로 저 협곡너머가 그대의 전투경험을 쌓을수있는곳이라네';
    }
    if(flag == 3){
        const content = document.getElementById('npclog');
        content.textContent = '그럼 앞으로의 여정에 축복을 빌지';
    }
    if(flag == 4){
        document.getElementById("sec").style.display ='none';
        var count = "zero";
        sessionStorage.setItem("count", count);	
    }
    flag++;
}
    function go(){
        document.getElementById('gold').value = num2;
        sessionStorage.setItem("snum",num2);
    }

    function get(){
        var num_ = document.getElementById('gold').value;
        num_ = Number(num_) + 20;
        document.getElementById('gold').value = num_;
        sessionStorage.setItem("snum",num_);
    }
