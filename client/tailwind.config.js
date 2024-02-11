/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "desktop-cover":
          "url('https://images.unsplash.com/photo-1581368076903-c20fee986735?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGNoZXNzfGVufDB8fDB8fHww')",
        "mobile-cover":
          "url('https://images.unsplash.com/photo-1630310414810-f38319ae164c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hlc3MlMjBtb2JpbGUlMjB3YWxscGFwZXJ8ZW58MHx8MHx8fDA%3D')",
      },
    },
  },
  plugins: [],
};
