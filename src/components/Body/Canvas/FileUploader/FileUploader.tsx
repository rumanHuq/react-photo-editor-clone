import { useAtom } from "jotai";
import { useRef, useEffect } from "react";
import { readWriteMenuItemActionAtom } from "@/components/Menubar/MenuItems/state";
import { fileAtom } from "../state";

export const FileUploader = () => {
  const [, setFileToLayer] = useAtom(fileAtom);
  const [menuItem, setMenuItem] = useAtom(readWriteMenuItemActionAtom);
  const fileUploadInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (menuItem === "OPEN_LOCAL_FILE") {
      fileUploadInputRef.current?.click();
      setMenuItem(undefined);
    }
    return () => setMenuItem(undefined);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [menuItem]);

  const onFileUpload = async (file?: File) => {
    if (!file) return;
    await setFileToLayer(file);
  };
  return (
    <input
      ref={fileUploadInputRef}
      onChange={(v) => onFileUpload(v.target.files?.[0])}
      type="file"
      style={{ display: "none" }}
      accept="image/*"
    />
  );
};
