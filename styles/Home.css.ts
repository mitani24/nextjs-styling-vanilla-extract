import { style } from "@vanilla-extract/css";

export const hello = style({
  fontFamily: "Helvetica, Arial, sans-serif",
  fontSize: 15,
  background: "#eee",
  textAlign: "center",
  transition: "100ms ease-in background",
  padding: 100,
  ":hover": {
    background: "#ccc",
  },
});
