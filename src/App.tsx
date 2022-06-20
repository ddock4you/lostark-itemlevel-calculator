import React, { useRef, useState } from "react";
import usepart from "./hooks/usepart";
import Grade from "./assets/grade";
import ItemPart from "./components/ItemPart";

// 유물(아브)는 20강까지, 에스더는 8강까지

interface ItemInfo {
    grade: string;
    honningLevel: number;
    itemlevel: number;
}

const App = () => {
    const {
        item: head,
        changeGrade,
        changeHonningLevel,
        handleBlur,
        maxHonningLevel,
    } = usepart();
    const {
        item: arms,
        changeGrade: armsChangeGrade,
        changeHonningLevel: armsChangeHonningLevel,
        handleBlur: armsHandleBlur,
        maxHonningLevel: armsMaxHonningLevel,
    } = usepart();

    const headRef = useRef(null);

    const averageLevel = (head.itemLevel + arms.itemLevel) / 2;

    return (
        <div className="wrap">
            티어:{" "}
            <select>
                <option>3티어 (고정)</option>
            </select>
            <div>
                <ItemPart
                    partname="머리"
                    changeGrade={changeGrade}
                    itempart={head}
                    maxHonningLevel={maxHonningLevel}
                    changeHonningLevel={changeHonningLevel}
                    handleBlur={handleBlur}
                />
                <div className="itempart">
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
                                onBlur={handleBlur}
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
                <div className="itempart">
                    <p>팔</p>
                    <dl>
                        <dt>등급</dt>
                        <dd>
                            <select
                                onChange={armsChangeGrade}
                                value={head.grade}
                            >
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
                                value={arms.honningLevel}
                                min="0"
                                max={`${armsMaxHonningLevel(arms.grade)}`}
                                onChange={armsChangeHonningLevel}
                                onBlur={armsHandleBlur}
                            />
                            <input
                                type="range"
                                min="0"
                                max={`${armsMaxHonningLevel(arms.grade)}`}
                                step="1"
                                value={arms.honningLevel}
                                onChange={armsChangeHonningLevel}
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
