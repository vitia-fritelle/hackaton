import styled from "styled-components";

export const WindowContainer = styled.div`
    background-color: #0003;
    position: fixed;
    z-index: 2;
    opacity: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    
    div {
        background: #ffffff;
        padding: 24px;
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        width: 516px;
        height: 640px;
        border-radius: 10px;
        iframe {
            margin-bottom: 20px;
        }
        h3 {
            cursor: pointer;
            font-size: 1.1666666667rem;
            font-weight: 600;
            line-height: 1.5rem;
            margin-bottom: 20px;
        }
        p {
            color: #0f1f2c9c;
            font-size: 1rem;
            line-height: 1.5rem;
            font-weight: 500;
            overflow: hidden;
        }
    }
`;

export const Container = styled.div`
    padding: 20px;
    ul {
        gap: 20px;
    }
`;

export const Item = styled.li`
    width: 100%;
    border-radius: 0.5rem;
    box-shadow: 0 1px 5px rgb(15 31 44 / 25%);
    background-color: #fff;
    height: 169px;
    padding: 15px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    margin-bottom: 20px;

    h4 {
        cursor: pointer;
        font-size: 1.1666666667rem;
        font-weight: 600;
        line-height: 1.5rem;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        margin-bottom: 10px;
        margin-top: 5px;
    }
    p {
        color: #0f1f2c9c;
        font-size: 1rem;
        line-height: 1.5rem;
        font-weight: 500;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }
`;