window.onload = function () {
  // Ouvrir Twitch
  window.location.href = "twitch://open/open?stream=world_al";

  // Ouvrir YouTube (avec un délai pour laisser le temps à l'application Twitch de s'ouvrir)
  setTimeout(function () {
    window.location.href = "vnd.youtube://watch?v=VIDEO_ID"; // Remplacez VIDEO_ID par l'ID de votre vidéo
  }, 5000); // Délai de 2 secondes
};

document.addEventListener("DOMContentLoaded", function () {
  var calendarEl = document.getElementById("calendar");

  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: "dayGridMonth",
    events: function (fetchInfo, successCallback, failureCallback) {
      fetch(
        "https://api.twitch.tv/helix/schedule/icalendar?broadcaster_id=95425712"
      )
        .then((response) => response.text())
        .then((icalData) => {
          // Ici, vous devez parser le contenu iCal pour extraire les événements
          // Il existe des bibliothèques JavaScript pour parser les fichiers iCal
          // Par exemple, ical.js
          // Une fois les événements extraits, vous les mettez dans un tableau au format FullCalendar
          var events = [];
          // ... (code pour parser le fichier iCal et remplir le tableau events)
          successCallback(events);
        })
        .catch((error) => {
          failureCallback(error);
        });
    },
  });

  calendar.render();
});
