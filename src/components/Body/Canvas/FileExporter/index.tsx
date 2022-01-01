import { useAtom } from "jotai";
import { useEffect } from "react";
import { readWriteMenuItemActionAtom } from "@/components/Menubar/MenuItems/state";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const FileExporter = ({ stageRef }: Record<string, any>) => {
  const [menuItem, setMenuItem] = useAtom(readWriteMenuItemActionAtom);
  const handleExport = () => {
    const uri = stageRef.current?.toDataURL();
    const link = document.createElement("a");
    link.download = "export.png";
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  useEffect(() => {
    if (menuItem === "SAVE_FILE_LOCALLY") {
      handleExport();
      setMenuItem(undefined);
    }
    return () => setMenuItem(undefined);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [menuItem]);
  return null;
};
