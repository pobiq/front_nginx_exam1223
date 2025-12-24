// table태그객체를 boardList 변수에 저장
const boardList = document.getElementById("board-list");

// 게시글 데이터를 받아오기 위한 함수
const getList = async () => {
  // axios문법
  let res = await axios.get("http://localhost:8081/list");
  console.log(res);

  let boards = res.data; // 서버에서 받아온 데이터

  let resultHTML = `
        <tr>
          <th>번호</th>
          <th>글제목</th>
          <th>작성자</th>
          <th>작성일자</th>
          <th>조회수</th>
        </tr>
      `; // 웹 브라우저에 출력하기 위한 HTML구조를 임시로 저장

  boards.forEach((board, index) => {
    resultHTML += `
      <tr>
        <td>${board.b_idx}</td>
        <td>${board.b_content}</td>
        <td>${board.b_writer}</td>
        <td>${board.b_datetime}</td>
        <td>${board.b_count}</td>
      </tr>
    `;
  });

  boardList.innerHTML = resultHTML;
};

//게시글 데이터 요청함수 호출(실행)
getList();
