var flag = 0;

function change(){
    if(flag == 0){
        const content = document.getElementById('npclog');
        content.textContent = '자네, 자그마치 4일을 누어있었다네.'
    }
    if(flag == 1){
        const content = document.getElementById('npclog');
        content.textContent = '뭐라고? 본인이 누군지 기억이 나지 않는다고?'
    }
    if(flag == 2){
        const content = document.getElementById('npclog');
        content.textContent = '그대는 마왕토벌에 참여한 용병,'
    }
    if(flag == 3){
        const content = document.getElementById('npclog');
        content.textContent = '같이 싸울 용병들과 경험을 쌓기 위해 우리 마을에 묶는다 하지않았나'
    }
    if(flag == 4){
        const content = document.getElementById('npclog');
        content.textContent = '그러면 자네 이름은 기억나는가?'
    }
    if(flag == 5){
        const content = document.getElementById('npclog');
        content.textContent = '이거 원 내가 처음부터 알려줘야겠구만'
    }
    if(flag == 6){
        location.href='main.html';
    }
    flag++;
}

