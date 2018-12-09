import Promise from "bluebird";

async function copy() {
  //정적파일 결과물 복사
  const ncp = Promise.promisify(require("ncp"));
  //public 폴더 전체와 package.json을 build로 복사
  await ncp("public", "build/public");
  await ncp("package.json", "build/package.json");
}

export default copy;
