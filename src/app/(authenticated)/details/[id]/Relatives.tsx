

export type Person = {
  name: string;
  lastName: string;
  cpf: string;
}

export type RelativesProps = {
  relatives?: Person[];
}

export function Person({ name, lastName, cpf }: Person) {
  return (
    <>
      <li className="flex w-full justify-between">
        <span className="text-sm">{name} {lastName}</span>
        <span className="text-sm">{cpf}</span>
      </li>
    </>
  )
}
export default function Relatives({ relatives }: RelativesProps) {
  return (
    <>
      <ul>
        {
          relatives?.map((person, index) => (
            <Person key={index} name={person.name} lastName={person.lastName} cpf={person.cpf} />
          ))
        }
      </ul> 
    </>
  )
}