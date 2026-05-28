
// 課題3-1 のプログラムはこの関数の中に記述すること
function print(data) {
console.log(data.coord.lat);
console.log(data.coord.lon);
console.log(data.weather[0].description);
console.log(data.weather[0].main);
console.log(data.main.temp_max);
console.log(data.main.temp_min);
console.log(data.main.humidity);
console.log(data.wind.speed);
console.log(data.wind.deg);
console.log(data.name);

}

// 課題5-1 の関数 printDom() はここに記述すること

function printDom(data) {

 u=document.createElement('ul');

 let l = document.createElement('li');      // 赤のli要素を作成して，
 l.textContent = data.coord.lat;                  // ul要素の中に追加
 u.insertAdjacentElement('beforeend', l);     

 l = document.createElement('li');      // 緑のli要素を作成して，
 l.textContent = data.coord.lon;                  // ul要素の中に追加
 u.insertAdjacentElement('beforeend', l);     

 l = document.createElement('li');      // 青のli要素を作成して，
 l.textContent = data.weather[0].description;                  // ul要素の中に追加
 u.insertAdjacentElement('beforeend', l);

 l = document.createElement('li');      // 赤のli要素を作成して，
 l.textContent = data.weather[0].main;                  // ul要素の中に追加
 u.insertAdjacentElement('beforeend', l);     

 l = document.createElement('li');      // 緑のli要素を作成して，
 l.textContent = data.main.temp_max;                  // ul要素の中に追加
 u.insertAdjacentElement('beforeend', l);     

 l = document.createElement('li');      // 青のli要素を作成して，
 l.textContent = data.main.temp_min;                  // ul要素の中に追加
 u.insertAdjacentElement('beforeend', l);

 l = document.createElement('li');      // 赤のli要素を作成して，
 l.textContent = data.main.humidity;                  // ul要素の中に追加
 u.insertAdjacentElement('beforeend', l);     

 l = document.createElement('li');      // 緑のli要素を作成して，
 l.textContent = data.wind.speed;                  // ul要素の中に追加
 u.insertAdjacentElement('beforeend', l);     

 l = document.createElement('li');      // 青のli要素を作成して，
 l.textContent = data.wind.deg;                  // ul要素の中に追加
 u.insertAdjacentElement('beforeend', l);

 l = document.createElement('li');      // 赤のli要素を作成して，
 l.textContent = data.name;                  // ul要素の中に追加
 u.insertAdjacentElement('beforeend', l);  


let p=document.querySelector("div#result");
p.insertAdjacentElement('beforeend', u); 
}

// 課題6-1 のイベントハンドラ登録処理は以下に記述
let b = document.querySelector("#sendRequest");
b.addEventListener('click', sendRequest,);




// 課題6-1 のイベントハンドラ sendRequest() の定義
function sendRequest() {
  let resultArea = document.querySelector("#result");

  while (resultArea.firstChild) {
        resultArea.removeChild(resultArea.firstChild);
    }

 
  let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/1850147.json';

  
  axios.get(url).then(showResult).catch(showError).then(finish);     
	
 

}

// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {
  let data = resp.data;

	if (typeof data === 'string') {
		data = JSON.parse(data);
	}
  
  printDom(data)
 

  
  





}

// 課題6-1: 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 課題6-1: 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
    
}

////////////////////////////////////////
// 以下はグルメのデータサンプル
// 注意: 第5回までは以下を変更しないこと！
// 注意2: 課題6-1 で以下をすべて削除すること
