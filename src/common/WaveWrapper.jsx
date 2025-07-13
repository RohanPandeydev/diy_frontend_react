import React, { useState, useCallback } from 'react';
import { Container } from 'reactstrap';

const WaveWrapper = React.memo(() => {
  const [email, setEmail] = useState('');

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      // Replace this with your actual form submission logic or API call
      console.log('Submitted Email:', email);
      setEmail('');
    },
    [email]
  );

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div className="wave-wrapper">
      <Container>
        <div className="sign-up-content">
          <h5>
            Stay updated with our latest news, promotions, and tech insights.
          </h5>
          <form onSubmit={handleSubmit}>
            <div className="input-button-wrapper">
              <input
                type="email"
                placeholder="Email"
                className="styled-input"
                value={email}
                onChange={handleChange}
                required
              />
              <button
                type="submit"
                className="styled-button"
                aria-label="Submit email for newsletter subscription"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
});

export default WaveWrapper;
