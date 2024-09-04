import Input from "./Input";

function CalculatorContainer() {
  return (
    <>
      <div className="grid grid-cols-2 w-full">
        <div className="h-64 col-span-1 grid grid-cols-2 gap-4">
          <Input label="Preço da cota" />
          <Input label="Último rendimento" />
          <Input label="Investimento mensal" />
          <Input
            label="Prazo"
            select
            selectOptions={["Anos", "Meses", "Décadas"]}
          />
          <Input label="Qtde de cotas inicial" />
        </div>
        <div className="h-64 col-span-1 bg-violet-700 p-4 rounded-lg text-white">
          Resultados
        </div>
      </div>
      <input type="checkbox" name="" id="" className="self-start" />
      <button className="self-start">Calcular</button>
    </>
  );
}

export { CalculatorContainer };
