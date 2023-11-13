let timer;
const studentNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];



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

const shuffleArray = function(){

for(let i = 18; i > 0; i--){
    const randomNum = Math.floor(Math.random() * i);
    let tmp = studentNumbers[i - 1]; 
    studentNumbers[i - 1] = studentNumbers[randomNum]; 
    studentNumbers[randomNum] = tmp;
  }
}

// for(let i = 18; i > 0; i--) { ... }: iを18から始め、それを1ずつ減らしながらループを続けるforループ。配列内の要素をシャッフルするための処理を行う。
// const randomNum = Math.floor(Math.random() * i);: Math.random()で0から1未満の乱数を生成し、iで乗算して小数点以下を切り捨てるMath.floor()関数を使って整数に変換。0からi-1の範囲でランダムな数が取得される。
// let tmp = studentNumbers[i - 1];: 一時的な変数tmpに、studentNumbers配列内のi-1番目の要素を格納。
// studentNumbers[i - 1] = studentNumbers[randomNum];: i-1番目の要素を、ランダムに選ばれたrandomNum番目の要素と交換。
// studentNumbers[randomNum] = tmp;: randomNum番目の要素を、最初に選択したi-1番目の要素で置き換える。配列内の要素をランダムに並び替え。

const showSeatBoxes = function(){
let insertHTML = ''; 

studentNumbers.forEach(function(num){
    insertHTML += '<div class="seat__item">' + num + '</div>';
  })

// studentNumbersという配列内の各要素を<div class="seat__item">というHTML要素に変換し、それをinsertHTMLに追加する。


document.querySelector('#seat').innerHTML = insertHTML;

// JavaScriptの基本的な書き方　document.querySelector('この部分にid名（#id名）やclass名(.class名)などを指定して、操作したいHTMLを決定する')

}

// shuffleArray();
// showSeatBoxes();

// 関数();: 定義した関数を実行。
// shuffleArray関数 → 配列の中身をシャッフルすることを目的としている関数
// showSeatBoxes関数 → 配列形式のデータを使って画面上に席番号ボックスを表示させることを目的としている関数

const soundPlay = function(){
    const audioElement = new Audio();
    audioElement.src = 'assets/audio/drum.mp3';
    audioElement.play();

    audioElement.addEventListener('ended', function(){
        clearInterval(timer);
      })
  }
  


  document.querySelector('#btn-start').addEventListener('click', function(){
    document.querySelector('.c-overlay').classList.add("is-closed");

// setInterval(function(){
    // const timer = setInterval(function(){
    timer = setInterval(function(){
    shuffleArray();
    showSeatBoxes();
    // clearInterval(timer);
  }, 50);


// setInterval()を使うとタイマー処理によるプログラムの繰り返し処理を行う。
// setInterval('繰り返す命令の内容', 'タイマー処理を行う時間の間隔')
//「タイマー処理を行う時間の間隔」には、時間の数値を当てはめる。（1000 = 1秒）（50 = 0.05秒）

// clearInterval()は「setIntervalによるタイマー処理を停止する」という役割を持つ命令。
// clearInterval('setIntervalが保存されている変数（定数）名');
// setIntervalの内側でclearInterval()を用意し、()の中にsetIntervalが代入・保存された定数timerを指定することで動くようになる！

soundPlay();
});
