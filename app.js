// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let secretFriends = [];

const agregarAmigo = () => 
{
    let friendName = document.getElementById("amigo").value.trim();

    if (friendName === "") {
        alert("Por favor, inserte un nombre.");
        
        return;
    }

    if (friendName.length > 45) {
        alert("Por favor, inserte un nombre vàlido.");
        document.getElementById("amigo").value = "";
        return;
    }

    if (secretFriends.includes(friendName)) {
        alert("Este nombre ya está en la lista.");
        document.getElementById("amigo").value = "";
        return;
    }

    secretFriends.push(friendName);
    document.getElementById("amigo").value = "";
    showFriendsList();
}
  

const showFriendsList = () => 
{
    let friendsList = document.getElementById("listaAmigos");
    friendsList.innerHTML = ""; 

    for (let i = 0; i < secretFriends.length; i++) 
    {
        let listItem = document.createElement("li");
        listItem.textContent = secretFriends[i];
        friendsList.appendChild(listItem);
    }
  }
  
const sortearAmigo = () => 
{
    if (secretFriends.length === 0) {
        alert("Por favor, agregue amigos antes de sortear.");
        return;
    }

    let randomIndex = Math.floor(Math.random() * secretFriends.length);
    let selectedFriend = secretFriends[randomIndex];
    let resultElement = document.getElementById("resultado");
    resultElement.innerHTML = `<li>El amigo secreto es: ${selectedFriend}</li>`;
}