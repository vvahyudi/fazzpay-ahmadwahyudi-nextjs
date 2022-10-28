/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primaryblue: "#6379F4",
                primarygreen: "#1EC15F",
                primaryred: "#FF5B37",
                primarydark: "#3A3D42",
                primarywhite: "#E5E5E5"
            },
            backgroundImage: {
                bluepattern: "url('/src/assets/img/authbackground.png')"
            }
        }
    },
    plugins: [require("daisyui"), require("@tailwindcss/forms")]
};
