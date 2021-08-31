import React from 'react';
import { Title, Form, Repositories } from './styles';
import logoImg from '../../assets/logo.svg';
import { FiChevronRight } from 'react-icons/fi';

const Dashboard: React.FC = () => {
  return (
  <>
  <img src={logoImg} alt="Github Explorer" />
  <Title>Explore repositorios no Github</Title>
  <Form action="">
    <input placeholder="Digite o nome do repositorio" />
    <button type="submit">Pesquisar</button>
  </Form>

  <Repositories>
    <a href="teste">
    <img src="https://avatars.githubusercontent.com/u/58269629?v=4"
    alt="Lipe Silva" />
    <div>
      <strong>rocketseat/unform</strong>
      <p>Easy peasy lemon squeazy</p>
    </div>

    <FiChevronRight size={20} />
    </a>
    <a href="teste">
    <img src="https://avatars.githubusercontent.com/u/58269629?v=4"
    alt="Lipe Silva" />
    <div>
      <strong>rocketseat/unform</strong>
      <p>Easy peasy lemon squeazy</p>
    </div>

    <FiChevronRight size={20} />
    </a>
    <a href="teste">
    <img src="https://avatars.githubusercontent.com/u/58269629?v=4"
    alt="Lipe Silva" />
    <div>
      <strong>rocketseat/unform</strong>
      <p>Easy peasy lemon squeazy</p>
    </div>

    <FiChevronRight size={20} />
    </a>
  </Repositories>
  </>
  )
};

export default Dashboard;