let insertHTML = ""; 
// insertHTML: 空の文字列を初期化し、県名のリストをHTML形式に追加するための変数。

const kyushuPrefecture = ["福岡県", "大分県", "宮崎県", "熊本県", "佐賀県", "長崎県", "鹿児島県"];
// const: JavaScriptで変数を宣言する際に使用されるキーワード。constを使うことで、変数に再代入することができなくなる。
// kyushuPrefecture: 九州地方の県名が含まれた配列。

kyushuPrefecture.forEach(function(prefecture){
  insertHTML += "<li>" + prefecture + "</li>";
  console.log(prefecture);
});
// forEach(): 配列内の各要素に対して繰り返し処理を行うためのメソッド。
// console.log(prefecture): 各県名をコンソールに表示することで、確認やデバッグを行うためのもの。

document.querySelector("#prefecture-list").innerHTML = insertHTML
// document.querySelector("#prefecture-list").innerHTML = insertHTML;: HTMLドキュメント内の特定の要素に、生成された県名のリストを表示するためのコード。