export {};

declare global {
  interface Window {
    jQuery: any;
    $: any;
    WOW: any;
    Typed: any;   
  }
}

declare module 'react' {
    interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
      // extends React's HTMLAttributes
      name?: string;
    }
  }