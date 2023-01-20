import styled from "styled-components";

export default function Page({ children }) {
  return <PageTag>{children}</PageTag>;
}

const PageTag = styled.div`
  /* робимо фон градієнтом */
  background: linear-gradient(0, #1d24f2 50%, #e8f21d 50%);

  /* робимо фон на всю ширину */
  width: 100%;
`;
