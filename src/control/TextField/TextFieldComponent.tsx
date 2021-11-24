import * as React from 'react'
// import { TextField } from '@fluentui/react/lib/TextField'

export default function TextFieldComponent (props: TextFieldComponentProps) {
  return (
    <input
      value={props.value}
      onChange={e => props.onChange(e.currentTarget.value)} />
  )

  // return (
  //   <TextField
  //     value={props.value}
  //     onChange={e => props.onChange(e.currentTarget.value)} />
  // )
}

export interface TextFieldComponentProps {
  value: string
  onChange: (newValue: string) => void
}
