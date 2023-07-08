var imagens = ["Asirel2.png", "Chara3.png", "Cooki2.png", "Gina.png", "Kent2.png", 
"Lobo azul.png", "Luiz2.png", "matt.png", "Rerandom.jpg", "Ryan.png", "RynRose2.png",
"Shin.png", "Steve2.png", "Thais3.png", "Wes2.png"]; 
var verificador = []; 


function sleep(ms) { 
    return new Promise(
      resolve => setTimeout(resolve, ms)
    );
}


function Rerandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}


function Embaralhar () 
{
  let Inter = []; 
  for (let F in imagens)
  {
    Inter[F] = imagens[F];
  }

  for (var i = 0; i < 30; i++) 
  {
    let Random = Rerandom(0, Inter.length-1); 
    //console.log(Random);

    if (i < 15)
    {
      document.images[i].src = Inter[Random]; 
      Inter.splice(Random, 1); 
      
      if (Inter.length == 0) 
      {
        for (let F in imagens)
        {
          Inter[F] = imagens[F];
        }
      }
    }
    else 
    {
      document.images[i].src = Inter[Random];
      Inter.splice(Random, 1);
    }
    //console.log(imagens.length);
  }
}

async function Analise () 
{                         
  verificador.push(document.images[K]);
  document.images[K].style.opacity = "1.0";
  if (verificador.length == 2)
  {
    if (verificador[0].src == verificador[1].src)
    {
      verificador.splice(0,2);
    }
    else
    {
      sleep(2000);
      verificador[0, 1].style.opacity = "0.0";
      verificador.splice(0,2);
    }
  }
}

function teste () { 
  this.style.opacity = "1.0";
}

function Moonside(milliseconds) {
  let date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}



document.onload = Embaralhar();

for (let K in document.images)
{
  document.images[K].onclick = async function () 
  {
    verificador.push(this); 
    //console.log(verificador.length);
    this.style.opacity = "1.0";

    
    if (verificador.length == 2)
    {
      if (verificador[0].src == verificador[1].src && verificador[0] != verificador[1])
      {
        verificador = []; 
        //Moonside(1000);
      }
      else if (verificador.length > 2)
      {
        for (let L in verificador) 
        {
          verificador[L].style.opacity = "0.0";
        }
        verificador = [];
      }
      else
      {
        await sleep(1000); 
        verificador[0].style.opacity = "0.0"; 
        verificador[1].style.opacity = "0.0";
        verificador = [];
      }
    }
  };

  document.images[K].ondblclick = function () 
  {
    verificador[0].style.opacity = "0.0"; 
    verificador[1].style.opacity = "0.0";
    verificador = [];
  };
}


/*{
  document.images[K].onmouseover = function () {
    document.images[K].style.opacity = "1.0";
  }

  document.images[K].onmouseout = function () {
    document.images[K].style.opacity = "0.0";
  }
}*/