
export type DonationProps = {
  id: number;
  donationType: string;
  quantity: number;
  createdAt: Date;
  nextDonation: Date;
  managerId: number;
  personId: number;
  belongsToAnotherChurch: boolean;
  requestedIdDonationFromAnotherChurch: number;
}

type Donation = {
  name: string;
  lastName: string;
  donation: DonationProps
}

export type DonationHistoryProps = {
  familyDonations: {
    name: string;
    lastName: string;
    donation: DonationProps;
  }[];
}

export function FamilyDonation({ name, lastName, donation }: Donation) {
  return (
    <>
      <li className="w-full flex justify-between">
        <span className="text-sm">{name} {lastName}</span>
        <span className="text-sm">{donation.createdAt.toLocaleString()}</span>
      </li>
    </>
  )
}

export default function DonationHistory({ familyDonations }: DonationHistoryProps) {
  return (
    <>
      <ul>
        {
          familyDonations?.map((donation, index) => (
            <FamilyDonation key={index} name={donation.name} lastName={donation.lastName} donation={donation.donation} />
          ))
        }
      </ul>
    </>
  )
}