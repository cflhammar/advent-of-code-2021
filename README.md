För att köra lösningen på samma sätt som på dragningen:

1. Ladda ner och installera Node (https://nodejs.org/en/download) och git (https://git-scm.com/downloads)
2. Installera typescript och ts-node

   1. För windows:
      starta en terminal i adminläge och kör:
      npm install -g typescript
      npm install -g ts-node
   2. För Mac:
      starta en terminal och kör:
      sudo npm install -g typescript
      sudo npm install -g ts-node

3. Öppna ett konsolfönster och ställ er i den mapp där lösningen ligger. Skriv sedan 'npm install'

4. Nu ska programmet gå att köra, för att kompilera och köra så skriver man ‘ts-node src/index.ts’ i roten av projektet.

projektet har två brancher, 'master' som är det färdiga alternativet med en mer SOLID-implementation men också branchen 'start' som kan behöva lite förfinig. Börja görna från branchen 'start' med 'master' som facit och implementera din egna SOLID-version av FizzBuzz.

Testning:
för att köra alla tester: 'npm test'
för att köra ett specifikt test: 'npm test src/test/[den testfil du vill köra]

WallabyJS (https://wallabyjs.com) är en extension som används för att köra tester kontinuerligt. Det är den som visar gröna och röda indikatorer på raderna i editorn och ger oss textfeedback medan vi skriver koden. Den stöds i ett flertal olika editors, så det är bara att välja en av dem. På dragningarna skriver jag koden i Visual Studio Code (https://code.visualstudio.com/). Men det går att konfigurera wallaby ihop med andra editorer.

Om man vill köra WallabyJS för testning:
Installera extensionen WallabyJs i visual studio code. (Eller den editor du föredrar)

Det går att hämta ner en provlicens som är giltig i 15 dagar från https://wallabyjs.com. Använd denna när du blir tillfrågad om licensnyckel.

Känner du att du vill använda testramverket även i ditt dagliga arbete, prata med din närmsta chef om att skaffa en egen licens.

Konfigurera WallabyJS genom att trycka 'Cmd + Shift + P' (Mac) eller 'CTRL + Shift + P'(windows) och välj 'WallabyJs: Select Configuration' och välj sen alternativet wallaby.js.

Kör sedan WallabyJS genom att trycka 'Cmd + Shift + P' (Mac) eller 'CTRL + Shift + P'(windows) och välj 'WallabyJs: Start'.
