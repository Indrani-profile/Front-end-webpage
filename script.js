const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}
function search() {
    // Get the value from the search input
    var searchQuery = document.getElementById('searchInput').value;
  
    // Perform search functionality (this could be an AJAX request to a backend, etc.)
    // For demonstration purposes, we'll just log the search query to the console
    console.log('Searched for:', searchQuery);
  }
  function editCountry() {
    var newCountry = prompt("Enter new country:");
    if (newCountry !== null && newCountry !== "") {
        document.getElementById("country").textContent = newCountry;
    }
}

function editBio() {
    var newBio = prompt("Enter new bio:");
    if (newBio !== null && newBio !== "") {
        document.getElementById("bio").textContent = newBio;
    }
}
