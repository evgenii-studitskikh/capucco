import React, { useState } from 'react';

import {
  Container,
} from './styled';
import {
  Field,
  Dropdown,
  Place,
} from '../styled';
import {
  ISubject,
  ISubjectProps,
} from '../types';

export const Subject = ({
  value,
  placeholder
}: ISubjectProps) => {

  const [isDropDownVisible, setIsDropDownVisible] = useState(false);
  const [data, setData] = useState([{
    id: 1,
    name: 'aaa'
  }]);

  return (
    <Container>
      <Field
        placeholder={placeholder}
        value={value.name}
        onChange={(e: any) => console.log(e.target.value)}
      />
      {isDropDownVisible &&
        <Dropdown>
          {data.map((subject: ISubject, index: number) => 
            <Place 
              key={index}
            >
              {subject.name}
            </Place>
          )}
        </Dropdown>
      }
    </Container>
  )
}