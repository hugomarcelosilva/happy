import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import mapMarkerImg from '~/images/map-marker.svg';

import { Container } from './Sidebar.styles';

const Sidebar = () => {
  const { goBack } = useHistory();

  return (
    <Container>
      <aside>
        <img src={mapMarkerImg} alt="Happy" />

        <footer>
          <button type="button" onClick={goBack}>
            <FiArrowLeft size={24} color="#FFF" />
          </button>
        </footer>
      </aside>
    </Container>
  );
};

export default Sidebar;
