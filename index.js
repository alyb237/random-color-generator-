import chalk from 'chalk';
import randomColor from 'randomcolor';

const rcolor = randomColor();

const myBox = `
###############################
###############################
###############################
####                       ####
####       ${rcolor}         ####
####                       ####
###############################
###############################
###############################
`;

if (process.argv.length < 3) {
  console.log(chalk.hex(rcolor)(myBox));
} else {
  console.log(
    chalk.hex(
      randomColor({
        luminosity: process.argv[3],
        hue: process.argv[2],
      }),
    )(myBox),
  );
}
// console.log(
//   chalk.hex(randomColor({
//       luminosity: process.argv[3],
//       hue: process.argv[2],
//     })))(myBox),

//console.log(chalk.green('#' + Math.floor(Math.random() * 16777215).toString()));

//import randomColor from 'randomcolor';

/*generates random color

randomColor({
  luminosity: 'random',
  hue: 'red',
});

//let color = randomColor();
//console.log(color);
console.log(randomColor.hue);
/*--------------------------
//console.log('#' + Math.floor(Math.random() * 16777215).toString(16));
*/
