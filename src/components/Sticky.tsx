interface Props {
  text: string;
  color: string;
}

const Sticky = ({ text, color }: Props) => {
  return <div style={{ color: color }}>{text}</div>;
};

export default Sticky;
