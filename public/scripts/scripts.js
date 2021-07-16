const btn = document.querySelector("#botao");
btn.addEventListener("click",function(e){
    e.preventDefault();
    const nome = document.querySelector("#anime");
    const anime = nome.value;
    
    if(anime){DOM.adicionar_lista(anime);
        Storage.set(anime);
    }else{
        alert("Digite um nome válido")
    }
    
});

const DOM={
    adicionar: document.querySelector(".lista"),
    adicionar_lista(anime){
            const li = document.createElement("li")
            li.innerHTML = `<li> ${anime} </li>`
            DOM.adicionar.appendChild(li)
    }
}
/*
const btn2 = document.querySelector("#botao2");
btn2.addEventListener("click",function(f){
    f.preventDefault();
    const nome2 = document.querySelector("#anime2");
    const anime2 = nome2.value;
    
    if(anime2){DOM2.adicionar2_lista(anime2);
        Storage.set(anime2);
    }else{
        alert("Digite um nome válido")
    }
    
})*/