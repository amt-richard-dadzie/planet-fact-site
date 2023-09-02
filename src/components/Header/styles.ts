import styles from "styled-components";

export const Header = styles.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    padding: 15px 0;

    h1 {
        padding: 0 0 0 20px;
        text-transform: uppercase;
        font-size: 28px;
        a{
            font-family: 'Antonio', sans-serif;
        }
    }

    .menu-icon {
        display: none;
    }
    .planet-icon{
        display: none;
    }
    .chevron-icon{
        display: none;
    }

    nav {
        ul {
            display: flex;
            li {
                list-style: none;
                a {
                    font-size: 12px;
                    padding: 0 20px;
                    display: inline-block;
                    position: relative;
                    text-transform: uppercase;
                    opacity: 0.5;
                    transition: transform 0.3s ease-in-out;
                    &:hover::before {
                    content: "";
                    position: absolute;
                    height: 7px;
                    top: -30px;
                    width: 60%;
                    background-color: var(--bg-color);
                    }
                    &:hover {
                    transform: translateY(3px);
                    opacity: 1;
                    }
                }
            }
        }
    }
    @media(max-width: 431px) {
        .menu-icon {
            display: block;
        }
        .chevron-icon {
            display: block;
        }
        .planet-icon{
            display: block;
        }
        nav {
            display: none;
        }
        .container {
            display: flex;
        }
        .active {
            display: block;
            position: absolute;
            top: 70px;
            background-color: #070724;
            width: 100%;
            ul{
                height: 100%;
                flex-direction: column;
                padding: 43px 24px 60px;
                justify-content: space-between;
            }

            li{
                border-bottom: 1px solid rgba(255, 255, 255, 0.3);
                padding: 15px 0;
                display: flex;
                align-items: center;
                justify-content: space-between;
                a{
                    font-weight: bold;
                }
            }
            
        }
    }
`;
