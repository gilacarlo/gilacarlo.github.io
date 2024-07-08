let coisas_$ = 30000;
let clickador_de_coisas_passive_income = 0; let BUFF_clickador_de_coisas_passive_income = 1;
let lambedor_de_coisas_passive_income = 0; let BUFF_lambedor_de_coisas_passive_income = 1;
let coisa_trabalhista_passive_income = 0; let BUFF_coisa_trabalhista_passive_income = 1;
let fotosintese_de_coisa_passive_income = 0; let BUFF_fotosintese_de_coisa_passive_income = 1;
let BUFF_clickar_$ = 1;

let question = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M80 160c0-35.3 28.7-64 64-64h32c35.3 0 64 28.7 64 64v3.6c0 21.8-11.1 42.1-29.4 53.8l-42.2 27.1c-25.2 16.2-40.4 44.1-40.4 74V320c0 17.7 14.3 32 32 32s32-14.3 32-32v-1.4c0-8.2 4.2-15.8 11-20.2l42.2-27.1c36.6-23.6 58.8-64.1 58.8-107.7V160c0-70.7-57.3-128-128-128H144C73.3 32 16 89.3 16 160c0 17.7 14.3 32 32 32s32-14.3 32-32zm80 320a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"/></svg>`;
let svg_minus1 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M0 192H176V0H160C71.6 0 0 71.6 0 160v32zm0 32V352c0 88.4 71.6 160 160 160h64c88.4 0 160-71.6 160-160V224H192 0zm384-32V160C384 71.6 312.4 0 224 0H208V192H384z"/></svg>`;
let svg_0 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M0 55.2V426c0 12.2 9.9 22 22 22c6.3 0 12.4-2.7 16.6-7.5L121.2 346l58.1 116.3c7.9 15.8 27.1 22.2 42.9 14.3s22.2-27.1 14.3-42.9L179.8 320H297.9c12.2 0 22.1-9.9 22.1-22.1c0-6.3-2.7-12.3-7.4-16.5L38.6 37.9C34.3 34.1 28.9 32 23.2 32C10.4 32 0 42.4 0 55.2z"/></svg>`
let svg_1 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 256C0 368.9 73.1 464.7 174.5 498.8C165.3 484 160 466.6 160 448V400.7c-24-17.5-43.1-41.4-54.8-69.2c-5-11.8 7-22.5 19.3-18.7c39.7 12.2 84.5 19 131.8 19s92.1-6.8 131.8-19c12.3-3.8 24.3 6.9 19.3 18.7c-11.8 28-31.1 52-55.4 69.6V448c0 18.6-5.3 36-14.5 50.8C438.9 464.7 512 368.9 512 256C512 114.6 397.4 0 256 0S0 114.6 0 256zM116 141.1c0-9 9.6-14.7 17.5-10.5l89.9 47.9c10.7 5.7 10.7 21.1 0 26.8l-89.9 47.9c-7.9 4.2-17.5-1.5-17.5-10.5c0-2.8 1-5.5 2.8-7.6l36-43.2-36-43.2c-1.8-2.1-2.8-4.8-2.8-7.6zm262.5-10.5c7.9-4.2 17.5 1.5 17.5 10.5c0 2.8-1 5.5-2.8 7.6l-36 43.2 36 43.2c1.8 2.1 2.8 4.8 2.8 7.6c0 9-9.6 14.7-17.5 10.5l-89.9-47.9c-10.7-5.7-10.7-21.1 0-26.8l89.9-47.9zM320 448V402.6c0-14.7-11.9-26.6-26.6-26.6h-2c-11.3 0-21.1 7.9-23.6 18.9c-2.8 12.6-20.8 12.6-23.6 0c-2.5-11.1-12.3-18.9-23.6-18.9h-2c-14.7 0-26.6 11.9-26.6 26.6V448c0 35.3 28.7 64 64 64s64-28.7 64-64z"/></svg>`;
let svg_2 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M208 64a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM9.8 214.8c5.1-12.2 19.1-18 31.4-12.9L60.7 210l22.9-38.1C99.9 144.6 129.3 128 161 128c51.4 0 97 32.9 113.3 81.7l34.6 103.7 79.3 33.1 34.2-45.6c6.4-8.5 16.6-13.3 27.2-12.8s20.3 6.4 25.8 15.5l96 160c5.9 9.9 6.1 22.2 .4 32.2s-16.3 16.2-27.8 16.2H288c-11.1 0-21.4-5.7-27.2-15.2s-6.4-21.2-1.4-31.1l16-32c5.4-10.8 16.5-17.7 28.6-17.7h32l22.5-30L22.8 246.2c-12.2-5.1-18-19.1-12.9-31.4zm82.8 91.8l112 48c11.8 5 19.4 16.6 19.4 29.4v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V405.1l-60.6-26-37 111c-5.6 16.8-23.7 25.8-40.5 20.2S-3.9 486.6 1.6 469.9l48-144 11-33 32 13.7z"/></svg>`;
let svg_3 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M512 32c0 113.6-84.6 207.5-194.2 222c-7.1-53.4-30.6-101.6-65.3-139.3C290.8 46.3 364 0 448 0h32c17.7 0 32 14.3 32 32zM0 96C0 78.3 14.3 64 32 64H64c123.7 0 224 100.3 224 224v32V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V320C100.3 320 0 219.7 0 96z"/></svg>`;


function num_aleatorio(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function passive_income(name_passive_income,income){
    switch (name_passive_income){
        case "clickador de coisas":
            clickador_de_coisas_passive_income += income;
            appear_arrow_structure();
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
            BUFF_clickar_$ *= the_buff;
            break;
        case "Clickador":
            BUFF_clickador_de_coisas_passive_income *= the_buff;
            break;
        case "Lambedor":
            BUFF_lambedor_de_coisas_passive_income *= the_buff;
            break;
        case "Trabalhista":
            BUFF_coisa_trabalhista_passive_income *= the_buff;
            break;
        case "Fotosintese":
            BUFF_fotosintese_de_coisa_passive_income *= the_buff;
            break;
        default:
            console.log("algo errado no passive_income");
            break;
    }
}

setInterval(see_new_upgrades, 150);

let index_last_upgrade = 0; // CRIA ASIDE UPGRADE
let lista_last_upgrade = [
    [120,"Click +100%",2,"Click"],[200,"Clickador +100%",2,"Clickador"],[300,"Click +100%",2,"Click"],
    [450,"Click +100%",2,"Click"],[500,"Clickador +100%",2,"Clickador"],[750,"Click +100%",2,"Click"],
    [800,"Clickador +100%",2,"Clickador"],[1000,"Lambedor +50%",1.5,"Lambedor"],[1100,"Click X4",4,"Click"],
    [1500,"Lambedor +50%",1.5,"Lambedor"],[1550,"Clickador +100%",2,"Clickador"],[1600,"Trabalhista +50%",1.5,"Trabalhista"],
    [4000,"Lambedor X2",2,"Lambedor"],[6000,"Click X4",4,"Click"],[8000,"Fotosintese +50%",1.5,"Fotosintese"],
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
        <div class="text_svg_show_new_upgrade">
            ${lista_last_upgrade[index_last_upgrade][1]}
            (${lista_last_upgrade[index_last_upgrade][0]})
        </div>
        <div class="svg_show_new_upgrade" id="svg_show_new_upgrade${index_last_upgrade}">${svg_show_new_upgrade(lista_last_upgrade[index_last_upgrade][3])}</div>
    </div>`;  
}
function svg_show_new_upgrade(the_svg){
    switch (the_svg){
        case "Click":
            return svg_minus1;
            break;
        case "Clickador":
            return svg_0;
            break;
        case "Lambedor":
            return svg_1;
            break;
        case "Trabalhista":
            return svg_2;
            break;
        case "Fotosintese":
            return svg_3;
            break;
        default:
            console.log("algo errado no svg_show_new_upgrade");
            break;
    }
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
setInterval(update_coisas, 10);
let current_income = 0;
function update_coisas(){
    current_income = somando_totos_os_passive_income();
    coisas_$ += current_income * 0.1;
    document.getElementById('score').innerHTML = (coisas_$).toFixed(1) ;
    document.getElementById('CPS').innerHTML = (current_income * 10).toFixed(1);
}

let aside_main = [ //CRIA ASIDE MAIN
    ["clickador de coisas",0.03,10,"",svg_0],
    ["lambedor de coisas",0.22,120,"",svg_1],
    ["coisa trabalhista",1.1,1000,"",svg_2],
    ["fotosintese de coisa",12,5500,"",svg_3]];

fazer_aside_main();
function fazer_aside_main(){
    let i = 0;
    document.getElementById('aside_main').innerHTML = ``;
    aside_main.map((x)=>{
        document.getElementById('aside_main').innerHTML += `<div class="botao_aside" onclick="comprar_fazedores_de_coisas(${x[1]},${x[2]},'${x[0]}',${i});">
            <div class="esquerdo_botao_aside">
                <div class="esquerdo_esquerdo_botao_aside" id="esquerdo_esquerdo_botao_aside${i}">
                    ${x[3]}
                </div>
                <div class="direito_esquerdo_botao_aside">
                    ${x[4]}
                </div>
            </div>
            <div class="direito_botao_aside" id="direito_botao_aside${i}">
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

        aside_main[index][3] = Number(aside_main[index][3]) + 1;
        aside_main[index][2] = (Number(aside_main[index][2]) + (0.1 * Number(aside_main[index][2]))).toFixed(0);

        fazer_aside_main();     
    } else{
        warning_for_not_enough_money();
    }
}
