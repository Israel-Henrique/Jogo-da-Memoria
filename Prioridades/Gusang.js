const imagens = ["Asirel2.png", "Chara3.png", "Cooki2.png", "Gina.png", "Kent2.png", 
"Lobo azul.png", "Luiz2.png", "matt.png", "Rerandom.jpg", "Ryan.png", "RynRose2.png",
"Shin.png", "Steve2.png", "Thais3.png", "Wes2.png"]; 
let verificador = [];
let Gamemode = 0;
let Tentativas = 0;

let Theme =
{
    Elemento_cor: "",
    Elemento_borda: "",
    Elemento_corNoMouse: "",
    Pagina: ""
}

/*let ParesElementais =
{
    Nome: "Gina.png",
    AoAvesso: 0,
    Par: [{}, {}]
}*/

function ParCriador (caminho) 
{
    return {Nome: caminho, AoAvesso: 0, Par: [{default: "loop"}, {default: "loop"}]};
}

function EleCriador(html, Par, index)  
{
    //Agatemele = html;
    if (Par == 1)
    {
        console.log("ERRO");
        return {Nome: "erro", clicado: false}
    }
    let img = html.firstElementChild;//document.createElement("img");
    //html.appendChild(img);
    //img.removeAttribute("src");
    html.onclick = () =>
    {
        if (!Par.Par[index].clicado)
        {
            img.setAttribute("src", `${Par.Nome}`);
            Par.AoAvesso++;
            //console.log(Par.AoAvesso);
            Par.Par[index].clicado= true;
            verificador.push([Par, index]);
            if (verificador.length == 2)
            {
                Analise();
            }
            
        }
    };

    html.onmouseover = () =>
    {
        if (Gamemode == 1 && Par.AoAvesso == 2)
        {
            //
        }
        else
        {
            html.style.backgroundColor = `${Theme.Elemento_corNoMouse}`;
        }
    }

    html.onmouseout = () =>
    {
        if (Gamemode == 1 && Par.AoAvesso == 2)
        {
            //
        }
        else
        {
            html.style.backgroundColor = `${Theme.Elemento_cor}`;
        }
    }

    /*html.ondblclick = () =>
    {
        img.setAttribute("src", "");
        Par.Par[index].clicado = false;
    }*/

    return {Elemento: html, clicado: false};//A propriedade NÂO se refere ao let
}

/*class Akref 
{
    constructor (Elemento) 
    {
        margn: 2;
        padding: 4;
    }
}*/

/*let g = document.createElement("img");
//g.setAttribute("src", "Gina.png");
let f = document.querySelectorAll("div")[0];
//g.setAttribute("src", "");
console.log(f);
//ParesElementais.Par[0] = Elemento.Bob(f);
let Khast = ParCriador("Gina.png");
Khast.Par[0] = EleCriador(f, Khast);
console.log(Khast.AoAvesso);*/

let ParesElementais = [];

function Rerandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function sleep(ms) { 
    return new Promise(
      resolve => setTimeout(resolve, ms)
    );
}

function Moonside(milliseconds) {
    let date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }


async function Embaralhar () 
{
    let Random = 0;
    for (let i in imagens)
    {
        ParesElementais[i] = ParCriador(imagens[i]);
        let index = 0;
        while (index < 2)
        {
            while (ParesElementais[i].Par[index].default == "loop")
            {
                Random = Rerandom(0, document.querySelectorAll("div").length - 1);
                if (!document.querySelectorAll("div")[Random].hasAttribute("id"))
                {
                    //console.log("caiu no if");
                    ParesElementais[i].Par[index] = EleCriador(document.querySelectorAll("div")[Random], ParesElementais[i], index);
                    document.querySelectorAll("div")[Random].setAttribute("id", "oi");
                    ParesElementais[i].Par[index].Elemento.firstElementChild.setAttribute("src", `${ParesElementais[i].Nome}`);
                }
                /*let a = 0;
                a++;
                console.log(a);*/
            }
            index++;
            //console.log(index);
        }
        //console.log(i);
    }
    await sleep(300);
    Moonside(5000);
    for (let Dupla in ParesElementais)
    {
        for (let Cadaum = 0; Cadaum < 2; Cadaum = Cadaum + 1)
        {
            ParesElementais[Dupla].Par[Cadaum].Elemento.firstElementChild.removeAttribute("src");
        }
    }
    //console.log(ParesElementais);
}

async function Analise () 
{
    if (verificador[0][0].Nome == verificador[1][0].Nome)
    {
        //verificador.splice(0, verificador.length);
        verificador = [];
        ModoX(1000);
    }
    else
    {
        let Atalho = "";
        await sleep(100);
        Moonside(1000);
        for (let i = 0; i < 2; i++)
        {
            verificador[i][0].AoAvesso = 0;
            Atalho = verificador[i][0].Par[verificador[i][1]];
            Atalho.Elemento.firstElementChild.removeAttribute("src");
            Atalho.clicado = false;
            
        }
        //verificador.splice(0, verificador.length);
        verificador = [];
    }
    Tentativas++;
    document.querySelectorAll("p")[0].innerHTML = `Tentativas: ${Tentativas}`;
}

function Restart () 
{
    ReverseX();
    ParesElementais = [];
    for (let div in document.querySelectorAll("div"))
    {
        document.querySelectorAll('div')[div].removeAttribute("id");
        document.querySelectorAll('div')[div].firstElementChild.removeAttribute("src");
        if (div == 29)
        {
            break;
        }

    }
    verificador = [];
    Embaralhar();
    document.querySelectorAll("p")[0].innerHTML = "do Kent's Civillization";
    Tentativas = 0;
}

function Reset () 
{
    for (let Impar in ParesElementais)
    {
        for (let indice = 0; indice < 2; indice = indice + 1)
        {
            ParesElementais[Impar].Par[indice].clicado = false;
            ParesElementais[Impar].Par[indice].Elemento.firstElementChild.removeAttribute("src");
        }
        ParesElementais[Impar].AoAvesso = 0;
    }
    verificador = [];
    ReverseX();
    document.querySelectorAll("p")[0].innerHTML = "do Kent's Civillization";
    Tentativas = 0;
}

function Ampulheta () 
{
    if (Tema == "escuro")
    {
        for (let Dupla in ParesElementais)
        {
            for (let Cadaum = 0; Cadaum < 2; Cadaum = Cadaum + 1)
            {
                ParesElementais[Dupla].Par[Cadaum].Elemento.style.backgroundColor = "darkgrey";
                ParesElementais[Dupla].Par[Cadaum].Elemento.style.borderColor = "black";
            }
        }
        Theme.Elemento_cor = "darkgrey";
        Theme.Elemento_borda = "black";
        Theme.Elemento_corNoMouse = "dimgray";
        Theme.Pagina = "dimgray";
        document.getElementsByTagName("html")[0].style.backgroundColor = "dimgray";
        document.getElementsByTagName("header")[0].style.color = `white`;

    }
    else
    {
        for (let Dupla in ParesElementais)
        {
            for (let Cadaum = 0; Cadaum < 2; Cadaum = Cadaum + 1)
            {
                ParesElementais[Dupla].Par[Cadaum].Elemento.style.backgroundColor = "gainsboro";
                ParesElementais[Dupla].Par[Cadaum].Elemento.style.borderColor = "gray";
            }
        }
        Theme.Elemento_cor = "gainsboro";
        Theme.Elemento_borda = "gray";
        Theme.Elemento_corNoMouse = "white";
        Theme.Pagina = "white";
        document.getElementsByTagName("html")[0].style.backgroundColor = "white";
        document.getElementsByTagName("header")[0].style.color = `black`;
    }

    ModoX(0);
}

async function ModoX (sec) 
{
    if (Gamemode == 1)
    {
        await sleep(sec);
        for (let Dupla in ParesElementais)
        {
            if (ParesElementais[Dupla].AoAvesso == 2)
            {
                for (let Cadaum = 0; Cadaum < 2; Cadaum = Cadaum + 1)
                {
                    ParesElementais[Dupla].Par[Cadaum].Elemento.style.backgroundColor = "transparent";
                    ParesElementais[Dupla].Par[Cadaum].Elemento.style.borderColor = "transparent";
                    ParesElementais[Dupla].Par[Cadaum].Elemento.firstElementChild.removeAttribute("src");
                }
            }
        }
    }
}

function ReverseX ()
{
    if (Gamemode == 1)
    {
        for (let Dupla in ParesElementais)
        {
            if (ParesElementais[Dupla].AoAvesso == 0)
            {
                for (let Cadaum = 0; Cadaum < 2; Cadaum = Cadaum + 1)
                {
                    ParesElementais[Dupla].Par[Cadaum].Elemento.style.backgroundColor = `${Theme.Elemento_cor}`;
                    ParesElementais[Dupla].Par[Cadaum].Elemento.style.borderColor = `${Theme.Elemento_borda}`;
                    ParesElementais[Dupla].Par[Cadaum].Elemento.firstElementChild.removeAttribute("src");
                }
            }
            else
            {
                for (let Cadaum = 0; Cadaum < 2; Cadaum = Cadaum + 1)
                {
                    ParesElementais[Dupla].Par[Cadaum].Elemento.style.backgroundColor = `${Theme.Elemento_cor}`;
                    ParesElementais[Dupla].Par[Cadaum].Elemento.style.borderColor = `${Theme.Elemento_borda}`;
                    ParesElementais[Dupla].Par[Cadaum].Elemento.firstElementChild.setAttribute("src", `${ParesElementais[Dupla].Nome}`);
                }
            }
        }
    }
}
//console.log(!document.querySelectorAll("div")[Rerandom(0, document.querySelectorAll("div").length)].hasAttribute("id"));
//[par0, index0] [par1, index1]
document.onload = Embaralhar();
let Botoes = document.getElementsByTagName("button");
Botoes[0].onclick = () => {Reset();};
Botoes[1].onclick = () => {Restart();};
Botoes[2].onclick = () => {
    if (Tema == "escuro")
    {
        Tema = "claro";
        Botoes[2].innerHTML = "Tema Escuro";
    }
    else
    {
        Tema = "escuro";
        Botoes[2].innerHTML = "Tema Claro";
    }
    Ampulheta();
}

Botoes[3].onclick = () => {
    if (Gamemode == 0)
    {
        Gamemode = 1;
        ModoX(0);
        Botoes[3].innerHTML = "Alternar para Modo Normal";
    }
    else
    {
        ReverseX();
        Gamemode = 0;
        Botoes[3].innerHTML = "Alternar para Modo X";
    }
}

let Ecra = 1;
Botoes[4].onclick = () => {
    if (Ecra == 0)
    {
        Ecra = 1;
        document.getElementsByTagName("section")[0].style.marginLeft = "33%";
        document.getElementsByTagName("section")[0].style.marginRight = "33%";
        document.getElementsByTagName("section")[1].style.marginLeft = "33%";
        document.getElementsByTagName("section")[1].style.marginRight = "33%";
        for (let Cartas in document.getElementsByTagName("div"))
        {
            document.getElementsByTagName("div")[Cartas].style.width = "20%";
            document.getElementsByTagName("div")[Cartas].style.paddingTop = "20%";
            
            if (Cartas == 29)
            {
                break;
            }
        }
    }
    else
    {
        Ecra = 0;
        document.getElementsByTagName("section")[0].style.marginLeft = "20%";
        document.getElementsByTagName("section")[0].style.marginRight = "20%";
        document.getElementsByTagName("section")[1].style.marginLeft = "20%";
        document.getElementsByTagName("section")[1].style.marginRight = "20%";
        for (let Cartas in document.getElementsByTagName("div"))
        {
            document.getElementsByTagName("div")[Cartas].style.width = "10%";
            document.getElementsByTagName("div")[Cartas].style.paddingTop = "10%";
            
            if (Cartas == 29)
            {
                break;
            }
        }
    }
}
let Hora = new Date();
let Tema = "";
if (Hora.getHours() > 18 || Hora.getHours() < 5) 
{
    Tema = "escuro";
    Botoes[2].innerHTML = "Tema Claro";
}
Ampulheta();
//console.log({nome: 3}.fh == 3)
//document.getElementsByTagName("html")[0].style.borderColor