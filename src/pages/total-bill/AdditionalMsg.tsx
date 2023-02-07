import { MsgLine } from './styled';

const AdditionalMsg: React.FC<{ msg: string }> = (props) => {
  return <MsgLine>{props.msg}</MsgLine>;
};

export default AdditionalMsg;
