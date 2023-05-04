export class PagedListResponseModel<t> {
  data?: t[];
  totalItems?: number | null;
  currentPage?: number | null;
  pageSize?: number | null;
  totalPages?: number | null;
}

