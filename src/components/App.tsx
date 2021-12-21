import styled from "styled-components";

const AppWrapper = styled.div`
  color: ${({ theme }) => theme.green};
`;

export const App = () => <AppWrapper>Hello!!</AppWrapper>;
