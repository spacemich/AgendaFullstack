import GlobalSyle from "./style/global";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";
import Form from "./components/Form.js";
import Grid from "./components/Grid";
import { useEffect, useState } from "react";
import axios from "axios";

const Container = styled.div`
  width: 100%;
  max-width: 1000px;
  background-color: rgba(0, 31, 63, 0.85); /* azul marinho translúcido */
  border-radius: 10px;
  padding: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(8px);
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 20px;
`;


const Title = styled.h2`  color:rgb(255, 204, 0);`;

function App() {
  const [agendas, setAgendas] = useState([]);
  const [onEdit, setOnEdit] = useState(null);

  const getAgendas = async () => {
    try {
      const res = await axios.get("http://localhost:8800");
      setAgendas(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)));
    } catch (error) {
      toast.error(error.message || "Erro ao buscar dados");
    }
  };

  useEffect(() => {
    getAgendas();
  }, [setAgendas]);
  return (
  <>
    <Wrapper>
      <Container>
        <Title>AGENDA FRONT-END: REACT e BACK-END: NODE com MYSQL</Title>
        <Form onEdit={onEdit} setOnEdit={setOnEdit} getAgendas={getAgendas} />
        <Grid agendas={agendas} setAgendas={setAgendas} setOnEdit={setOnEdit} />
      </Container>
    </Wrapper>

    <ToastContainer autoClose={3000} />
    <GlobalSyle />
  </>
);
}
export default App;