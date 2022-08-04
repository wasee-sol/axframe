import * as less from "less";
import * as path from "path";
import * as fs from "fs-extra";
const srcPath = "../src/styles/theme.ts";
const srcResolved = path.resolve(__dirname, srcPath);

function compileLESS(from, to) {
  from = path.join(__dirname, from);
  to = path.join(__dirname, to);
  fs.readFile(from, function (err, data) {
    if (err) return;
    less.render(
      data.toString(),
      { compress: true, paths: [path.join(__dirname, "../src/styles/less")], javascriptEnabled: true },
      function (e, output) {
        if (e) console.error(e);
        if (!e) {
          fs.writeFile(to, output.css);
          console.log("compiled css file : " + to);
        }
      }
    );
  });
}

const buildLessVar = () => {
  delete require.cache[srcResolved];
  const theme = require(srcPath);

  const themePalette = Object.keys(theme.themePalette);

  themePalette.forEach((palette) => {
    const themeValue = theme.themePalette[palette];

    fs.writeFileSync(
      path.resolve(__dirname, `../src/styles/less/theme-${palette}.less`),
      Object.keys(themeValue)
        .map((k) => {
          if (typeof themeValue[k] !== "string" || !themeValue[k].includes("#")) {
            return `@${k.replace(/_/g, "-")}: ${themeValue[k]};`;
          }

          return `@${k.replace(/_/g, "-")}: ${themeValue[k].toLowerCase()};`;
        })
        .join("\r\n") + "\r\n"
    );

    compileLESS(`../src/styles/less/app-${palette}.less`, `../public/app-${palette}.css`);
  });
};

// watch file theme.js to less-var
fs.watchFile(srcResolved, { interval: 1000 }, () => {
  try {
    buildLessVar();
    console.log("update LESS files");
  } catch (e) {
    console.log(e);
  }
});
console.log(`Watching theme files : ` + srcResolved);

// build less vars
buildLessVar();
