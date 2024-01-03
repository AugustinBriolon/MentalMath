import { AlertDialog, Flex, Button } from "@radix-ui/themes";
import React, { ReactNode } from "react";

type AlertModalProps = {
  buttonName: string;
  buttonIcon?: ReactNode;
  modalTitle: string;
  modalText: string;
  modalButtonName: string;
  setState: Function;
  state: any;
};

const AlertModal = ({
  buttonName,
  buttonIcon,
  modalTitle,
  modalText,
  modalButtonName,
  setState,
  state,
}: AlertModalProps) => {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger>
        <Button>
          {buttonName}
          {buttonIcon}
        </Button>
      </AlertDialog.Trigger>
      <AlertDialog.Content style={{ maxWidth: 450 }}>
        <AlertDialog.Title>{modalTitle}</AlertDialog.Title>
        <AlertDialog.Description size="2">
          {modalText}
        </AlertDialog.Description>

        <Flex gap="3" mt="4" justify="end">
          <AlertDialog.Cancel>
            <Button variant="soft" color="gray">
              Annuler
            </Button>
          </AlertDialog.Cancel>
          <AlertDialog.Action>
            <Button variant="solid" color="red" onClick={() => setState(state)}>
              {modalButtonName}
            </Button>
          </AlertDialog.Action>
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
}

export default AlertModal;
