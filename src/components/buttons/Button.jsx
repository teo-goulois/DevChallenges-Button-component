import React from "react";
import "./style.scss";

const button = ({
  variant,
  disableShadow,
  disabled,
  startIcon,
  endIcon,
  size,
  color,
  hover,
}) => {
  return (
    <div>
      <p className={`label ${hover && "active"}`}>
        {hover && "&:hover, &:focus"}
        {!hover && (
          <>
            &lt;Button {variant && `variant="${variant}"`}{" "}
            {disabled && "disabled"} {disableShadow && "disableShadow"}{" "}
            {startIcon && `startIcon="${startIcon}"`}{" "}
            {endIcon && `endIcon="${endIcon}"`} {size && `size="${size}"`}{" "}
            {color && `color="${color}"`} /&gt;
          </>
        )}
      </p>
      <button
        className={`${variant && variant} ${hover && "active"} ${
          disableShadow && "disableShadow"
        } ${disabled && "disabled"} ${(startIcon || endIcon) && "icon"} ${
          startIcon && "startIcon"
        } ${endIcon && "endIcon"}
        ${size && size}
        ${color && color}`}
      >
        <div>{startIcon && <LocalGroceryStore />}</div>
        <p>
          {disabled && "Disabled"}
          {color === 'default' && "Default"}
          {color === 'primary' && "Default"}
          {color === 'secondary' && "Secondary"}
          {color === 'danger' && "Danger"}
          {(!color && !disabled) && "Default"}
        </p>
        <div>{endIcon && <LocalGroceryStore />}</div>
      </button>
    </div>
  );
};

export function LocalGroceryStore(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="1.5em"
      height="1.5em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2s-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2s2-.9 2-2s-.9-2-2-2zm-1.45-5c.75 0 1.41-.41 1.75-1.03l3.58-6.49A.996.996 0 0 0 20.01 4H5.21l-.94-2H1v2h2l3.6 7.59l-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6z"
      ></path>
    </svg>
  );
}
export default button;
