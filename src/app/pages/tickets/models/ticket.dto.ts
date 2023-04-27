export class TicketDto{
  id:string;
  categoryId:number; //lookup
  insuranceTypeId:string;//lookup
  caseTitleTypeId:string;//lookup

  //related to each other
  policyNumber:string;
  claimNumber:string;
  plateNumber:string;
  plateLetters:string;
  najmCaseId:string;
  cityId:string;
  title:string;
  description:string;
  // files:[];//multiple files

}
