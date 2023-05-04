export interface ISmartTableModel<t> {
  action: string
  elements: t[]
  paging: Paging
  filter: Filter
  sort: any[]
}

export interface Paging {
  page: number
  perPage: number
}

export interface Filter {
  filters: any[]
  andOperator: boolean
}


export interface TetsUserDataModel {
  id: number
  age: number
  firstName: string
  lastName: string
  username: string
  email: string
}
