/* html compont varibales */
var MESSAGE_REF='message';
var btn_send = document.getElementById('btn_send');
var input_message = document.getElementById('input_message');
var message = document.getElementById('message');



var myRef = firebase.database().ref(MESSAGE_REF);
        myRef.on('value', function (snapshot) {
           // console.log(snapshot.val());
            var tmp = snapshot.val();
            message.innerText=tmp;
        });

function sendMessage()
{
    var tmp_msg = input_message.value;
   // console.log(tmp_msg);
    writeUserData(tmp_msg);
    input_message.value="";
}

function writeUserData(mymessage) {
   
   var updates={};
   updates[MESSAGE_REF]=mymessage;

    firebase.database().ref().update(updates);

    
}

  