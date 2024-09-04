import { CalculatorContainer } from "./components/Calculator";

export default function App() {
  return (
    <div className="flex flex-col items-center p-24 gap-4">
      <div className="flex flex-col items-start w-full gap-2">
        <h1 className="font-semibold tracking-wide text-5xl">
          Simulador de Fundos Imobiliários
        </h1>
        <p className="text-gray-500">
          Preencha os valores e veja em quanto tempo você terá o rendimento
          desejado!
        </p>
      </div>
      <CalculatorContainer />
    </div>
  );
}
