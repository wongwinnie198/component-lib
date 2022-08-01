import React, { MouseEventHandler } from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

//compute classnames 

export const CustomButton = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(({ children }, ref) => {
  return (
    <button ref={ref as React.ForwardedRef<HTMLButtonElement>}>
      {children}
    </button>
  );
});

const ref = React.createRef();
<CustomButton>Click</CustomButton>;
