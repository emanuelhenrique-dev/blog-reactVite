import { ButtonsActionContainer } from './ButtonsAction.style';

export interface ButtonsActionProps {
  primaryAction: {
    // Botão principal
    label: string;
    onClick: () => void;
  };
  secondaryAction?: {
    // Botão opcional (ex: deletar)
    label: string;
    onClick: () => void;
  };
  direction?: 'row' | 'column';
}
export function ButtonsAction({
  primaryAction,
  secondaryAction,
  direction
}: ButtonsActionProps) {
  return (
    <ButtonsActionContainer style={{ flexDirection: direction }}>
      <button onClick={primaryAction.onClick}>{primaryAction.label}</button>
      {secondaryAction && (
        <button onClick={secondaryAction.onClick}>
          {secondaryAction.label}
        </button>
      )}
    </ButtonsActionContainer>
  );
}
