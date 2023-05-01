export class LookupDto {
  id: number;
  nameEn: string;
  nameAr: string;

  parentId?: number;


  constructor(id: number, nameAr: string, nameEn: string) {
    this.id = id;
    this.nameAr = nameAr;
    this.nameEn = nameEn;
  }
}

