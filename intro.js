var flag = 0;
  

function change(){
    if(flag == 0){
        const content = document.getElementById('npclog');
        content.textContent = '자네, 자그마치 4일을 누어있었다네.'
    }
    else if(flag == 1){
        const content = document.getElementById('npclog');
        content.textContent = '뭐라고? 본인이 누군지 기억이 나지 않는다고?'
    }
    else if(flag == 2){
        const content = document.getElementById('npclog');
        content.textContent = '그대는 마왕토벌에 참여한 용병,'
    }
    else if(flag == 3){
        const content = document.getElementById('npclog');
        content.textContent = '같이 싸울 용병들과 경험을 쌓기 위해 우리 마을에 묶는다 하지않았나'
    }
    else if(flag == 4){
        const content = document.getElementById('npclog');
        content.textContent = '그러면 자네 이름은 기억나는가?'
    }
    else if(flag == 5){
        const content = document.getElementById('npclog');
        content.textContent = '허어 자네 이름은 '
        document.getElementById("name").style.visibility ='visible';	
        const content1 = document.getElementById('realname').value; 
        if(content1 === ''){
            flag = 4;
        }
       
    }
    else if(flag ==6){
        const content = document.getElementById('npclog');
        const content1 = document.getElementById('realname').value; 
        content.textContent = content1+'일세'
        document.getElementById("name").style.visibility ='hidden';	
    }
    else if(flag == 7){
        const content = document.getElementById('npclog');
        content.textContent = '이거 원 내가 처음부터 알려줘야겠구만'
        
    }
    else if(flag == 8){
        location.href='main.html';
    }
    flag++;
}

