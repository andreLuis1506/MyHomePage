document.getElementById("searchBar").addEventListener("keypress", myFunction);

function myFunction(event) {
    if (event.keyCode === 13) {
        const valor = document.getElementById("searchBar").value
        console.log(`https://${valor}`)

        if(valor.includes('.com')){
            window.location.href = `http://${valor}`;

        }else{
            window.location.href = `https://www.google.com/search?&q=${valor}`;
        }

    }
}

function go (path) {
    event.preventDefault();
    console.log(path)
    window.location.href = path ;
}