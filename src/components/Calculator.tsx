import { ChangeEvent, useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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

type FormData = {
  price: string;
  lastGain: string;
  monthlyInvest: string;
  time: string;
  quantity: string;
  timeCategory: string;
};

function CalculatorForm() {

  const [formData, setFormData] = useState<FormData>({
    price: "",
    lastGain: "",
    monthlyInvest: "",
    time: "",
    quantity: "",
    timeCategory: "year"
  });

  const [validationErrors, setValidationErrors] = useState<Omit<FormData, "timeCategory">>({
    price: "",
    lastGain: "",
    monthlyInvest: "",
    time: "",
    quantity: "",
  });

  // Function to update the form data from an input
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      return { ...prevData, [name]: value };
    });
  };

  // Function to update the time category
  const handleTimeChange = (timeCategory: string) => {
    setFormData((prevData) => {
      return { ...prevData, timeCategory }
    })
  }

  // Function to validate the form values before try calculate
  const validateForm = (): boolean => {
    let isValid: boolean = true;
    const errors: FormData = {} as FormData;

    if (!formData.price) {
      errors.price = "Preço da cota é obrigatório";
      isValid = false;
    } else if (!formData.price.match(/^\d{1,3}(?:\.\d{3})*(?:,\d{2})?$/)) {
      errors.price = "Preço da cota deve ser um número";
      isValid = false;
    }

    if (!formData.lastGain) {
      errors.lastGain = "Último rendimento é obrigatório";
      isValid = false;
    } else if (!formData.lastGain.match(/^\d{1,3}(?:\.\d{3})*(?:,\d{2})?$/)) {
      errors.lastGain = "Último rendimento deve ser um número";
      isValid = false;
    }

    if (!formData.monthlyInvest) {
      errors.monthlyInvest = "Investimento mensal é obrigatório";
      isValid = false;
    } else if (
      !formData.monthlyInvest.match(/^\d{1,3}(?:\.\d{3})*(?:,\d{2})?$/)
    ) {
      errors.monthlyInvest = "Investimento mensal deve ser um número";
      isValid = false;
    }

    if (!formData.time) {
      errors.time = "Prazo é obrigatório";
      isValid = false;
    } else if (!formData.time.match(/[0-9]/)) {
      errors.time = "Prazo deve ser um número";
      isValid = false;
    }

    if (!formData.quantity) {
      errors.quantity = "Qtde de cotas inicial é obrigatório";
      isValid = false;
    } else if (!formData.quantity.match(/[0-9]/)) {
      errors.quantity = "Qtde de cotas inicial deve ser um número";
      isValid = false;
    }

    setValidationErrors(errors);
    return isValid;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log(process.env.API_KEY)
      console.log(
        `Formulário enviado com as seguintes informações: ${JSON.stringify(
          formData,
          null,
          2
        )}`
      );
    }
  };

  return (
    <div className="flex flex-col">
      <div className="h-80 grid grid-cols-2 col-span-1 gap-4">
        <Input
          label="Preço da cota"
          name="price"
          value={formData.price}
          onChange={handleInputChange}
          className={`${
            validationErrors.price ? "outline-red-500" : "outline-violet-700"
          }`}
          validationError={validationErrors.price}
        />
        <Input
          label="Último rendimento"
          name="lastGain"
          value={formData.lastGain}
          onChange={handleInputChange}
          className={`${
            validationErrors.lastGain ? "outline-red-500" : "outline-violet-700"
          }`}
          validationError={validationErrors.lastGain}
        />
        <Input
          label="Investimento mensal"
          name="monthlyInvest"
          value={formData.monthlyInvest}
          onChange={handleInputChange}
          className={`${
            validationErrors.monthlyInvest
              ? "outline-red-500"
              : "outline-violet-700"
          }`}
          validationError={validationErrors.monthlyInvest}
        />
        <div className="flex flex-row">
        <Input
          label="Prazo"
          name="time"
          value={formData.time}
          onChange={handleInputChange}
          className={`${
            validationErrors.time ? "outline-red-500" : "outline-violet-700"
          } w-[260px] rounded-r-none`}
          validationError={validationErrors.time}
        />
        <Select defaultValue="year" onValueChange={(value) => handleTimeChange(value)}>
          <SelectTrigger className="w-[120px] rounded-l-none mt-8 bg-violet-700 text-white outline-none">
            <SelectValue placeholder="Prazo" />
          </SelectTrigger>
          <SelectContent className="bg-violet-700 text-white">
            <SelectGroup>
              <SelectLabel>Categoria</SelectLabel>
              <SelectItem value="day">Dias</SelectItem>
              <SelectItem value="month">Meses</SelectItem>
              <SelectItem value="year">Anos</SelectItem>
              <SelectItem value="decade">Décadas</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        </div>
        <Input
          label="Qtde de cotas inicial"
          name="quantity"
          value={formData.quantity}
          onChange={handleInputChange}
          className={`${
            validationErrors.quantity ? "outline-red-500" : "outline-violet-700"
          }`}
          validationError={validationErrors.quantity}
        />
      </div>
      <button
        onClick={handleSubmit}
        className="w-28 mt-10 px-2 py-1.5 rounded-md bg-violet-700 text-white"
      >
        Calcular
      </button>
    </div>
  );
}

function ResultsCard() {
  return (
    <div className="h-64 col-span-1 bg-violet-700 p-4 rounded-lg text-white grid grid-cols-2 items-center">
      <div className="flex flex-col items-start gap-1">
        <p className="font-medium">Prazo</p>
        <span className="font-semibold text-2xl">R$ 10.00</span>
      </div>
      <div className="flex flex-col items-start gap-1">
        <p className="font-medium">Preço</p>
        <span className="font-semibold text-2xl">R$ 10.00</span>
      </div>
      <div className="flex flex-col items-start gap-1">
        <p className="font-medium">Último rendimento</p>
        <span className="font-semibold text-2xl">R$ 10.00</span>
      </div>
      <div className="flex flex-col items-start gap-1">
        <p className="font-medium">Total investido</p>
        <span className="font-semibold text-2xl">R$ 10.00</span>
      </div>
      <div className="flex flex-col items-start gap-1">
        <p className="font-medium">Total reinvestido</p>
        <span className="font-semibold text-2xl">R$ 10.00</span>
      </div>
      <div className="flex flex-col items-start gap-1">
        <p className="font-medium">Dividendos mensais ao final</p>
        <span className="font-semibold text-2xl">R$ 10.00</span>
      </div>
    </div>
  );
}
