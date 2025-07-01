import {useEffect} from "react";

interface PageMetadataArgs {
  title?: string;
}

export function usePageMetadata(args: PageMetadataArgs = {}): void {
  useEffect(() => {
    document.title = args.title
      ? `${args.title} | Nexio Devnet Explorer`
      : "Nexio Devnet Explorer";
  }, [args]);
}
