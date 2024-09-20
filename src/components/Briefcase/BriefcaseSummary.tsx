import { formatValue } from "utils/postPerformActions/textFormater";
import Text from "../InteractiveReused/Text";

interface summaryProps {
  value: number;
  valueChange: number;
  percent: number;
}
function BriefcareSummary({ value, valueChange, percent }: summaryProps) {
  return (
    <>
      <Text variant={"normal"} size={"normal"}>
        <pre>{formatValue(Number(value))} USD </pre>
      </Text>
      <Text variant={valueChange > 0 ? "priceUp" : "priceDown"} size={"middle"}>
        {valueChange > 0 ? "+" : "-"} {formatValue(Number(valueChange))} {"("}
        {formatValue(Number(percent))}%{")"}
      </Text>
    </>
  );
}

export default BriefcareSummary;
