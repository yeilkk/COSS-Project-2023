let socket = io.connect('http://' + document.domain + ':' + location.port);
socket.on('connect', function() {
    socket.send('Connected');
});

socket.on('client_message', function(message) {
    let talkDiv = document.getElementById('talkDiv');
    let divElement = document.createElement("div");
    divElement.className = "user-talk";
    // divElement.innerHTML = message.message;
    divElement.textContent = message.message;
    talkDiv.appendChild(divElement);
    socket.emit('server_message');
});

 socket.on('server_message', function() {
            // 서버로부터 받은 길이 정보를 동적으로 생성한 엘리먼트로 추가
            let talkDiv = document.getElementById('talkDiv');
            let divElement = document.createElement("div");
            divElement.className = 'bot-talk';
            divElement.textContent = Math.random().toFixed(3);
            talkDiv.appendChild(divElement);
        });

 document.getElementById('sendBtn').addEventListener('click', function(event) {
        event.preventDefault(); // 기본 동작 막기
        let message = document.getElementById('chatMessage').value;
        socket.emit('client_message', message);
        document.getElementById('chatMessage').value = '';
        console.log("send: "+message)
 });

 function sendMessage() {
    let message = document.getElementById('chatMessage').value;
    socket.emit('client_message', message);
    document.getElementById('chatMessage').value = '';
    console.log("send: "+message)
}


// socket.on('connect', function() {
//     // var serverButton = document.getElementById('server_button');
//     // serverButton.addEventListener('click', function() {
//     //     socket.emit('server_message');
//     // });
//
//     var clientButton = document.getElementById('client_button');
//     clientButton.addEventListener('click', function() {
//         var clientMessage = document.getElementById('client_message').value;
//         socket.emit('client_message', clientMessage);
//         document.getElementById('client_message').value = '';
//     });
// });
