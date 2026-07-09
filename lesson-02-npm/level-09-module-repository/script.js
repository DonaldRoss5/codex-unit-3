import figlet from "figlet";

async function fig() {
  const text = await figlet.text("Hello Figlet");
  console.log(text);
}

fig();
