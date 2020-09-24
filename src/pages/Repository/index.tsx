import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/github-explorer-logo.svg';

import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParams {
  fullName: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img
            src="https://avatars1.githubusercontent.com/u/22330414?s=460&u=2636731dbb8b550ec6498acd0f12d70261e4cccf&v=4"
            alt="igooruh"
          />
          <div>
            <strong>igooruh/consume-api-ui</strong>
            <p>Descrição do repo</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1808</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>48</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>67</strong>
            <span>Issues</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to="mdmcdkmckdmcm">
          <div>
            <strong>cdcmdkmckdmc</strong>
            <p>dcmkdmckdmlms</p>
          </div>

          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
