
function indetifierLaPage(){
    let fichier = window.location.href.split('/');
    fichier = fichier[fichier.length-1];

    document.querySelectorAll("nav a").forEach(element => {
        const lien = element.getAttribute('href');

        if(lien.includes(fichier)){
            element.classList.add('active');
        }else {
            element.classList.remove('active');
        }
    });
    
}

indetifierLaPage();