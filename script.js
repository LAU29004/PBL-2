function searchFunction() {
    let input = document.getElementById('search-bar').value.toLowerCase();
    let results = document.getElementById('search-results');
    let items = results.getElementsByTagName('li');
    results.style.display = input ? 'block' : 'none';
    for (let i = 0; i < items.length; i++) {
        let item = items[i];
        let text = item.textContent || item.innerText;

        if (text.toLowerCase().indexOf(input) > -1) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    }
}
