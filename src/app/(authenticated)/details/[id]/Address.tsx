

export type AddressProps = {
  address: {
    cep: string;
    addressType: string;
    address: string;
    number: number;
    complement: string;
  }
}
export default function Address({ address }: AddressProps) {
  return (
    <>
      <div className="w-full flex flex-col">
        <div className="w-full flex flex-col mb-3">
          <label className="text-gray text-xs">Endereço</label>
          <p className="text-sm">{address.addressType} {address.address}</p>
        </div>
        <div className="flex justify-between mb-3">
          <div className="flex flex-col">
            <label className="text-gray text-xs">Número</label>
            <p className="text-sm">{address.number}</p>
          </div>
          <div className="flex flex-col">
            <label className="text-gray text-xs">Complemento</label>
            <p className="text-sm">{address.complement}</p>
          </div>
        </div>
        <div className="w-full flex flex-col">
          <label className="text-gray text-xs">CEP</label>
          <p className="text-sm">{address.cep}</p>
        </div>
      </div>
    </>
  )
}