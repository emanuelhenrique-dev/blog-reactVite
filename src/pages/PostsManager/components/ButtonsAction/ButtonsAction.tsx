import { ButtonsActionContainer } from './ButtonsAction.style';

export interface ButtonsActionProps {
  primaryAction: {
    // Botão principal
    label: string;
    onClick?: () => void;
  };
  secondaryAction?: {
    // Botão opcional (ex: deletar)
    label: string;
    onClick: () => void;
  };
  direction?: 'row' | 'column';
  type?: 'button' | 'submit' | 'reset';
  form?: string | undefined;
}
export function ButtonsAction({
  primaryAction,
  secondaryAction,
  direction,
  type,
  form
}: ButtonsActionProps) {
  return (
    <ButtonsActionContainer style={{ flexDirection: direction }}>
      <button type={type} form={form} onClick={primaryAction.onClick}>
        {primaryAction.label}
      </button>
      {secondaryAction && (
        <button onClick={secondaryAction.onClick}>
          {secondaryAction.label}
        </button>
      )}
    </ButtonsActionContainer>
  );
}
