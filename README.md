**Short synopsis of the webpage (1-6).**
  1.The landing page has a small logo and two boxes (below). One for registering a new user and one for signing in.
  ![Screenshot 2024-03-24 014530](https://github.com/TiiVii/vite/assets/111729213/7d4ea401-2c8c-444f-af68-746f3b250655)
  
  2.After a successful registering the website shows a popup to let the user know about it (below).
  ![Screenshot 2024-03-24 014610](https://github.com/TiiVii/vite/assets/111729213/43d3d4dd-98c3-45b1-a86e-40491523cd45)
  
  3.In the home page user can choose either to logout (top left corner) or 
  choose between making a new entry or looking through old entries from the buttons (below).
  ![Screenshot 2024-03-24 020142](https://github.com/TiiVii/vite/assets/111729213/09e50876-d8f4-4917-a20d-547fb0bea350)
  
  4.If the user chooses to see their previous entries, they can also choose to either edit or to delete the past entries (below). 
  From the top navigation the user can also choose to goback to the home page or to log out.
  ![Screenshot 2024-03-24 015815](https://github.com/TiiVii/vite/assets/111729213/e949da0c-71f4-4007-829d-956f9e42eb85)
  
  5.For choosing to edit or to entry old entries a pop up asks for the entry id (below).
  ![Screenshot 2024-03-24 015849](https://github.com/TiiVii/vite/assets/111729213/e1162db7-633d-423e-abc0-0f90fa60978b)
  
  6.Choosing to add a new entry on the home page, a popup will ask to give the needed information (below).
  ![Screenshot 2024-03-24 020221](https://github.com/TiiVii/vite/assets/111729213/833d1285-152c-440d-8060-91f970aa405e)

**Database.**
  As seen from the below picture, the database HealthDiary has two tables: feelingEntries and users. user_id was a primary key for "users" table and entry_id was the primary key in "feelingEntries". 
  In "users" table email and username had to be unique for a successful registering. user_id was the foreing key.
  ![Screenshot 2024-03-24 023705](https://github.com/TiiVii/vite/assets/111729213/4ecf5da1-ca1e-42ea-8dbf-494d775bdc23)

**The used graphics.**
  - The background for the website was taken from here: 
    https://www.publicdomainpictures.net/en/view-image.php?image=465082&picture=stripe-pattern-retro-background
  - The logo on the landing page was taken from asking Bings Copilot to "create a colorful retro logo".

**Used functions.**
  - popups and spans to close them
  - responsive webpage (@media only screen and *max-width:768px)
  - adding, editing and deleting from the database
  - recognise basic errord (500, 404, 400, 401)
  - FE: float, hover, active, hamburger-menu, background fixed

**Possible bugs or issues.**
  - It is not specified about what kind of error occurs when registering or login fails to the user.

**CHECK**
linkki julkaistuun sovellukseen (front-end)
linkki käytössä olevaan back-end-sovellukseen/APIin
linkki API-dokumentaatioon (apidoc)
listaus ja kuvaus kaikista toiminnallisuuksista, mitä olet toteuttanut
mahdolliset tiedossa olevat bugit/ongelmat
