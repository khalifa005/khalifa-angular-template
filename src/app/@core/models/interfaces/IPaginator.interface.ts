
export interface IPaginatorModel{

  startPage: number;
  currentPage: number;
  startIndex: number;
  endIndex: number;
  endPage: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;
  pages: number [];
}
