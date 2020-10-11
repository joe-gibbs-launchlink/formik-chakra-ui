import { InputProps, Textarea } from '@chakra-ui/core';
import { useField } from 'formik';
import React, { FC } from 'react';
import { BaseProps } from '../base-props';
import { FormControl } from '../form-control';

export type FormTextareaProps = BaseProps & InputProps<HTMLTextAreaElement>;

export const FormTextArea: FC<FormTextareaProps> = (
  props: FormTextareaProps
) => {
  const { name, label, my, ...rest } = props;
  const [field] = useField(name);

  return (
    <FormControl name={name} label={label} my={my}>
      <Textarea id={name} {...field} {...rest} />
    </FormControl>
  );
};

export default FormTextArea;
