export class LookupDto {
  id: number;
  nameEn: string;
  nameAr: string;

  constructor(id: number, nameAr: string) {
    this.id = id;
    this.nameAr = nameAr;
  }
}

