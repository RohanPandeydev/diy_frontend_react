
import React from 'react';
import { Container } from 'reactstrap';
import { weDo } from '../../Constants';
import WeDoBox from './WeDoBox';

const WeDo = React.memo(() => {
  return (
    <section className="we-do-section">
      <Container>
        <div className="we-do-container">
          {weDo.map(({ id, icon, title, desc }) => (
            <WeDoBox key={id} icon={icon} title={title} desc={desc} />
          ))}
        </div>
      </Container>
    </section>
  );
});

export default WeDo;
