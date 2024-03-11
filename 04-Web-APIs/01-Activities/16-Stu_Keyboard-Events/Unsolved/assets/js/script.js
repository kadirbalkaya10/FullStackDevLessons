const key = document.getElementById('key');
const code = document.getElementById('code');
const status = document.getElementById('status');

function keydownAction(event) {
  // TODO: Complete keydown function
  key.textContent = event.key;
  code.textContent = event.code;
  status.textContent = 'KEYDOWN Event';
}

function keyupAction(event) {
  status.textContent = 'KEYUP Event';
}

document.addEventListener('keyup', keyupAction);
// TODO: Add Event Listener for "keydown" event

document.addEventListener('keydown', keydownAction);
