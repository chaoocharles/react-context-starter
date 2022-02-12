import styled from "styled-components";
import { FaTimes } from "react-icons/fa";

const StyledNote = styled.div`
  max-width: 300px;
  background: cyan;
  padding: 7px;
  margin: 10px;
  position: relative;
`;

const StyledButton = styled.button`
  outline: none;
  border: none;
  background: none;
  position: absolute;
  top: 5px;
  right: 5px;
  font-size: 20px;
  cursor: pointer;
`;

const Note = ({ ourNote }) => {
  return (
    <StyledNote>
      <h2>{ourNote.title}</h2>
      <p>{ourNote.desc}</p>
      <StyledButton>
        <FaTimes />
      </StyledButton>
    </StyledNote>
  );
};

export default Note;
