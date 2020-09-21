import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/github-explorer-logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explorer Repositories Github</Title>

      <Form>
        <input placeholder="Type here the repository name" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/22330414?s=460&u=2636731dbb8b550ec6498acd0f12d70261e4cccf&v=4"
            alt="Ígor Pedro"
          />

          <div>
            <strong>Igor Pedro</strong>
            <p>My Repository</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/22330414?s=460&u=2636731dbb8b550ec6498acd0f12d70261e4cccf&v=4"
            alt="Ígor Pedro"
          />

          <div>
            <strong>Igor Pedro</strong>
            <p>My Repository</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/22330414?s=460&u=2636731dbb8b550ec6498acd0f12d70261e4cccf&v=4"
            alt="Ígor Pedro"
          />

          <div>
            <strong>Igor Pedro</strong>
            <p>My Repository</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
