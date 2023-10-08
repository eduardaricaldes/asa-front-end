

export type HolderProps = {
  name: string;
  lastName: string;
  cpf: string;
  birthDate: Date;
}

export default function Holder({ name, lastName, cpf, birthDate }: HolderProps) {
  return (
    <>
      <div className="w-full flex flex-col">
        <div className="flex flex-col mb-3">
          <label className="text-gray text-xs">Nome</label>
          <p className="text-sm">{name} {lastName}</p>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col">
            <label className="text-gray text-xs">CPF</label>
            <p className="text-sm">{cpf}</p>
          </div>
          <div className="flex flex-col">
            <label className="text-gray text-xs">Data de Nascimento</label>
            <p className="text-sm">{birthDate.toLocaleDateString()}</p>
          </div>
        </div>
      </div>
    </>
  )
}