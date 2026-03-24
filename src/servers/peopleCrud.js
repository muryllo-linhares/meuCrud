import {API_URL} from "./configApi";

/* 
função para buscar todas as pessoas
*/

export async function getPeople(){

//requisição get 
const response = await fetch(`${API_URL}/people`);

// converte a resposta para json
const data = await response.json();

return data;
}