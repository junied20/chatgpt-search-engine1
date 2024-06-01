async function sendMessage() {
    const userInput = document.getElementById('userInput').value;
    const responseElement = document.getElementById('response');

    const response = await fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer YOUR_OPENAI_API_KEY`
        },
        body: JSON.stringify({
            prompt: userInput,
            max_tokens: 50
        })
    });

    const data = await response.json();
    responseElement.innerText = data.choices[0].text;
}
