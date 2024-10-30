async function loadHTML(file, element) {
    const response = await fetch(file);
    const text = await response.text();
    document.querySelector(element).innerHTML = text;
}

