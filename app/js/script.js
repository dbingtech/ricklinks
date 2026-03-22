// Load components
    // Load header
    fetch('header.html')
        .then(response => response.text())
        .then(data => document.getElementById('header').innerHTML = data);
        
    // Load nav
    fetch('nav.html')
        .then(response => response.text())
        .then(data => document.getElementById('nav').innerHTML = data);
        
    // Load hero
    fetch('hero.html')
        .then(response => response.text())
        .then(data => document.getElementById('hero').innerHTML = data);
    
    // Load footer
    fetch('footer.html')
        .then(response => response.text())
        .then(data => document.getElementById('footer').innerHTML = data);