import del from "del";
import webpack from "webpack";
import Promise from "bluebird";
import run from "./run";
import webpackConfig from "./webpack.config";

async function clean() {
  //결과물 디렉토리 초기화
  await del(["build/*", "!build/.git"], { dot: true });
}

async function copy() {
  //정적파일 결과물 복사
  const ncp = Promise.promisify(require("ncp"));
  //public 폴더 전체와 package.json을 build로 복사
  await ncp("public", "build/public");
  await ncp("package.json", "build/package.json");
}

function bundle({ watch }) {
  //웹팩으로 소스코드 번들링
  return new Promise((resolve, reject) => {
    let runCount = 0;
    const bundler = webpack(webpackConfig);
    const cb = (err, stats) => {
      if (err) {
        return reject(err);
      }

      console.log(stats.toString(webpackConfig[0].stats));

      if (++runCount === (watch ? webpackConfig.length : 1)) {
        return resolve();
      }
    };

    if (watch) {
      bundler.watch(200, cb);
    } else {
      bundler.run(cb);
    }
  });
}

async function build(options = { watch: false }) {
  await run(clean);
  await run(copy);
  await run(bundle, options);
}

export default build;
