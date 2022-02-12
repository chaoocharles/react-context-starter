import { useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import Note from "./Note";

const StyledNotes = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Notes = () => {
  const [notes, setNotes] = useState([
    {
      title: "What is HTML?",
      desc: "HTML is a markup language",
      id: uuidv4(),
    },
    {
      title: "What is CSS?",
      desc: "CSS is Cascading Styles Sheet",
      id: uuidv4(),
    },
    {
      title: "What is React?",
      desc: "JavaScript is a programming language",
      id: uuidv4(),
    },
  ]);
  return (
    <StyledNotes>
      {notes && notes.map((note) => <Note ourNote={note} key={note.id} />)}
    </StyledNotes>
  );
};

export default Notes;
