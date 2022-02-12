import styled from "styled-components";
import { useContext, useState } from "react";
import { NotesContext } from "./NotesContext";
import Notes from "./Notes";
import { v4 as uuidv4 } from "uuid";

const FormContainer = styled.div`
  width: 300px;
  margin: 1rem auto;
`;
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%auto;

  input,
  textarea {
    border: 2px solid cyan;
    padding: 7px;
  }
  textarea {
    margin: 1rem 0;
  }
  button {
    color: white;
    background: crimson;
    cursor: pointer;
    outline: none;
    border: none;
    padding: 7px;
  }
`;

const AddNote = () => {
  const [Notes, setNotes] = useContext(NotesContext);

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setNotes((prevNotes) => [
      ...prevNotes,
      {
        title: title,
        desc: desc,
        id: uuidv4(),
      },
    ]);
  };

  return (
    <FormContainer>
      <StyledForm onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          type="text"
          placeholder="Description"
          required
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <button>Add Note</button>
      </StyledForm>
    </FormContainer>
  );
};

export default AddNote;
