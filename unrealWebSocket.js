// import WebSocket from "ws"
const unrealSocket = new WebSocket('wss://gtg3p8yh66.execute-api.us-east-1.amazonaws.com/production')

// const unrealSocket = new WebSocket('ws://localhost:8080');

unrealSocket.addEventListener('open', e => {
  console.log('Unreal WebSocket is connected')

  const message = 'Hello Unreal!'
  unrealSocket.send(message)
})

unrealSocket.addEventListener('close', e => console.log('Unreal WebSocket is closed'))

unrealSocket.addEventListener('error', e => console.error('Unreal WebSocket is in error', e))

unrealSocket.addEventListener('message', e => {
  console.log('Unreal WebSocket received a message:', e.data)
})

const messageForm=document.getElementById("cnfrm")

messageForm.addEventListener("click",asdfg);
function asdfg(){
    const messageInput=document.getElementById("word-input");
    const message=messageInput.value;
    unrealSocket.send(message);
    console.log(message);
    messageInput.value="";
}
