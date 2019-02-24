export const calculatePages = (pages, pagePerPage) => {

    const pagesInt = parseInt(pages, 10);
    const pagePerPageInt = parseInt(pagePerPage, 10);
    if (!pages || !pagePerPage || pagesInt < 1) {
        return null;
    }

    const pageList = new Array(pagesInt)
	  .fill(1)
	  .map((e, i) => i + 1)

    const selectBorderPages = (acc, page) => {
	const remainder = page % pagePerPageInt
	return (remainder === 0 || remainder === 1 || page === pagesInt)
	    ? [...acc, page]
	    : acc
    }
    const borderPages = pageList.reduce(selectBorderPages, [])

    const buildString = isRecto => (acc, page, index) => {
	switch(index % 4) {
	case 0:
	    return isRecto ? acc + page : acc
	case 1:
	    return isRecto ? `${acc}-${page};` : acc
	case 2:
	    return isRecto ? acc : acc + page
	case 3:
   	    return isRecto ? acc : `${acc}-${page};`
	default:
	    return acc
	}
    }
    
    const recto = borderPages.reduce(buildString(true), '')
    const verso = borderPages.reduce(buildString(false), '')

    return { recto, verso }
}
