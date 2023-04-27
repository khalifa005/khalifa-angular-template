export class LookupDto {
  id: string;
  nameEn: string;
  nameAr: string;

  constructor(id: string, nameAr: string) {
    this.id = id;
    this.nameAr = nameAr;
  }
}

