import React, { useRef, useState } from "react";
import Grade from "./assets/grade";

console.log(Grade);

// 유물(아브)는 20강까지, 에스더는 8강까지

interface ItemInfo {
    grade: string;
    honningLevel: number;
    itemlevel: number;
}

const App = () => {
    const [head, setHead] = useState({
        grade: Grade[0].name,
        honningLevel: 0,
        itemLevel: Grade[0].itemLevel[0],
    });
    const headRef = useRef(null);

    const changeGrade = (e) => {
        const index = Grade.findIndex(
            ({ name }: { name: string }) => name === e.target.value
        );
        if (index < 0) {
            alert("올바르지 않은 등급입니다.");
            return;
        }

        const convertHonningLevel = (): number => {
            const max = maxHonningLevel(e.target.value);
            return head.honningLevel > max ? max : head.honningLevel;
        };

        setHead({
            grade: e.target.value,
            honningLevel: convertHonningLevel(),
            itemLevel: levelCalculate(e.target.value, convertHonningLevel()),
        });
    };

    const changeHonningLevel = (e) => {
        setHead({
            ...head,
            honningLevel: e.target.value,
            itemLevel: levelCalculate(head.grade, e.target.value),
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

    const handleBlur = (e) => {
        if (!e.target.value) {
            setHead({ ...head, itemLevel: 0 });
        }
    };

    const averageLevel = head.itemLevel;

    return (
        <div className="wrap">
            티어:{" "}
            <select>
                <option>3티어 (고정)</option>
            </select>
            <div className="">
                <div>
                    <p>머리</p>
                    <dl>
                        <dt>등급</dt>
                        <dd>
                            <select onChange={changeGrade} value={head.grade}>
                                {Grade.map(({ name }) => (
                                    <option value={name} key={name}>
                                        {name}
                                    </option>
                                ))}
                            </select>
                        </dd>
                    </dl>
                    <dl>
                        <dt>강화수치</dt>
                        <dd>
                            <input
                                type="number"
                                value={head.honningLevel}
                                min="0"
                                max={`${maxHonningLevel(head.grade)}`}
                                onChange={changeHonningLevel}
                                ref={headRef}
                            />
                            <input
                                type="range"
                                min="0"
                                max={`${maxHonningLevel(head.grade)}`}
                                step="1"
                                value={head.honningLevel}
                                onChange={changeHonningLevel}
                            />
                        </dd>
                    </dl>
                </div>
            </div>
            <p>종합 평균 레벨: {averageLevel}</p>
        </div>
    );
};

export default App;
