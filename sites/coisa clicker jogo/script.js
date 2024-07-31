let coisas_$ = 0;
let clickador_de_coisas_passive_income = 0; let BUFF_clickador_de_coisas_passive_income = 1;
let lambedor_de_coisas_passive_income = 0; let BUFF_lambedor_de_coisas_passive_income = 1;
let coisa_trabalhista_passive_income = 0; let BUFF_coisa_trabalhista_passive_income = 1;
let fotosintese_de_coisa_passive_income = 0; let BUFF_fotosintese_de_coisa_passive_income = 1;
let BUFF_clickar_$ = 1;

let question = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M80 160c0-35.3 28.7-64 64-64h32c35.3 0 64 28.7 64 64v3.6c0 21.8-11.1 42.1-29.4 53.8l-42.2 27.1c-25.2 16.2-40.4 44.1-40.4 74V320c0 17.7 14.3 32 32 32s32-14.3 32-32v-1.4c0-8.2 4.2-15.8 11-20.2l42.2-27.1c36.6-23.6 58.8-64.1 58.8-107.7V160c0-70.7-57.3-128-128-128H144C73.3 32 16 89.3 16 160c0 17.7 14.3 32 32 32s32-14.3 32-32zm80 320a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"/></svg>`;
let svg_minus1 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M0 192H176V0H160C71.6 0 0 71.6 0 160v32zm0 32V352c0 88.4 71.6 160 160 160h64c88.4 0 160-71.6 160-160V224H192 0zm384-32V160C384 71.6 312.4 0 224 0H208V192H384z"/></svg>`;
let svg_0 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M0 55.2V426c0 12.2 9.9 22 22 22c6.3 0 12.4-2.7 16.6-7.5L121.2 346l58.1 116.3c7.9 15.8 27.1 22.2 42.9 14.3s22.2-27.1 14.3-42.9L179.8 320H297.9c12.2 0 22.1-9.9 22.1-22.1c0-6.3-2.7-12.3-7.4-16.5L38.6 37.9C34.3 34.1 28.9 32 23.2 32C10.4 32 0 42.4 0 55.2z"/></svg>`
let svg_1 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M5.8 309.7C2 292.7 0 275.5 0 258.3 0 135 99.8 35 223.1 35c16.6 0 33.3 2 49.3 5.5C149 87.5 51.9 186 5.8 309.7zm392.9-189.2C385 103 369 87.8 350.9 75.2c-149.6 44.3-266.3 162.1-309.7 312 12.5 18.1 28 35.6 45.2 49 43.1-151.3 161.2-271.7 312.3-315.7zm15.8 252.7c15.2-25.1 25.4-53.7 29.5-82.8-79.4 42.9-145 110.6-187.6 190.3 30-4.4 58.9-15.3 84.6-31.3 35 13.1 70.9 24.3 107 33.6-9.3-36.5-20.4-74.5-33.5-109.8zm29.7-145.5c-2.6-19.5-7.9-38.7-15.8-56.8C290.5 216.7 182 327.5 137.1 466c18.1 7.6 37 12.5 56.6 15.2C240 367.1 330.5 274.4 444.2 227.7z"/></svg>`;
let svg_2 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M208 64a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM9.8 214.8c5.1-12.2 19.1-18 31.4-12.9L60.7 210l22.9-38.1C99.9 144.6 129.3 128 161 128c51.4 0 97 32.9 113.3 81.7l34.6 103.7 79.3 33.1 34.2-45.6c6.4-8.5 16.6-13.3 27.2-12.8s20.3 6.4 25.8 15.5l96 160c5.9 9.9 6.1 22.2 .4 32.2s-16.3 16.2-27.8 16.2H288c-11.1 0-21.4-5.7-27.2-15.2s-6.4-21.2-1.4-31.1l16-32c5.4-10.8 16.5-17.7 28.6-17.7h32l22.5-30L22.8 246.2c-12.2-5.1-18-19.1-12.9-31.4zm82.8 91.8l112 48c11.8 5 19.4 16.6 19.4 29.4v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V405.1l-60.6-26-37 111c-5.6 16.8-23.7 25.8-40.5 20.2S-3.9 486.6 1.6 469.9l48-144 11-33 32 13.7z"/></svg>`;
let svg_3 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M512 32c0 113.6-84.6 207.5-194.2 222c-7.1-53.4-30.6-101.6-65.3-139.3C290.8 46.3 364 0 448 0h32c17.7 0 32 14.3 32 32zM0 96C0 78.3 14.3 64 32 64H64c123.7 0 224 100.3 224 224v32V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V320C100.3 320 0 219.7 0 96z"/></svg>`;



function num_aleatorio(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function Number_Display_Simplified(the_number,tofixed_quantity){
    if(the_number >= 1000000000){
        var Simplified_simble_of_number = "B"; 
        var How_much_have_to_simplifie = 1000000000;   

    }else if(the_number >= 1000000){
        var Simplified_simble_of_number = "M"; 
        var How_much_have_to_simplifie = 1000000;   

    }else if(the_number >= 1000){
        var Simplified_simble_of_number = "K";         
        var How_much_have_to_simplifie = 1000;   

    }else{
        var Simplified_simble_of_number = "";         
        var How_much_have_to_simplifie = 1;    

    }

    return (the_number / How_much_have_to_simplifie).toFixed(tofixed_quantity) + Simplified_simble_of_number;
}


function passive_income(name_passive_income,income){
    switch (name_passive_income){
        case "clickador de coisas":
            clickador_de_coisas_passive_income += income;
            appear_arrow_structure();
            break;
        case "Comeia de coisas":
            lambedor_de_coisas_passive_income += income;
            appear_honey_structure();
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
        case "Comeia":
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


let index_last_upgrade = 0; // CRIA ASIDE UPGRADE
let lista_last_upgrade = [
    [120,"Click +100%",2,"Click"],[200,"Clickador +100%",2,"Clickador"],
    [450,"Click +100%",2,"Click"],[500,"Clickador X2",2,"Clickador"],
    [1000,"Comeia +50%",1.5,"Comeia"],[1100,"Click X4",4,"Click"],
    [2000,"Comeia +50%",1.5,"Comeia"],[1550,"Clickador +100%",2,"Clickador"],[4000,"Comeia X2",2,"Comeia"],
    [6000,"Click X6",6,"Click"],[10000,"Trabalhista X3",3,"Trabalhista"],
    [30000,"Fotosintese +50%",1.5,"Fotosintese"],
    [50000,"Click X10",10,"Click"],[100000,"Fotosintese X2",2,"Fotosintese"],
    [Infinity]
];

function see_new_upgrades(){
    while(coisas_$ > lista_last_upgrade[index_last_upgrade][0]){
        show_new_upgrade();
        index_last_upgrade++;
    }
}
function show_new_upgrade(){
    document.getElementById('aside_upgrade').innerHTML += `<div class="botao_aside_upgrade ${lista_last_upgrade[index_last_upgrade][3]}" id="${index_last_upgrade}" onclick=";
    comprar_upgrades(${lista_last_upgrade[index_last_upgrade][0]} , ${lista_last_upgrade[index_last_upgrade][2]} , ${index_last_upgrade} , '${lista_last_upgrade[index_last_upgrade][3]}');">
        <div class="text_svg_show_new_upgrade">
            ${lista_last_upgrade[index_last_upgrade][1]}
            (${Number_Display_Simplified(lista_last_upgrade[index_last_upgrade][0],0)})
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
        case "Comeia":
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
let current_income = 0;
function update_coisas(){
    current_income = somando_totos_os_passive_income();
    coisas_$ += current_income * 0.1;
    document.getElementById('score').innerHTML = Number_Display_Simplified(coisas_$,2) ;
    document.getElementById('CPS').innerHTML = Number_Display_Simplified(current_income * 10,1);
}

let aside_main = [ //CRIA ASIDE MAIN
    ["clickador de coisas",0.03,10,"",svg_0],
    ["Comeia de coisas",0.22,120,"",svg_1],
    ["coisa trabalhista",1.4,1800,"",svg_2],
    ["fotosintese de coisa",10,15000,"",svg_3]
];

let mcfdc_botao_aside_anterior = 1;
let mcfdc_botao_aside_now = 1;

fazer_aside_main();
function fazer_aside_main(){
    let i = 0;
    document.getElementById('aside_main').innerHTML = 
    `<div class="multiplicador_comprar_fazedores_de_coisas_botao_aside" id="">
        <div class="content_mcfdc_botao_aside" id="content_mcfdc_botao_aside${1}" onclick="mudar_mcfdc_botao_aside(${1});">
            1
        </div>
        <div class="content_mcfdc_botao_aside" id="content_mcfdc_botao_aside${10}" onclick="mudar_mcfdc_botao_aside(${10});">
            10
        </div>
        <div class="content_mcfdc_botao_aside" id="content_mcfdc_botao_aside${100}" onclick="mudar_mcfdc_botao_aside(${100});">
            100
        </div>
    </div>`;
    mudar_mcfdc_botao_aside(mcfdc_botao_aside_now)

    aside_main.map((x)=>{
        document.getElementById('aside_main').innerHTML += `<div class="botao_aside" onclick="comprar_fazedores_de_coisas(${x[1]},'${x[0]}',${i });">
            <div class="esquerdo_botao_aside">
                <div class="esquerdo_esquerdo_botao_aside" id="esquerdo_esquerdo_botao_aside${i }">
                    ${x[3]}
                </div>
                <div class="direito_esquerdo_botao_aside">
                    ${x[4]}
                </div>
            </div>
            <div class="direito_botao_aside" id="direito_botao_aside${i }">
                ${x[0]} (${Number_Display_Simplified(x[2],1)})
            </div>
        </div>`;
        i++;
    });
}

const mcfdc_botao_aside = document.getElementById(`content_mcfdc_botao_aside${1}`);
mcfdc_botao_aside.style.backgroundColor = "whitesmoke";
mcfdc_botao_aside.style.color = "black";

function mudar_mcfdc_botao_aside(multiplicador_mcfdc_botao_aside){

    const mcfdc_botao_aside_anteiror = document.getElementById(`content_mcfdc_botao_aside${mcfdc_botao_aside_anterior}`);
    mcfdc_botao_aside_anteiror.style.backgroundColor = "#ffffff60";
    mcfdc_botao_aside_anteiror.style.color = "white";
    mcfdc_botao_aside_anterior = multiplicador_mcfdc_botao_aside;

    const mcfdc_botao_aside = document.getElementById(`content_mcfdc_botao_aside${multiplicador_mcfdc_botao_aside}`);
    mcfdc_botao_aside.style.backgroundColor = "whitesmoke";
    mcfdc_botao_aside.style.color = "black";

    mcfdc_botao_aside_now = multiplicador_mcfdc_botao_aside;
    
    
}


function comprar_fazedores_de_coisas(income,name_passive_income,index){
    for (let i5 = 1; i5 <= mcfdc_botao_aside_now; i5++){
        if (coisas_$ >= Number(aside_main[index][2])){
            coisas_$ -= Number(aside_main[index][2]);
            passive_income(name_passive_income,income);
    
            aside_main[index][3] = Number(aside_main[index][3]) + 1;
            aside_main[index][2] = (Number(aside_main[index][2]) + (0.08 * Number(aside_main[index][2]))).toFixed(0);
    
            see_new_upgrades();
            fazer_aside_main();   
        } else{
            warning_for_not_enough_money();
        }
    }
    
}
