import Text from "./components/text";
import TrashIcon from "./assets/icons/trash.svg?react";
import CheckIcon from "./assets/icons/check.svg?react";
import PencilIcon from "./assets/icons/pencil.svg?react";
import PlusIcon from "./assets/icons/plus.svg?react";
import SpinnerIcon from "./assets/icons/spinner.svg?react";
import XIcon from "./assets/icons/x.svg?react";
import Icon from "./components/icon";
import Badge from "./components/badge";
import Button from "./components/button";

export default function App() {
  return (
    <div className="grid gap-3">
      <div className="flex flex-col gap-1">
        <Text variant={"body-sm-bold"} className="text-pink-base">
          Olá mundo!
        </Text>
        <Text className="text-green-base">Olá mundo!</Text>
        <Text variant={"body-md-bold"}>Olá mundo!</Text>
        <Text>Levar o dog para passear!</Text>
      </div>

      <div className="flex gap-1">
        <Icon svg={TrashIcon} className="fill-green-base" />
        <Icon svg={CheckIcon} className="fill-green-base" />
        <Icon svg={PencilIcon} className="fill-green-base" />
        <Icon svg={PlusIcon} className="fill-green-base" />
        <Icon svg={SpinnerIcon} animate />
        <Icon svg={XIcon} className="fill-green-base" />
      </div>

      <div>
        <Badge variant="secundary">5</Badge>
        <Badge variant="primary">2 de 5</Badge>
      </div>

      <div>
        <Button icon={PlusIcon}>Nova Tarefa</Button>
      </div>
    </div>
  );
}
