var url = "https://studio-ghibli-films-api.herokuapp.com/api/grave%20of%20the%20fireflies"

fetch(url)
.then(response => response.json())
.then(datos => {
    console.log(datos)
    document.querySelector("#img-poster").src=datos.poster
    document.querySelector("#titulo").innerHTML+=`
            ${datos.title}
        `
    document.querySelector("#sinopsis").innerHTML+=`
            ${datos.synopsis}
        `
    document.querySelector("#tituloRoman").innerHTML+=`
            <p class="subTitulo">Título romanizado:</p> ${datos.hepburn}
        `
    document.querySelector("#estreno").innerHTML+=`
            <p class="subTitulo">Fecha de estreno:</p> ${datos.release}
        `
    document.querySelector("#director").innerHTML+=`
        <p class="subTitulo">Director:</p> ${datos.director}
    `
    
})