const Cadastro = () => System.import("./components/cadastro/Cadastro.vue"); // lazy loading de componente -> faz com que o bundle seja dividido em chuncks, carregando o componente sob demanda
import Home from "./components/home/Home.vue";

export const routes = [
  {
    path: "",
    component: Home,
    titulo: "Home"
  },
  {
    path: "/cadastro",
    component: Cadastro,
    titulo: "Cadastro"
  }
];
