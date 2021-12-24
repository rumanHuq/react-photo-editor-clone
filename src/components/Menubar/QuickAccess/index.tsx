import styled from "styled-components";
import { Icon } from "@/components/Icon";

const QuickAccessWrapper = styled.div`
  display: flex;

  > {
    * {
      margin-right: 1rem;
    }

    *:first-child {
      margin-right: 0.5rem;
    }

    *:last-child {
      margin-right: 1.5rem;
    }
  }
`;

export const QuickAccess = () => {
  return (
    <QuickAccessWrapper>
      <Icon name="bell" />
      <Icon name="sun" />
      <Icon name="globe" />
      <Icon name="helpCircle" />
    </QuickAccessWrapper>
  );
};
