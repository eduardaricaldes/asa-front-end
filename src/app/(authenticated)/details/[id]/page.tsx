"use client";

import { Container } from "@/components/Container";
import Header from "@/components/Header";
import Holder from "./Holder";
import Address from "./Address";
import Accordion from "@/components/Accordion";
import Relatives from "./Relatives";
import DonationHistory, { DonationProps } from "./DonationHistory";
import Button from "@/components/Button";
import { PlusCircleIcon } from "@heroicons/react/20/solid";
import Modal from "@/components/Modal";
import MakeDonation from "./MakeDonation";
import { useState } from "react";

export default function Details() {
  const [openModal, setOpen] = useState(false);

  const toggleModal = () => {
    setOpen(!openModal);
  }

  const family = {
    "id": 1,
    "status": "AVAILABLE",
    "churchId": 3,
    "people": [
      {
        "id": 2,
        "name": "John",
        "lastName": "Doe",
        "cpf": "123.456.789-00",
        "birthDate": new Date("1990-01-01T00:00:00.000Z"),
        "familyId": 1,
        "receivedDonations": [
          {
            "id": 1,
            "donationType": "FOOD_PARCEL",
            "quantity": 5,
            "createdAt": new Date("2023-10-04T12:00:00.000Z"),
            "nextDonation": new Date("2023-11-04T12:00:00.000Z"),
            "managerId": 1,
            "personId": 2,
            "belongsToAnotherChurch": false,
            "requestedIdDonationFromAnotherChurch": 0
          }
        ],
        "lastDonation": {
          "id": 1,
          "donationType": "FOOD_PARCEL",
          "quantity": 5,
          "createdAt": new Date("2023-10-04T12:00:00.000Z"),
          "nextDonation": new Date("2023-11-04T12:00:00.000Z"),
          "managerId": 1,
          "personId": 2,
          "belongsToAnotherChurch": false,
          "requestedIdDonationFromAnotherChurch": 0
        },
        "address": {
          "cep": "12345-678",
          "addressType": "Residential",
          "address": "123 Main Street",
          "number": 42,
          "complement": "Apt 101",
          "status": "UNINFORMED"
        }
      },
      {
        "id": 3,
        "name": "Jane",
        "lastName": "Smith",
        "cpf": "987.654.321-00",
        "birthDate": new Date("1985-05-15T00:00:00.000Z"),
        "familyId": 1,
        "receivedDonations": [],
        "lastDonation": null,
        "address": {
          "cep": "54321-987",
          "addressType": "Residential",
          "address": "456 Oak Avenue",
          "number": 25,
          "complement": "",
          "status": "UNINFORMED"
        }
      }
    ]
  } 
  
  const holder = family.people[0];
  const relatives = family.people.slice(1);
  const familyDonations: Array<{ name: string; lastName: string; donation: DonationProps }> = [];

  family.people?.forEach((person) => {
    const { name, lastName, receivedDonations } = person;
    receivedDonations?.forEach((donation) => {
      familyDonations.push({ name, lastName, donation });
    });
  });
  

  return (
    <>
      <Modal open={openModal}>
        <MakeDonation relatives={family.people} />
      </Modal>
      <Header title="Dados da Família" />
      <Container className="mb-12">
        <Holder
          name={holder.name}
          lastName={holder.lastName}
          cpf={holder.cpf}
          birthDate={holder.birthDate}
        />

        <hr className="border-gray my-6" />
        <Address
          address={holder.address}
        />

        <hr className="border-gray my-6" />
        {
          relatives.length >= 0 ? (
            <Accordion title="Familiares">
              <Relatives relatives={relatives} />
            </Accordion>
          ) : (<></>)
        }

        <hr className="border-gray my-6" />
        {
          relatives.length >= 0 ? (
            <Accordion title="Historico de Doações">
              <DonationHistory familyDonations={familyDonations}  />
            </Accordion>
          ) : (<></>)
        }

        <Button type="button" className="donation bg-green flex items-center justify-center text-white" onClick={toggleModal}>
          <PlusCircleIcon className="h-5 w-5 mr-3" />
          <span className="font-thin">Fazer Doação</span>
        </Button>
      </Container>
    </>
  )
}