export class TicketDto{
  id:string;
  categoryId:number; //lookup
  insuranceTypeId:number;//lookup
  caseTitleTypeId:number;//lookup

  //related to each other
  cancellationRequestDate:string;
  policyNumber:string;
  claimNumber:string;
  plateNumber:string;
  plateLetters:string;
  najmCaseId:string;
  cityId:number;
  title:string;
  description:string;
  file:string;
  // files:[];//multiple files

}
