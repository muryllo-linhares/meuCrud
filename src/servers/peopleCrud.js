import { API_URL } from "./configApi";

/* função para buscar todas as pessoas */
export async function getPeople() {
  const response = await fetch(`${API_URL}/people`);
  const data = await response.json();
  return data;
}

/* cria nova pessoa */
export async function createPerson(person) {

  const response = await fetch(`${API_URL}/people`, { 
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
   
    body: JSON.stringify(person) 
  });
  return response.json();
}

export async function updatePerson(id, person) {
  // Erro 3: Tinha um parenteses extra e aspas sobrando no final da URL
  const response = await fetch(`${API_URL}/people/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(person)
  });
  return response.json();
} 

/* deleta pessoa */

export async function deletePerson(id) {
  await fetch(`${API_URL}/people/${id}`, {
    method: "DELETE"
  });
}