import del from "del";

async function clean() {
  //결과물 디렉토리 초기화
  await del(["build/*", "!build/.git"], { dot: true });
}

export default clean;
