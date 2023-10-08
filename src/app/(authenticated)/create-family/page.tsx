"use client";

import { useForm, SubmitHandler, Controller } from "react-hook-form";
import classNames from "classnames";
import Image from 'next/image';

import { Container } from "@/components/Container";
import Header from "@/components/Header";
import Input from "@/components/Input";
import { useState } from "react";
import Button from "@/components/Button";
import Family from "./Family";
import Modal from "@/components/Modal";
import modalLogo from "@/assets/images/modal-logo.svg";

export interface IPerson {
  name: string;
  lastName: string;
  cpf: string;
  birthDate: Date;
}

export interface IFormInput {
  people: IPerson[];
  address: string;
  addressType: string;
  addressNumber: number;
  addressComplement: string;
  addressCep: string;
}

export default function CreateFamily() {
  const [openModal, setOpen] = useState(false);
  const [openMessage, setModalMessage] = useState("Cadastro Concluído com sucesso");

  const toggleModal = () => {
    setOpen(!openModal);
  }
  const [addedNewPerson, setAddedNewPerson] = useState<boolean>(false);
  const {
    control,
    handleSubmit,
    formState: { isDirty },
  } = useForm<IFormInput>({
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };

  const [formData, setFormData] = useState<IFormInput>({
    people: [
      {
        name: "",
        lastName: "",
        cpf: "",
        birthDate: new Date,
      },
    ],
    address: "",
    addressType: "",
    addressNumber: 0,
    addressComplement: "",
    addressCep: "",
  });

  const addPerson = () => {
    const newPerson: IPerson = {
      name: "",
      lastName: "",
      cpf: "",
      birthDate: new Date,
    };
    const newFormData = { ...formData };
    newFormData.people.push(newPerson);
    setFormData(newFormData);
    setAddedNewPerson(true)
  };

  const removeFromFormData = (index: number) => {
    const newFormData = { ...formData };
    newFormData.people.splice(index, 1);
    if(newFormData.people.length === 1) {
      setAddedNewPerson(false);
    }
    setFormData(newFormData);
  }

  return (
    <>
      <Modal open={true} dismissible>
        <div className="w-full bg-white py-5 px-7 rounded-lg flex flex-col justify-center items-center">
          <Image src={modalLogo} alt="modal logo" />
          <span className="font-thin text-center">{openMessage}</span>
        </div>
      </Modal>
      <Header title="Cadastro Familiar" />
      <Container>
        <form onSubmit={handleSubmit(onSubmit)}>
          {formData.people.map((person, index) => (
            <Family
              key={index}
              index={index} 
              addedNewPerson={addedNewPerson}
              control={control}
              removeFromFormData={removeFromFormData}
              person={person}
            />
          ))}
          <section>
            <hr className="border-gray my-6" />
            <div className="flex">
              <Controller
                name='addressType'
                control={control}
                defaultValue={formData.addressType}
                render={({ field }) => (
                  <Input
                    className="mr-10 w-36"
                    label="Tipo de Endereço"
                    placeholder="Rua, Servidão"
                    name="addressType"
                    type="text"
                    value={field.value}
                    onChange={field.onChange}
                  />
                )}
              />
              <Controller
                name='address'
                control={control}
                defaultValue={formData.address}
                render={({ field }) => (
                  <Input
                    label="Endereço"
                    name="address"
                    type="text"
                    value={field.value}
                    onChange={field.onChange}
                  />
                )}
              />
            </div>
            <div className="flex">
              <Controller
                name='addressNumber'
                control={control}
                defaultValue={formData.addressNumber}
                render={({ field }) => (
                  <Input
                    className="mr-10 w-20"
                    label="Nº"
                    name="addressNumber"
                    type="text"
                    value={field.value}
                    onChange={field.onChange}
                  />
                )}
              />
              <Controller
                name='addressComplement'
                control={control}
                defaultValue={formData.addressComplement}
                render={({ field }) => (
                  <Input
                    label="Complemento"
                    name="addressComplement"
                    type="text"
                    value={field.value}
                    onChange={field.onChange}
                  />
                )}
              />
            </div>
            <Controller
              name='addressCep'
              control={control}
              defaultValue={formData.addressCep}
              render={({ field }) => (
                <Input
                  className="w-36"
                  label="CEP"
                  name="addressCep"
                  type="text"
                  value={field.value}
                  onChange={field.onChange}
                />
              )}
            />
          </section>
          <section className={classNames(["flex justify-between mt-8"])}>
            <Button type="submit" disabled={!isDirty} className="bg-green text-white">
              Finalizar
            </Button>
            <Button type="button" onClick={addPerson} className="bg-yellow text-white">
              Adicionar Familiar
            </Button>
          </section>
          
        </form>
      </Container>
    </>
  );
}
