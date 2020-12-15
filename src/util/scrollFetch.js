function scrollFetch(fetchData) {
    window.addEventListener('scroll', () => {
        if (getScrollTop() < getDocumentHeight() - window.innerHeight) return;
        fetchData();
    });
}

function getScrollTop() {
    return (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
}

function getDocumentHeight() {
    const body = document.body;
    const html = document.documentElement;

    return Math.max(
        body.scrollHeight, body.offsetHeight,
        html.clientHeight, html.scrollHeight, html.offsetHeight
    );
}

export { scrollFetch }; 