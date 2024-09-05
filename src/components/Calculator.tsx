import Input from "./Input";

export default function CalculatorContainer() {
  return (
    <>
      <div className="grid grid-cols-2 w-full">
        <CalculatorForm />
        <ResultsCard />
      </div>
    </>
  );
}

function CalculatorForm() {
  return (
    <div className="flex flex-col">
      <div className="h-64 grid grid-cols-2 col-span-1 gap-4">
        <Input label="Preço da cota" />
        <Input label="Último rendimento" />
        <Input label="Investimento mensal" />
        <Input label="Prazo" />
        <Input label="Qtde de cotas inicial" />
      </div>
      <button className="w-24 mt-8 px-2 py-1.5 rounded-md bg-violet-700 font-medium text-white">
        Calcular
      </button>
    </div>
  );
}

function ResultsCard() {
  return (
    <div className="h-64 col-span-1 bg-violet-700 p-4 rounded-lg text-white grid grid-cols-2 items-center">
      <div className="flex flex-col items-start gap-1">
        <p>Preço da cota</p>
        <span className="font-medium text-2xl">R$ 10.00</span>
      </div>
      <div className="flex flex-col items-start gap-1">
        <p>Preço da cota</p>
        <span className="font-medium text-2xl">R$ 10.00</span>
      </div>
      <div className="flex flex-col items-start gap-1">
        <p>Preço da cota</p>
        <span className="font-medium text-2xl">R$ 10.00</span>
      </div>
      <div className="flex flex-col items-start gap-1">
        <p>Preço da cota</p>
        <span className="font-medium text-2xl">R$ 10.00</span>
      </div>
      <div className="flex flex-col items-start gap-1">
        <p>Preço da cota</p>
        <span className="font-medium text-2xl">R$ 10.00</span>
      </div>
      <div className="flex flex-col items-start gap-1">
        <p>Preço da cota</p>
        <span className="font-medium text-2xl">R$ 10.00</span>
      </div>
    </div>
  );
}
