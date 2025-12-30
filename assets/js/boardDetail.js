const getBoardDetail = async () => {
  //board.html에서 전송한 특정 게시글의 글번호 가져오기
  const params = new URLSearchParams(location.search);
  let idx = params.get("idx");

  console.log(location.search);
  console.log(params.get("idx"));

  // 잘못된 접근방식에 대한 예외 처리
  if (!idx) {
    console.log("게시글 글번호가 없습니다.");
    return;
  }

  // 게시글 번호를 Spring Boot 에 전송 ( 특정 게시글 조회 기능 -> /api/board/getDetail )

  // axios문법
  try {
    //let res = await axios.get(`http://localhost:8081/api/board/${idx}`);
    let res = await axios.get(`/api/board/${idx}`);
    console.log(res.data);

    const title = document.getElementById("title");
    const writer = document.getElementById("writer");
    const content = document.getElementById("content");
    const downloadLink = document.getElementById("download-link");

    title.innerText = res.data.b_title;
    writer.innerText = res.data.b_writer;
    content.innerText = res.data.b_content;

    if (res.data.b_file_path) {
      // 파일이 있는 경우
      //downloadLink.href = `http://localhost:8081/api/board/${idx}/download`;
      downloadLink.href = `api/board/${idx}/download`;
      downloadLink.style.display = `block`;
    } else {
      // 파일이 없는 경우
      downloadLink.style.display = `none`;
    }
  } catch (err) {
    console.log(err);
  }
};

const boardListBtn = document.getElementById("boardListBtn");

boardListBtn.addEventListener("click", () => {
  location.href = "board.html";
});

getBoardDetail();
