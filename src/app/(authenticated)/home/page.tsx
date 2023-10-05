'use client';
import { ChangeEvent, useState } from 'react';
import { Container } from '@/components/Container';
import Header from '@/components/Header';
import Statistics from '@/components/Header/Statistics';
import SearchBar from '@/components/SearchBar';
import People, { PeopleProps } from '@/components/People';
import InfiniteScroll from '@/components/InfiniteScroll';


const fakePeopleData: PeopleProps = {
  people: [
    {
      name: 'João',
      lastName: 'Silva',
      cpf: '123.456.789-01',
      availabilityDate: new Date('2023-10-10'),
    },
    {
      name: 'Maria',
      lastName: 'Santos',
      cpf: '987.654.321-09',
      availabilityDate: new Date('2023-09-15'),
    },
    {
      name: 'Pedro',
      lastName: 'Pereira',
      cpf: '456.789.123-45',
      availabilityDate: new Date('2023-11-05'),
    },
    {
      name: 'Ana',
      lastName: 'Rodrigues',
      cpf: '789.123.456-78',
      availabilityDate: new Date('2023-09-30'),
    },
    {
      name: 'Luiza',
      lastName: 'Ferreira',
      cpf: '321.654.987-32',
      availabilityDate: new Date('2023-10-20'),
    },
  ],
};

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };


  return (
    <>
      <Header title='Pessoas Assistidas'>
        <Statistics />
      </Header>
      <Container>
        <SearchBar value={searchTerm} onChange={handleSearchInputChange} />

        <InfiniteScroll>
          <People people={fakePeopleData.people} />
        </InfiniteScroll>
      </Container>
    </>
  );
}
