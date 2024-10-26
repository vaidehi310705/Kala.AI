document.addEventListener('DOMContentLoaded', function() {
    const promptInput = document.getElementById('prompt');
    const artistInput = document.getElementById('artist');
    const suggestionOutput = document.getElementById('suggestion');

    function updateSuggestion() {
        const promptValue = promptInput.value.trim();
        const artistValue = artistInput.value.trim();

        if (promptValue && artistValue) {
            suggestionOutput.textContent = `A ${promptValue} drawn by ${artistValue}`;
        } else {
            suggestionOutput.textContent = ''; // Clear suggestion if inputs are empty
        }
    }

    // Listen for input events
    promptInput.addEventListener('input', updateSuggestion);
    artistInput.addEventListener('input', updateSuggestion);
});
