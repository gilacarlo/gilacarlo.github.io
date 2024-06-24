



const apiLinkIBGE = "https://servicodados.ibge.gov.br/api/v1/localidades/estados";
const uf = document.getElementById("uf");
const cidade = document.getElementById("cidade");
const paises = document.getElementById("paises");


window.onload = function(){

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/paises"+"?orderBy=nome")
        .then(resp => resp.json())
        .then(json => {
            json.forEach( function(pais){
                paises.innerHTML += `<option value="${pais.id.M49}">${pais.nome}</option>`;
            })
        })
}

paises.addEventListener("change", function(){

    if(paises.value === "76"){
        
        fetch(apiLinkIBGE+"?orderBy=nome")
            .then(resp => resp.json())
            .then(json => {
                json.forEach( function(estado){
                    uf.innerHTML += `<option value="${estado.id}">${estado.nome}</option>`;
                })
            })
    }else{
        uf.innerHTML='<option value="0" disabled>Selecione</option>';
        cidade.innerHTML='<option value="0" disabled>Selecione</option>';
    }

})
    



uf.addEventListener("change", function(){
    cidade.innerHTML='<option value="0" disabled>Selecione</option>';
    fetch(apiLinkIBGE + "/" + uf.value + "/municipios"+"?orderBy=nome")
        .then(resp => resp.json())
        .then(json => {
            json.forEach( function(municipio){
                cidade.innerHTML += `<option value="${municipio.id}">${municipio.nome}</option>`;
            })
        })
})