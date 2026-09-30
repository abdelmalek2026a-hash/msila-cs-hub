import type { SVGProps } from "react";

type IconName = "search"|"calendar"|"book"|"file"|"folder"|"bookmark"|"graduation"|"arrow"|"chevron"|"bell"|"spark"|"clock"|"menu"|"external"|"check";

const paths: Record<IconName,string> = {
  search:"M11 19a8 8 0 1 1 5.657-2.343L21 21l-1 1-4.343-4.343A8 8 0 0 1 11 19Zm0-2a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z",
  calendar:"M7 2h2v2h6V2h2v2h3v18H4V4h3V2Zm10 4H7v3h10V6ZM6 11v9h12v-9H6Z",
  book:"M5 4a3 3 0 0 1 3-3h11v20H8a3 3 0 0 0-3 3V4Zm3-1a1 1 0 0 0-1 1v15.764A4.98 4.98 0 0 1 8 19h9V3H8Z",
  file:"M6 2h8l5 5v15H6V2Zm7 2H8v16h9V8h-4V4Zm2 4V5.414L17.586 8H15Z",
  folder:"M3 5h6l2 2h10v12H3V5Zm2 2v10h14V9H10L8 7H5Z",
  bookmark:"M6 3h12v18l-6-3-6 3V3Zm2 2v12.764l4-2 4 2V5H8Z",
  graduation:"m2 9 10-5 10 5-10 5L2 9Zm3.5 2.5V17L12 20l6.5-3v-5.5L12 14l-6.5-2.5ZM21 10v6h-2v-5l2-1Z",
  arrow:"m14 5 7 7-7 7-1.414-1.414L17.172 13H3v-2h14.172l-4.586-4.586L14 5Z",
  chevron:"m8.5 4.5 7 7-7 7L7 17l5.5-5.5L7 6l1.5-1.5Z",
  bell:"M12 22a2.5 2.5 0 0 0 2.45-2h-4.9A2.5 2.5 0 0 0 12 22Zm8-5-1.75-2.5V10a6.25 6.25 0 0 0-5.25-6.18V2h-2v1.82A6.25 6.25 0 0 0 5.75 10v4.5L4 17v1h16v-1Z",
  spark:"m12 2 1.7 6.3L20 10l-6.3 1.7L12 18l-1.7-6.3L4 10l6.3-1.7L12 2Zm7 13 .8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15Z",
  clock:"M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20Zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm1 2h-2v6.414l4.293 4.293 1.414-1.414L13 11.586V6Z",
  menu:"M4 6h16v2H4V6Zm0 5h16v2H4v-2Zm0 5h16v2H4v-2Z",
  external:"M14 3h7v7h-2V6.414l-9.293 9.293-1.414-1.414L17.586 5H14V3ZM5 5h6v2H7v10h10v-4h2v6H5V5Z",
  check:"m9.2 16.2-4.4-4.4 1.4-1.4 3 3L17.8 4.8l1.4 1.4-10 10Z"
};

export function Icon({name,size=20,className="",...props}:{name:IconName;size?:number;className?:string}&SVGProps<SVGSVGElement>){
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className} {...props}><path d={paths[name]} /></svg>;
}
