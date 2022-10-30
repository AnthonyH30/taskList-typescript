import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 50px;
    background-color: black;

    h1{
        color: chartreuse;
        margin-bottom: 20px;
    }

    form{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: nowrap;
        border: 1px solid chartreuse;
        padding: 20px;
        border-radius: 8px;
        max-height: 100px;
        width: 50%;

        input{
            height: 40px;
            border: none;
            width: 70%;
            outline: none;
            font-size: 20px;
            padding-left: 10px;
            color: black;
        }

        button{
            height: 40px;
            width: 60px;
            border: none;
            cursor: pointer;
            color: black;
            font-weight: bold;
        }
    }

    .content-box{
        width: 50%;
        border: 1px solid chartreuse;
        height: fit-content;
        color: white;
        border-radius: 8px;
        margin-top: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        padding-block: 15px;

        .task{
            display: flex;
            width: 95%;
            min-height: 40px;
            align-items: center;
            justify-content: space-between;
            padding-inline: 10px;

            p{
                font-size: 20px;
            }

            button{
                background-color: transparent;
                font-size: 20px;
                cursor: pointer;
                border: none;
            }
        }
    }

    @media(max-width: 768px){
        form{
            width: 80%;
        }

        .content-box{
            width: 80%;
        }
    }
`;