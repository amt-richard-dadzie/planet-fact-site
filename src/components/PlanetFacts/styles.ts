import styles from "styled-components";

export const PlanetCard = styles.main`
    display: grid;
    padding: 5rem 4rem 4rem 4rem;
    width: min(90%, 77rem);
    margin: 0 auto;
    // grid-gap: 20px;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
        'planet info'
        'planet category'
        'stat stat';

    .category {
        grid-area: category;
        div{
            border: 1px solid rgba(255, 255, 255, 0.2);
            cursor: pointer;
            padding: 20px 0 20px 20px;
            margin-bottom: 16px;
            &:hover {
                background-color: #313148 ! important;
            }
            p {
                letter-spacing: 0.16rem;
                span {
                    padding-right: 20px;
                }
            }
        }
    }

    .planet-info {
        grid-area: info;
        h2 {
            font-size: 4.5rem;
            font-weight: 500;
            margin-block-end: 10px;
            font-family: 'Antonio', sans-serif;
            text-transform: uppercase;
        }
        p {
            font-size: .995rem;
            opacity: 0.7;
            font-family: 'Spartan-light', sans-serif;
            line-height: 20px;
            margin-bottom: 15px;
        }
        .source {
            font-size: .7rem;
            a {
                font-size: .65rem;
                opacity: 0.5;
                padding-right: 7px;
            }
        }
    }
    .planet-image {
        grid-area: planet;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%

        img {
            max-width: 50%;
            display: block;
        }
    }
    .planet-stat {
        grid-area: stat;
        display: flex;
        justify-content: space-between;

        div{
            border: 1px solid rgba(255, 255, 255, 0.2);
            width: 15rem;
            padding: 25px 20px;
            p{
                display: flex;
                flex-direction: column;
                gap: 7px;
                font-size: 1.55rem;
                span{
                    font-size: .6rem;
                    opacity: 0.7;
                }
            }
        }
    }

`;

// grid-template-areas:
//     'planet intro'
//     'planet category'
//     'stat stat';
// grid-template-columns:  minmax(18rem,36.25rem) minmax(5rem,18rem);
// width: min(90%, 70rem);
// margin: 0 auto;

//     div{
//         border: 1px solid rgba(255, 255, 255, 0.2);
//         cursor: pointer;
//         padding: 20px 0 20px 20px;
//         margin-bottom: 16px;
//         p{
//             letter-spacing: 0.16rem;
//             span{
//                 padding-right: 20px;
//             }
//         }
//         &:hover {
//             background-color: #313148 ! important;
//         }
//     }

// }

// .planet-image{
//     grid-area: planet;
// }

// .planet-info{
//     grid-area: intro;

//     h2{
//         font-size: 4.5rem;
//         font-weight: 500;
//         margin-block-end: 10px;
//         font-family: 'Antonio', sans-serif;
//         text-transform: uppercase;
//     }
//     p{
//         font-size: .995rem;
//         opacity: 0.7;
//         font-family: 'Spartan-light', sans-serif;
//         line-height: 25px;
//         margin-block-end: 24px
//     }
// }

// .planet-stat{
//     grid-area: stat;
//     display: flex;
//     justify-content: space-between;

//     div{
//         border: 1px solid rgba(255, 255, 255, 0.3);
//         padding: 27px 23px;
//     }

// }
