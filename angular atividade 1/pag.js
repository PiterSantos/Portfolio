
   function createContent() {

    const header = document.getElementById('header');
    const title = document.createElement('h1');
    title.textContent = 'endauldi agrummgit';
    header.appendChild(title);

    const content = document.getElementById('content');
    const text = document.createElement('p');
    text.textContent = `Tudo começou em uma noite normal
Os três irmãos foram dormir tudo igual
Mal sabiam eles o que estava por vir
Depois daquela noite o que iria surgir
O que iria surgir

Acordaram em um lugar diferente não sabiam o que vinha pela frente
Tudo o que estava por acontecer
Dificuldades que teriam que sofrer
Mas eles continuaram firme e forte
Mesmo sem ter alguém pra dar aquele suporte
Ficaram com muito medo
Aquele mar enorme que não tinha nem começo

Sem os pais não sabiam qual o rumo iam tomar
Como irmão mais velho Pedro ia comandar
E Lucas só sabia atrapalhar

Tudo começou em uma noite normal
Os três irmãos foram dormir tudo igual
Mal sabiam eles o que estava por vir
Depois daquela noite o que iria surgir
O que iria surgir

Isolados, isolados
Uhuu, uhuu

Depois disso apareceu o Rodrigo o jovem estava em perigo
Em alto mar se afogando, ele estava gritando
E Lucas decidiu lhe dar um abrigo
Seus irmãos estavam com muito receio estavam com muito medo
Se ele era indefeso o que ele iria fazer, está fazendo ou até mesmo tinha feito

Sem os pais não sabiam qual o rumo iam tomar
Como irmão mais velho Pedro ia comandar
E Lucas só sabia atrapalhar

Quando amanheceu, perceberam foram roubados
Estavam sem rumo mas sempre iriam estar juntos

Tudo começou em uma noite normal
Os três irmãos foram dormir tudo igual
Mal sabiam eles o que estava por vir
Depois daquela noite o que iria surgir
O que iria surgir

Isolados, isolados
Uhuu, uhuu
Isolados, isolados
Uhuu, uhuu`;
    content.appendChild(text);

    const footer = document.getElementById('footer');
    const image = document.createElement('img');
    image.src = 'https://pbs.twimg.com/profile_images/1062159674995326976/A-qZiD_c_400x400.jpg'; 
    footer.appendChild(image);
}


window.onload = createContent;