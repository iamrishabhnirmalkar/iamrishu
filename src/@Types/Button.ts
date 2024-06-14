export interface IButtonType {
  buttonText: string;
  type: "submit" | "button" | "reset";
  onClick: (e: any) => void;
}
