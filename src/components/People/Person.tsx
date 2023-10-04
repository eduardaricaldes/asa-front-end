import Card from "../Card";

export type PersonProps = {
  name: string;
  lastName: string;
  cpf: string;
  availabilityDate: Date;
}

function isAvailable(availabilityDate: Date): string {
  const currentDate = new Date();

  if(
    availabilityDate.getFullYear() === currentDate.getFullYear() &&
    availabilityDate.getMonth() <= currentDate.getMonth() && 
    availabilityDate.getDay() <= currentDate.getDay())
  {
    return 'available';
  }

  return 'unavailable';
}

export default function Person({ name, lastName, cpf, availabilityDate }: PersonProps) {
  return (
    <>
      <Card>
        <div className="person flex justify-between">
          <div className="flex flex-col">
            <h3>{name}</h3>
            <p>{lastName}</p>
          </div>
          <div className="flex flex-col">
            <h3>CPF</h3>
            <p>{cpf}</p>
          </div>
          <div className="flex flex-col">
            <h3>Disponibilidade</h3>
            <p className={isAvailable(availabilityDate)}>{availabilityDate.toLocaleDateString()}</p>
          </div>
        </div>
      </Card>
    </>
  )
}