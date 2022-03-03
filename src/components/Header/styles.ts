import styled from "styled-components";

export const Container = styled.header`
  background-color: var(--blue);
  max-width: 100%;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 1rem 10rem;

  button {
    color: #fff;
    background: var(--blue-light);
    padding: 0 2rem;
    font-size: 1rem;
    border: 0;
    border-radius: 0.25rem;
    height: 3rem;

    transition: filter 0.2s;

    :hover {
      filter: brightness(0.9);
    }
  }
`;
