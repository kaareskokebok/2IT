const textarea = document.querySelector('textarea');
// Hvis du trykker Enter i textarea, send inn skjemaet
textarea.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        document.querySelector('form').submit();
    }
});

function fetchMessages() {
    fetch('/messages')
    .then(response => response.json())
    .then(data => {
        // Meldingene ligger i data
        const messagesDiv = document.getElementById("messages");
        messagesDiv.innerHTML = '';
        data.forEach(melding => {
            const messageElement = document.createElement('p');
            messageElement.textContent = `${melding.timestamp} - ${melding.name}: ${melding.message}`;
            messagesDiv.appendChild(messageElement);
        })
    })
}

// Hent meldinger ved innlasting av nettsiden
window.onload = fetchMessages;
setInterval(fetchMessages, 3000);  // Henter meldinger hvert 3.sek.