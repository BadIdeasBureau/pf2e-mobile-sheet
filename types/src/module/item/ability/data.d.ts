import { ActionType, BaseItemSourcePF2e, Frequency, FrequencySource, ItemSystemData, ItemSystemSource, ItemTraitsNoRarity } from "@item/base/data/system.ts";
import { OneToThree } from "@module/data.ts";
import { ActionCategory, ActionTrait } from "./types.ts";

type AbilitySource = BaseItemSourcePF2e<"action", AbilitySystemSource>;
interface AbilityTraits extends ItemTraitsNoRarity<ActionTrait> {
}
interface AbilitySystemSource extends ItemSystemSource {
    traits: AbilityTraits;
    actionType: {
        value: ActionType;
    };
    actions: {
        value: OneToThree | null;
    };
    category: ActionCategory | null;
    deathNote: boolean;
    frequency?: FrequencySource;
    level?: never;
    /** A self-applied effect for simple actions */
    selfEffect?: SelfEffectReferenceSource | null;
}
interface SelfEffectReferenceSource {
    uuid: ItemUUID;
    name: string;
}
interface AbilitySystemData extends Omit<AbilitySystemSource, "description">, Omit<ItemSystemData, "level" | "traits"> {
    frequency?: Frequency;
    /** A self-applied effect for simple actions */
    selfEffect: SelfEffectReference | null;
}
interface SelfEffectReference extends SelfEffectReferenceSource {
    img?: Maybe<ImageFilePath>;
}

export type { AbilitySource, AbilitySystemData, AbilityTraits, SelfEffectReference, SelfEffectReferenceSource };
