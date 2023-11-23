const setTargetStudents = (studentNumber)=>{
  let studentNumberList = [];

    for(let i = 1; i <= studentNumber;i++){
       studentNumberList.push(i);
     }
     const absenteeNumbers = document.querySelector("#absence").value;
     const splitedAbsenteeNumbers = absenteeNumbers.split(",").map(function(item, index){
        return parseInt(item);
      });
      studentNumberList = studentNumberList.filter((student)=>{
        return !splitedAbsenteeNumbers.includes(student);
      })
      return studentNumberList;
    }

// let insertHTML = '';の'';というのは空文字と呼ばれるもの。変数insertHTMLはとくに何もデータは入っておらず空っぽだがこの後文字情報が追加されることになることを示す。

//  for(let i = 1; i <= 18; i++){
//    insertHTML += '<div class="seat__item">' + i + '</div>';
//    console.log(insertHTML);
//  }

//  for(何回繰り返し処理を行うか){
//     繰り返し行う処理の内容
//   }
// i++は「1ずつ足し算をして数字を増やしていく」という意味を表すプログラム
// += は、すでに設定・保存されているデータに加えて+= の右側にあるものをさらに加えるという意味。データとデータの足し算になる。



const shuffleArray = (studentNumberList)=>{
    for(let i = studentNumberList.length; i > 0; i--){
      const randomNum = Math.floor(Math.random() * i);
      let tmp = studentNumberList[i - 1];
      studentNumberList[i - 1] = studentNumberList[randomNum];
      studentNumberList[randomNum] = tmp;
    }
    return studentNumberList;
  }

const showSeatBoxes = (shuffleStudent)=>{
  let insertHTML = '';
  shuffleStudent.forEach(function(num){

    insertHTML += `<div class="seat__item">${num}</div>`
  })

document.querySelector('#seat').innerHTML = insertHTML;

// JavaScriptの基本的な書き方　document.querySelector('この部分にid名（#id名）やclass名(.class名)などを指定して、操作したいHTMLを決定する')

}

// shuffleArray();
// showSeatBoxes();

// 関数();: 定義した関数を実行。
// shuffleArray関数 → 配列の中身をシャッフルすることを目的としている関数
// showSeatBoxes関数 → 配列形式のデータを使って画面上に席番号ボックスを表示させることを目的としている関数

const soundPlay = (timer)=>{
    const audioElement = new Audio();
    audioElement.src = 'assets/audio/drum.mp3';
    audioElement.play();

    audioElement.addEventListener('ended', function(){
        clearInterval(timer);
      })
  }
  


  document.querySelector('#btn-start').addEventListener('click', function(){
    const studentNumber = document.querySelector("#studentNumber").value;
    const studentUpperlimit = 50;
    const studentNumberIsEmpty = studentNumber === "";

    if(studentNumberIsEmpty){
      alert('人数が未入力です！入力してからスタートボタンを押してください。');
      return false;
    }
   
    
    if(studentNumber > studentUpperlimit){
      alert(`人数は${studentUpperlimit}人以内に設定してください！`);
      return false;
    }

    document.querySelector('.c-overlay').classList.add("is-closed");  

    const studentNumberList = setTargetStudents(studentNumber);




    const timer = setInterval(()=>{
      const shuffleStudent = shuffleArray(studentNumberList);
      showSeatBoxes(shuffleStudent);
    // clearInterval(timer);
  }, 50);


// setInterval()を使うとタイマー処理によるプログラムの繰り返し処理を行う。
// setInterval('繰り返す命令の内容', 'タイマー処理を行う時間の間隔')
//「タイマー処理を行う時間の間隔」には、時間の数値を当てはめる。（1000 = 1秒）（50 = 0.05秒）

// clearInterval()は「setIntervalによるタイマー処理を停止する」という役割を持つ命令。
// clearInterval('setIntervalが保存されている変数（定数）名');
// setIntervalの内側でclearInterval()を用意し、()の中にsetIntervalが代入・保存された定数timerを指定することで動くようになる！

soundPlay(timer);
});
