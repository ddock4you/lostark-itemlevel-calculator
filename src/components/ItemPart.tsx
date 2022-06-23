import React from "react";
import { itemPartInfo } from "../types/itemInfo";
import GradeList from "./GradeList";

const ItemPart = ({
    partname,
    changeGrade,
    itempart,
    maxHonningLevel,
    changeHonningLevel,
    handleBlur,
}: itemPartInfo) => {
    return (
        <div className="itempart">
            <div>
                <p>{partname}</p>
                <dl>
                    <dt>등급</dt>
                    <dd>
                        <GradeList
                            changeGrade={changeGrade}
                            grade={itempart.grade}
                        />
                    </dd>
                </dl>
                <dl>
                    <dt>강화수치</dt>
                    <dd>
                        <input
                            type="number"
                            value={itempart.honningLevel}
                            min="0"
                            max={`${maxHonningLevel(itempart.grade)}`}
                            onChange={changeHonningLevel}
                            onBlur={handleBlur}
                        />
                        <input
                            type="range"
                            min="0"
                            max={`${maxHonningLevel(itempart.grade)}`}
                            step="1"
                            value={itempart.honningLevel}
                            onChange={changeHonningLevel}
                        />
                    </dd>
                </dl>
            </div>
        </div>
    );
};

export default ItemPart;
