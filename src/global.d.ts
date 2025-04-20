// src/global.d.ts
declare interface Window {
  snap: {
    pay: (
      token: string,
      options: {
        enableRedirect?: boolean;
        onSuccess?: (result: unknown) => void;
        onPending?: (result: unknown) => void;
        onError?: (result: unknown) => void;
        onClose?: () => void;
        enableFinishRedirect?: boolean;
      }
    ) => void;
  };
}
