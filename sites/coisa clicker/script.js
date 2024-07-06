let coisas_$ = 0;
let clickador_de_coisas_passive_income = 0; let BUFF_clickador_de_coisas_passive_income = 1;
let lambedor_de_coisas_passive_income = 0; let BUFF_lambedor_de_coisas_passive_income = 1;
let coisa_trabalhista_passive_income = 0; let BUFF_coisa_trabalhista_passive_income = 1;
let fotosintese_de_coisa_passive_income = 0; let BUFF_fotosintese_de_coisa_passive_income = 1;
let BUFF_clickar_$ = 1;


function num_aleatorio(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function passive_income(name_passive_income,income){
    switch (name_passive_income){
        case "clickador de coisas":
            clickador_de_coisas_passive_income += income;
            break;
        case "lambedor de coisas":
            lambedor_de_coisas_passive_income += income;
            break;
        case "coisa trabalhista":
            coisa_trabalhista_passive_income += income;
            break;
        case "fotosintese de coisa":
            fotosintese_de_coisa_passive_income += income;
            break;
        default:
            console.log("algo errado no passive_income");
            break;
    }
}
function BUFF_passive_income(the_buff,name_of_the_buff){
    switch (name_of_the_buff){
        case "Click":
            BUFF_clickar_$ += the_buff;
            break;
        case "Clickador":
            BUFF_clickador_de_coisas_passive_income += the_buff;
            break;
        case "Lambedor":
            BUFF_lambedor_de_coisas_passive_income += the_buff;
            break;
        case "":
            BUFF_coisa_trabalhista_passive_income += the_buff;
            break;
        default:
            console.log("algo errado no passive_income");
            break;
    }
}

setInterval(update_coisas, 100);
setInterval(see_new_upgrades, 150);

let index_last_upgrade = 0; // CRIA ASIDE UPGRADE
let lista_last_upgrade = [
    [120,"Click x2",1,"Click"],[200,"Clickador x2",2,"Clickador"],[300,"Click x2",2,"Click"],
    [450,"Click x2",4,"Click"],[500,"Clickador +100%",1,"Clickador"],[750,"Click x2",8,"Click"],
    [800,"Clickador +50%",0.5,"Clickador"],[1000,"Lambedor +50%",0.5,"Lambedor"],[1100,"Click +100%",8,"Click"],
    [1500,"Lambedor +50%",0.5,"Lambedor"],[1600,"Clickador +50%",0.5,"Clickador"],
    [Infinity]
];

function see_new_upgrades(){
    if(coisas_$ > lista_last_upgrade[index_last_upgrade][0]){
        show_new_upgrade();
        index_last_upgrade++;
    }
}
function show_new_upgrade(){
    document.getElementById('aside_upgrade').innerHTML += `<div class="botao_aside_upgrade ${lista_last_upgrade[index_last_upgrade][3]}" id="${index_last_upgrade}" onclick=";
    comprar_upgrades(${lista_last_upgrade[index_last_upgrade][0]} , ${lista_last_upgrade[index_last_upgrade][2]} , ${index_last_upgrade} , '${lista_last_upgrade[index_last_upgrade][3]}');">
    ${lista_last_upgrade[index_last_upgrade][1]}
    (${lista_last_upgrade[index_last_upgrade][0]})
    </div>`;
}
function comprar_upgrades(value,the_buff,id,name_of_the_buff){
    if (coisas_$ > value) {
        coisas_$ -= value;
        BUFF_passive_income(the_buff,name_of_the_buff);
        excluir_botao_aside_upgrade(id);
    }else{
        warning_for_not_enough_money();
    }
}

function somando_totos_os_passive_income(){
    return (clickador_de_coisas_passive_income * BUFF_clickador_de_coisas_passive_income) +
    (lambedor_de_coisas_passive_income * BUFF_lambedor_de_coisas_passive_income) +
    (coisa_trabalhista_passive_income * BUFF_coisa_trabalhista_passive_income) +
    (fotosintese_de_coisa_passive_income * BUFF_fotosintese_de_coisa_passive_income)
    ;
}
let current_income = 0;
function update_coisas(){
    current_income = somando_totos_os_passive_income();
    coisas_$ += current_income;
    document.getElementById('score').innerHTML = (coisas_$).toFixed(1) ;
    document.getElementById('CPS').innerHTML = (current_income * 10).toFixed(1);
}

let aside_main = [ //CRIA ASIDE MAIN
    ["clickador de coisas",0.03,10,0,`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M0 55.2V426c0 12.2 9.9 22 22 22c6.3 0 12.4-2.7 16.6-7.5L121.2 346l58.1 116.3c7.9 15.8 27.1 22.2 42.9 14.3s22.2-27.1 14.3-42.9L179.8 320H297.9c12.2 0 22.1-9.9 22.1-22.1c0-6.3-2.7-12.3-7.4-16.5L38.6 37.9C34.3 34.1 28.9 32 23.2 32C10.4 32 0 42.4 0 55.2z"/></svg>`],
    ["lambedor de coisas",0.26,120,0,`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 256C0 368.9 73.1 464.7 174.5 498.8C165.3 484 160 466.6 160 448V400.7c-24-17.5-43.1-41.4-54.8-69.2c-5-11.8 7-22.5 19.3-18.7c39.7 12.2 84.5 19 131.8 19s92.1-6.8 131.8-19c12.3-3.8 24.3 6.9 19.3 18.7c-11.8 28-31.1 52-55.4 69.6V448c0 18.6-5.3 36-14.5 50.8C438.9 464.7 512 368.9 512 256C512 114.6 397.4 0 256 0S0 114.6 0 256zM116 141.1c0-9 9.6-14.7 17.5-10.5l89.9 47.9c10.7 5.7 10.7 21.1 0 26.8l-89.9 47.9c-7.9 4.2-17.5-1.5-17.5-10.5c0-2.8 1-5.5 2.8-7.6l36-43.2-36-43.2c-1.8-2.1-2.8-4.8-2.8-7.6zm262.5-10.5c7.9-4.2 17.5 1.5 17.5 10.5c0 2.8-1 5.5-2.8 7.6l-36 43.2 36 43.2c1.8 2.1 2.8 4.8 2.8 7.6c0 9-9.6 14.7-17.5 10.5l-89.9-47.9c-10.7-5.7-10.7-21.1 0-26.8l89.9-47.9zM320 448V402.6c0-14.7-11.9-26.6-26.6-26.6h-2c-11.3 0-21.1 7.9-23.6 18.9c-2.8 12.6-20.8 12.6-23.6 0c-2.5-11.1-12.3-18.9-23.6-18.9h-2c-14.7 0-26.6 11.9-26.6 26.6V448c0 35.3 28.7 64 64 64s64-28.7 64-64z"/></svg>`],
    ["coisa trabalhista",1,1000,0,`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M208 64a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM9.8 214.8c5.1-12.2 19.1-18 31.4-12.9L60.7 210l22.9-38.1C99.9 144.6 129.3 128 161 128c51.4 0 97 32.9 113.3 81.7l34.6 103.7 79.3 33.1 34.2-45.6c6.4-8.5 16.6-13.3 27.2-12.8s20.3 6.4 25.8 15.5l96 160c5.9 9.9 6.1 22.2 .4 32.2s-16.3 16.2-27.8 16.2H288c-11.1 0-21.4-5.7-27.2-15.2s-6.4-21.2-1.4-31.1l16-32c5.4-10.8 16.5-17.7 28.6-17.7h32l22.5-30L22.8 246.2c-12.2-5.1-18-19.1-12.9-31.4zm82.8 91.8l112 48c11.8 5 19.4 16.6 19.4 29.4v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V405.1l-60.6-26-37 111c-5.6 16.8-23.7 25.8-40.5 20.2S-3.9 486.6 1.6 469.9l48-144 11-33 32 13.7z"/></svg>`],
    ["fotosintese de coisa",12,5500,0,`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M512 32c0 113.6-84.6 207.5-194.2 222c-7.1-53.4-30.6-101.6-65.3-139.3C290.8 46.3 364 0 448 0h32c17.7 0 32 14.3 32 32zM0 96C0 78.3 14.3 64 32 64H64c123.7 0 224 100.3 224 224v32V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V320C100.3 320 0 219.7 0 96z"/></svg>`]];
window.onload = function(){
    let i = 0;
    aside_main.map((x)=>{
        document.getElementById('aside_main').innerHTML += `<div class="botao_aside" onclick="comprar_fazedores_de_coisas(${x[1]},${x[2]},'${x[0]}',${i});">
            <div class="esquerdo_botao_aside">
                <div class="esquerdo_esquerdo_botao_aside" id="esquerdo_esquerdo_botao_aside${i}">
                    
                </div>
                <div class="direito_esquerdo_botao_aside">
                    ${x[4]}
                </div>
            </div>
            <div class="direito_botao_aside">
                ${x[0]} (${x[2]})
            </div>
        </div>`;
        i++;
    });
}

function comprar_fazedores_de_coisas(income,cost,name_passive_income,index){
    if (coisas_$ >= cost){
        coisas_$ -= cost;
        passive_income(name_passive_income,income);
        aside_main[index][3] += 1;
        document.getElementById(`esquerdo_esquerdo_botao_aside${index}`).innerHTML = aside_main[index][3];

    } else{
        warning_for_not_enough_money();
    }
}
