type PropType = {
  message: string;
};

const Error = ({ message }: PropType) => {
  return <div style={{ textAlign: "center", color: "red" }}>{message}</div>;
};

export default Error;
