function enviarMensaje() {
  const entrada = document.getElementById('entrada');
  const mensaje = entrada.value.trim();
  if (mensaje === '') return;

  const chatBox = document.getElementById('chat-box');

  // Mensaje del usuario
  const mensajeUsuario = document.createElement('div');
  mensajeUsuario.classList.add('mensaje', 'usuario');
  mensajeUsuario.innerHTML = `<p>${mensaje}</p>`;
  chatBox.appendChild(mensajeUsuario);

  // Respuesta de Pazy
  const mensajeBot = document.createElement('div');
  mensajeBot.classList.add('mensaje', 'bot');
  mensajeBot.innerHTML = `
    <img src="IMG/hablar.png" alt="Pazy">
    <p>${responder(mensaje)}</p>
  `;
  chatBox.appendChild(mensajeBot);

  entrada.value = '';
  chatBox.scrollTop = chatBox.scrollHeight;
}

function responder(pregunta) {
  pregunta = pregunta.toLowerCase();

  if (pregunta.includes('paz')) {
    return "La paz es convivir con respeto, amor y armonía 💖";
  } else if (pregunta.includes('violencia')) {
    return "La violencia nunca es la solución, hablemos siempre con respeto.";
  } else if (pregunta.includes('valores')) {
    return "Los valores como el respeto y la empatía construyen paz 🕊️";
  } else if (pregunta.includes('respeto')) {
    return "El respeto es la base para una convivencia pacífica.";
  } else if (pregunta.includes('amor')) {
    return "El amor nos une y ayuda a resolver conflictos de forma pacífica.";
  } else if (pregunta.includes('tolerancia')) {
    return "La tolerancia nos enseña a aceptar las diferencias con comprensión.";
  } else if (pregunta.includes('diálogo')) {
    return "El diálogo es fundamental para entender y resolver problemas.";
  } else if (pregunta.includes('amistad')) {
    return "La amistad fortalece la paz y el respeto entre las personas.";
  } else if (pregunta.includes('empatia') || pregunta.includes('empatía')) {
    return "La empatía nos permite ponernos en el lugar del otro.";
  } else if (pregunta.includes('conflicto')) {
    return "Los conflictos se pueden resolver con comunicación y respeto.";
  } else if (pregunta.includes('unidad')) {
    return "La unidad nos hace más fuertes para construir un mundo mejor.";
  } else if (pregunta.includes('ayuda')) {
    return "Ayudar a los demás es un acto de paz y amor.";
  } else if (pregunta.includes('perdón')) {
    return "Perdonar libera el corazón y permite avanzar en paz.";
  } else if (pregunta.includes('solidaridad')) {
    return "La solidaridad nos conecta y nos hace más humanos.";
  } else if (pregunta.includes('justicia')) {
    return "La justicia asegura que todos vivamos con igualdad y respeto.";
  } else if (pregunta.includes('cultura')) {
    return "La cultura de paz promueve la convivencia y el respeto mutuo.";
  } else if (pregunta.includes('esperanza')) {
    return "La esperanza nos motiva a seguir construyendo un futuro mejor.";
  } else if (pregunta.includes('niños')) {
    return "Los niños son los principales mensajeros de paz en el mundo.";
  } else if (pregunta.includes('familia')) {
    return "La familia es el primer espacio donde aprendemos a vivir en paz.";
  } else if (pregunta.includes('educación')) {
    return "La educación es la llave para formar ciudadanos de paz.";
  } else if (pregunta.includes('guerras')) {
    return "La paz es la mejor forma de evitar guerras y construir un mundo mejor.";
  } else if (pregunta.includes('historia') || pregunta.includes('histórico')) {
    return "En la historia, la paz ha sido clave para reconstruir naciones y sanar heridas.";
  } else if (pregunta.includes('costa rica')) {
    return "Costa Rica es un ejemplo mundial de paz, pues abolió su ejército en 1948.";
  } else if (pregunta.includes('abolió ejército') || pregunta.includes('sin ejército')) {
    return "Costa Rica decidió no tener ejército para invertir en educación y salud, fomentando la paz.";
  } else if (pregunta.includes('confianza')) {
    return "La confianza entre personas fortalece la convivencia pacífica.";
  } else if (pregunta.includes('comunidad')) {
    return "Una comunidad unida puede construir paz y resolver problemas juntos.";
  } else if (pregunta.includes('mediación')) {
    return "La mediación es una herramienta para resolver conflictos sin violencia.";
  } else if (pregunta.includes('respirar')) {
    return "Respirar profundo ayuda a calmar el corazón y pensar con paz.";
  } else if (pregunta.includes('naturaleza')) {
    return "Cuidar la naturaleza también es un acto de paz con nuestro planeta.";
  } else if (pregunta.includes('amistad')) {
    return "La amistad verdadera se basa en respeto y apoyo mutuo.";
  } else if (pregunta.includes('comunicación')) {
    return "Comunicar con honestidad y respeto es clave para la paz.";
  } else if (pregunta.includes('acción')) {
    return "Cada acción positiva contribuye a un mundo más pacífico.";
  } else {
    return "¿Quieres saber más sobre la cultura de paz?";
  }
}

