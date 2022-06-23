import React, { useRef, useState, ChangeEvent } from "react";
import usepart from "./hooks/usepart";
import GradeList from "./components/GradeList";
import ItemPart from "./components/ItemPart";
import styled from "styled-components";
import Grade from "./assets/grade";
import { INIT_ITEM_STAT } from "./assets/init";

// 유물(아브)는 20강까지, 에스더는 8강까지
// Head, Shoulders, Chest, Hands and Legs.

const ItemGroup = styled.div`
    & {
        display: flex;
        flex-wrap: wrap;
    }

    & > div {
        border: 1px solid #ddd;
    }
`;

const App = () => {
    const [allGrade, setAllGrade] = useState<string>(Grade[0].name);
    const [allHonningLevel, setAllHonningLevel] = useState<number | string>(0);

    const { maxHonningLevel } = usepart();

    const {
        item: head,
        changeGrade: headChangeGrade,
        changeHonningLevel: headChangeHonningLevel,
        handleBlur: headHandleBlur,
        maxHonningLevel: headMaxHonningLevel,
        setItem: headSetItem,
    } = usepart();

    const {
        item: hands,
        changeGrade: handsChangeGrade,
        changeHonningLevel: handsChangeHonningLevel,
        handleBlur: handsHandleBlur,
        maxHonningLevel: handsMaxHonningLevel,
        setItem: handsSetItem,
    } = usepart();

    const {
        item: shoulders,
        changeGrade: shouldersChangeGrade,
        changeHonningLevel: shouldersChangeHonningLevel,
        handleBlur: shouldersHandleBlur,
        maxHonningLevel: shouldersMaxHonningLevel,
        setItem: shouldersSetItem,
    } = usepart();

    const {
        item: chest,
        changeGrade: chestChangeGrade,
        changeHonningLevel: chestChangeHonningLevel,
        handleBlur: chestHandleBlur,
        maxHonningLevel: chestMaxHonningLevel,
        setItem: chestSetItem,
    } = usepart();

    const {
        item: legs,
        changeGrade: legsChangeGrade,
        changeHonningLevel: legsChangeHonningLevel,
        handleBlur: legsHandleBlur,
        maxHonningLevel: legsMaxHonningLevel,
        setItem: legsSetItem,
    } = usepart();

    const {
        item: weapon,
        changeGrade: weaponChangeGrade,
        changeHonningLevel: weaponChangeHonningLevel,
        handleBlur: weaponHandleBlur,
        maxHonningLevel: weaponMaxHonningLevel,
        setItem: weaponSetItem,
    } = usepart();

    const averageLevel = (
        (head.itemLevel +
            shoulders.itemLevel +
            chest.itemLevel +
            legs.itemLevel +
            hands.itemLevel +
            weapon.itemLevel) /
        6
    ).toFixed(2);

    const changeAllGrade = (e: ChangeEvent<HTMLSelectElement>) => {
        setAllGrade(e.target.value);
        headChangeGrade(e);
        legsChangeGrade(e);
        handsChangeGrade(e);
        shouldersChangeGrade(e);
        chestChangeGrade(e);
        weaponChangeGrade(e);
    };

    const changeAllHoningLevel = (e: ChangeEvent<HTMLInputElement>) => {
        const enteredValue = e.target.value;
        if (enteredValue === "") {
            setAllHonningLevel(enteredValue);
            return;
        }

        const honningLevel = Number(enteredValue);
        const max = maxHonningLevel(allGrade);
        const finalValue = honningLevel > max ? max : honningLevel;
        setAllHonningLevel(finalValue);

        headChangeHonningLevel(e);
        handsChangeHonningLevel(e);
        shouldersChangeHonningLevel(e);
        chestChangeHonningLevel(e);
        legsChangeHonningLevel(e);
        weaponChangeHonningLevel(e);
    };

    const handleBlur = (e: ChangeEvent<HTMLInputElement>) => {
        if (!e.target.value) {
            setAllHonningLevel(0);
            headHandleBlur(e);
            handsHandleBlur(e);
            shouldersHandleBlur(e);
            chestHandleBlur(e);
            legsHandleBlur(e);
            weaponHandleBlur(e);
        }
    };

    const resetAllStat = () => {
        setAllGrade(Grade[0].name);
        setAllHonningLevel(0);
        headSetItem(INIT_ITEM_STAT);
        handsSetItem(INIT_ITEM_STAT);
        shouldersSetItem(INIT_ITEM_STAT);
        chestSetItem(INIT_ITEM_STAT);
        legsSetItem(INIT_ITEM_STAT);
        weaponSetItem(INIT_ITEM_STAT);
    };

    return (
        <div className="wrap">
            티어:{" "}
            <select>
                <option>3티어 (고정)</option>
            </select>
            <div className="change-all" style={{ border: "1px solid #ddd" }}>
                <p>일괄수정</p>
                <dl>
                    <dt>등급</dt>
                    <dd>
                        <GradeList
                            changeGrade={changeAllGrade}
                            grade={allGrade}
                        />
                    </dd>
                </dl>
                <dl>
                    <dt>강화수치</dt>
                    <dd>
                        <input
                            type="number"
                            value={allHonningLevel}
                            min="0"
                            max={maxHonningLevel(allGrade)}
                            onChange={changeAllHoningLevel}
                            onBlur={handleBlur}
                        />
                        <input
                            type="range"
                            min="0"
                            max={maxHonningLevel(allGrade)}
                            step="1"
                            value={allHonningLevel}
                            onChange={changeAllHoningLevel}
                        />
                    </dd>
                </dl>
                <button type="button" onClick={resetAllStat}>
                    초기화
                </button>
            </div>
            <ItemGroup>
                <ItemPart
                    partname="머리"
                    changeGrade={headChangeGrade}
                    itempart={head}
                    maxHonningLevel={headMaxHonningLevel}
                    changeHonningLevel={headChangeHonningLevel}
                    handleBlur={headHandleBlur}
                />
                <ItemPart
                    partname="팔"
                    changeGrade={handsChangeGrade}
                    itempart={hands}
                    maxHonningLevel={handsMaxHonningLevel}
                    changeHonningLevel={handsChangeHonningLevel}
                    handleBlur={handsHandleBlur}
                />
                <ItemPart
                    partname="어깨"
                    changeGrade={shouldersChangeGrade}
                    itempart={shoulders}
                    maxHonningLevel={shouldersMaxHonningLevel}
                    changeHonningLevel={shouldersChangeHonningLevel}
                    handleBlur={shouldersHandleBlur}
                />
                <ItemPart
                    partname="상의"
                    changeGrade={chestChangeGrade}
                    itempart={chest}
                    maxHonningLevel={chestMaxHonningLevel}
                    changeHonningLevel={chestChangeHonningLevel}
                    handleBlur={chestHandleBlur}
                />
                <ItemPart
                    partname="하의"
                    changeGrade={legsChangeGrade}
                    itempart={legs}
                    maxHonningLevel={legsMaxHonningLevel}
                    changeHonningLevel={legsChangeHonningLevel}
                    handleBlur={legsHandleBlur}
                />
                <ItemPart
                    partname="무기"
                    changeGrade={weaponChangeGrade}
                    itempart={weapon}
                    maxHonningLevel={weaponMaxHonningLevel}
                    changeHonningLevel={weaponChangeHonningLevel}
                    handleBlur={weaponHandleBlur}
                />
            </ItemGroup>
            <p>종합 평균 레벨: {averageLevel}</p>
        </div>
    );
};

export default App;
