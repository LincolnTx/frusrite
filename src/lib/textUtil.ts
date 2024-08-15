function copyToClipboard(elementToCopy: HTMLElement) {
    const textToCopy = elementToCopy.textContent
    console.log('To', textToCopy)
    var textInput = document.createElement('input');
    document.body.appendChild(textInput)
    textInput.value = textToCopy ?? '';
    
    textInput.select();
    textInput.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(textInput.value)

    textInput.remove();
}

export { copyToClipboard };