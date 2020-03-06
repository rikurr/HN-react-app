import React from "react";
import styled from "styled-components";

import { LIGHT_ASH, ASH, BLACK, LIGHT_BLACK} from "../utils/colors";


const InputStyles = styled.input`
  font-family: inherit;
  font-size: inherit;
  color: ${BLACK};
  background-color: ${LIGHT_ASH};
  border: none;
  padding: .3rem 2rem;
  border-radius: 100px;
  width: 70%;
  transition: all .2s;
  margin-right: -3.5rem;

  &:focus {
    outline: none;
    width: 80%;
    background-color: ${ASH};
  }

  `;

const SearchButton = styled.button`
  border: none;
  height: 2rem;
  width: 2rem;
  background-color: ${LIGHT_ASH};
  fill: ${LIGHT_BLACK};
  &:focus {
    outline: none;
  }
  &:active {
    transform: translateY(2px);
  }

  `;
  const FormInput = styled.form`
    flex: 0 0 40%;
    display: flex;
    align-items: center;
    justify-content: center;

    ${InputStyles}:focus + ${SearchButton} {
      background-color: ${ASH};
    }
  `;

const Input = () => {
  return (
    <FormInput>
      <InputStyles placeholder='Search Stories'/>
      <SearchButton>
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 32 32"
        >
          <title>search</title>
          <path d="M31.008 27.231l-7.58-6.447c-0.784-0.705-1.622-1.029-2.299-0.998 1.789-2.096 2.87-4.815 2.87-7.787 0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12c2.972 0 5.691-1.081 7.787-2.87-0.031 0.677 0.293 1.515 0.998 2.299l6.447 7.58c1.104 1.226 2.907 1.33 4.007 0.23s0.997-2.903-0.23-4.007zM12 20c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z"></path>
        </svg>
      </SearchButton>
    </FormInput>
  );
};

export default Input;
