import styled from "styled-components";

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
  return (
    <FormContainer>
      <StyledForm>
        <input type="text" placeholder="Title" required />
        <textarea type="text" placeholder="Description" required />
        <button>Add Note</button>
      </StyledForm>
    </FormContainer>
  );
};

export default AddNote;
