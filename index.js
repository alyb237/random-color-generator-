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
