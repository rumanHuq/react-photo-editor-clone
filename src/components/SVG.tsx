/* eslint-disable */
// Presented by https://rumanbsl@github.com - do not modify manually
import type {DOMAttributes, SVGAttributes, HTMLAttributes} from 'react';

const iconNames = [
  'ArtboardLogo',
  'CanvasIcon',
  'CreateRectangleIcon',
  'CropIcon',
  'DirectSelectionToolIcon',
  'DragmarksIcon',
  'DrawIcon',
  'PenIcon',
  'SelectionToolIcon',
  'SettingsIcon',
] as const;

export type IconName = typeof iconNames[number];

interface PropTypes {
  className?: string;
  color?: string;
  height?: number;
  width?: number;
  name: IconName;
  onClick?: DOMAttributes<SVGSVGElement>["onClick"];
  size?: number;
  style?: SVGAttributes<SVGSVGElement>["style"];
  wrapperStyle?:HTMLAttributes<HTMLDivElement>["style"]
};

const getIcon = (props: PropTypes) => {
  const {height, color, onClick, name, size, style, width, className, ...rest} = props;
  if(name === 'ArtboardLogo') {
    return (<svg id="Layer_2" {...rest} height={typeof height === "number" ? height : size} width={typeof width === "number" ? width : size} onClick={onClick} style={style} className={className} fill={color} viewBox="0 0 44 40"><defs></defs><path d="M33.27 31.9l-8.51-.68.2.63a30.33 30.33 0 01.92 4.15h9a36.79 36.79 0 01-1.43-3.66z"/><path d="M15.12 21.09l3.26-10.51 3.2 10.1L29 20 24.69 8.15A30.2 30.2 0 0123.38 4h-10a22.4 22.4 0 01-1.23 4.15L3.81 31.31A38.39 38.39 0 012 36h9a21.85 21.85 0 011-4.15l.53-1.68-4.21-1.57h26.56v-6.48H8.32zM38.57 22.11H35.9v6.49h2.67l3.47-3.24-3.47-3.25z"/></svg>);
  }
  if(name === 'CanvasIcon') {
    return (<svg id="Layer_2" {...rest} height={typeof height === "number" ? height : size} width={typeof width === "number" ? width : size} onClick={onClick} style={style} className={className} fill={color} viewBox="0 0 24 24"><defs></defs><path d="M20.58 12.06a.87.87 0 00-.16-.23L15.6 7l-.1-.09-.13-.07H8.2v13.09a2 2 0 00.17.8 1.73 1.73 0 00.45.65 2 2 0 00.65.45 2 2 0 00.81.17h8.28a2 2 0 00.8-.16 1.83 1.83 0 00.66-.46 1.85 1.85 0 00.45-.65 2 2 0 00.16-.8v-7.61a.6.6 0 00-.05-.26zm-4.78-2.9l2.47 2.48H15.8zm3.46 10.77a.65.65 0 01-.06.26.86.86 0 01-.15.22.62.62 0 01-.22.15.76.76 0 01-.27.05h-8.28a.76.76 0 01-.27-.05.54.54 0 01-.22-.15.66.66 0 01-.15-.22.65.65 0 01-.06-.26V8.18h4.84v4.14a.68.68 0 00.2.49.67.67 0 00.5.21h4.14z"/><rect x="8.2" y="2" rx=".16"/><rect x="3.37" y="6.8" width="3.99" height="1.38" rx=".16"/></svg>);
  }
  if(name === 'CreateRectangleIcon') {
    return (<svg id="Layer_2" {...rest} height={typeof height === "number" ? height : size} width={typeof width === "number" ? width : size} onClick={onClick} style={style} className={className} fill={color} viewBox="0 0 24 24"><path d="M22 22H2V2h20zM3.75 20.25h16.5V3.75H3.75z" /></svg>);
  }
  if(name === 'CropIcon') {
    return (<svg id="Layer_2" {...rest} height={typeof height === "number" ? height : size} width={typeof width === "number" ? width : size} onClick={onClick} style={style} className={className} fill={color} viewBox="0 0 24 24"><path d="M2.38 7.75a.84.84 0 01-.62-.25.87.87 0 010-1.24.8.8 0 01.6-.26H6V2.38a.89.89 0 01.88-.88.81.81 0 01.62.27.87.87 0 01.24.61L7.71 6l7.78-.06a2.57 2.57 0 011.86.76 2.44 2.44 0 01.58.83 2.7 2.7 0 01.2 1v7.88h3.49a.82.82 0 01.62.26.83.83 0 01.26.6.88.88 0 01-.26.63.84.84 0 01-.62.25h-3.49v3.51a.82.82 0 01-.25.6.89.89 0 01-1.26 0 .82.82 0 01-.25-.6v-3.53H8.49a2.67 2.67 0 01-1-.2 2.44 2.44 0 01-.83-.58 2.44 2.44 0 01-.58-.83 2.67 2.67 0 01-.2-1L6 7.71zm5.25 7.76a1 1 0 00.06.34.83.83 0 00.19.27 1 1 0 00.29.2.88.88 0 00.32.07h7.88V8.51a.93.93 0 00-.06-.34.66.66 0 00-.19-.27 1.05 1.05 0 00-.27-.2 1 1 0 00-.34-.07l-7.82.06z" /></svg>);
  }
  if(name === 'DirectSelectionToolIcon') {
    return (<svg id="Layer_2" {...rest} height={typeof height === "number" ? height : size} width={typeof width === "number" ? width : size} onClick={onClick} style={style} className={className} fill={color} viewBox="0 0 24 24"><path d="M2.09 3.36a1 1 0 010-.73.86.86 0 01.48-.54A1.06 1.06 0 013 2a1 1 0 01.41.09l18.11 8.57a.92.92 0 01.48.54 1 1 0 010 .74.8.8 0 01-.25.32 1.85 1.85 0 01-.37.19l-7.08 1.76-1.76 7.06a.93.93 0 01-.44.59.88.88 0 01-.72.1.85.85 0 01-.37-.18.93.93 0 01-.26-.33z" /></svg>);
  }
  if(name === 'DragmarksIcon') {
    return (<svg id="Layer_2" {...rest} height={typeof height === "number" ? height : size} width={typeof width === "number" ? width : size} onClick={onClick} style={style} className={className} fill={color} viewBox="0 0 24 24"><defs></defs><rect x="9.15" y="17.97" rx=".35"/><rect x="9.15" y="12.98" width="5.7" height="3.03" rx=".35"/><rect x="9.15" y="7.99" width="5.7" height="3.03" rx=".35"/><rect x="9.15" y="3" width="5.7" height="3.03" rx=".35"/></svg>);
  }
  if(name === 'DrawIcon') {
    return (<svg {...rest} height={typeof height === "number" ? height : size} width={typeof width === "number" ? width : size} onClick={onClick} style={style} className={className} fill={color} viewBox="0 0 24 24"><path d="M12.44 2.56a1.9 1.9 0 012.68 0l6.32 6.32a1.88 1.88 0 010 2.68l-1.25 1.25a1.9 1.9 0 01-2.1.4l-2.21 4.87a.65.65 0 01-.41.35L2.8 22a.64.64 0 01-.8-.8L5.57 8.53a.65.65 0 01.35-.41l4.87-2.21a1.9 1.9 0 01.4-2.1zm-.24 3.15l6.2 6.21a.65.65 0 00.9 0l1.25-1.26a.62.62 0 000-.89l-6.32-6.32a.63.63 0 00-.9 0L12.08 4.7a.65.65 0 000 .9zm-.58 1.21L6.71 9.15 3.89 19.21l5-5a1.44 1.44 0 11.89.89l-5 5 10.06-2.82 2.23-4.91z" fillRule="evenodd" id="Layer_3" /></svg>);
  }
  if(name === 'PenIcon') {
    return (<svg id="Layer_2" {...rest} height={typeof height === "number" ? height : size} width={typeof width === "number" ? width : size} onClick={onClick} style={style} className={className} fill={color} viewBox="0 0 24 24"><path d="M16 3a3.51 3.51 0 011.16-.77A3.62 3.62 0 0118.49 2a3.52 3.52 0 011.31.26 3.51 3.51 0 011.93 1.93 3.48 3.48 0 010 2.64A3.41 3.41 0 0121 8L8.6 20.35a.75.75 0 01-.2.15.64.64 0 01-.21.09L3.17 22a.91.91 0 01-.71-.08.93.93 0 01-.46-.6 2.29 2.29 0 010-.25 1.5 1.5 0 010-.22l1.4-5.05a1.12 1.12 0 01.1-.22.85.85 0 01.14-.19zM5.12 16.53l-.9 3.24 3.26-.88L19.67 6.7a2 2 0 00.33-.56 1.68 1.68 0 00.13-.62 1.69 1.69 0 00-.5-1.18 1.65 1.65 0 00-.51-.34 1.9 1.9 0 00-.63-.11 2 2 0 00-.63.11 1.72 1.72 0 00-.57.36z" /></svg>);
  }
  if(name === 'SelectionToolIcon') {
    return (<svg id="Layer_2" {...rest} height={typeof height === "number" ? height : size} width={typeof width === "number" ? width : size} onClick={onClick} style={style} className={className} fill={color} viewBox="0 0 24 24"><path d="M2.09 3.36a1 1 0 010-.73.86.86 0 01.48-.54A1.06 1.06 0 013 2a1 1 0 01.41.09l18.11 8.57a.92.92 0 01.48.54 1 1 0 010 .74.8.8 0 01-.25.32 1.85 1.85 0 01-.37.19l-7.08 1.76-1.76 7.06a.93.93 0 01-.44.59.88.88 0 01-.72.1.85.85 0 01-.37-.18.93.93 0 01-.26-.33zm10.42 9.83a.8.8 0 01.24-.44 1 1 0 01.46-.26l5-1.25L5 5l6.29 13.28z" /></svg>);
  }
  if(name === 'SettingsIcon') {
    return (<svg id="Layer_2" {...rest} height={typeof height === "number" ? height : size} width={typeof width === "number" ? width : size} onClick={onClick} style={style} className={className} fill={color} viewBox="0 0 24 24"><path d="M2.84 14.49a.85.85 0 01-.6-.24.82.82 0 01-.24-.58.82.82 0 01.84-.84h5a.82.82 0 01.58.24.85.85 0 01.24.6.82.82 0 01-.82.82H6.16v5a.85.85 0 01-.24.6.82.82 0 01-.58.24.82.82 0 01-.84-.84v-5zm3.32-4.16a.85.85 0 01-.24.6.82.82 0 01-.58.24.82.82 0 01-.84-.84V4.49a.82.82 0 01.24-.58.85.85 0 01.6-.24.82.82 0 01.82.82zM8.9 9.25a.82.82 0 01-.24-.58.82.82 0 01.84-.84h1.66V4.49a.82.82 0 01.24-.58.87.87 0 011.2 0 .82.82 0 01.24.58v3.34h1.66a.82.82 0 01.84.84.82.82 0 01-.24.58.85.85 0 01-.6.24h-5a.85.85 0 01-.6-.24zm3.7 10.84a.84.84 0 01-1.44-.6V12a.82.82 0 01.24-.58.87.87 0 011.2 0 .82.82 0 01.24.58v7.5a.85.85 0 01-.24.59zm3-4.16a.87.87 0 010-1.2.82.82 0 01.58-.24h5a.84.84 0 110 1.68H19.5v3.32a.82.82 0 01-.84.84.82.82 0 01-.58-.24.85.85 0 01-.24-.6v-3.32h-1.68a.82.82 0 01-.58-.24zm3.68-3.34a.85.85 0 01-.6.24.82.82 0 01-.58-.24.85.85 0 01-.24-.6v-7.5a.82.82 0 01.82-.82.85.85 0 01.6.24.82.82 0 01.24.58V12a.85.85 0 01-.26.59z" /></svg>);
  }
  return <div>🤷🏽‍♂️ no icon name given</div>
}

export default(props: PropTypes) => {
  const {wrapperStyle} = props;
  return wrapperStyle ? <div style={wrapperStyle}>{getIcon(props)}</div> : getIcon(props)
}
