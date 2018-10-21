export const calculatePages = (pages, pagePerPage) => {

    const pagesInt = parseInt(pages, 10);
    const pagePerPageInt = parseInt(pagePerPage, 10);
    if (!pages || !pagePerPage || pagesInt < 1) {
        return null;
    }

    let currentPage = 1;
    let res = [];

    const gap = pagePerPageInt - 1;

    while (currentPage + gap < pagesInt) {
        res = res.concat(`${currentPage}-${currentPage + gap}`);
        currentPage += pagePerPageInt;
    }

    res = currentPage === pagesInt ? res.concat(pages) : res.concat(`${currentPage}-${pages}`);

    const recto = res.filter((element, index) => !(index % 2));
    const verso = res.filter((element, index) => index % 2);

    return {
        recto: recto.join(';'),
        verso: verso.join(';')
    }
}
