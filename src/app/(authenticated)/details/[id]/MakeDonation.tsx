"use client";

import Select from "react-select"
import { useState } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import Input from "@/components/Input";
import Button from "@/components/Button";



export interface IFormInput {
  personId: number;
  donationType: string;
  quantity: number;
  defaultPerson: string;
}

export type MakeDonationProps = {
  relatives: {
    id :number;
    name:string;
    lastName: string;
  }[]
}


export default function MakeDonation({ relatives }: MakeDonationProps) {
  const {
    control,
    handleSubmit,
    formState: { isDirty },
  } = useForm<IFormInput>({
    mode: "onChange",
  });

  const buildOptionsRelatives = relatives?.map((person) => {
    return {
      value: person.id,
      label: `${person.name} ${person.lastName}`
    };
  });

  const [formData, setFormData] = useState<IFormInput>({
    personId: buildOptionsRelatives[0].value,
    defaultPerson: buildOptionsRelatives[0].label,
    donationType: "FOOD_PARCEL",
    quantity: 0,
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };

  const optionsTypeDonation = [
    { 
      value: "FOOD_PARCEL",
      label: "Cesta Básica"
    },
    { 
      value: "CLOTHES",
      label: "Roupas"
    }
  ]

  return (
    <>
      <div className="make-donation">
        <h3 className="mb-8 font-semibold text-sm text-center">Doação</h3>
        <form className="form-donation" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col mb-6">
            <label className="text-gray text-xs">Familiar</label>
            <Controller
              name="personId"
              control={control}
              defaultValue={formData.personId}
              render={({ field }) => (
                <Select
                  placeholder="Selecione um Familiar"
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                  name={field.name}
                  defaultInputValue={formData.defaultPerson}
                  options={buildOptionsRelatives}
                />
              )}
            />
          </div>
          <div className="flex flex-col mb-6">
            <label className="text-gray text-xs">Tipo de Doação</label>
            <Controller
              name="donationType"
              control={control}
              defaultValue={formData.donationType}
              render={({ field }) => (
                <Select
                  placeholder="Selecione um tipo"
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                  name={field.name}
                  options={optionsTypeDonation}
                />
              )}
            />
          </div>
          <div className="flex flex-col mb-6">
            <Controller
              name="quantity"
              control={control}
              defaultValue={formData.quantity}
              render={({ field }) => (
                <Input
                  className="mr-10 w-36"
                  label="Quantidade"
                  name={field.name}
                  type="number"
                  value={field.value}
                  onChange={field.onChange}
                />
              )}
            />
          </div>
          <div className="flex justify-center mt-5">
            <Button type="submit" disabled={!isDirty} className="bg-green text-white">
              Fazer Doação
            </Button>
          </div>
        </form>
      </div>
    </>
  )
}