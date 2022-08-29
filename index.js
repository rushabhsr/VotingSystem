//var text = 100;
//var button = document.getElementById("reset");
var p1h = document.getElementById("party1");
var p2h = document.getElementById("party2");
var p3h = document.getElementById("party3");
var p4h = document.getElementById("nota");
var lead =document.getElementById("leader");
var totl =document.getElementById("total");

var t1 = (fref = firebase.database().ref().child("Button1"));
t1.on("value", function (button1snap) {
  party1.innerText = button1snap.val();
  var v1 = button1snap.val();

  var t2 = (fref = firebase.database().ref().child("Button2"));
  t2.on("value", function (button2snap) {
    party2.innerText = button2snap.val();
    var v2 = button2snap.val();

    var t3 = (fref = firebase.database().ref().child("Button3"));
    t3.on("value", function (button3snap) {
      party3.innerText = button3snap.val();
      var v3 = button3snap.val();

      var t4 = (fref = firebase.database().ref().child("Button4"));
      t4.on("value", function (button4snap) {
        nota.innerText = button4snap.val();
		var v4 = button4snap.val();
		
		if(Math.max(v1, v2, v3, v4)==v1){
			leader.innerText="Party 1";
		}
		else if(Math.max(v1, v2, v3, v4)==v2){
			leader.innerText="Party 2";
		}
		else if(Math.max(v1, v2, v3, v4)==v3){
			leader.innerText="Party 3";
		}
		else if(Math.max(v1, v2, v3, v4)==v4){
			leader.innerText="Party 4";
		}
		else{
			leader.innerText="NA";
		}
        total.innerText=(v1+v2+v3+v4);
      });
    });
  });
});
