import Person, { PersonProps } from "./Person";

export type PeopleProps = {
  people: PersonProps[];
}

export default function People({ people = [] }: PeopleProps) {
  return (
    <div>
      {
        people?.map(({ name, lastName, cpf, availabilityDate }, index) => (
          <Person
            key={index}
            name={name}
            lastName={lastName}
            cpf={cpf}
            availabilityDate={availabilityDate}
          />
        ))
      }
    </div>
  )
}