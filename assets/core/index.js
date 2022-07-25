(function(){
"use strict";
const nowPaymentApiKey = "FFW7176-YJHM50Y-HZZTY9S-S2KNAE4";

async function getData(url = '') {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
   // mode: 'cors', // no-cors, *cors, same-origin
   // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'x-api-key': nowPaymentApiKey
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer'//, // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    //body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}
//const query = "merchant/coins";
const query = "estimate?amount=100&currency_from=usd&currency_to=DOGE";

/* getData('https://api.nowpayments.io/v1/' + query)
  .then(data => {
    console.log(data); // JSON data parsed by `data.json()` call
  }); */


const txtBankObj = {
    "PL": {
        "alert": {
            "name":{
                "local": "Podreczna Baza Danych",
                "dbxFile": "Baza Danych na Dropbox",
                "localFile": "Zapasowy plik Bazy Danych"
            },
            "offline": {
                "q": "Nie moge polaczyc z chmura.<br><br>Wyglada na to, ze nie masz polaczenia s internetem.",
                "y": null,
                "n": "W porzadku, rozumiem."
            },
            "deleteVendor": {
                "q": "Czy na pewno usunac ${ vName }?",
                "y": "Tak, Ostatecznie!",
                "n": "Nie! To byla pomylka!",
                "i": "trashBin"
            },
            "newVersion": {
                "q": "Nowa versia Applikacji jest dostepna.",
                "y": "OK!<br>Aktualizuj teraz i uruchom Aplikacje ponownie.",
                "n": "Nie odswiezaj na razie.<br>Applicacja sama sie odswiezy po ponownym uruchomieniu."
            },
            "syncDbWith": {
                "local": {
                    "q": "By szybko i automatycznie otwierac baze danych bez koniecznosci polaczenia z internetem, mozesz ja zachowac na urzadzeniu w Podrecznej Bazie Danych.",
                    "y": "Zgadzam sie!<br>Zachowaj baze danych w applikacji!",
                    "n": "Nie, nie zachowuj.<br>Bede wczytywal baze danych manualnie.",
                    "i": "local"
                },
                "dbxFile": {
                    "q": "Czy chcesz zsynchronizowac baze danych z Dropbox?",
                    "y": "Tak jest!<br>Zaczynaj!",
                    "n": "Nie, nie chce.<br>Dziekuje.",
                    "i": "dbxFile"
                },
                "localFile": {
                    "q": "Czy chcesz zsynchronizowac baze danych z lokalnym zapasowym Plikiemn Bazy Danych?",
                    "y": "Tak jest!<br>Zaczynaj!",
                    "n": "Nie, nie chce.<br>Dziekuje.",
                    "i": "localFile"
                },
            },
            "disconnectDbFrom":{
                "local": {
                    "q": "Wlasnie zamierzasz usunac Podreczna Baze Danych z tego urzadzenia.<br><br>Mozesz nie byc w stanie uzywac applikacji bez polaczenia z internetem.<br>Nie wplynie to na zadna inna baze danych.",
                    "y": "Tak!<br><br>Usun Podreczna Baze Danych z tego urzadzenia.<br>",
                    "n": "O, nie!<br><br>To byla pomylka.",
                    "i": "local"
                },
                "dbxFile": {
                    "q": "Wlasnie zamierzasz usunac polaczenie z Baza Danych Dropbox.<br>Baza Danych applikacji nie bedzie zsynchronizowana z Baza Danych Dropbox.<br>Applikacja straci przywilej korzystania z Dropbox.",
                    "y": "Tak!<br><br>Usun polaczenie z Dropbox!",
                    "n": "O, nie!<br><br>To byla pomylka.",
                    "i": "dbxFile"
                },
                "localFile": {
                    "q": "Wlasnie zamierzasz usunac polaczenie z zapasowym plikiem Bazy Danych.<br>Baza Danych applikacji nie bedzie zsynchronizowana z zapasowym plikiem Bazy Danych.",
                    "y": "Tak!<br><br>Usun polaczenie z zapasowym plikiem Bazy Danych!",
                    "n": "O, nie!<br><br>To byla pomylka.",
                    "i": "localFile"
                },
            },
            "deleteExistingStore":{
                "local": {
                    "q": "Podreczna Baze Danych znajduje sie na urzadzeniu. Co robimy?",
                    "y": "Usun istniejaca Podreczna Baze danych z urzadzenia.",
                    "n": "Nie usuwaj istniejacej Podrecznej Bazy Danych. Wciaz chce ja uzywac.",
                    "i": "local"
                },
                "dbxFile": {
                    "q": "Polaczenie z Baza Danych Dropbox istnieje na urzadzeniu. Co robimy?",
                    "y": "Usun polaczenie z Dropbox.<br><br>Rozumiem, ze istnieje mozliwosc utraty wszystkich danych z aktualnej Bazy Danych Dropbox.",
                    "n": "Nie usuwaj polaczenia z Dropbox.<br><br>Wciaz chce uzywac polaczenie z istniejaca Baza Danych Dropbox.",
                    "i": "dbxFile"
                },
                "localFile": {
                    "q": "Polaczenie z zapasowym plikiem Bazy Danych istnieje na urzadzeniu. Co robimy?",
                    "y": "Usun polaczenie z zapasowym plikiem Bazy Danych.",
                    "n": "Nie usuwaj polaczenia. Wciaz bede uzywac istniejacy zapasowy plik Bazy Danych.",
                    "i": "localFile"
                },
            },
            "update":{
                "q": "${ sName } jest ${ sAge } niz Baza Danych Applikacji.<br><br>${ sName } byla zmodyfikowana: ${ sMod }<br>Baza Danych Applikacji byla zmodyfikowana: ${ aMod }<br><br>Co robimy?",
                "y": "<b>${ sName } jest niepoprawna.</b><br><br>Zatrzymaj Baze Danych Applikacji.<br><br>${ isAlter }",
                "n": "<b>${ sName } jest wlasciwa.</b><br><br>Zatrzymaj dane ${ sName }.<br><br>Uaktualnij Baze danych Aplikacji by zsynchronizowac ja z danymi ${ sName }.",
                "i": "${ sKey }",
                "storeOlder": "starsza",
                "storeNewer": "nowsza",
                "alter": "Uaktualnij ${ sName } by zsynchronizowac ja z danymi Bazy Danych Aplikacji.",
                "noAlter": "<b>UWAGA: ${ sName } NIE bedzie zmodyfikowana.</b>",
            },
            "localFileLoadOrCreate": {
                "q": "Czy juz posiadasz zapasowy Plik Bazy Danych?",
                "y": "Tak. Posiadam zapasowy Plik Bazy Danych<br><br>Chce wyrac plik.",
                "n": "Nie, musze stworzyc nowy zapasowy Plik Bazy Danych<br><br>Chce zapisac nowy plik.",
                "i": "localFile"
            },
            "localFileLoadOrDownload": {
                "q": "Nie istnieje mozliwosc zsynchronizowania Zapasowego Pilku Bazy Danych na tym urzadzeniu.",
                "y": "Chce wczytac istniejacy zapasowy Plik Bazy Danych.<br>",
                "n": "Chce pobrac aktualna baze danych Aplikacji do nowego zapasowego Pilku Bazy Danych.",
                "i": "localFile"
            },
            "catchLoad": {
                "q": "Wystapil problem polaczenia z ${ sName }.",
                "y": "Usun polaczenie. Zobaczymy czy to pomoze rozwiazac problem.<br>",
                "n": "Nie! Po prostu zignoruj w tej chwili!",
                "i": "${ sKey }",
            },
            "catchSync": {
                "q": "Nie mozna zsynchronizowac ${ sName }<br><br>Komputer mowi:<br><br>${ cErr }",
                "y": null,
                "n": "W porzadku. Rozumiem.",
                "i": "${ sKey }",
            },
            "catchUpdate": {
                "q": "Nie mozna zaktualizowac ${ sName }.<br><br>.<br><br>Polaczenie zostanie usuniete.<br><br>${ cErr }",
                "y": null,
                "n": "W porzadku. Rozumiem.",
                "i": "${ sKey }",
            },
            "privateModeEnableClipboard":{
                "q": "Applikacja jest w Prywatnym Trybie.<br><br>By polaczyc do Dropbox, ta Applikacja bedzie wymagac chwilowego dostepu do schowka na urzadzeniu.",
                "y": "Udostepnie schowek gdy applikacja bedzie tego wymagac.",
                "n": "Nie, nie potrzebuje dostepu do Dropbox.",
                "i": "dbxFile",
            },
        },
        "message":{
            "existingDb": "Wpisz haslo do swojej Bazy Danych.",
            "existingOrNew": "Wpisz haslo do istniejacej Bazy Danych lub nacisnij ikone Nowej Bazy Danych.",
            "newDb": "By stworzyc nowa baze danych, wpisz mocne haslo. Jesli zapomisz hasla, nie bedzie mozliwosci odzyskania danych.",
            "loggedOff": "Baza danych zostala zabezpieczona po czasie braku aktywnosci. Wpisz ponownie haslo by odblokowac dane.",
            "loadBd":"Wczytaj istniejaca lub stworz nowa baze danych.",
            "dbFailed": "Baza danych nie moze zostac odblokowana. Masz jeszcze ${ count } proby by ja odblokowac...",
            "appFailed": "Cos poszlo nie tak... Nie mozna uruchomic Aplikacji. Sprobuj zamknac applikacje i uruchomic ja ponownie.",
            "passShort": "Haslo Bazy Danych musi miec co najmniej 10 znakow.",
            "logShort": "Login konta musi miec conajmniej 6 znakow.",
            "nameShort": "Nazwa konta musi miec co najmniej 4 znaki.",
            "deleteVendorReject": "Konto o nazwie '${ vName }' zostalo usuniete z bazy danych.",
            "deleteVendorFailed": "Ops! Mamy problem... Nie mozna zachowac zmian. Konto '${ vName }' nie zostalo usuniete.",
            "submitFormFailed": "Ops! Mamy problem... Nie mozna zachowac zmian na koncie '${ vName }'.",
            "submitPassFailed": "Ops! Mamy problem... Nie mozna utworzyc nowego hasla dla konta '${ vName }'. Haslo nie zostalo zmienione.",
            "vendorExists": "Konto o nazwie: '${ vName }' juz istnieje. Wybierz inna nazwe.",
            "oldPassCopied": "Poprzednie haslo zostalo skopiowane do schowka.",
            "passCopied": "Haslo zostalo skopiowane do schowka.",
            "logCopied": "Login zostal skopiowany do schowka.",
            "vendorDeleted": "Konto zostalo pomyslnie usuniete.",
            "exitAppConfirm": "Ponownie nacisnij przycisk wstecz by wyjsc z Applikacji.",
            //"fileHandlerFailed": "The FileHandler failed. The Database File cannot be modified. Choose the Database File using the FileReader.",
            "noFilePickedErr": "Plik nie zostal wczytany. Baza danych nie moze zostac zaladowana...",
            "pickFileFR": "Wybierz plik by wczytac baze danych uzywajac atrybutu 'tylko do odczytu'. Plik bazy danych nie bedzie modyfikowany...",
            "pickFile": "Wybierz plik bazy danych...",
            "offline": "Nie mozna polaczyc z siecia. Syncronizacja z chmura jest zawieszona.",
            "online": "Polaczenie z siecia zostalo przywrocone.",
        },
        "app":{
            "titles": {
                "detsDatesIcon":"Daty",
                "detsNotesIcon": "Notki",
                "detsTagsIcon": "Etykiety",
                "typeNoteIcon": "Kategoria Notatka",
                "typeLogIcon": "Kategoria Logowanie",
                "vTaskSwitch": "Sortuj",
                "vTaskSwitchSort": "Detale",
                "vSortCr8": "Sortuj po Dacie Utworzenia",
                "vSortMod": "Sortuj po dacie Modyfikacji",
                "vSortName": "Sortuj po Nazwie Konta",
                "moreMenu": "Pokaz Wiecej Opcji",
                "inputBoxSearchBtn": "Pokaz Opcje Szukaj",
                "inputBoxSearchBtnHide": "Schowaj Opcje Szukaj",
                "inputBoxResetBtn": "Wyczysc okno wyszukiwania",
                "syncLocalIcon": "Polaczenie Podrecznej Bazy Danych",
                "syncDbxFileIcon": "Polaczenie Bazy Danych Dropbox",
                "syncLocalFileIcon": "Polaczenie Zapasowego Pliku Bazy Danych",
                "reloadApp": "Odswiez Aplikacje",
                "changeMasterPassBtn": "Zmien Haslo Bazy Danych",
                "emergDb": "Stworz Awaryjna Kopie Bazy Danych",
                "moreTaskbarClose": "Zamknij Wiecej Opcji",
                "addVendorBtn": "Dodaj Konto",
                "submitLabel": "Zapisz...",
                "editFormBtn": "Zmien Dane Konta...",
                "editNoteBtn": "Zmien Notatke...",
                "btnCloseForm": "Zamknij formularz",
                "copyLogBtn": "Skopiuj Login",
                "copyPassBtn": "Skopjuj Haslo",
                "newPassBtn": "Wygeneruj nowe haslo",
                "copyOldPassBtn": "Skopiuj poprzednie haslo",
                "showPassToggleBtn": "Widzialnosc hasla",
                "openLinkBtn": "Otworz odnosnik",
                "deleteVendorBtn": "Usun konto",
                "toggleToLog": "Zmien kategorie konta z Notatki na Logowanie",
                "toggleToNote": "Zmien kategorie konta z Logowanie na Notatke",
                "newDb": "Utworz Nowa Baze Danych",
                "mpNewDb": "Utworz Nowa Baze Danych",
                "mpClose": "Zamknij Baze Danych",
                "mpLocal": "Podreczna Baza Danych",
                "mpDbxFile": "Baza Danych na Dropbox",
                "mpLocalFile": "Zapasowy plik Bazy Danych",
                "loadNewDb": "Utworz Nowa Baze Danych",
                "loadDbxFile": "Polacz z istniejaca Baze Danych Dropbox lub utworz nowa BazeDanych na Dropbox",
                "loadLocalFile": "Wczytaj baze danych z istniejacego zapasowego pliku Bazy Danych",
                "changeLang": "Zmien Jezyk Applikacji",
                "donate": "Wesprzyj nas bysmy mogli rozwijac applikacje!",
            },
            
            "htmls":{
                "infoLine": "Nacisnij ikone by wczytac Baze Danych...",
                "masterPasFormLabel": "Wpisz swoje haslo:",
                "formLabelName": "Nazwa:",
                "formLabelLog": "Login:",
                "formLabelAlphaNum": "Generuj tylko alfanumeryczne haslo",
                "formLabelPass": "Haslo:",
                "formLabelOldPass": "Poprzednie Haslo:",
                "formLabelNote": "Notka:",
                "formLabelTags": "Etykiety:",
                "masterPasFormTitle": "Odblokuj Istniejaca Baze Danych",
                "masterPasFormNewDB": "Nowa Baza danych",
                "masterPasFormChangePass": "Zmiana Hasla Bazy Danych",
                "vListHeads":{
                    "notFound": "'<i>${ searchStr }</i>' nie znaleziono.",
                    "nameFound": "Nazwa:",
                    "tagsFound": "'<i>${ searchStr }</i>' znaleziono w Etykietach:",
                    "notesFound": "'<i>${ searchStr }</i>' znaleziono w Notkach:",
                    
                }
            },
            "placeholders": {
                "masterPasInputBox": "Haslo Bazy Danych...",
                "inputBoxSearch": "Szukaj...",
                "inputBoxName" : "Nazwa...",
                "inputBoxLog": "Login...",
                "inputBoxNote": "Notka...",
                "inputBoxTags": "Etykiety..."
                
            },
            "values": {
                //"noPrevPass": "No Previous Password",
                "errNoDB": "Baza danych nie zostala znaleziona...",
                "badPass": "Password Incorrect... removing all databases...",
                "redirectWelcome": "Juz prawie... Wpisz haslo ponownie",
                "noPass": "Haslo Bazy Danych nie zostalo wpisane",
                "userReject": "Uzytkownik odrzucil mozliwosz wczytania pliku",
                "updateFail": "Aktualizacja sie nie powiodla"
            }

        }
    },
    "GB": {
        "alert": {
            "name":{
                "local": "Quick Access Database",
                "dbxFile": "Dropbox Database",
                "localFile": "Database Backup File"
            },
            "offline": {
                "q": "Cant't connect to the cloud.<br><br>It looks like you don't have the internet connection.",
                "y": null,
                "n": "OK. I see."
            },
            "deleteVendor": {
                "q": "Do you really want to delete ${ vName }?",
                "y": "Yes I do!",
                "n": "No! It was a mistake!",
                "i": "trashBin"
            },
            "newVersion": {
                "q": "A new version of the App is available.",
                "y": "OK!<br>Update the App now!",
                "n": "Don't update it yet.<br>I will reload the app manually."
            },
            "syncDbWith": {
                "local": {
                    "q": "To load the database automaticaly you can save it in the LPM App.",
                    "y": "OK!<br>Save the database in the App!",
                    "n": "No, don't do it.<br>I will load the database manually.",
                    "i": "local"
                },
                "dbxFile": {
                    "q": "Would you like to synchronise the App to the Dropbox?",
                    "y": "Yes!<br>Go on then!",
                    "n": "No, I don't.<br>Thank you.",
                    "i": "dbxFile"
                },
                "localFile": {
                    "q": "Would you like to synchronise the App with a local Backup File?",
                    "y": "Yes!<br>Go on then!",
                    "n": "No, I don't.<br>Thank you.",
                    "i": "localFile"
                },
            },
            "disconnectDbFrom":{
                "local": {
                    "q": "You are about to disconnect the Quick Access Database from this device.<br><br>You may not be able to use the App without an internet connection.<br>No other synchronised databases will be affected.",
                    "y": "Yes!<br><br>Remove the Quick Access Database from this device.<br>",
                    "n": "Oh, no!<br><br>It was a mistake.",
                    "i": "local"
                },
                "dbxFile": {
                    "q": "You are about to disconnect the Dropbox Database.<br>The App database will not be synchronised with the Dropbox Database.<br>The App permission to use the Dropbox will be revoked.",
                    "y": "Yes!<br><br>Disconnect the Dropbox Database!",
                    "n": "Oh, no!<br><br>It was a mistake.",
                    "i": "dbxFile"
                },
                "localFile": {
                    "q": "You are about to disconnect the Database Backup File.<br>The App database will not longer be synchronised with the Backup File.",
                    "y": "Yes!<br><br>Disconnect the Backup File!",
                    "n": "Oh, no!<br><br>It was a mistake.",
                    "i": "localFile"
                },
            },
            "deleteExistingStore":{
                "local": {
                    "q": "The local Quick Access Database exists. What do we do?",
                    "y": "Remove the existing Quick Access Database.",
                    "n": "Do not remove the existing Quick Access Database.",
                    "i": "local"
                },
                "dbxFile": {
                    "q": "There is an existing connection to the Dropbox Database. What do we do?",
                    "y": "Remove the current connection to the Dropbox Database.<br><br>I understand that I may lose all the data.",
                    "n": "Do not remove the connection. I want to use it",
                    "i": "dbxFile"
                },
                "localFile": {
                    "q": "There is an existing connection to the Database Backup File. What do we do?",
                    "y": "Remove the current connection to the Backup File.",
                    "n": "Do not remove the connection. I want to use it",
                    "i": "localFile"
                },
            },
            "update":{
                "q": "The ${ sName } has ${ sAge } content than the App data.<br><br>The ${ sName } was modified: ${ sMod }<br>The App data was modified: ${ aMod }<br><br>What do we do?",
                "y": "<b>The ${ sName } is wrong.</b><br><br>Keep the App data.<br><br>${ isAlter }",
                "n": "<b>The ${ sName } is correct.</b><br><br>Keep the ${ sName } data.<br><br>Update the App data to match the ${ sName }.",
                "i": "${ sKey }",
                "storeOlder": "an older",
                "storeNewer": "a newer",
                "alter": "Update the ${ sName } to match the App data.",
                "noAlter": "<b>CAUTION: The ${ sName } wil NOT be updated.</b>",
            },
            "localFileLoadOrCreate": {
                "q": "Do you have an existing Database File?",
                "y": "Yes. I already have an existing Database File<br><br>Let me connect to it",
                "n": "I need to create a new Database File<br><br>Just let me save it...",
                "i": "localFile"
            },
            "localFileLoadOrDownload": {
                "q": "You can't synchronise the Database File of this device.",
                "y": "I wan't to upload a new Database File.<br>",
                "n": "I want to download a copy of the current database.",
                "i": "localFile"
            },
            "catchLoad": {
                "q": "There is a problem with the ${ sName } connection.",
                "y": "Lets remove the connection and reload the App.<br>",
                "n": "No! Just ignore it for the time beign!",
                "i": "${ sKey }",
            },
            "catchSync": {
                "q": "Can't Synchronise the ${ sName }<br><br>The computer says:<br><br>${ cErr }",
                "y": null,
                "n": "OK. I see.",
                "i": "${ sKey }",
            },
            "catchUpdate": {
                "q": "Can't update the ${ sName }.<br><br>.<br><br>The connection will be removed.<br><br>${ cErr }",
                "y": null,
                "n": "OK. I see.",
                "i": "${ sKey }",
            },
            "privateModeEnableClipboard":{
                "q": "The App is in Private Mode.<br><br>This App will need a temporary access to your device's Clipboard in order to connect to the Dropbox after redirection.",
                "y": "I will enable Clipboard access when prompted.",
                "n": "No, I don't need connecting to the Dropbox.",
                "i": "dbxFile",
            },
            
        },
        "message":{
            "existingDb": "Please enter password to your Database",
            "existingOrNew": "Please enter password to your existing Database or click New Database icon.",
            "newDb": "To create a new Database, please enter a new, strong password.",
            "loggedOff": "You have been logged off after inactivity. Re-input your password to unlock the database.",
            "loadBd":"Load the database or create a new one",
            "dbFailed": "Database file is corrupted or cannot be unlocked. You have ${ count } more attempts to unlock it...",
            "appFailed": "Something went wrong... The App can't start. Try to reload the App",
            "passShort": "Master Password must be at least 10 characters long.",
            "logShort": "Account Login must be at least 6 characters long.",
            "nameShort": "Account Name must be at least 4 characters long.",
            "deleteVendorReject": "The '${ vName }' Account has not been removed.",
            "deleteVendorFailed": "Ooops! There is a problem... Can't save the change. The '${ vName }' Account has not been removed.",
            "submitFormFailed": "Ooops! There is a problem... Can't save the change for the '${ vName }' Account.",
            "submitPassFailed": "Ooops! There is a problem... Can't save the new Password the '${ vName }' Account. The Password has not been changed.",
            "vendorExists": "Account name: '${ vName }' is already in use! Choose another name.",
            "oldPassCopied": "Old Password copied.",
            "passCopied": "Password copied.",
            "logCopied": "Login copied.",
            "vendorDeleted": "Account sucessfully deleted.",
            "exitAppConfirm": "Press the Back Button again to exit the App.",
            //"fileHandlerFailed": "The FileHandler failed. The Database File cannot be modified. Choose the Database File using the FileReader.",
            "noFilePickedErr": "No file was uploaded using the FileReader. Database cannot be loaded...",
            "pickFileFR": "Choose the Database File using the FileReader. Database cannot be modified...",
            "pickFile": "Choose the Database File...",
            "offline": "No internet connection. Can't sync the cloud.",
            "online": "You are back online.",
        },
        "app":{
            "titles": {
                "detsDatesIcon":"Dates Details",
                "detsNotesIcon": "Notes Details",
                "detsTagsIcon": "Tags Details",
                "typeNoteIcon": "Notes",
                "typeLogIcon": "Login Credentials",
                "vTaskSwitch": "Sort Options",
                "vTaskSwitchSort": "Details Options",
                "vSortCr8": "Sort by Create Date",
                "vSortMod": "Sort by Modified Date",
                "vSortName": "Sort by Name",
                "moreMenu": "More Options",
                "inputBoxSearchBtn": "Show Search",
                "inputBoxSearchBtnHide": "Hide Search",
                "inputBoxResetBtn": "Clear Search",
                "syncLocalIcon": "Quick Access Database Connection",
                "syncDbxFileIcon": "Dropbox Database Connection",
                "syncLocalFileIcon": "Database Backup File Connection",
                "reloadApp": "Reload the App",
                "changeMasterPassBtn": "Change Application Database Password",
                "emergDb": "Create Emergency Copy",
                "moreTaskbarClose": "Close More Options",
                "addVendorBtn": "Add Record",
                "submitLabel": "Save...",
                "editFormBtn": "Edit Login Credentials...",
                "editNoteBtn": "Edit Note...",
                "btnCloseForm": "Close Form",
                "copyLogBtn": "Copy Login",
                "copyPassBtn": "Copy Password",
                "newPassBtn": "Generate New Password",
                "copyOldPassBtn": "Copy Previous Password~",
                "showPassToggleBtn": "Password Display",
                "openLinkBtn": "Open Hyperlink",
                "deleteVendorBtn": "Delete Record",
                "toggleToLog": "Convert Note to Login Credentials",
                "toggleToNote": "Convert Login Credentials to Note",
                "newDb": "Create New Database",
                "mpNewDb": "Create New Database",
                "mpClose": "Close Database",
                "mpLocal": "Quick Access Database",
                "mpDbxFile": "Dropbox Database",
                "mpLocalFile": "Database Backup File",
                "loadNewDb": "Create New Database",
                "loadDbxFile": "Connect Exisisting Dropbox Database or Create a New Database in the Dropbox",
                "loadLocalFile": "Load Database from an Existing Backup File",
                "changeLang": "Change Language",
                "donate": "Support us to keep up the good work!",
            },
            "htmls":{
                "infoLine": "Please Press the Icon to Load the Database File...",
                "masterPasFormLabel": "Enter your password:",
                "formLabelName": "Name:",
                "formLabelLog": "Login:",
                "formLabelAlphaNum": "Generate alphanumeric only password",
                "formLabelPass": "Password:",
                "formLabelOldPass": "Old Password:",
                "formLabelNote": "Note:",
                "formLabelTags": "Tags:",
                "masterPasFormTitle": "Unlock Existing Database",
                "masterPasFormNewDB": "New Database",
                "masterPasFormChangePass": "Database Password Change",
                "vListHeads":{
                    "notFound": "'<i>${ searchStr }</i>' not found.",
                    "nameFound": "Name:",
                    "tagsFound": "'<i>${ searchStr }</i>' found in Tags:",
                    "notesFound": "'<i>${ searchStr }</i>' found in Notes:",
                    
                }
            },
            "placeholders": {
                "masterPasInputBox": "Database password...",
                "inputBoxSearch": "Search...",
                "inputBoxName" : "Name...",
                "inputBoxLog": "Login...",
                "inputBoxNote": "Note...",
                "inputBoxTags": "Tags..."
                
            },
            "values": {
                //"noPrevPass": "No Previous Password",
                "errNoDB": "No Database to display...",
                "badPass": "Password Incorrect... removing all databases...",
                "redirectWelcome": "You almost there. Please re-type your password",
                "noPass": "No Database Password Provided",
                "userReject": "User Rejected Use of the File Handle",
                "updateFail": "Update Failed"
            }

        }
    }
}

   let txtBank;// = txtBankObj.PL;

    Date.prototype.toUKstring = function(){
        return this.toLocaleString('en-GB', { timeZone: 'Europe/London' });
    };
    
    Uint8Array.prototype.sum = function() {
        return this.reduce((p,c) => p + c);
    };
    
    const u8Ary = {
        newFrom: data => new Uint8Array(data),
        fromHexString: hexString => u8Ary.newFrom(hexString.match(/.{1,2}/g).map(byte => parseInt(byte, 16))),
        toHexString: bytes => bytes.reduce((str, byte) => str + byte.toString(16).padStart(2, '0'), '')
    };

    const isURL = str => {
      const pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
        '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
      return !!pattern.test(str);
    };
    
    String.prototype.parseTemplate = function(injObj, fallback = '~_~'){
        return this.replace(/\${[^{]+}/g, (match) => {
            const path = match.slice(2, -1).trim();
            return path.split('.').reduce((res, key) => res[key] || fallback, injObj);
        });
    }
    const parseTemplateStr = (template, injObj, fallback = '~_~') => {
        return template.replace(/\${[^{]+}/g, (match) => {
            const path = match.slice(2, -1).trim();
            return path.split('.').reduce((res, key) => res[key] || fallback, injObj);
        });
    }
    /* IDXDB -------------------------------------------------------------------------- */
    const initIdxDb = (dbName, version, storeName, keyPath = "name", returnValue = "value") => {
        return new Promise((resolve, reject) => {
            const idxDbOpenReq = window.indexedDB.open(dbName, version);
            idxDbOpenReq.onupgradeneeded = function(e) {
                //console.log("idxDbOpenReq.onupgradeneeded");
                e.target.result.createObjectStore(storeName, { keyPath: keyPath });// Create an objectStore for this database
            };
            idxDbOpenReq.onsuccess = function(e) {
                //console.log("idxDbOpenReq.onsuccess");
                const db = e.target.result;
                db.onerror = function (e) {console.error("Database error: " + e.target.errorCode, e);}

                function lpmIdxDb (method, name, value = null){
                    const query = value ? {[keyPath]: name, [returnValue]: value} : name;
                    const tr = db.transaction(storeName, "readwrite").objectStore(storeName)[method](query);
                    return new Promise((res , rej) => {
                        tr.onsuccess = e => res(method === "get" ? e.target.result ? e.target.result.value : null : value);
                        tr.onerror = e => rej(e);
                    });
                }

                resolve({
                    get: name => lpmIdxDb("get", name),
                    delete: name => lpmIdxDb("delete", name),
                    add: (name, value) => lpmIdxDb("add", name, value),
                    put: (name, value) => lpmIdxDb("put", name, value),
                    clear: _ => lpmIdxDb("clear"),
                    destroySelf: _ => window.indexedDB.deleteDatabase(dbName)
                });
            };
            idxDbOpenReq.onerror = function(e) {
              console.log("No IDXDB.", e);
              reject(e);
            };
        });
    };
    
    const fetchLangTxt = (lang) => {
        return fetch("assets/core/txtBank.json").then(res => {
            if(!res.ok) throw new Error("Can't get textBank " + res.status);
            return res.json();
        });
    }
    function localiseApp(el){
        if(txtBank.app.titles[el.id]) el.title = txtBank.app.titles[el.id];
        if(txtBank.app.htmls[el.id]) el.innerHTML = txtBank.app.htmls[el.id];
        if(txtBank.app.placeholders[el.id]) el.placeholder = txtBank.app.placeholders[el.id];
    }
    
     /* ALERTS -----------------------------------------------------------------------*/
    function Alerts(txtBank){
        let resolve = null;
        let promise = null;
        let closeIsDeny = true;
        let choice = null;
        
        function finish(e){ //e=true, e=false, e=null, e=popstate
            if(!promise) return;
            if(e && e.type === "popstate"){
                setTimeout(_ =>{
                    if(choice === null && closeIsDeny) choice = false;
                    if (choice !== null){
                        resolve(choice);
                    }
                    choice = null;
                    promise = null;
                    alertSection.slideOut();
                },200);
            }else{
                choice = e;
                window.history.back();
            }
        }

        function show(msgObj, enableClose) {
            if(promise) return promise.then(_ => show(msgObj, enableClose));
            //background-image: url(../../assets/static/appSvg/sprite.svg#passReset);
            /* alertIcon.style.backgroundImage = "url(../../assets/static/appSvg/sprite.svg#" + msgObj.i + ")"; */
            /* alertIconUse.setAttributeNS(null,'href', '#' + msgObj.i); */
            
            alertIcon.cssName("svgIcon masterPassIcon " + msgObj.i + "Icon")
            alertGeneraltMsg.html(msgObj.q);
            msgObj.y ? alertAcceptMsg.html(msgObj.y).show() : alertAcceptMsg.hide();
            msgObj.n ? alertDenyMsg.html(msgObj.n).show() : alertDenyMsg.hide();
            setTimeout(alertSection.slideIn, 400);
            window.history.pushState({modOpen: true}, '', '');
            enableClose ? closeAlert.show() : closeAlert.hide();
            closeIsDeny = !enableClose;
            return promise = new Promise(res => resolve = res);
        }
        
        function getParsedObj(txtObj, injObj){
            const txtObjCopy = { ...txtObj };
            for(const tmpStr in txtObjCopy){
                txtObjCopy[tmpStr] = txtObjCopy[tmpStr] ? txtObjCopy[tmpStr].parseTemplate(injObj) : null;
            }
            return txtObjCopy;
        }

        window.addEventListener('popstate', finish);
        closeAlert.on("click", _ => finish(null));
        alertAcceptMsg.on("click", _ => finish(true));
        alertDenyMsg.on("click", _ => finish(false));
        
        this.offline = _ => show(txtBank.offline);
        this.deleteVendor = vendName => show(getParsedObj(txtBank.deleteVendor,{vName: vendName}),true);
        this.newVersion = _ => show(txtBank.newVersion);
        this.syncDbWith = storeKey => show(txtBank.syncDbWith[storeKey]);
        this.disconnectDbFrom = storeKey => show(txtBank.disconnectDbFrom[storeKey]);
        this.deleteExistingStore = storeKey => show(txtBank.deleteExistingStore[storeKey]);
        this.update = (storeObj, appObjMod) => {
            const storeName = txtBank.name[storeObj.key];
            const sAge = storeObj.dbMod < appObjMod ? "storeOlder" : "storeNewer";
            const isAlter = storeObj.cantAlter ? "noAlter" : "alter";
            return show(getParsedObj(txtBank.update, {
                sName: storeName,
                sMod: new Date(storeObj.dbMod).toUKstring(),
                aMod: new Date(appObjMod).toUKstring(),
                sAge: txtBank.update[sAge],
                isAlter: txtBank.update[isAlter].parseTemplate({sName: storeName}),
                sKey: storeObj.key
            }), true);
        };
        this.localFileLoadOrCreate = _ => show(txtBank.localFileLoadOrCreate, true);
        this.localFileLoadOrDownload = _ => show(txtBank.localFileLoadOrDownload, true);

        const catchObj = (storeKey, e) => ({sName: txtBank.name[storeKey], sKey: storeKey, cErr: e});
        this.catchLoad = storeKey => show(getParsedObj(txtBank.catchLoad, catchObj(storeKey)),true);
        this.catchSync = (storeKey, e) => show(getParsedObj(txtBank.catchSync, catchObj(storeKey, e)),true);
        this.catchUpdate = (storeKey, e) => show(getParsedObj(txtBank.catchUpdate, catchObj(storeKey, e)),true);
        this.privateModeEnableClipboard = _ => show(txtBank.privateModeEnableClipboard);
    }
     /* Messages -----------------------------------------------------------------------*/
    function  Messages(txtBank) {
        let timerHide = 0;
        let timerFlash = 0;
        let promise = null;
        let resolve = null;

        async function finish(e){
           // if(!promise) return;
            clearTimeout(timerHide);
            clearTimeout(timerFlash);
            resolve();
            promise = null;
            infoLine.removeClass("popUp");
        }

        function MsgObj(valAry){
            [this.txt, this.err, this.cLog, this.flash] = valAry;
        }

        const msgTxt = txt => show(txt);
        const msgFlash = txt => show(txt, null, null, true);
        const msgErr = txt => show(txt, true);
        const msgFail = (txt, e) => show(txt, true, e);

        function show(...args) {
            if(promise) return finish().then(_ => show(...args));
            const msgObj = new MsgObj(args);
            infoLine.txt(msgObj.txt).cssName("popUp");
            if(msgObj.err) infoLine.addClass("error");
            if(msgObj.flash) infoLine.addClass("flash");
            if(msgObj.cLog) console.log(msgObj.cLog, msgObj.txt);
            timerFlash = setTimeout(function(){
                infoLine.cssName("popUp");
                timerHide = setTimeout(finish, 3000);
            },2000)
            return promise = new Promise(res => resolve = res);
        }

        return{
            digest: msg => msgTxt(msg),
            fail: (msg,e) => msgFail(msg,e),
            error: (msg) => msgErr(msg),
            existingOrNew: txtBank.existingOrNew,
            existingDb: txtBank.existingDb,
            newDb: txtBank.newDb,
            loggedOff: txtBank.loggedOff,
            loadBd: _ => msgTxt(txtBank.loadBd),
            pickFileFR: _ => msgTxt(txtBank.pickFileFR),
            pickFile: _ => msgTxt(txtBank.pickFile),
            deleteVendorReject: vName => msgTxt(txtBank.deleteVendorReject.parseTemplate({vName:vName})),
            oldPassCopied: _ => msgFlash(txtBank.oldPassCopied),
            passCopied: _ => msgFlash(txtBank.passCopied),
            logCopied: _ => msgFlash(txtBank.logCopied),
            vendorDeleted: _ => msgFlash(txtBank.vendorDeleted),
            exitAppConfirm:  _ => msgFlash(txtBank.exitAppConfirm),
            passShort: _ => msgErr(txtBank.passShort),
            logShort: _ => msgErr(txtBank.logShort),
            nameShort: _ => msgErr(txtBank.nameShort),
            vendorExists: vName => msgErr(txtBank.vendorExists.parseTemplate({vName:vName})),
            noFilePickedErr: _ => msgErr(txtBank.noFilePickedErr),
            //dbFailed: (count, e) => msgFail(joinMsg(txtBank.dbFailed, count), e),
            dbFailed: (count, e) => msgFail(txtBank.dbFailed.parseTemplate({count:count}), e),
            appFailed: e => msgFail(txtBank.appFailed + txtBank.loadBd, e),
            //deleteVendorFailed: (vName, e) => msgFail(joinMsg(txtBank.deleteVendorFailed, vName), e),
            deleteVendorFailed: (vName, e) => msgFail(txtBank.deleteVendorFailed.parseTemplate({vName:vName}), e),
            //submitFormFailed: (vName, e) => msgFail(joinMsg(txtBank.submitFormFailed, vName), e),
            submitFormFailed: (vName, e) => msgFail(txtBank.submitFormFailed.parseTemplate({vName:vName}), e),
            //submitPassFailed: (vName, e) => msgFail(joinMsg(txtBank.submitPassFailed, vName), e),
            submitPassFailed: (vName, e) => msgFail(txtBank.submitPassFailed.parseTemplate({vName:vName}), e),
            fileHandlerFailed: e => msgFail(txtBank.fileHandlerFailed, e),
            offline: _ => msgErr(txtBank.offline),
            online: _ => msgFlash(txtBank.online),
        };

    };
    /* APP -------------------------------------------------------------------------- */
    function App(){
        this.URL = window.location.origin + window.location.pathname;//"https://swedhearth.github.io/lpm/";"https://www.havetogoto.co.uk/"
        this.consent = false;
        this.pendingPromise = null;
        let _encodedDb = null;
        const _getNewEncodedDb = _ => _encodedDb = getEncodedU8Ary(JSON.stringify(this.dbObj));

        this.urlReplace = url => {if(url) location.replace(url);};
        this.reload = _ => this.urlReplace(this.URL);// this.urlReplace("https://www.havetogoto.co.uk/"); //  Reload App ************** Make Hard Coded = "https://havetogoto.co.uk"
        
        this.checkHistoryState = _ => {

            if(!window.history.state){ // No history - first visit
                window.history.pushState({noBackExists: true}, '', '');
            }else if(!window.history.state.noBackExists){// There is state but not noBackExists - 
                console.log("YES STATE", history);
                window.history.go(-window.history.length);
                setTimeout(this.reload, 100000);
                return false;
            }
            return true;
        }
        
        this.getEncodedDb = async _ => _encodedDb = _encodedDb || _getNewEncodedDb();
        this.getDbFileBlob = _ => this.getEncodedDb().then(encodedDb => new Blob([encodedDb.buffer], {type:"application/octet-stream"}));
        this.setDbObj = function(dbObj){
            this.dbObj = dbObj || {mod: new Date(), vendors:[]};
            return _getNewEncodedDb();
        }
        
        this.createNewDb = async _ => {
            const existingStores = (await this.reset()).filter(store => store !== false);
            for (const store of existingStores){
                if(!await this.alert.deleteExistingStore(store.key)) return;
                await store.handleRemove(false);
            }
            await this.clearAllStorage();
            //newDb.hide();
            //[...masterPasFormWrp.getElementsByClassName('masterPassIcon')].forEach(icon => icon.hide());
            //mpNewDb.show();
            masterPasFormTitle.html(txtBank.app.htmls.masterPasFormNewDB);//masterPasFormTitle.html("New Database");
            await this.reset();
            [...masterPasFormWrp.getElementsByClassName('floatIcon')].forEach(icon => icon.hide());
            if(!await masterPass.get(this.message.newDb)) return this.start();
            await this.setDbObj(null);
            this.paint();
            this.checkExtraSync().catch(e => this.start(e, true));
        }

        this.reset = async function(){
            [...masterPasFormWrp.getElementsByClassName('masterPassIcon')].forEach(icon => icon.hasClass("loadIcon") ? icon.show() : icon.hide());
            this.mpU8Ary = [];
            this.dbObj = null;
            _encodedDb = null;
            this.activeVendObj = null;
            return Promise.all(Object.keys(this.dbStore).map(storeKey => this.dbStore[storeKey].reset()));
        }

        this.clearAllStorage = async function(){
            //console.log(this.localStorage);
            if(this.localStorage) this.localStorage.clear();
            if(this.sessionStorage) this.sessionStorage.clear();
            if(this.idxDb) await this.idxDb.clear();
            //console.log(localStorage);
        }

        this.makePrivate = async function(){
            //console.log("Make private")
            await this.clearAllStorage();
            if(this.idxDb) this.idxDb.destroySelf();
            this.idxDb = this.localStorage = this.sessionStorage = null;
        }
        
        this.storageIsSuported = async function(){
            try{
                this.localStorage = window.localStorage;
                this.sessionStorage = window.sessionStorage;
            }catch(e){
                this.localStorage = null; 
                this.sessionStorage = null;
                this.idxDb = null;// Unable to Use Dropbox
            }
            return !!this.localStorage;
        };
        
        this.IdxbIsEnabled = async function(){
            try{
                this.idxDb = await initIdxDb("lpmIdxDb", 1, "assets");
            }catch(e){
                this.idxDb = null;
            }

            return !!this.idxDb;
        }
        
        const setConsent = async _ => {
            if (await this.storageIsSuported()){
                this.localStorage.setItem("consent", Date.now());
                this.reload();
            }
        }
        const removeConsent = async _ => {
                this.localStorage.removeItem("consent");
                //console.log("Try make Private");
                await this.makePrivate();
                //console.log(localStorage);
                setTimeout(_ => {
                this.reload();
                //console.log(this.localStorage);
                },100);
        }
        
        const showRevokeConsent = async _=> {
            let h = "The App has access to the Device Storage.";
            let h1 = "";
            if(!await this.IdxbIsEnabled()){
               h1 = "<br>However, currently it can't persists any database on this device.<br>Likelly the browser's Private Mode is enabled.";
            }
            consent.hide();
            revokeConsent.show().html(h + h1 + "<br><br>Click to activate the Private Mode - App access to your device storage will be disabled");
            /* console.log("WTF????????"); */
        }

        this.setUp = async function(dbStore){
            if (await this.storageIsSuported()){
                consent.on("click", setConsent);
                revokeConsent.on("click", removeConsent);
                //console.log("on assigned");
                if(this.localStorage.getItem("consent")){
                    this.consent = true;
                    await showRevokeConsent();
                }
            }else{
                consent.html("The App is in the Private Mode<br><br>The App Storage is disabled by the user.");
            };
            
            let sortBy, sortOrder, detDates, detNotes, detTags, typeNote, typeLog, appLang;
            
            if(this.localStorage){
                //console.log("this.localStorage is available now");
                sortBy = this.localStorage.getItem("sortBy");
                sortOrder = this.localStorage.getItem("sortOrder");
                
                detDates = this.localStorage.getItem("detDates");
                detNotes = this.localStorage.getItem("detNotes");
                detTags = this.localStorage.getItem("detTags");
                typeNote = this.localStorage.getItem("typeNote");
                typeLog = this.localStorage.getItem("typeLog");
                appLang = this.localStorage.getItem("lang");
            };
            this.sortList.active = this.sortList[sortBy || 'name'][sortOrder || 'asc'];
            this.showList.set(detsDatesIcon, 'detDates', detDates === "true");
            this.showList.set(detsNotesIcon, 'detNotes', detNotes === "true");
            this.showList.set(detsTagsIcon, 'detTags', detTags === "true");
            this.showList.set(typeNoteIcon, 'typeNote', typeNote ? typeNote === "true" : true);
            this.showList.set(typeLogIcon, 'typeLog', typeLog ? typeLog === "true" : true);
            
            appLang = appLang || "GB";
            txtBank = txtBankObj[appLang];
            
            this.alert = new Alerts(txtBank.alert);
            this.message = new Messages(txtBank.message);
            this.dbStore = dbStore;
            
            [...document.querySelectorAll('*')].forEach(localiseApp);
            changeLang.cssName("svgIcon listIcon lang" + appLang);
        }
        
        this.dbStoreUpdateAll = async function(vendObj, dbAmended){
            working.show();
            if(dbAmended){
                this.dbObj.mod = Date.now();
                await this.setDbObj(this.dbObj);
            }
            await Promise.all(Object.keys(this.dbStore).map(storeKey => this.dbStore[storeKey].update().catch(this.dbStore[storeKey].catchUpdate)));
            working.hide();
            return vendObj;
        }

        this.online = navigator.onLine;
        this.connectivitychange = function(){
            let appOfflineTime = 0;
            return async e => {
                this.online = e.type !== "offline";
                this.dbStore.dbxFile.connectionSwitch();
                this.message[e.type]();
            }
        }

        this.visibilitychange = function(){
            let appHideTime = 0;
            return e => {
                if(document.visibilityState === "hidden") return appHideTime = e.timeStamp
                if(e.timeStamp - appHideTime > 43200000) this.reload(); //location.reload();// 43200000 ms = 12 hours
                if(e.timeStamp - appHideTime > 600000) this.start(this.message.loggedOff);//getMasterPass(message.loggedOff); // 600000 ms = 10 minutes
            };
        }
        
        this.showList = {
            set: (el, type, value) => {
                this.showList[type] = value;
                if(this.localStorage && this.consent) this.localStorage.setItem(type, value);
                value ? el.removeClass("elDimmed"): el.addClass("elDimmed");
            }
        }

        this.sortList = {
            setSortIcons: (thisEl, sortBy, sortOrder) => {
                if(this.localStorage && this.consent){
                    this.localStorage.setItem("sortBy", sortBy);
                    this.localStorage.setItem("sortOrder", sortOrder);
                }
                
                if(thisEl.hasClass("elDimmed")){
                    [...document.querySelectorAll('.sortIcon')].forEach(el => el.addClass("elDimmed"));
                    thisEl.removeClass("elDimmed");
                }
            },
            name: {
                asc: ary => {
                    this.sortList.setSortIcons(vSortName, "name", "asc");
                    vSortName.removeClass("vSortNameDesc");
                    return ary.sort((a,b) => (a.name.toLowerCase() > b.name.toLowerCase()) ? 1 : ((b.name.toLowerCase() > a.name.toLowerCase()) ? -1 : 0))
                },
                desc: ary => {
                    this.sortList.setSortIcons(vSortName, "name", "desc");
                    vSortName.addClass("vSortNameDesc");
                    return ary.sort((a,b) => (b.name.toLowerCase() > a.name.toLowerCase()) ? 1 : ((a.name.toLowerCase() > b.name.toLowerCase()) ? -1 : 0))
                },
            },
            cr8: {
                asc: ary => {
                    this.sortList.setSortIcons(vSortCr8, "cr8", "asc");
                    vSortName.addClass("vSortCr8Asc");
                    return ary.sort((a,b) => a.id - b.id)
                },
                desc: ary => {
                    this.sortList.setSortIcons(vSortCr8, "cr8", "desc");
                    vSortName.removeClass("vSortCr8Asc");
                    return ary.sort((a,b) => b.id - a.id)
                }
            },
            mod: {
                asc: ary =>{
                    this.sortList.setSortIcons(vSortMod, "mod", "asc");
                    vSortName.addClass("vSortModAsc");
                    return ary.sort((a,b) => new Date(a.mod) - new Date(b.mod))
                },
                desc: ary => {
                    this.sortList.setSortIcons(vSortMod, "mod", "desc");
                    vSortName.removeClass("vSortModAsc");
                    return ary.sort((a,b) => new Date(b.mod) - new Date(a.mod))
                }
            },
            active: null,
        };

        const getDbModString = _ => new Date(this.dbObj.mod).toUKstring();
        this.paint = async function(e){
            listWrp.show();
            working.hide();
            taskbarHideOnScroll();
            /* console.log("paintApp", e, this); */
            dbModified.textContent = "Database Modified: " + getDbModString();
            paintList();
            /* console.log("App Painted"); */
        }
        
        this.checkExtraSync = async function(){
            if(!this.idxDb) return;
            working.hide();
            const syncPromiseAry = [];
            for (const storeKey in this.dbStore) {
                const thisStore = this.dbStore[storeKey];
                if(thisStore.handle || thisStore.dontSync || thisStore.cantAlter || thisStore.syncPaused) continue; //hanleExists or DontSync present in localStorage or CantAlterTheFile

                if(!await this.alert.syncDbWith(thisStore.key)) await thisStore.handleRemove(true); //Ask if sync
                //if(!thisStore.dontSync) await thisStore.sync().catch(thisStore.catchSync); //sync if no DontSync in localStorage
                if(!thisStore.dontSync) syncPromiseAry.push(thisStore.sync().catch(thisStore.catchSync));

            }
            /* console.log(syncPromiseAry); */
            return Promise.all(syncPromiseAry);
        }
        
let appStartFailCount = 0;
        this.start = async function(msg, err){
            console.log(msg, err);
            working.hide();
            inputFormWrp.show();
            alertSection.show();
            try{
                const existingStores = (await this.reset()).filter(store => store !== false);
                /* console.log(existingStores); */
                if(existingStores.length){
                    const mpMsg = existingStores.filter(store => store.handlePlain).length ? txtBank.app.values.redirectWelcome : msg; //redirectWelcome: "You almost there. Please re-type your password"
                    //mpClose.show();
                    if(!await masterPass.get(mpMsg)){
                        for (const store of existingStores){
                            if(!await this.alert.deleteExistingStore(store.key)) return this.start(msg);
                            await store.handleRemove(false);
                        }
                        return this.start(msg);
                    }; //Now Have MPass
                    
                    working.show();
                    const readPromiseAry = existingStores.map(store => store.read().catch(store.catchLoad));
                    Promise.race(readPromiseAry).then(this.paint);//.catch(e => console.log("Caught in PromiseRace"));
                    await Promise.all(readPromiseAry);

                    if(!this.dbObj) throw txtBank.app.values.errNoDB; //"No Database to Display";
                    this.checkExtraSync().catch(e => this.start(e, true));
                    appStartFailCount = 0;
                }else{
                    loadDbWrp.show();
                    //working.hide();
                    err ? this.message.fail(msg) : this.message.loadBd();
                    loadLocalFile.on('click', this.dbStore.localFile.load);
                    loadDbxFile.on("click", this.dbStore.dbxFile.load);
                }
            }catch(e){
                if(++appStartFailCount > 5) return;;
                if (e === "badPass") return this.start(txtBank.app.values.badPass, true); // badPass: "Password Incorrect... removing all databases"
                 
                console.log("FATAL ERROR. APP WILL NOT START! startApp", appStartFailCount, e);
                this.message.appFailed(e); // ???????????????????????!!!!!!!!!!!!!!!!!!!!!!!!

                return this.start(e, true);
            }
        }
    }
    
    /* DOM -------------------------------------------------------------------------- */

    
    const dom = function(el){
        el.addClass = cssClass => {el.classList.add(cssClass); return el;};
        el.removeClass = cssClass => {el.classList.remove(cssClass); return el;};
        el.hasClass = cssClass => el.classList.contains(cssClass);
        el.cssName = cssClasses => {el.className = cssClasses; return el;};
        el.hide = _ => {el.classList.add("elNoDisplay"); return el;};
        el.toggleDisplay = _ => {el.classList.toggle("elNoDisplay"); return el;};
        el.show = _ => {el.classList.remove("elNoDisplay"); return el;};
        el.slideOut = _ => {el.classList.add("elSlideOut"); return el;};
        el.slideIn = _ => {el.classList.remove("elSlideOut"); return el;};
        el.ridKids = (idx = 0) => {while(el.children[idx]) el.removeChild(el.lastChild); return el;};
        el.on = (type, fn, opt) => {el.addEventListener(type, fn, opt); return el;};
        el.attachTo = parentEl => {parentEl.appendChild(el); return el;};
        el.attach = kidEl => {if(kidEl) el.appendChild(kidEl); return el;};
        el.setAttr = (name, value) => {el.setAttribute(name, value); return el;};
        el.html = innerHtml => {el.innerHTML = innerHtml; return el;};
        el.txt = txt => {el.textContent = txt; return el;};
        el.clone = deep => dom(el.cloneNode(deep));
        el.kidsByClass = cssClass => [...el.getElementsByClassName(cssClass)];
        //if(txtBank.app.titles[el.id]) el.title = txtBank.app.titles[el.id];
        //if(txtBank.app.htmls[el.id]) el.innerHTML = txtBank.app.htmls[el.id];
        //if(txtBank.app.placeholders[el.id]) el.placeholder = txtBank.app.placeholders[el.id];
        //localise(el);
        return el;
    }
    dom.add = tag => dom(document.createElement(tag));
    [...document.querySelectorAll('*')].forEach(dom); // Add shortcut functions to all the elements in DOM
    //console.log(" [...document.querySelectorAll('*')].forEach(dom) happened now");
    //[...document.querySelectorAll('*')].forEach(e=>console.log(e));
    const app = new App();

/* ----------------- BD password -------------------*/
    function getKeyMaterial(passU8Ary) {
        return window.crypto.subtle.importKey(
            "raw",
            passU8Ary,
            "PBKDF2",
            false,
            ["deriveBits", "deriveKey"]
        );
    }

    async function deriveBits(passU8Ary, saltU8Ary, pbkfd2Loops){
        return u8Ary.newFrom(
            await window.crypto.subtle.deriveBits(
                {
                  "name": "PBKDF2",
                  salt: saltU8Ary,
                  "iterations": pbkfd2Loops,
                  "hash": "SHA-256"
                },
                await getKeyMaterial(passU8Ary),
                128
            )
        );
    }

    async function deriveKey(passU8Ary, saltU8Ary) {
        return window.crypto.subtle.deriveKey(
            {
                "name": "PBKDF2",
                salt: saltU8Ary,
                "iterations": 100000,
                "hash": "SHA-256"
            },
            await getKeyMaterial(passU8Ary),
            { "name": "AES-GCM", "length": 256},
            true,
            [ "encrypt", "decrypt" ]
        );
    }

    async function getDigest(dataU8Ary) {
      return await crypto.subtle.digest('SHA-256', dataU8Ary);
    }

    async function getPassSeed(salt) {
        let getSeedCharCodeU8Ary = seedInt => u8Ary.newFrom([app.mpU8Ary[seedInt % app.mpU8Ary.length]]);
        let seedCharCodeU8Ary =  getSeedCharCodeU8Ary(app.mpU8Ary.sum());
        let passSeed = salt || u8Ary.newFrom(await getDigest(seedCharCodeU8Ary));
        //let testNewPass = new TextDecoder().decode(seedCharCodeU8Ary);
        for (let i = 0; i < app.mpU8Ary.length; i++){
            passSeed = u8Ary.newFrom(await getDigest(u8Ary.newFrom([...passSeed, ...seedCharCodeU8Ary]))) ;
            seedCharCodeU8Ary = getSeedCharCodeU8Ary(passSeed[i]);
            //testNewPass += new TextDecoder().decode(seedCharCodeU8Ary);
        }
        //console.log(testNewPass, passSeed, salt);
        return passSeed;
    }

    async function getSaltPlaceAry(cipherAryLen){
        const placeFromSeed = u8Ary.newFrom(await getPassSeed());
        const placeSalt = u8Ary.newFrom([...placeFromSeed.slice(0,16), ...new TextEncoder().encode(cipherAryLen)]);
        const pbkfd2Loops = placeFromSeed.slice(26).sum() + placeFromSeed.slice(16, 26).sum() * 1000;
        return [...await deriveBits(placeFromSeed, placeSalt, pbkfd2Loops)].sort((a, b) => a - b);
    }
    
    async function encodeString(string){ //returns concat iv and ciphertext arrays
        const iv = window.crypto.getRandomValues(u8Ary.newFrom(12));
        const salt = window.crypto.getRandomValues(u8Ary.newFrom(16));
        const key = await deriveKey(await getPassSeed(salt), salt);
        const dbContentU8Ary = new TextEncoder().encode(string);
        const cipherAryBuf = await window.crypto.subtle.encrypt(
            {
                name: "AES-GCM",
                iv: iv
            },
            key,
            dbContentU8Ary
        );
        const cipherAry = [...iv, ...u8Ary.newFrom(cipherAryBuf)];
        return [cipherAry, salt];
    }
    
    async function getEncodedU8Ary(string){
        let [cipherAry, salt] = await encodeString(string);
        const saltPlaceAry = await getSaltPlaceAry(cipherAry.length);
        const idxAry = [];
        let initIdx, lastIdxAry, idx;
        for (let i = 0; i < saltPlaceAry.length; i++){
            initIdx = saltPlaceAry[i];
            lastIdxAry = idxAry.at(-1);
            idx = lastIdxAry === initIdx ? lastIdxAry + 1 : initIdx;
            idxAry.push(idx);
            cipherAry.splice(idx, 0, salt[i]);
        }
        return u8Ary.newFrom(cipherAry);
    }

    async function getDecodedString(encodedAryBuffer){
        let cipherAry = [...u8Ary.newFrom(encodedAryBuffer)];
        const cipherAryLen = cipherAry.length - 16;
        const saltPlaceAry = await getSaltPlaceAry(cipherAryLen);
        const frontSaltAry = [];
        const endSaltAry = [];
        const idxAry = [0];
        let initIdx, lastIdxAry, idx;

        for (let i = 0; i < saltPlaceAry.length; i++){
            lastIdxAry = idxAry.at(-1);
            initIdx = saltPlaceAry[i] - i;
            idx = initIdx > lastIdxAry ? initIdx : lastIdxAry;
            idxAry.push(idx);
            if(cipherAryLen < idx){
                endSaltAry.push(cipherAry.at(-1));
                cipherAry.pop();
            }else{
                frontSaltAry.push(cipherAry[idx]);
                cipherAry.splice(idx, 1);
            }
        }
        
        const iv = u8Ary.newFrom(cipherAry.slice(0,12));
        const salt = u8Ary.newFrom([...frontSaltAry, ...endSaltAry.reverse()]);
        const cipher = u8Ary.newFrom(cipherAry.slice(12));
        const key = await deriveKey(await getPassSeed(salt), salt);
        const decodedAryBuf = await window.crypto.subtle.decrypt(
            {
                name: "AES-GCM",
                iv: iv
            },
            key,
            cipher
        );
        return new TextDecoder().decode(decodedAryBuf);
    }
    
    function decodeToString(encodedAryBuffer, counter = 1){
        return getDecodedString(encodedAryBuffer).catch(async e =>{
            if(counter > 4) return app.clearAllStorage().then(_ => { throw "badPass"; });
            if(!await masterPass.get((5 - counter), e)) return app.clearAllStorage().then(_ => {throw "badPass"; });
            return await decodeToString(encodedAryBuffer, ++counter);
        });
    }
    
    function decodeToJson(encodedAryBuffer){
        if(app.pendingPromise) return app.pendingPromise.then(_ => decodeToJson(encodedAryBuffer));

        return app.pendingPromise = decodeToString(encodedAryBuffer).then(decodedString => {
            app.pendingPromise = null;
            return JSON.parse(decodedString);
        });
    }
/* =============================================================== */
    /*  ------------- Password Scrambler -------------  */
    async function getOriginalMpU8Ary(){
        const mpXor = app.dbObj.mpXor ? u8Ary.newFrom(app.dbObj.mpXor) : u8Ary.newFrom(32);
        return app.mpU8Ary.map((bit,idx) => bit ^ mpXor[idx]);
    }
    
    async function getVendorPassword(saltHexString, alphaNum){
        const base91Ary2d = [
            ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
            ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
            ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
            ['!', '#', '$', '%', '&', '(', ')', '*', '+', ',', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~', '"']
        ];
        
        if(alphaNum){
            base91Ary2d[3] = [...base91Ary2d[0], ...base91Ary2d[1], ...base91Ary2d[2]];
        }
        
        const base91AryFlat = base91Ary2d.flat();
        const saltU8Ary = u8Ary.fromHexString(saltHexString);
        const originalMpU8Ary = await getOriginalMpU8Ary();
        const pbkfd2Loops = originalMpU8Ary.sum() + saltU8Ary.sum();
        const derivedBitsU8Ary = await deriveBits(originalMpU8Ary, saltU8Ary, pbkfd2Loops);
        const bitsDigestBuffer = await getDigest(derivedBitsU8Ary);
        const bitsDigestU8Ary =  u8Ary.newFrom(bitsDigestBuffer.slice(0, 20));
        
        return [...bitsDigestU8Ary].map((bin, idx) => idx < 4 ? base91Ary2d[idx][bin % base91Ary2d[idx].length] : base91AryFlat[bin % base91AryFlat.length]).join("");
    }
/* =============================================================== */
    /*  ------------- Vendor Object Constructor -------------  */
    function VendorCredentials(vId, vName, vIsNote, vLog, vNote, vUrl, vTags, vSalt, vOldSalt, vCreated, vAlphaNum, vOldAlphaNum){
        this.id = vId || (app.dbObj.vendors.length ? Math.max.apply(Math, app.dbObj.vendors.map(o => o.id)) + 1 : 1);
        this.name = vName;
        if(vIsNote) this.isNote = true;
        if(vLog) this.log = vLog;
        if(vNote) this.note = vNote;
        if(vUrl) this.url = vUrl;
        if(vTags) this.tags = vTags;
        this.salt = vSalt || u8Ary.toHexString(self.crypto.getRandomValues(u8Ary.newFrom(16)));
        if(vOldSalt) this.oldSalt = vOldSalt; // || "";
        this.cr8 = vCreated || new Date();
        this.mod = new Date();
        if(vAlphaNum) this.alphaNum = vAlphaNum;
        if(vOldAlphaNum) this.oldAlphaNum = vOldAlphaNum;;
    }
    
    


    /*  ------------- UI -------------  */

    function toggleSearch(){
        this.classList.toggle("searchBtnHide");
        searchForm.classList.toggle("searchFormHide");
        this.title = this.hasClass("searchBtnHide") ? txtBank.app.titles.inputBoxSearchBtnHide : txtBank.app.titles.inputBoxSearchBtn;
        this.setAttr("for", this.hasClass("searchBtnHide") ? "inputBoxSearch" : "resetSearch");
    }

    function clearSearchShow(e){
        inputBoxSearch.value ? inputBoxResetBtn.show() : inputBoxResetBtn.hide();

    }

    function clearSearchInput(e){
        e.stopPropagation();
        e.preventDefault();
        inputBoxSearch.value = "";
        inputBoxResetBtn.hide();
        
        setTimeout(paintList, 50);

        if(this.hasClass("searchFormHide")){
            /* console.log("programatic blur"); */
            inputBoxSearch.blur();
        }else{
            inputBoxSearch.focus();
        }
    }

    function paintList(){
        /* console.log("startPaintList"); */
        app.dbObj.vendors.forEach(vendorObj => {
            for (const [key, value] of Object.entries(vendorObj)) {
              if(!value) delete vendorObj[key];
            }
        });

        listScrollWrp.scrollTo(0, 0);
        const showLogs = app.showList.typeLog;
        const showNotes = app.showList.typeNote;
        
        const vendAllowAry = app.sortList.active(app.dbObj.vendors.filter(obj => (showNotes && obj.isNote) || (showLogs && !obj.isNote)));
        const searchStr = inputBoxSearch.value;//.toLowerCase();
        const filterBy = prop => vendAllowAry.filter(obj => obj[prop] && obj[prop].toLowerCase().includes(searchStr.toLowerCase()));

        const nameHitAry = searchStr ? filterBy("name") : vendAllowAry;
        const tagHitAry = filterBy("tags").filter(obj => !nameHitAry.map(({ id }) => id).includes(obj.id));
        const noteHitAry = filterBy("note").filter(obj => !nameHitAry.map(({ id }) => id).includes(obj.id) && !tagHitAry.map(({ id }) => id).includes(obj.id));

        const vNameStr = vName => searchStr ? vName.replace(new RegExp(searchStr, 'gi'), match => dom.add("span").cssName("hit").html(match).outerHTML) : vName;
        const headEl = str => dom.add("div").cssName("trHead").attach(dom.add("div").html(str));
        const appendTovList = (headEl, vendObjAry) => {
            if(!vendObjAry.length) return;

            const trCssAry = vendObjAry.map(vendObj => vendObj.isNote ? "typeNote" : "typeLog");

            const detDates = vendObj => app.showList.detDates ? dom.add("div").cssName("inputCs vDates").attach(dom.add("div").cssName("inputCs vCr8").html(new Date(vendObj.cr8).toUKstring())).attach(dom.add("div").cssName("inputCs vMod").html(new Date(vendObj.mod).toUKstring())) : null;
            const detNotes = vendObj => app.showList.detNotes ? dom.add("div").cssName("inputCs vNotes").html(vNameStr(vendObj.note || "---")) : null;
            const detTags = vendObj => app.showList.detTags ? dom.add("div").cssName("inputCs vTags").html(vNameStr(vendObj.tags || "---")) : null;

            vList.attach(headEl);
            vendObjAry.forEach((vendObj, idx) => vList.attach(dom.add("div").cssName(trCssAry[idx]).on("click", _ => vForm.open(vendObj)).attach(dom.add("div").cssName("inputCs vName").html(vNameStr(vendObj.name))).attach(detDates(vendObj)).attach(detNotes(vendObj)).attach(detTags(vendObj))));
        }

        vList.ridKids();

        if(!nameHitAry.length && !tagHitAry.length && !noteHitAry.length) vList.attach(headEl(txtBank.app.htmls.vListHeads.notFound.parseTemplate({searchStr: searchStr})));
        appendTovList(headEl(txtBank.app.htmls.vListHeads.nameFound), nameHitAry);
        appendTovList(headEl(txtBank.app.htmls.vListHeads.tagsFound.parseTemplate({searchStr: searchStr})), tagHitAry);
        appendTovList(headEl(txtBank.app.htmls.vListHeads.notesFound.parseTemplate({searchStr: searchStr})), noteHitAry);

        /* console.log("EndPaintList"); */
    }

    const boxNoteResize = e => {
        let ifst = inputForm.scrollTop;
        inputBoxNote.value = e && e.target ? e.target.value : e; // || "";
        inputBoxNote.style.height = "auto";

        if(inputBoxNote.scrollHeight <= inputBoxNote.clientHeight){
            inputBoxNote.removeClass("max");
            inputBoxNote.rows = "2";
        }else if(!inputBoxNote.hasClass("max")){
            inputBoxNote.addClass("max");
            inputBoxNote.rows = "1";
            inputBoxNote.style.height = inputBoxNote.scrollHeight + "px";
        }
        inputBoxNote.style.height = inputBoxNote.scrollHeight + "px";
        inputForm.scrollTop = ifst;
    };

    const vForm = (_ => {
        let accountDeleted = false;
        let formIsOpen = false;

        function vFormClose(e){ //e = null - (account deleted), event_popstate (history back), event_click - (close form Button), true - (getMasterPass - reload after inactivity)
            if (e && e.type === "popstate"){
                if(accountDeleted) app.message.vendorDeleted();
                if(!e.state){
                    app.message.exitAppConfirm();
                    setTimeout( _ =>  window.history.pushState({noBackExists: true}, '', ''), 2000);
                }
                inputFormWrp.slideOut();
                formIsOpen = false;
                accountDeleted = false;
            }else{
                accountDeleted = !e;
                return window.history.back();
            }
        }

        async function vFormOpen(vendObj, mode){ //, mode = "df" //vendObj = null, then mode = nf || nn; if vendObj = vendor, then mode id defined 
            
            if(!vendObj && mode === "nf"){
                toggleNoteChBox.checked = false;
            }

            app.activeVendObj = vendObj;

            const isNote = vendObj ? vendObj.isNote || false : toggleNoteChBox.checked;
            
            if(!mode){
                mode = isNote ? "dn" : "df";
            }


            inputForm.reset();
            toggleNoteChBox.checked = isNote;
            if(isNote){
                toggleNoteBtn.addClass("toggleToLog");
                toggleNoteBtn.title = txtBank.app.titles.toggleToLog;
            }else{
                toggleNoteBtn.removeClass("toggleToLog");
                toggleNoteBtn.title = txtBank.app.titles.toggleToNote;
            }
            
            
            inputBoxPass.type = "password";
            showPassToggleBtn.removeClass("passEyeHide");

            [...inputForm.children].forEach(formSection => {
                
                if (!formSection.hasClass(mode)){
                    /* console.log(formSection, " is hidden..."); */
                    return formSection.hide();
                }
                [...formSection.show().children].forEach(el => {
                    if (el.hasClass(mode)){
                       
                        
                        if(txtBank.app.htmls[el.id]) el.html(txtBank.app.htmls[el.id]);
                        if(txtBank.app.placeholders[el.id]) el.placeholder = txtBank.app.placeholders[el.id];
                        
                        el.show();
                        if(el.type !== "password"){
                            ((el.tagName === "INPUT" || el.tagName === "TEXTAREA") && (mode === "df" || mode === "dn")) ? el.setAttribute("disabled", "true") : el.removeAttribute("disabled");
                        }
                    }else{
                        el.hide();
                    }
                });
            });
            
            if(formFoot.hide().hasClass(mode)){
                 [...formFoot.show().children].forEach(el => {
                     el.hasClass(mode) ? el.show() : el.hide();
                 })
            }
            const formTitleClass = {
                nf: "newLog",
                nn: "newNote"
            }[mode] || "";

            formTitle.cssName(formTitleClass).textContent = "";
            boxNoteResize(null);
            if(app.activeVendObj){
                formTitle.textContent = inputBoxName.value = app.activeVendObj.name;
                recordCr8Date.textContent = new Date(app.activeVendObj.cr8).toUKstring();
                
                //isNote ? formIcon.addClass("formIconTypeNote") : formIcon.removeClass("formIconTypeNote");
                
                formIcon.cssName(isNote ? "formIconTypeNote" : "formIconTypeLog");
                
                recordModDate.textContent = new Date(app.activeVendObj.mod).toUKstring();
                inputBoxLog.value = app.activeVendObj.log || "";
                inputBoxPass.value = await getVendorPassword(app.activeVendObj.salt, app.activeVendObj.alphaNum);
                inputBoxAlphaNum.checked = app.activeVendObj.alphaNum; // CHECK!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

                if(app.activeVendObj.oldSalt && mode === "df"){
                    formSvOldPas.show();
                    inputBoxOldPass.value = await getVendorPassword(app.activeVendObj.oldSalt, app.activeVendObj.oldAlphaNum);
                }else{
                    formSvOldPas.hide();
                }
                
                boxNoteResize(app.activeVendObj.note || null);
                
                inputBoxUrl.value = app.activeVendObj.url || "";
                if(isURL(app.activeVendObj.url) && mode === "df"){
                    vendUrl.href = app.activeVendObj.url;
                    openLinkBtn.show();
                }else{
                    openLinkBtn.hide();
                }
                inputBoxTags.value = app.activeVendObj.tags || "";
            }
            window.history.pushState({modOpen: true}, '', '');
            formIsOpen = true;
            inputFormWrp.slideIn();
            return vendObj;
        }

        return {
            open: vFormOpen,
            close: vFormClose,
            editLog: _ => vFormOpen(app.activeVendObj, "ef"),
            editNote: _ => vFormOpen(app.activeVendObj, "en"),
            new: _ => vFormOpen(null, "nf"),
            typeLog: _ => {
                if(app.activeVendObj) app.activeVendObj.isNote = false;
                vFormOpen(app.activeVendObj, "nf");
            },
            typeNote: _ => {
                if(app.activeVendObj) app.activeVendObj.isNote = true;
                vFormOpen(app.activeVendObj, "nn")
            },
            isOpen: _ => formIsOpen,
        };
    })();

    function copyClipboard(){
        const [inputBoxVal, messageFn] = {
            copyLogBtn:[inputBoxLog.value, app.message.logCopied],
            copyPassBtn:[inputBoxPass.value, app.message.passCopied],
            copyOldPassBtn:[inputBoxOldPass.value, app.message.oldPassCopied]
        }[this.id];
        window.navigator.vibrate(50);
        navigator.clipboard.writeText(inputBoxVal).then(messageFn);
    }

    function showPasToggle(){
        const passBox = document.querySelector("#" + this.parentElement.id + " .passBox");
        passBox.type = passBox.type === "text" ? "password" :  "text";
        [...document.querySelectorAll('.passEye')].forEach(el => el.classList.toggle("passEyeHide"));
    }
    

    
    function detsDatesToggle(){
        app.showList.set(this, "detDates", !app.showList.detDates);
        paintList();
        //[...document.querySelectorAll('.vDates')].forEach(el => el.classList.toggle("elNoDisplay"));
    }
    function detsNotesToggle(){
        app.showList.set(this, "detNotes", !app.showList.detNotes);
        paintList();
        //[...document.querySelectorAll('.vNotes')].forEach(el => el.classList.toggle("elNoDisplay"));
    }
    
    function detsTagsToggle(){
        app.showList.set(this, "detTags", !app.showList.detTags);
        paintList();
        //[...document.querySelectorAll('.vTags')].forEach(el => el.classList.toggle("elNoDisplay"));
    }

    function typeNoteToggle(){
        app.showList.set(this, "typeNote", !app.showList.typeNote);
        paintList();
    }
    
    function typeLogToggle(){
        app.showList.set(this, "typeLog", !app.showList.typeLog);
        paintList();
    }

    function switchTask (){
        this.classList.toggle("taskSwitchDetais");
        if(this.hasClass("taskSwitchDetais")){
            
            vListSortBar.slideOut();
            this.title = txtBank.app.titles.vTaskSwitchSort;
        }else{
            vListSortBar.slideIn();
            this.title = txtBank.app.titles.vTaskSwitch;
            
        }
    }

    function sortName(){
        if(!this.hasClass("elDimmed")) this.classList.toggle("vSortNameDesc");
        app.sortList.active = app.sortList.name[this.hasClass("vSortNameDesc") ? "desc" : "asc"];
        paintList();
    }

    function sortMod(){
        if(!this.hasClass("elDimmed")) this.classList.toggle("vSortModAsc");
        app.sortList.active = app.sortList.mod[this.hasClass("vSortModAsc") ? "asc" : "desc"];
        paintList();
    }

    function sortCr8(){
        if(!this.hasClass("elDimmed")) this.classList.toggle("vSortCr8Asc");
        app.sortList.active = app.sortList.cr8[this.hasClass("vSortCr8Asc") ? "asc" : "desc"];
        paintList();
    }

    const confirmDeleteVendor = async _ => await app.alert.deleteVendor(app.activeVendObj.name) ? deleteVendor() : app.message.deleteVendorReject(app.activeVendObj.name);

    // ------- End UI ------------------ //

    // -------------Start Content Management -------------//
    function amendDbVendors(vendObj, method = "update"){
        app.activeVendObj = vendObj;
        if(!app.activeVendObj) return app.dbObj.vendors.pop();
        if(method === "update") app.dbObj.vendors = app.dbObj.vendors.map(vObj => vObj.id === app.activeVendObj.id ? app.activeVendObj : vObj);
        if(method === "add") app.dbObj.vendors.push(app.activeVendObj);
    }

    async function submitNewPassword(){
        const activeVendObjCopy = {...app.activeVendObj};
        amendDbVendors( new VendorCredentials(app.activeVendObj.id, app.activeVendObj.name, app.activeVendObj.isNote, app.activeVendObj.log, app.activeVendObj.note, app.activeVendObj.url, app.activeVendObj.tags, false, app.activeVendObj.salt, app.activeVendObj.cr8, inputBoxAlphaNum.checked, app.activeVendObj.alphaNum) );
        app.dbStoreUpdateAll(app.activeVendObj, true).then(av => vForm.open(av)).then(_ => app.paint()).catch(e => {
            working.hide();
            app.message.submitPassFailed(app.activeVendObj.name, e);
            amendDbVendors(activeVendObjCopy);

        });
    }

    async function submitInputForm(e){
        /* console.log("inputing form:", "toggleNoteChBox.checked =", toggleNoteChBox.checked); */
        e.preventDefault();
        //Do basic Checks
        if(inputBoxName.value.length < 4) return app.message.nameShort();
        if(!toggleNoteChBox.checked && inputBoxLog.value.length < 6) return app.message.logShort(); // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        const activeVendObjCopy = app.activeVendObj ? {...app.activeVendObj} : app.activeVendObj;

        if (app.activeVendObj){ // Update Vendor Object
            if (app.dbObj.vendors.some(vObj => vObj.name === inputBoxName.value && vObj.id !== app.activeVendObj.id)) return app.message.vendorExists(app.activeVendObj.id);
            amendDbVendors( new VendorCredentials(app.activeVendObj.id, inputBoxName.value, toggleNoteChBox.checked, inputBoxLog.value, inputBoxNote.value, inputBoxUrl.value, inputBoxTags.value, app.activeVendObj.salt, app.activeVendObj.oldSalt, app.activeVendObj.cr8, inputBoxAlphaNum.checked, app.activeVendObj.oldAlphaNum) );
        }else{ // Add Vendor Object
            if (app.dbObj.vendors.some(vObj => vObj.name === inputBoxName.value)) return app.message.vendorExists(inputBoxName.value);
            amendDbVendors(new VendorCredentials(null, inputBoxName.value, toggleNoteChBox.checked, inputBoxLog.value, inputBoxNote.value, inputBoxUrl.value, inputBoxTags.value, null, null, null, inputBoxAlphaNum.checked, null), "add");

        }
        app.dbStoreUpdateAll(app.activeVendObj, true).then(av => vForm.open(av)).then(_ => app.paint()).catch(e => {
            working.hide();
            app.message.submitFormFailed(app.activeVendObj.name, e);
            amendDbVendors(activeVendObjCopy);
        });
    }

    async function deleteVendor(){
        const idx = app.dbObj.vendors.findIndex((el) => el.id === app.activeVendObj.id);
        app.dbObj.vendors.splice(idx, 1);
        app.dbStoreUpdateAll(null, true).then(_ => app.paint(true)).then(vForm.close).catch(e => {
            working.hide();
            app.message.deleteVendorFailed(app.activeVendObj.name, e);
            app.dbObj.vendors.splice(idx, 0, app.activeVendObj);

        });
    }

    // --------------------------masterPass---------------------------------------
    const masterPass = (_ => {
        let resolve = null;

        function close(mpSubmited){
            const res = mpSubmited === true;
            masterPasFormWrp.hide();
            masterPasForm.reset();
            if(resolve) resolve(res);
            resolve = null;
        }

        async function submit(e) {
            working.show();
            e.preventDefault();
            if(masterPasInputBox.value.length < 10) {
                working.hide();
                return app.message.passShort();
            }
            app.mpU8Ary = u8Ary.newFrom(await getDigest(new TextEncoder().encode(masterPasInputBox.value)));
            close(true);
        }

        function get(msg, e) {
            working.hide();
            loadDbWrp.hide();
            masterPasInputBox.value = "";
            if(vForm.isOpen()) vForm.close(true);
            showMPassToggleBtn.removeClass("passEyeHide");
            masterPasFormWrp.show();
            masterPasInputBox.focus();
            e ? app.message.dbFailed(msg, e) : app.message.digest(msg);
            return new Promise(res => resolve = res);
        }
        
        async function change(){
            newDb.hide();
            [...masterPasFormWrp.getElementsByClassName('masterPassIcon')].forEach(icon => icon.hide());
            mpChange.show();
            mpClose.show();
            masterPasFormTitle.html(txtBank.app.htmls.masterPasFormChangePass);//masterPasFormTitle.html("Database Password Change");
            const originalMpU8Ary = await getOriginalMpU8Ary();
            if(!await get("Change Your Password...")) return close(false);
            app.dbObj.mpXor = [...originalMpU8Ary.map((bit,idx) => bit ^ app.mpU8Ary[idx])];
            app.dbStoreUpdateAll(null, true).then(app.paint);
        }

        return{
            submit:submit,
            get: get,
            change: change,
            close: close
        };
    })();

    // --------------------------supportDonate---------------------------------------
    const supportDonate = (_ => {
        
        function closeDonate(){
            donateWrp.ridKids().hide();
        }
        
        function showDonateList(){
            const donateWith = {
                currency: {
                    "paypal":{
                        "barcode": "paypal_barcode=01019122892",
                        "walletAddress": "paypal_address=q397937512935729"
                    },
                    "revolut":{
                        "barcode": "revolut_barcode=01019122892",
                        "walletAddress": "revolut_address=q397937512935729"
                    }
                },
                crypto: {
                    "lunc": {
                        "barcode": "lunc_barcode=01019122892",
                        "walletAddress": "lunc_address=q397937512935729"
                    },
                    "rose": {
                        "barcode": "barcode_barcode=01019122892",
                        "walletAddress": "oasis1 qrl7 c4hh jzfj kwqa l5e5 r0u7 jd6x y2xk y5g4 waqg"
                    },
                    "btt": {
                        "barcode": "btt_barcode=01019122892",
                        "walletAddress": "btt_address=q397937512935729"
                    },
                    "doge": {
                        "barcode": "doge_barcode=01019122892",
                        "walletAddress": "doge_address=q397937512935729"
                    },
                    "shibainu": {
                        "barcode": "shibainu_barcode=01019122892",
                        "walletAddress": "shibainu_address=q397937512935729"
                    }
                }
            };
            
            function payMethodDetails(payType, payMethod){
                const frgmPayDetail = new DocumentFragment();
                frgmPayDetail.append(
                    dom.add("div").cssName("barcode barcode_" + payMethod)
                );
                frgmPayDetail.append(
                    dom.add("div").cssName("walletAddress walletAddress_" + payMethod).on("click", async _ => {
                        navigator.clipboard.writeText(donateWith[payType][payMethod].walletAddress).then(app.message.logCopied);
                        //alert(donateWith[payType][payMethod].walletAddress);
                        const shareData = {
                          title: 'LPM - Donate ' + payMethod,
                          text: donateWith[payType][payMethod].walletAddress,
                        }
                          try {
                            await navigator.share(shareData);
                            console.log('MDN shared successfully');
                          } catch(err) {
                            resultPara.textContent = 'Error: ' + err
                          }
                        
                        
                    }).html(donateWith[payType][payMethod].walletAddress)
                )
                return frgmPayDetail;
            }

            function payMethodList(payType){
                const frgmPayMethod = new DocumentFragment();
                frgmPayMethod.append(...Object.keys(donateWith[payType])
                    .map(payMethod => dom.add("div")
                        .cssName("donateUse donateUse_" + payMethod)
                        .setAttr("title", payMethod)
                        .on("click", _ => {
                            showScreen(payMethodDetails(payType, payMethod));
                        })
                    )
                );
                return frgmPayMethod;
            }
            
            function payTypeList(){
                const frgmPayType = new DocumentFragment();
                frgmPayType.append(...Object.keys(donateWith)
                    .map(payType => dom.add("div")
                        .cssName("donateWith donateWith_" + payType)
                        .setAttr("title", payType)
                        .on("click", _ => {
                            showScreen(payMethodList(payType));
                        })
                    )
                );
                return frgmPayType;
            }
            
            function showScreen(docFragment){
                donateWrp.ridKids().attach(
                    dom.add("div").cssName('donateList').attach(
                        dom.add("div").cssName('svgIcon closeDonate').on("click", closeDonate)
                    ).attach(
                        docFragment
                    )
                ).show();
            }

            showScreen(payTypeList())
            
        }

        return{
            open:showDonateList,
            close: closeDonate,
        };
    })();
    
    // --------------------------changeLanguage---------------------------------------
    function changeLanguage(){
        const moreWrp = changeLang.parentElement;
        const frgm = new DocumentFragment();

        frgm.append(...["GB", "PL", "FR"]
            .map(lang => dom.add("div")
                .cssName("svgIcon listIcon lang" + lang)
                .setAttr("title", lang)
                .on("click", _ =>{
                    txtBank = txtBankObj[lang];
                    [...document.querySelectorAll('*')].forEach(localiseApp);
                    changeLang.cssName("svgIcon listIcon lang" + lang);
                    if(app.localStorage  && app.consent) app.localStorage.setItem("lang", lang);
                })
            )
        );
        const langSelect = dom.add("div").cssName("langSelectWrp").attach(frgm);
        moreWrp.attach(langSelect);
        changeLang.hide();
        setTimeout(function(){
            document.body.on("click", function(){
                moreWrp.removeChild(langSelect);
                changeLang.show();
            },{ once : true });

        }, 100)
    }

    // --------------------------Emergency Copy---------------------------------------
    async function getEmergencyHtml(){
        let doc = document.implementation.createHTMLDocument("LPM Emergency");
        
        dom.add("style").html("body{position: absolute;margin: 0;padding: 0;width: 100%;font-family: monospace;font-size: 16px}button{position: sticky;margin: 1em auto;display: block;padding: 1em;top: 0;}.record{margin: 1em auto;padding: 1em;outline: 1px solid grey;max-width: 900px;word-break: break-all;}.record *{padding:0.5em;}.record div:first-child{font-weight: bold;text-align: center;}").attachTo(doc.head);
        
        dom.add("form")
        .attach(
            dom.add("label").setAttr("for", "inputBoxPass").html("Password:")
        )
        .attach(
            dom.add("input").setAttr("type", "password").setAttr("id", "inputBoxPass").html("Password:")
        )
        .attach(
            dom.add("input").setAttr("type", "submit").setAttr("value", "Show my data...")
        )
        .attachTo(doc.body);
        
        function downloadFile(content, fName){
            const dbUrl = window.URL.createObjectURL(new Blob([content], {type : 'text/html'}));
            const a = document.createElement("a");
            a.setAttribute("href", dbUrl);
            a.setAttribute("download", fName);
            a.click();
            window.URL.revokeObjectURL(dbUrl);
        }
        
        function convertToCSV(objArray) {
            return objArray.map(vendObj => {
                let line = '';
                for(const prop in vendObj){
                    line += (line ? '\r\n,,' : '') + prop + ':,' + ('' + vendObj[prop]).replace(/[,\t\n\r]/gm,' _ ');
                }
                return line + '\r\n';
            }).join('');
        }
        
        async function downloadCSV(e){
            e.preventDefault();
            dom.add = tag => dom(document.createElement(tag));
            app.mpU8Ary = u8Ary.newFrom(await getDigest(new TextEncoder().encode(inputBoxPass.value)));
            document.body.removeChild(e.target);
            try{
                app.dbObj = await getDecodedString(Uint8Array.from(atob(db64String), c => c.charCodeAt(0)).buffer).then(decodedString => JSON.parse(decodedString));
                dom.add("button").on("click", function(){
                    downloadFile(convertToCSV(app.dbObj.vendors), 'dbEmrg_' + new Date().toISOString().slice(0,19).replaceAll(':', '_') + '.csv');
                }).html("Download Plain CVS").attachTo(document.body);
                
                for (let i = 0; i < app.dbObj.vendors.length; i++){
                    app.dbObj.vendors[i].plainPass = await getVendorPassword(app.dbObj.vendors[i].salt, app.dbObj.vendors[i].alphaNum);

                    dom.add("div").addClass("record")
                        .attach(dom.add("div").html(app.dbObj.vendors[i].name))
                        .attach(dom.add("div").html("Login: " + app.dbObj.vendors[i].log))
                        .attach(dom.add("div").html("Password: " + app.dbObj.vendors[i].plainPass))
                        .attachTo(document.body);
                }
            }catch(e){
                console.log('No Go!');
            }
        }
        const constStr = "const app = {}; const dom=" + dom + "; Uint8Array.prototype.sum = " + Uint8Array.prototype.sum + "; const u8Ary = {newFrom: data => new Uint8Array(data),fromHexString: hexString => u8Ary.newFrom(hexString.match(/.{1,2}/g).map(byte => parseInt(byte, 16))),toHexString: bytes => bytes.reduce((str, byte) => str + byte.toString(16).padStart(2, '0'), '')}; document.querySelector('form').addEventListener('submit', downloadCSV); const db64String='" + btoa([...await getEncodedU8Ary(JSON.stringify(app.dbObj))].map(b => String.fromCharCode(b)).join('')) + "';";

        const scriptString = [constStr, getKeyMaterial, deriveBits, deriveKey, getDigest, getPassSeed, getSaltPlaceAry, encodeString, getEncodedU8Ary, getDecodedString, getOriginalMpU8Ary, getVendorPassword, downloadFile, convertToCSV, downloadCSV].map(f => f.toString()).join('');

        dom.add("script").html(scriptString).attachTo(doc.body);
        downloadFile('<!DOCTYPE html>' + doc.documentElement.outerHTML, "lpm_" + new Date().toISOString().slice(0,19).replaceAll(':', '').replace('T', '_') + ".html");
    }
    
    // -------------------------- Add  listeners --------------------------------------

        document.addEventListener("visibilitychange", app.visibilitychange());
        window.addEventListener('popstate', vForm.close);
        window.addEventListener('popstate', supportDonate.close);
        window.addEventListener('online', app.connectivitychange());
        window.addEventListener('offline', app.connectivitychange());

        // Add UI listeners
        addVendorBtn.on("click", vForm.new);
        editFormBtn.on("click", vForm.editLog);
        editNoteBtn.on("click", vForm.editNote);

        toggleNoteChBox.on("change", function(e){
            const formType = e.target.checked ? "typeNote" : "typeLog";
            vForm[formType]();
        });

        btnCloseForm.on("click", vForm.close);

        changeMasterPassBtn.on("click", masterPass.change);
        detsDatesIcon.on("click", detsDatesToggle);
        detsNotesIcon.on("click", detsNotesToggle);
        detsTagsIcon.on("click", detsTagsToggle);
        
        typeNoteIcon.on("click", typeNoteToggle);
        typeLogIcon.on("click", typeLogToggle);
        
        vTaskSwitch.on("click", switchTask);
        vSortName.on("click", sortName);
        vSortMod.on("click", sortMod);
        vSortCr8.on("click", sortCr8);

        inputForm.on("submit", submitInputForm);
        newPassBtn.on("click", submitNewPassword);

        deleteVendorBtn.on("click", confirmDeleteVendor);

        mpClose.on("click", masterPass.close);
        masterPasForm.on("submit", masterPass.submit);
        newDb.on('click', app.createNewDb);
        loadNewDb.on('click', app.createNewDb);
         
        showMPassToggleBtn.on("click", showPasToggle);
        showPassToggleBtn.on("click", showPasToggle);
        copyLogBtn.on("click", copyClipboard);
        copyPassBtn.on("click", copyClipboard);
        copyOldPassBtn.on("click", copyClipboard);

        inputBoxSearch.on("input", paintList);
        inputBoxSearch.on("input", clearSearchShow);

        searchForm.on("reset", clearSearchInput);
        searchForm.on("submit", clearSearchInput);
        inputBoxSearchBtn.on("click", toggleSearch);
        
        inputBoxNote.on("input", boxNoteResize);
        
        const taskbarHideOnScroll = (_ => {
            let lastScrollTop = 1;
            let mDown = false;
            
            const setMouseDown = e => mDown = e.type === 'mousedown';
            const scrollHandle = e => {
                const eHeight = appTaskbarWrp.getBoundingClientRect().height;
                const eTop = listScrollWrp.scrollTop > lastScrollTop ? eHeight : 0;
                appTaskbarWrp.style.top = "-" + eTop + "px";
                [...document.querySelectorAll(".trHead")].forEach(e => {
                    e.style.top = (eHeight - eTop) + "px";
                });
                vList.style.top = vListTaskBarWrp.style.top = (eHeight - eTop) + "px";
                lastScrollTop = listScrollWrp.scrollTop;
            }
            
            vList.on('mousedown', setMouseDown);
            vList.on('mouseup', setMouseDown);
            vList.on('mouseleave', setMouseDown);
            vList.on('mousemove', e =>{
                if(mDown) listScrollWrp.scrollTo(0, lastScrollTop - e.movementY);
            });
            listScrollWrp.on('scroll',scrollHandle);
            inputBoxSearch.on("blur", scrollHandle);
            return scrollHandle;
        })();
        
        moreMenu.on("click", function(){
            appMoreTaskbar.removeClass("elSlideCenterUp");
        });
        moreTaskbarClose.on("click", function(){
            appMoreTaskbar.addClass("elSlideCenterUp");
        });
        
        reloadApp.on("click", app.reload);
        
        donate.on("click", supportDonate.open);

        changeLang.on("click", changeLanguage);
        
        emergDb.on("click", getEmergencyHtml);

       // manifest.setAttr("href", manifestUrl);

/* ------------------------------------------------------------------------------*/

    function extendStore(storeObj, thisApp){
        function handleCatch(e){
            console.log(e);
            working.hide();
            storeObj.syncStop();
            return  e.message || e;
        }
        
        storeObj.catchLoad = async e => {
            const errMsg = handleCatch(e);
            if (e === "badPass") throw "badPass";
            if(await thisApp.alert.catchLoad(storeObj.key)){
                await storeObj.handleRemove(false);
                return thisApp.start(thisApp.message.existingOrNew)
            }
            await storeObj.syncPause();
        }
        storeObj.catchSync = async e => {
            const errMsg = handleCatch(e);
            await thisApp.alert.catchSync(storeObj.key, errMsg);
            await storeObj.handleRemove(false);
        }
        storeObj.catchUpdate = async e => {
            const errMsg = handleCatch(e);
            await thisApp.alert.catchUpdate(storeObj.key, errMsg);
            await storeObj.handleRemove(true);
            throw txtBank.app.values.updateFail; //updateFail: "Update Failed";
        }
        storeObj.syncPause = async _ => {
            storeObj.iconOpacity(false);
            storeObj.syncPaused = true;
        }
        storeObj.syncStart = _ => {
            if(thisApp.localStorage) thisApp.localStorage.removeItem(storeObj.key + "DontSync");
            storeObj.dontSync = false;
            storeObj.syncing = true;
            storeObj.syncIcon.addClass("storeSyncing"); 
        };
        storeObj.syncStop = _ => {
            storeObj.syncing = false;
            storeObj.syncIcon.removeClass("storeSyncing"); 
        };
        storeObj.handleUpdate = async data => {
            storeObj.handle = thisApp.idxDb ? await thisApp.idxDb.put(storeObj.key, await data) : await data;
        };
        storeObj.handleRemove = async noMoreSync => {
            if(noMoreSync){
                if(thisApp.localStorage && thisApp.consent) thisApp.localStorage.setItem(storeObj.key + "DontSync", true);
            }
            if(thisApp.idxDb) await thisApp.idxDb.delete(storeObj.key);
            await storeObj.reset();
        };
        storeObj.reset = async _ =>{
            storeObj.dbMod = 0;
            storeObj.syncStop();
            storeObj.dontSync = thisApp.localStorage ? thisApp.localStorage.getItem(storeObj.key + "DontSync") : false;
            storeObj.handle = thisApp.idxDb ? await thisApp.idxDb.get(storeObj.key) : null;
            storeObj.handlePlain = storeObj.redirect ? await storeObj.redirect() : null;
            let thisStoreExists = (storeObj.handle || storeObj.handlePlain) && !storeObj.syncPaused;
            storeObj.iconOpacity(thisStoreExists);
            return thisStoreExists ? storeObj : false;
        };
        storeObj.connect = async storeDbObj =>{
            storeObj.dbMod = storeDbObj.mod;
            if(storeObj.dbMod !== thisApp.dbObj.mod){
               if(storeObj.dbMod > thisApp.dbObj.mod){
               //if(!await thisApp.alert.update(storeObj, thisApp.dbObj.mod)){
                    await thisApp.setDbObj(storeDbObj);
                }
                await thisApp.dbStoreUpdateAll(null, false).then(_ => thisApp.paint(true));
            }
            storeObj.syncPaused = false;
            storeObj.iconOpacity(storeObj.handle);
            storeObj.syncStop();
            return storeObj.key;
        };
        storeObj.iconOpacity = (show) => {
            const method = show ? "removeClass": "addClass";
            storeObj.mpIcon[method]("elDimmed");
            storeObj.syncIcon[method]("elDimmed");
        }
        const syncToggle = async _ => {
            if(storeObj.syncing) return thisApp.message.error("Syncing");
            if(storeObj.handle && !storeObj.syncPaused){
                return await thisApp.alert.disconnectDbFrom(storeObj.key) ? storeObj.handleRemove(true) : null
            }
            storeObj.syncPaused = false;
            storeObj.sync().catch(storeObj.catchSync);
        }
        storeObj.syncIcon.on("click", syncToggle);
    }

/* ------------------------------------------------------------------------------*/
    function DbxFile (thisApp){
        const CLIENT_ID = '02fhhbs8a911871';
        const REDIRECT_URI = thisApp.URL; //"https://swedhearth.github.io/lpm/";
        const timeoutMsec = 5000;
        const dbxAuth = new Dropbox.DropboxAuth({
            clientId: CLIENT_ID,
        });
        let dbx = null; //Dropbox object
        
        function promiseWithTimeout(msecs, promise) {
          const timeout = new Promise((resolve, reject) => {
            setTimeout(_ => {
              reject(new Error("timeout"));
            }, msecs);
          });
          return Promise.race([timeout, promise]);
        }

        async function getRefreshFromCode(dbxUrlCode, dbxCodeVerifier){
            dbxAuth.setCodeVerifier(dbxCodeVerifier);
            const accessTokenResponse = await dbxAuth.getAccessTokenFromCode(REDIRECT_URI, dbxUrlCode);
            return accessTokenResponse.result.refresh_token;
        }

        async function refreshToken(rToken){
            dbxAuth.setRefreshToken(rToken);
            await dbxAuth.refreshAccessToken();
            return new Dropbox.Dropbox({ auth: dbxAuth });
        }

        const loadDbxFile = async _ => {
            if(!thisApp.online) return this.syncPause().then(thisApp.alert.offline);
            try{
                const authUrl = await dbxAuth.getAuthenticationUrl(REDIRECT_URI, undefined, 'code', 'offline', undefined, undefined, true);
                if(thisApp.sessionStorage){
                    thisApp.sessionStorage.setItem("dbxCodeVerifier", dbxAuth.codeVerifier);
                }else{
                    if(! await thisApp.alert.privateModeEnableClipboard() ) return;
                    navigator.clipboard.writeText(dbxAuth.codeVerifier);
                }
                if(thisApp.dbObj && thisApp.idxDb) thisApp.idxDb.put("dbxSyncExisting", await thisApp.getEncodedDb());
                // Set History State Here!!!!!!
                //window.history.replaceState({authorising: true}, '', window.location.pathname);
                thisApp.urlReplace(authUrl);
            }catch(e){
                this.catchSync(e).then(e => thisApp.start(e, true));
            }
        }

        const readDbxFile = async _ => {
            if(!this.handlePlain && !this.handle) return;
            if (this.handlePlain) await this.handleUpdate(getEncodedU8Ary(this.handlePlain));
            if(!thisApp.online) return this.syncPaused ? null : this.syncPause().then(thisApp.alert.offline);
            this.syncStart();
            const decodedDbxRefresher = this.handlePlain || await decodeToString(this.handle);
            dbx = await promiseWithTimeout(timeoutMsec, refreshToken(decodedDbxRefresher));
            let dbxSyncExisting;
            if(thisApp.idxDb){
                dbxSyncExisting = await thisApp.idxDb.get("dbxSyncExisting");
                await thisApp.idxDb.delete("dbxSyncExisting");
            }
            if(dbxSyncExisting){///from redirect - from already operational database through sync method
                thisApp.dbObj = await decodeToJson(dbxSyncExisting.buffer);
            }

            const fileListResponse = await dbx.filesListFolder({path: ''});

            if(!fileListResponse.result.entries.map(obj => obj.name).includes("lpm.db")){
                if(!thisApp.dbObj){
                    // ASK if new DB needs creating "No file, no app.dbObj - Need to create a new DB";
                    //app.dbObj = {mod: new Date(), vendors:[]};
                    await thisApp.setDbObj(null);

                }
                return this.update();
            }
            const response = await dbx.filesDownload({path: '/lpm.db'});
            const encodedDbxFileContent = await response.result.fileBlob.arrayBuffer();
            const dbxDbObj = await decodeToJson(encodedDbxFileContent);
            if(!thisApp.dbObj) thisApp.dbObj = dbxDbObj; // dropbox database loaded from button after redirect or from local handler if no local db is stored
            return this.connect(dbxDbObj);
        }

        const updateDbxFile = async _ => {
            if(!thisApp.online || this.dontSync || this.syncPaused || !dbx) return;
            this.syncStart();
            if(this.dbMod !== thisApp.dbObj.mod){
                await dbx.filesUpload(
                    {path: '/lpm.db', contents: await thisApp.getDbFileBlob(), mode: "overwrite", autorename: false}
                );
            }
            return this.connect(thisApp.dbObj);
        }
        
        const connectionSwitch = _ => {
            if(!thisApp.online || !this.handle) return this.syncPause();
            this.syncPaused = false;
            if(dbx){
                updateDbxFile().catch(this.catchLoad);
            }else{
                readDbxFile().then(thisApp.paint).catch(this.catchLoad);
            }
        }

        
        const redirect = async _ => {
            if(!thisApp.online) return this.syncPause().then(thisApp.alert.offline);
            const urlSearchParams = Object.fromEntries(new URLSearchParams(window.location.search.substring(1)));

            //if(urlSearchParams.error || !urlSearchParams.code) return null;
            let dbxCodeVerifier = null;
            if(urlSearchParams.code){
                window.history.replaceState({authorised: true}, '', window.location.pathname);
                if(thisApp.sessionStorage){
                    dbxCodeVerifier = thisApp.sessionStorage.getItem('dbxCodeVerifier');
                    thisApp.sessionStorage.clear();
                }else{
                    dbxCodeVerifier = await navigator.clipboard.readText();
                }
                if(!dbxCodeVerifier) return thisApp.reload();
            }
            
            if(!dbxCodeVerifier || !urlSearchParams.code || urlSearchParams.error) return null; //thisApp.checkHistoryState(); //null;
            return await getRefreshFromCode(urlSearchParams.code, dbxCodeVerifier);// NEW ACCOUNT - NEW JOIN
        }
        
        this.key = "dbxFile";
        this.name = "Dropbox Database";
        this.load = loadDbxFile
        this.read = readDbxFile;
        this.sync = loadDbxFile;
        this.update = updateDbxFile;
        this.syncIcon = syncDbxFileIcon;
        this.mpIcon = mpDbxFile;
        this.connectionSwitch = connectionSwitch;
        this.redirect = redirect;

        extendStore(this, thisApp);
    }

/* ------------------------------------------------------------------------------*/

    function LocalFile (thisApp){
        
        const fileOptions = { // File Options - save and read names and types
            suggestedName: 'lpm',
            types: [{
                description: 'LPMdb',
                accept: {
                    'application/db': ['.db']
                }
            }],
            excludeAcceptAllOption: true,
            multiple: false
        };
        
        const readDbUseFileHandle = async existing => { //FileSystemdbFileHandle API
            this.syncStart();
            async function verifyPermission(fileHandle, mode){
                return "granted" === await fileHandle.queryPermission({ mode:mode }) || "granted" === await fileHandle.requestPermission({ mode:mode });
            }
            if(!await verifyPermission(this.handle, existing ? "readwrite" : "read")) throw txtBank.app.values.userReject; //throw userReject: "User Rejected Use of the File Handle";
            return this.handle.getFile().then(file => file.arrayBuffer());
        }
            
        const readDbUseFileReader = async _ =>{
            this.syncStart();
            let fileContent = null;
            const loadEvent = await new Promise((resolve, reject) => {
                function readFile(e){
                    const reader = new FileReader();
                    reader.onload = resolve;
                    reader.onerror = reject;
                    reader.readAsArrayBuffer(e.target.files[0]);
                }

                function checkFilePicked(){
                    document.body.onfocus = null;
                    if(!fileContent){
                        thisApp.message.noFilePickedErr();
                        reject("No File Picked.");
                    }
                }
                document.body.onfocus = _ => setTimeout(checkFilePicked, 500);
                thisApp.message.pickFileFR();
                dom.add("input").setAttr("type", "file").on("input", readFile).click();
            });
            await this.handleRemove(false);
            fileContent = loadEvent.target.result;
            return fileContent;
        }
        
        const getNewHandle = async _ => {
            const [localFileHandle] = await window.showOpenFilePicker(fileOptions);
            await this.handleUpdate(localFileHandle);
        }
        
        const readNewFile = async _ => {
            thisApp.message.pickFile();
            return this.cantAlter ?  readDbUseFileReader() : getNewHandle().then(readDbUseFileHandle);
        }

        const readFile = async (getPass) => {
            const encodedLocalFileContent = this.handle ? await readDbUseFileHandle(true) : await readNewFile();
            
            if(getPass){ //Loaded from button on front page
                this.iconOpacity(true)
                if(!await masterPass.get(thisApp.message.existingDb)){
                    await this.handleRemove(false);
                    throw txtBank.app.values.noPass; //"no Database Password Provided";
                }; //Now Have MPass
            }
            
            const localFileDbObj = await decodeToJson(encodedLocalFileContent);
            if(!thisApp.dbObj) thisApp.dbObj = localFileDbObj;
            return this.connect(localFileDbObj);
        }
        
        const loadLocalFile = _ =>{ //external from btnClick
            working.show();
            readFile(true).then(thisApp.paint).then(_ => thisApp.checkExtraSync()).catch(e => thisApp.start(e, true));
        }
        
        const readLocalFile = async _ => { //from app.start (external)
            if(!this.handle) return;
            return readFile(false);
        }
        
        const downloadLocalFile = async _ => {
            const dbUrl = window.URL.createObjectURL(await thisApp.getDbFileBlob());
            dom.add("a").setAttr("href", dbUrl).setAttr("download", "lpm_" + new Date().toISOString().slice(0,10) + ".db").attachTo(document.body).click();
            window.URL.revokeObjectURL(dbUrl);
            this.syncStop();
        }

        const writeToFile = async (handle) => { //FileSystemdbFileHandle API
            const encodedDbBlob = await thisApp.getDbFileBlob();//await fileBlob promise from getEncodedAry
            const writable = await handle.createWritable();// Create a FileSystemWritableFileStream to write to.
            await writable.write(encodedDbBlob);// Write the contents of the file to the stream.
            await writable.close();  // Close the file and write the contents to disk.
            return this.connect(thisApp.dbObj);
        };

        const useNewdbFileHandle = async _ => {
            const localFileHandle = await window.showSaveFilePicker(fileOptions);
            await this.handleUpdate(localFileHandle);
            await writeToFile(localFileHandle); // use new fileHadle
        };
        
        const updateLocalFile = async _ => {
            if(this.cantAlter || this.dontSync || this.syncPaused || this.dbMod === thisApp.dbObj.mod) return;
            this.syncStart();
            return this.handle ? writeToFile(this.handle) : useNewdbFileHandle();
        };
        
        const syncLocalFile = async _ => {
            if(this.cantAlter ?  await thisApp.alert.localFileLoadOrDownload() : await thisApp.alert.localFileLoadOrCreate()) return readFile(false);
            this.syncStart();
            return this.cantAlter ? downloadLocalFile() : updateLocalFile();
        };
        
        this.key = "localFile";
        this.name = "Database File";
        this.load = loadLocalFile
        this.read = readLocalFile;
        this.sync = syncLocalFile;
        this.update = updateLocalFile;
        this.syncIcon = syncLocalFileIcon;
        this.mpIcon = mpLocalFile;
        this.cantAlter = !window.showSaveFilePicker; //Can db file be modified?
        extendStore(this, thisApp);
    }

/* ------------------------------------------------------------------------------*/
    function Local (thisApp){
        const readLocal = async _ => {
            if(!this.handle || !thisApp.idxDb) return;
            this.syncStart();
            /* console.log("Local syncStart - start await"); */
            await thisApp.setDbObj(await decodeToJson(this.handle));
            /* console.log("Local after Await "); */
            return this.connect(thisApp.dbObj);
        }
        const updateLocal = async _ => {
            if(!thisApp.idxDb || this.dontSync || this.syncPaused || this.dbMod === thisApp.dbObj.mod) return;
            this.syncStart();
            await this.handleUpdate(thisApp.getEncodedDb());
            return this.connect(thisApp.dbObj);
        }
        
        const syncLocal = async auto => {
            if(!thisApp.idxDb) return;
            this.syncStart();
            return updateLocal();
        }

        this.key = "local";
        this.name = "Quick Access Database";
        this.read = readLocal;
        this.sync = syncLocal;
        this.update = updateLocal;
        this.syncIcon = syncLocalIcon;
        this.mpIcon = mpLocal;
        extendStore(this, thisApp);
    }

/* ------------------------------------------------------------------------------*/
    if(!app.checkHistoryState()) return;
    
    if(location.host) installServiceWorker(); // Install Service Worker
    
     app.setUp({
        local: new Local(app),
        dbxFile: new DbxFile(app),
        localFile: new LocalFile(app)
    }).then(_ => app.start("-------------------Service Worker core_1.506 ---------------------", true));
    

    

    /** **********************************************************************************************************************
    ***************************************** -- -- -- END Helpers: -- -- -- *************************************************
    ********************************************************************************************************************** **/
    function deleteCookies() {
        var allCookies = document.cookie.split(';');
        for (var i = 0; i < allCookies.length; i++) document.cookie = allCookies[i] + "=;expires=" + new Date(0).toUTCString();
    }

    function installServiceWorker(){
        console.log("are we installServiceWorker?");
        if(!navigator.serviceWorker || !navigator.onLine) return;//Alert?
        console.log("YES we are installServiceWorker?");
        async function onstateChange(){
            switch (this.state) {// Has service worker state changed?
                case 'installed':
                    console.log('installed');
                    this.postMessage({ action: 'skipWaiting' });
                    break;
                case "activating":
                    console.log("Now newWorker is activating");
                    break;
                case "activated":
                    console.log('activated');
                    break;
            }
        }

        navigator.serviceWorker.register('service-worker.js', {scope: '/lpm/'}).then(reg => {
            reg.addEventListener('updatefound', _ => 
                reg.installing.addEventListener('statechange', onstateChange)
            );
            reg.update().catch(e => {
                    console.log(e);                
                if(window.confirm("Service Worker Update Failure. Reload App?")){
                    location.replace(app.URL);
                }
/*                 if(!window.location.search.substring(1).length < 6){
                    deleteCookies();
                    working.show();
                    app.message.error("Fixing bad redirect... Will be a moment....");
                    location.replace("https://www.havetogoto.co.uk/?i=1");
                }; */
            });
        }).catch(e => {
            console.log("catch register('service-worker.js')", e);
            //app.message.fail(e); //that never shows! - it does when trying to install the worker on the LOCAL file
        });

    }
    /* ****************** !!!!!!!!!!!!!!!!!!!!  END Install Service Worker !!!!!!!!!!!!!!!!!!!!!!! ****************** */

    /* ****************** !!!!!!!!!!!!!!!!!!!!  Unregister Service Worker !!!!!!!!!!!!!!!!!!!!!!! ****************** */
    function uninstallServiceWorker(){
        try{

            caches.keys().then(keyList => {
                for (let key of keyList) caches.delete(key);
            });

            navigator.serviceWorker.getRegistrations()
            .then( regs => {
                for(let reg of regs) reg.unregister();
            });
        }catch(e){
            return;
        }
    }

    /* ****************** !!!!!!!!!!!!!!!!!!!!  END Unregister Service Worker !!!!!!!!!!!!!!!!!!!!!!! ****************** */

        /* Tests*/
        setTimeout(function(){
            console.log(app);

/*             const terra = new Terra.LCDClient({
                URL: 'https://columbus-lcd.terra.dev',
                chainID: 'columbus-5',
                isClassic: true
            });
            
            console.log(terra);
            console.log(Terra); */
            //console.log(terraWallets);
        },10000);
        
})();