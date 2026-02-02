import { css } from "@emotion/react";

export const lauout = css`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    background-color: #f5f5f5;
`

// 스크롤바x, 헤어와 푸터를 제외한 공간을 모두 차지
export const main = css`
    flex-grow: 1;
    overflow: auto;
    padding-left: 16px;
    background-color: #f5f5f5;
`