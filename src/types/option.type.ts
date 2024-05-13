export interface Option<Value extends string> {
  hint?: string
  label?: string
  value: Value
}
