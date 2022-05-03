for (let i = 11; i > 8; i--) {
    const encabezado = document.createElement("strong");
    encabezado.textContent = `La tabla del ${i}:`;
    document.body.appendChild(encabezado);
    const tabla = document.createElement("ol");
    document.body.appendChild(tabla);
  
  
    for (let j = 1; j < 10; j++) {
      let li = document.createElement('li');
      li.textContent = `${i} x ${j}: ${i*j}`;
      tabla.appendChild(li);
  
    };
    const linea = document.createElement("br");
    document.body.appendChild(linea);
  };