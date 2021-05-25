export default class PageListModel {

    constructor(postList, postCount, pageIndex, numberOfPages) {
        this.postList = postList;
        this.postCount = postCount;
        this.pageIndex = pageIndex;
        this.numberOfPages = numberOfPages;
    }

}