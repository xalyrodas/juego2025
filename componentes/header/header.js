function header1(){

    let header=document.createElement('header');
    header.className="header";

    

    let icon = document.createElement("img");
    icon.src = "https://cdn-icons-png.flaticon.com/512/2533/2533982.png"; // Cambia esto por la ruta correcta de tu icono
    icon.alt = "Icono del juego";
    icon.className = "icono";

    let title = document.createElement('h1');
    title.textContent = "JUEGO 2025";
    title.className = "title";

    let progressContainer = document.createElement('div');
    progressContainer.className = "progress-container";

    let step1 = document.createElement('div');
    step1.className = "step";
    step1.textContent = "1";

    let step2 = document.createElement('div');
    step2.className = "step";
    step2.textContent = "2";

    let step3 = document.createElement('div');
    step3.className = "step";
    step3.textContent = "3";

    let step4 = document.createElement('div');
    step4.className = "step";
    step4.textContent = "4";

    let step5 = document.createElement('div');
    step5.className = "step";
    step5.textContent = "5";

    progressContainer.appendChild(step1);
    progressContainer.appendChild(step2);
    progressContainer.appendChild(step3);
    progressContainer.appendChild(step4);
    progressContainer.appendChild(step5);

    header.appendChild(icon);
    header.appendChild(title);


   
    header.appendChild(progressContainer);

    return header;
}

export{header1}