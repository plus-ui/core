export interface FormController {
  checkValidity(): boolean;
  reportValidity(): boolean;
  customValidity(error: string): void;
  value: string | number;
  name: string;
  disabled: boolean;
  readonly: boolean;
  required: boolean;
  loading: boolean;
  title: string;
}
