let insertHTML = ''; 

// let insertHTML = '';の'';というのは空文字と呼ばれるもの。変数insertHTMLはとくに何もデータは入っておらず空っぽだがこの後文字情報が追加されることになることを示す。

 for(let i = 1; i <= 18; i++){
   insertHTML += '<div class="seat__item">' + i + '</div>';
   console.log(insertHTML);
 }

//  for(何回繰り返し処理を行うか){
//     繰り返し行う処理の内容
//   }

// i++は「1ずつ足し算をして数字を増やしていく」という意味を表すプログラム
// += は、すでに設定・保存されているデータに加えて+= の右側にあるものをさらに加えるという意味。データとデータの足し算になる。

document.querySelector('#seat').innerHTML = insertHTML;

// JavaScriptの基本的な書き方　document.querySelector('この部分にid名（#id名）やclass名(.class名)などを指定して、操作したいHTMLを決定する')
