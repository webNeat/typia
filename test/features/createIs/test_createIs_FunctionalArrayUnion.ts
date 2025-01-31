import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { FunctionalArrayUnion } from "../../structures/FunctionalArrayUnion";

export const test_createIs_FunctionalArrayUnion = _test_is(
    "FunctionalArrayUnion",
    FunctionalArrayUnion.generate,
    typia.createIs<FunctionalArrayUnion>(),
    FunctionalArrayUnion.SPOILERS,
);
