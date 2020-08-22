const $keyword = document.querySelector(".keyword");
const $keywords = document.querySelector(".keywords");
const $searchResults = document.querySelector(".search-results");

$keyword.addEventListener("keyup", (e) => {
  const { value } = e.target;
  const { key } = e;

  if (key === "Enter") {
    fetch(
      `https://jf3iw5iguk.execute-api.ap-northeast-2.amazonaws.com/dev/api/cats/search?q=${value}`
    )
      .then((res) => res.json())
      .then((results) => {
        if (results.data) {
          $searchResults.innerHTML = results.data
            .map((cat) => `<article><img src="${cat.url}" /></article>`)
            .join("");
        }
      });
  }
});

// 1. 추천 검색어 볼러오기 
$keyword.addEventListener("input", (e) => {
  let keyword = '';
  keyword = e.target.value;
  const fetchCatKeywords = async () => {
        const response = await fetch(
            `https://jf3iw5iguk.execute-api.ap-northeast-2.amazonaws.com/dev/api/cats/keywords?q=${keyword}`
        )
        const data = await response.json();
        $keywords.innerHTML = '';
        const ul = document.createElement('ul');
        ul.classList.add("cat-keywords");
        data.forEach(cat_keyword => {
            const li = document.createElement('li');
            li.innerText = cat_keyword;
            ul.appendChild(li);
        })
        $keywords.appendChild(ul);
  }

  if (keyword !== null) {
    fetchCatKeywords();
    $keywords.style.display = 'block';
  } else {
    $keywords.style.display = 'none';
  }

});