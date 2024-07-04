let state_aside_in_out = 0;

function aside_in_out(){
    const ASIDE_aside_in_out = document.getElementById('aside');
    const ASIDE_ASIDE_MAIN_aside_in_out = document.getElementById('aside_main');
    const ASIDE_ASIDE_UPGRADE_aside_in_out = document.getElementById('aside_upgrade');

    if (state_aside_in_out == 0){
        state_aside_in_out = 1;
        ASIDE_aside_in_out.style.right = "var(--ASIDE_aside_in_outstyleright)";
        ASIDE_aside_in_out.style.backgroundColor = "transparent";
        ASIDE_ASIDE_MAIN_aside_in_out.style.display = "none";
        ASIDE_ASIDE_UPGRADE_aside_in_out.style.display = "none";

    } else {
        state_aside_in_out = 0;
        ASIDE_aside_in_out.style.right = "0px";
        ASIDE_aside_in_out.style.backgroundColor = "var(--background_color)";
        ASIDE_ASIDE_MAIN_aside_in_out.style.display = "flex";
        ASIDE_ASIDE_UPGRADE_aside_in_out.style.display = "flex";


    }
}

function warning_for_not_enough_money() {
    const warning = document.getElementById('warning');
}

function excluir_botao_aside_upgrade(id) {
    const botao_aside_upgrade = document.getElementById(id);
    botao_aside_upgrade.style.display = "none";
}