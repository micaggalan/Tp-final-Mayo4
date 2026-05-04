const fecha = new Date("2026-06-25T20:00:00");

setInterval(() => {
  const ahora = new Date();
  const diff = fecha - ahora;

  const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diff / (1000 * 60)) % 60);
  const segundos = Math.floor((diff / 1000) % 60);

  document.getElementById("contador").innerText =
    `${dias}d ${horas}h ${minutos}m ${segundos}s`;
}, 1000);