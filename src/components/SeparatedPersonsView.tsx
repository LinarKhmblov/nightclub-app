import { memo } from "react";
import { ISeparatedPersons } from "../App";
import { SeparatedPersonsList } from "./SeparatedPersonsList";

export const SeparatedPersonsView = memo((separatedPersons: ISeparatedPersons) => {
    return (
        <div className="separated-persons">
          <SeparatedPersonsList persons={separatedPersons.dancingPersons} title="DANCING PERSONS"/>
          <SeparatedPersonsList persons={separatedPersons.drinkingPersons} title="DRINKING PERSONS"/>
        </div>
      )
});