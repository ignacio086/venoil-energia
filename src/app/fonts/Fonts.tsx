import { Poppins} from "next/font/google";
import localFont from "next/font/local";

export const popt = localFont({
  src: [
    {
      path: "./din-bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
});
//export const popt = Poppins({ weight: ["700"], subsets: ["latin"] });
//export const pop = Poppins({ weight: ["400"], subsets: ["latin"] });
export const pop = localFont({
    src: [
      {
        path: "./Gotham-Light.otf",
        weight: "400",
        style: "light",
      },
    ],
  });