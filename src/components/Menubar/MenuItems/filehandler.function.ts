import type { FILE_HANDLER_ITEMS } from ".";

type FileHandlerCb = {
  [key in typeof FILE_HANDLER_ITEMS[number]]?: () => void;
};

export function fileHandler(prop: typeof FILE_HANDLER_ITEMS[number], cb?: FileHandlerCb) {
  switch (prop) {
    case "Open": {
      cb?.[prop]?.();
      break;
    }
    default: {
      console.log(prop);
      break;
    }
  }
}
