export class TicketDto{
  id:string;
  categoryId:number; //lookup
  insuranceTypeId:number;//lookup
  caseTitleTypeId:number;//lookup

  //related to each other
  policyNumber:string;
  claimNumber:string;
  plateNumber:string;
  plateLetters:string;
  najmCaseId:string;
  cityId:number;
  title:string;
  description:string;
  // files:[];//multiple files

}
