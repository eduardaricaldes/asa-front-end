import Input from "@/components/Input";
import { TrashIcon } from "@heroicons/react/20/solid";
import classNames from "classnames";
import { Control, Controller } from "react-hook-form";
import { IFormInput, IPerson } from "./page";

export type FamilyProps = {
  index: number
  addedNewPerson: boolean;
  control: Control<IFormInput, any>;
  removeFromFormData: (index: number) => void;
  person: IPerson;
}

export default function Family({ index, control, addedNewPerson, removeFromFormData, person }: FamilyProps) {
  return (
    <>
      <section key={index} className="flex flex-col">
        <div className={classNames(['w-full flex justify-end items-center'])}>
          <small className="text-green text-xs text-right mr-3">
            Familiar {index + 1}
          </small>
          <TrashIcon
            onClick={() => removeFromFormData(index)}
            className={classNames([
              'h-4 w-4 text-red-600 relative -top-0.5',
              !addedNewPerson ? 'hidden' : null,
            ])}
          />
        </div>
        <Controller
          name={`people.${index}.name`}
          control={control}
          defaultValue={person.name}
          render={({ field }) => (
            <Input
              label="Nome"
              name="name"
              type="text"
              value={field.value}
              onChange={field.onChange}
            />
          )}
        />
        <Controller
          name={`people.${index}.lastName`}
          control={control}
          defaultValue={person.lastName}
          render={({ field }) => (
            <Input
              label="Sobrenome"
              name="lastName"
              type="text"
              value={field.value}
              onChange={field.onChange}
            />
          )}
        />
        <div className="flex">
          <Controller
            name={`people.${index}.cpf`}
            control={control}
            defaultValue={person.cpf}
            render={({ field }) => (
              <Input
                className="mr-10"
                label="CPF"
                name="cpf"
                type="text"
                value={field.value}
                onChange={field.onChange}
              />
            )}
          />
          <Controller
            name={`people.${index}.birthDate`}
            control={control}
            defaultValue={person.birthDate}
            render={({ field }) => (
              <Input
                label="Data de Nascimento"
                name="birthDate"
                type="date"
                value={field.value}
                onChange={field.onChange}
              />
            )}
          />
        </div>

        <hr
          className={classNames([
            'border-none h-0.5 bg-green w-full my-7',
            !addedNewPerson ? 'hidden' : null,
          ])}
        />
      </section>
    </>
  );
}
