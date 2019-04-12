import { Calculator } from "./Calculator";

class Program
{
    public static Main(): void
    {
        // Get input elements
        let inputA = document.getElementById("inputA") as HTMLInputElement;
        let inputB = document.getElementById("inputB") as HTMLInputElement;

        // Get the "result" element
        let result = document.getElementById("result") as HTMLSpanElement;

        // Get the btnResult button
        let btnResult = document.getElementById("btnResult") as HTMLButtonElement;

        let calculator = new Calculator();

        btnResult.onclick = () =>
        {
            let r = calculator.Add(parseFloat(inputA.value), parseFloat(inputB.value));
            result.innerHTML = r.toString();
        };
    }
}
window.onload = () => Program.Main();