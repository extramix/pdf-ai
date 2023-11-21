import { Input } from '../ui/input';

interface ChatInputProps {
  isDisabled?: boolean;
}

const ChatInput = ({ isDisabled }: ChatInputProps) => {
  return (
    <div>
      <Input />;
    </div>
  );
};

export default ChatInput;
