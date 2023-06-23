type PropType = {
  message: string;
};

const Error = ({ message }: PropType) => {
  return <div>{message}</div>;
};

export default Error;
