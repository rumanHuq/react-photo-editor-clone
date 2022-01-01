import { useAtom } from "jotai";
import styled from "styled-components";
import { readCursorCoordAtom } from "../Body/Canvas/state";
import { Icon } from "../Icon";

const StatusbarWrapper = styled.footer`
  background-color: ${({ theme }) => theme.colors.grey19};
  display: flex;
  padding-left: 1rem;

  > p {
    align-items: center;
    border-left: 1px solid ${({ theme }) => theme.colors.grey23};
    display: inline-flex;
    font-size: 1.6rem;
    margin: 0;
    padding: 0 1rem;

    &:not(:first-child) {
      border-right: 1px solid ${({ theme }) => theme.colors.grey23};
    }
  }

  > p:fisrt-child {
    border-right: 1px solid ${({ theme }) => theme.colors.qtyellow};
  }

  .chevron-down {
    margin-top: 0.4rem;
  }

  .box {
    border: 1px solid #fff;
    height: 1.4rem;
    width: 1.4rem;
  }
`;
export const Statusbar = () => {
  const [{ x, y }] = useAtom(readCursorCoordAtom);
  return (
    <StatusbarWrapper>
      <p>{`X: ${x}  Y: ${y}  Z: 0`}</p>
      <p>
        Visualization &nbsp;
        <Icon name="chevronUp" className="chevron-down" />
      </p>
      <p>
        <span className="box" />
        &nbsp;Show errors
      </p>
    </StatusbarWrapper>
  );
};
