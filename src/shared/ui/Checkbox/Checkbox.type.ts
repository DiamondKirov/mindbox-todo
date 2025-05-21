import type { InputHTMLAttributes } from "react";

export interface ICheckbox extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  label: string;
}
