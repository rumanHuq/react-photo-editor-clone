import styled from "styled-components";
import { Icon } from "@/components/Icon";
import { buttonReset } from "@/utils/css";

export const LayerbarWrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.grey19};
  transition: width 100ms ease-in;
  width: 33.2rem;

  &.minimized {
    width: max-content;
  }

  button {
    ${buttonReset}
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    > :not(:first-child) {
      margin-top: 0.4rem;
    }
  }
`;

export const LayoutSettings = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.grey23};
  display: flex;
  height: 2.4rem;
  justify-content: space-between;
  margin-bottom: 0.7rem;
  padding: 0 0.9rem 0 0.3rem;

  .resizer {
    width: 100%;
  }
`;

export const LayerItem = styled.li`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.grey16};
  color: ${({ theme }) => theme.colors.grey42};
  display: flex;
  height: 4.7rem;
  padding: 0 1rem;

  &.active {
    color: inherit;
  }

  .layer-name {
    flex: 1;
    font-size: 1.3rem;
    margin: 0 0.4rem;
  }

  .mr8 {
    margin-right: 0.8rem;
  }
`;

export const LayerIcon = styled(Icon)`
  color: inherit;
  display: block;
  margin-top: 3px;
`;
