import React from "react";
import Grade from "../assets/grade";
import { itemPartInfo } from "../types/itemInfo";

const GradeList = ({ changeGrade, grade }) => {
    return (
        <select onChange={changeGrade} value={grade}>
            {Grade.map(({ name }) => (
                <option value={name} key={name}>
                    {name}
                </option>
            ))}
        </select>
    );
};

export default GradeList;
