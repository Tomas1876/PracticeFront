//삭제 버튼 만들고 li의 자식으로 만들기
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// 삭제 버튼 클릭시 해당 li display none 속성 부여하기
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
      //this는 삭제버튼 즉 div는 해당 버튼의 부모 li
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// 리스트에 체크하기
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {

    //classList.toggle 은 해당 list를 찾아 checked라는 클래스를 부여한다
    ev.target.classList.toggle('checked');
  }
}, false);

// + 버튼 클릭시 새 리스트 생성
function newElement(index) {
  var li = document.createElement("li");

  //리스트가 4개 이므로 배열로 간주한다
  var inputValue = document.getElementsByClassName("myInput")[index].value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    swal("추가할 내용을 적어주세요!");
  } else {
    document.getElementsByClassName("myUL")[index].appendChild(li);
  }
  document.getElementsByClassName("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }

}


