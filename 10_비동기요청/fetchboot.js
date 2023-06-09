// fetch() 를 이용해서 rest 서버에 요청을 넣거나 결과를 받아올 수 있습니다.
async function loadPersonList() {
    // fetch의 첫 번째 파라미터는 요청 주소.
    const response = await fetch("http://localhost:8080/resttest/person-list");  // GET방식.
    // 요청의 결과로 받은 response 객체의 body에 담긴 json만 추출해준다.
    const jsonArray = await response.json();
    console.log(jsonArray);
    console.log("=============================")
    for(jsonData of jsonArray) {    // 향상된 for문 형식으로 개별 json 분리.
        console.log(jsonData.id);
        console.log(jsonData.name);
        console.log(jsonData.age);
    }

    // #personInfo 태그 얻어오기
    const $personInfo = document.getElementById("personInfo");

    // 문자열 변수 생성 후, 반복문을 사용해서 각 정보를
    // 번호 : xxx, 이름: xxx, 나이: xxx 형식으로 문자로 저장해주세요.
    let str = " ";
    for (jsonData of jsonArray) {
        str += `<h1>번호: ${jsonData.id}, 이름: ${jsonData.name}, 나이: ${jsonData.age}</h1>`;
    }

    // #personInfo에 innerHTML 을 이용해서 끼워넣어주세요.
    $personInfo.innerHTML = str;
}

// getPersonList 버튼을 얻어와서 변수에 저장해주세요.
let $button = document.getElementById("getPersonList"); 

// 버튼에 loadPersonList() 를 클릭시 수행되도록 처리해줍니다.
                               // loadPersonList() 로 대입시, 실행결과자료를 해당 위치에 대입함.
$button.addEventListener("click", loadPersonList);