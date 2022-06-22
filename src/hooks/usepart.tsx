import React, { useState, ChangeEvent } from "react";
import Grade from "../assets/grade";
import { itemInfo } from "../types/itemInfo";

const usepart = () => {
    const [item, setItem] = useState<itemInfo>({
        grade: Grade[0].name,
        honningLevel: 0,
        itemLevel: Grade[0].itemLevel[0],
    });

    const changeGrade = (e: ChangeEvent<HTMLSelectElement>) => {
        const selectedGrade = e.target.value;
        const index = Grade.findIndex(
            ({ name }: { name: string }) => name === e.target.value
        );
        if (index < 0) {
            alert("올바르지 않은 등급입니다.");
            return;
        }

        setItem({
            grade: selectedGrade,
            honningLevel: convertHonningLevel(selectedGrade),
            itemLevel: levelCalculate(
                selectedGrade,
                convertHonningLevel(selectedGrade)
            ),
        });
    };

    const convertHonningLevel = (value: string): number => {
        const max = maxHonningLevel(value);
        const honningLevel = Number(item.honningLevel);
        return honningLevel > max ? max : honningLevel;
    };

    const changeHonningLevel = (e: ChangeEvent<HTMLInputElement>) => {
        const enteredValue = e.target.value;
        if (enteredValue === "") {
            setItem({
                ...item,
                honningLevel: enteredValue,
            });
            return;
        }

        const honningLevel = Number(enteredValue);
        const max = maxHonningLevel(item.grade);
        const finalValue = honningLevel > max ? max : honningLevel;

        setItem({
            ...item,
            honningLevel: finalValue,
            itemLevel: levelCalculate(item.grade, finalValue),
        });
    };

    const levelCalculate = (grade: string, honningLevel: number): number => {
        const index = Grade.findIndex(
            ({ name }: { name: string }) => name === grade
        );

        if (index < 0) {
            alert(
                `잘못된 등급으로 레벨 계산이 불가능합니다.\n선택된 등급: ${grade}`
            );
        }
        return Grade[index].itemLevel[honningLevel];
    };

    const maxHonningLevel = (grade: string): number => {
        const index = Grade.findIndex(
            ({ name }: { name: string }) => name === grade
        );
        return Grade[index].itemLevel.length - 1;
    };

    const handleBlur = (e: ChangeEvent<HTMLInputElement>) => {
        if (!e.target.value) {
            setItem({
                ...item,
                honningLevel: 0,
                itemLevel: levelCalculate(item.grade, 0),
            });
        }
    };

    return {
        item,
        changeGrade,
        changeHonningLevel,
        handleBlur,
        maxHonningLevel,
    };
};

export default usepart;
