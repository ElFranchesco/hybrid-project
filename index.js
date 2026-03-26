const axios = require('axios');

async function getData() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
    console.log("Respuesta de la API:");
    console.log(response.data);
  } catch (error) {
    console.error("Error en la petición:", error.message);
  }
}

getData();
console.log("Hola desde WSL 🚀");
