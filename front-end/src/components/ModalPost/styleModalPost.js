import styled from "styled-components"

export const StyleContainerModal = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #FFFFFF;
    position: absolute;
    width: 100%;
    min-height: 100vh;

    header{
        margin-top: 30px;
    }

    @media screen and (min-device-width: 500px){
        top: 2%;
        left: 4%;
        width: 90%;
        position: absolute;
    }

`

export const StyleSection = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 90%;
    // min-height: 100vh;
    animation: FromRight .7s .4s backwards;

    div:first-child{
        margin-top: 2vh;
        min-height: 40vh;
        margin-bottom: 2vh;
    }

    div{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 1vh;
        

        .InputPost{
            border-radius: 12px;
            border: none;
            background-color: #EDEDED;
            height: 130px;
            font-family: 'IBM Plex Sans';
            color: #6F6F6F;
            font-weight: 400;
            font-size: 18px; 
        }

        button{
            border-radius: 12px;
        }

        article{
            display: flex;
            gap: 18px;
            padding: 9px 10px;
            flex-direction: column;
            background: #FBFBFB;
            border: 1px solid #E0E0E0;
            border-radius: 12px;
            align-items: flex-start;
            font-family: 'IBM Plex Sans';
            font-weight: 400;
            font-size: 18px;
            color: #000000;

            .subText{
                font-size: 12px;
                color: #6F6F6F;
            }

            .subTextBold{
                font-size: 12px;
                color: #6F6F6F;
                font-weight: 700;
            }

            .menuPost{
                display: flex;
                gap: 2vw;
            }

            span{
                padding: 5px;
                display: flex;
                justify-content: space-between;
                gap: 18px;
                border: 1px solid #E0E0E0;
                border-radius: 28px;
            }
        }
    }

    @keyframes FromRight{
        from{
            opacity: 0;
            transform: translateX(20px);
        }

        to{
            opacity: 1;
            transform: translateX(0px);
        }
    }
`