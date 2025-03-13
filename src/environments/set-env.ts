const setEnv = () => {
    const fs = require('fs');
    const writeFile = fs.writeFile;
  // Configure Angular `environment.ts` file path
    const targetPath = './src/environments/environment.ts';
    const targetProdPath = './src/environments/environment.prod.ts';
  // Load node modules
    const colors = require('colors');
    const appVersion = require('../../package.json').version;
    require('dotenv').config({
      path: 'src/environments/.env'
    });
  // `environment.ts` file structure
    const envConfigFile = `export const environment = {
    token1: '${process.env.TOKEN1}',
    token2: '${process.env.TOKEN2}',
    apiUrl: 'https://servicios.algoritmos7540mendez.com.ar',
    calendarUrl: 'https://api.algoritmos7540mendez.com.ar/calendar',
    //material: 'https://algotron.com.ar/material',
    material: 'https://docs.google.com/spreadsheets/d/1NdsaiVDjciOK13GosiEGOM7k3oinXTkOKl_Jmt4DNVI/edit?usp=sharing',
    apuntes: 'https://apuntes.algo1camejo.com.ar',
    cronograma: 'assets/docs/cronograma.pdf',
    regimenDeCursada: 'assets/docs/regimen_de_cursada.pdf',
    canalYouTube: 'https://www.youtube.com/channel/UCRXcp7q4qKkLvtOH7tysdgA',
    algotron: 'https://algotron.com.ar',
    buzonDeQuejas: 'https://docs.google.com/forms/d/e/1FAIpQLScNk-4PjhDOEC5KKiIpYg-FVf78DLZFY3hBWwn6l9Y3mi6kSQ/viewform?usp=header',
    appVersion: '${appVersion}',
    production: true,
  };
  `;
    console.log(colors.magenta('The file `environment.ts` will be written with the following content: \n'));
    writeFile(targetPath, envConfigFile, (err) => {
      if (err) {
        console.error(err);
        throw err;
      } else {
        console.log(colors.magenta(`Angular environment.ts file generated correctly at ${targetPath} \n`));
      }
    });
    writeFile(targetProdPath, envConfigFile, (err) => {
        if (err) {
          console.error(err);
          throw err;
        } else {
          console.log(colors.magenta(`Angular environment.ts file generated correctly at ${targetPath} \n`));
        }
    });
  };
  
  setEnv();
  