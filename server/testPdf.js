import fs from "fs";
import { PDFParse } from "pdf-parse";

const dataBuffer = fs.readFileSync("./sample.pdf");

const parser = new PDFParse({
    data: dataBuffer
});

const result = await parser.getText();

console.log(result.text);