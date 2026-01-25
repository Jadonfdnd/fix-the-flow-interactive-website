**SnappThis - Detailpagina Interactie**
Voor dit project heb ik gewerkt aan de detailpagina van SnappThis. De focus lag op het creëren van een vloeiende gebruikerservaring door middel van micro-interacties en een responsive design.

**Beschrijving**
Het ontwerpprobleem was dat de interactie bij het liken van een foto vaak saai aanvoelt. De oplossing die ik heb gemaakt, is een interactieve Heart-knop met directe feedback.

De Interactie
Wanneer een gebruiker op het hart-icoon klikt, verandert deze van kleur (wit naar groen) en voert een subtiele 'pop'-animatie uit.

Feedback: De kleurverandering en de heart-pop animatie laten de gebruiker direct weten dat de actie is geslaagd.

Feedforward: Bij een hover over de button schaalt het icoon licht op en verandert de cursor in een pointer, wat aangeeft dat het element klikbaar is.

<img width="435" height="316" alt="image" src="https://github.com/user-attachments/assets/22c63797-6ddb-43ea-b640-703808be35bd" />
<img width="159" height="101" alt="image" src="https://github.com/user-attachments/assets/f3930d9b-4e88-4e2e-aa75-9c92c9e68581" />





**Kenmerken**
De pagina is opgebouwd met een sterke focus op  responsiveness.

**HTML Structuur**
De basis bestaat uit een header, main en nav.

In de Header zijn de actieknoppen (zoals de Heart-button) geplaatst binnen form elementen voor semantiek.

De Main sectie bevat de afbeelding en een metadata-wrapper voor tags en de datum.

De Nav werkt als een tab bar onderaan het scherm, zoals gebruikelijk in mobiele apps.

Belangrijke CSS
Ik heb gebruik gemaakt van CSS Grid voor de layout van zowel de header als de main content.

Responsiveness: Met Media Queries verandert de layout van een verticale mobiele weergave naar een split-screen weergave op schermen breder dan 678px.

Animaties: De heart-pop keyframes zorgen voor een schaaleffect:

**JavaScript Functionaliteit**
In het bestand scripts/test.js  wordt de interactie afgehandeld. Wanneer de gebruiker op de .like-button klikt, wordt de class .liked toegevoegd aan het SVG-element. Dit triggert de CSS-animatie en de kleurverandering naar groen, dus het 3 stappenplan.
