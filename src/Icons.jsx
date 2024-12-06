export const ArrowUp = ({ fill, onClick }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="50"
    height="50"
    fill={fill}
    class="bi bi-arrow-up"
    viewBox="0 0 16 16"
    onClick={onClick}
  >
    <path
      fill-rule="evenodd"
      d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5"
    />
  </svg>
);

export const ArrowLeft = ({ fill, onClick }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="50"
    height="50"
    fill={fill}
    onClick={onClick}
    class="bi bi-arrow-left"
    viewBox="0 0 16 16"
    style={{ marginRight: "4em" }}
  >
    <path
      fill-rule="evenodd"
      d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
    />
  </svg>
);

export const ArrowRight = ({ fill, onClick }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="50"
    height="50"
    fill={fill}
    onClick={onClick}
    class="bi bi-arrow-right"
    viewBox="0 0 16 16"
  >
    <path
      fill-rule="evenodd"
      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
    />
  </svg>
);

export const ArrowDown = ({ fill, onClick }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill={fill}
    width="50"
    height="50"
    onClick={onClick}
    class="bi bi-arrow-down"
    viewBox="0 0 16 16"
  >
    <path
      fill-rule="evenodd"
      d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1"
    />
  </svg>
);
