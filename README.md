# Front-end Dev Challenge
## 고양이 검색기 

### 1. (필수) 추천 검색어 보여주기 
아무 행위 X

### 2. 추천 검색어 액션
- esc 누르면 추천 검색창 닫기
- 키보드 위, 아래 누르면 하이라이트 옮기기
    - 엔터 누르면 gif 검색
- 마우스를 다룬 곳 클릭하면 input focus 없어지고 창 닫힘
- 마우스로 추천 검색어 누르면 gif 검색 
- 추천 검색어 로딩중 UI 

### 3. (필수) 검색 시 API로 사진 렌더링 
- 검색 중 에러 발생하면 에러 UI 표시 
- 검색 중 로딩 UI 

### 4.캐싱 
- 검색어별 추천 검색어 로컬에 캐싱 
- API 호출 중에 새로운 검색어 감지되면 기존 ajax 취소 
- Debounce 구현
- 키워드 결과 캐싱 => 브라우저 닫으면 삭제 