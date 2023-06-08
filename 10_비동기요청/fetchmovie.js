async function getBoxOffice() {
    const response = await fetch("http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20230505");
    const jsonData = await response.json();
    console.log(jsonData);
}