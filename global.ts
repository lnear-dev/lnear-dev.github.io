import { css } from '@microsoft/fast-element';

export const global = css`
  /* flex */
  main,
  header,
  nav,
  article,
  div,
  span,
  section,
  legend,
  fieldset,
  menu,
  ol,
  ul,
  dialog,
  form,
  button,
  textarea,
  input {
    display: flex;
  }

  /* viewport */
  main {
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;

    width: 100%;
    min-height: 50vh;
  }

  /* sub-viewport */
  section {
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    min-height: 60vh;
    width: 90%;

    padding: 1%;
    margin: 1% 0;
    background: transparent;
    border: none;
  }

  /* containers */
  legend,
  fieldset {
    border: 2px solid #00b8ff;
  }
  legend {
    background-color: #00b8ff;
    border: 2px solid #00b8ff;
    border-radius: 48px;
  }
  fieldset {
    border-radius: 36px;
    border-radius: none;
  }

  /* lists */
  menu,
  ol,
  ul {
    text-align: center;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  /* icon */
  menu {
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
  }

  /* vert */
  ol {
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
  }

  /* plein */
  ul {
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
  }

  /* text */
  h1,
  h2,
  h3,
  h4,
  h5,
  p {
    color: #000;

    margin: 0;
    padding: 0;
  }
  /* titles */
  h1 {
    color: var(--ponc);
    font-size: clamp(24px, 5vw, 36px);
    font-weight: 600;
    padding: 1% 0;
  }
  /* sub-titles */
  h2,
  h3 {
    font-size: clamp(16px, 2vh, 24px);
    font-weight: 400;
  }
  h2 {
    color: #fff;
  }
  h4 {
    font-size: clamp(12px, 2.5vw, 16px);
    font-weight: 400;
  }
  h5 {
    font-size: clamp(12px, 2.5vw, 16px);
    font-weight: 400;
  }

  /* corps */
  p {
    font-size: clamp(12px, 2.5vw, 16px);
  }

  /* images */
  img {
    width: 100%;
  }

  /* icons */
  img[class='tiny'] {
    width: 12.5%;
  }
  img[class='petit'] {
    width: 25%;
  }
  img[class='med'] {
    width: 50%;
  }
  img[class='gros'] {
    width: 100%;
  }

  /* branding */
  /* icons */
  img[title='ic'] {
    width: 75%;
  }
  /* anchor tag */
  a {
    font-family: 'Inter', sans-serif;
    text-align: center;
    text-decoration: none;

    cursor: pointer;
    color: #00b8ff;
    font-weight: 500;
    transition: 0.2s ease-in-out;
  }
  a[title='nav'] {
    font-size: clamp(16px, 2.5vw, 18px);
  }

  /* interactions */
  /* buttons */
  button {
    font-family: 'Inter', sans-serif;
    transition: 0.2s ease-in-out;
    border: none;
    border-radius: 48px;
    background-color: transparent;
    cursor: pointer;

    width: 100%;
    margin: 0.5% 0;
  }
  /* dialogs */
  /* forms */
  textarea,
  input {
    font-family: 'Inter', sans-serif;
    font-size: clamp(12px, 1vw, 16px);
    border: 2px solid var(--sec);
    border-radius: 24px;
    background-color: transparent;

    width: 100%;
    padding: 1.75%;
    margin: 1% 0;
  }
  textarea {
    height: 10rem;
    padding: 2%;
    resize: none;
  }
  textarea:focus,
  input:focus {
    outline: none;
    border: 2px solid var(--ponc);
  }
`;
