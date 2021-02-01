export interface Column {
  id:
    | "accountId"
    | "caseUid"
    | "creationDate"
    | "publicId"
    | "status"
    | "reference";
  label: string;
  minWidth?: number;
  align?: "right";
}
