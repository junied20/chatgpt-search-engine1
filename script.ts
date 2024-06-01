async function sendMessage() {
    const userInput = document.getElementById('userInput').value;
    const responseElement = document.getElementById('response');

    if (!userInput) {
        responseElement.innerText = "Please enter a query.";
        return;
    }

    try {
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

        if (!response.ok) {
            throw new Error(`API request failed with status ${response.status}`);
        }

        const data = await response.json();
        if (data.choices && data.choices.length > 0) {
            responseElement.innerText = data.choices[0].text;
        } else {
            responseElement.innerText = "No response from API.";
        }
    } catch (error) {
        console.error("Error:", error);
        responseElement.innerText = `Error: ${error.message}`;
    }
}
