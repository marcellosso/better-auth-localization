import { createTranslationObject } from "../utils/create-translation-object";

export const PT_BR = createTranslationObject("pt-BR");
export const PT_PT = createTranslationObject("pt-PT");

export const LOCALES = {
	"pt-BR": PT_BR,
	"pt-PT": PT_PT,
} as const;
