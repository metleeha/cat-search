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

  if (keyword !== '') {
    fetchCatKeywords();
    $keywords.style.display = 'block';
  }
});

// 2. 추천 검색어 키보드 액션 
const $liItems = $keywords.getElementsByTagName('li');
$keyword.addEventListener("keydown", (e) => {
    var liSelected;
    var index = -1;
    var len = $liItems.length - 1;

    if (e.which === 27) {
        $keywords.style.display = 'none';
        $keywords.innerHTML = '';
    }
    else if (e.which === 40) {
        index++;
        if (liSelected) {
            removeClass(liSelected, 'active');
            next = $liItems[index];
            if(typeof next !== undefined && index <= len) {
                liSelected = next;
            } else {
                index = 0;
                liSelected = $liItems[0];
            }
            addClass(liSelected, 'active');
        } else {
            index = 0;
            liSelected = $liItems[0];
            addClass(liSelected, 'active');
        }
    }
},false);
//     switch(e.keyCode) {
//         // 2-1. esc 누르면 검색창 닫기
//         case 27:
//             $keywords.style.display = 'none';
//             $keywords.innerHTML = '';
//             break;
//         // 2-2. up
//         case 38:

//         // 2-3. down
//         case 40:
//             index++;
//             if (liSelected) {
//                 removeClass(liSelected, 'active');
//                 next = $liItems[index];
//                 if(typeof next !== undefined && index <= len) {
//                     liSelected = next;
//                 } else {
//                     index = 0;
//                     liSelected = $liItems[0];
//                 }
//                 addClass(liSelected, 'active');
//             } else {
//                 index = 0;
//                 liSelected = $liItems[0];
//                 addClass(liSelected, 'active');
//             }
//     }

// });

function removeClass(el, className) {
    if(el.classList) {
        el.classList.remove(className);
    } else {
        el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }
};

function addClass(el, className) {
    if(el.classList) {
        el.classList.add(className);
    } else {
        el.className += ' ' + className;
    }
};