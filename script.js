window.onload = function () {
  // Ouvrir Twitch
  window.location.href = "twitch://open/channel/world_al";

  // Ouvrir YouTube (avec un délai pour laisser le temps à l'application Twitch de s'ouvrir)
  setTimeout(function () {
    window.location.href = "vnd.youtube://watch?v=VIDEO_ID"; // Remplacez VIDEO_ID par l'ID de votre vidéo
  }, 5000); // Délai de 2 secondes
};
