import "./assets/css/welcome.scss";
import "./assets/css/menu.scss";

export async function createMainElement() {
  return document.createElement("main");
}

// export async function createNavigationMenu() {
//   const element = document.createElement("div");
//   element.setAttribute("class", "dps-menu");
//   element.innerHTML = `
//   <nav>
//     <a class="dps-menu-element" onclick="${router.load(
//       "personal"
//     )}">Personal</a>
//     <a class="dps-menu-element" onclick="${router.load("blog")}">Blog</a>
//     <a class="dps-menu-element" onclick="${router.load("social")}">Social</a>
//   </nav>
//   `;
//   return element;
// }

export function buildWebsite() {
  // createNavigationMenu().then((element) =>
  //   document.querySelector("main").appendChild(element)
  // );
}

buildWebsite();
