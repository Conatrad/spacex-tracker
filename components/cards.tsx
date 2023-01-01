import Date from './date';
import Image from 'next/image';
import { FunctionComponent } from 'react';


interface CardProps {
  header: string;
  subheader: string;
  description: string;
  location: string;
  date: string;
}

const Card: FunctionComponent<CardProps> = ({ header, subheader, description, location, date }) => {
  return (
<div className="overflow-hidden text-gray-400 bg-slate-400 bg-opacity-10 body-font">
  <div className="container px-5 mx-auto py-14">
    <div className="-my-8 divide-y-2 divide-white ">
      <div className="flex flex-wrap w-screen py-8 md:flex-nowrap">
        <div className="flex flex-col flex-shrink-0 mb-6 md:w-64 md:mb-0">
          <span className="text-white mibold text-md title-font">{subheader}</span>
          <span className="mt-1 text-sm text-yellow-600 text-opacity-90"><Date dateString={date}/></span>
        </div>
        <div className="md:flex-grow">
          <h2 className="mb-2 text-2xl font-medium text-white title-font">{header}</h2>
          <p className="leading-relaxed">{location}</p>
        </div>
      </div>
      </div>
    </div>
  </div>
  );
}
export default Card;