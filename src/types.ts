export type Preset = Readonly<
	Record<
		`${number}-${number}-${number}`, // date (yyyy-mm-dd)
		ReadonlyArray<string> // names (holiday, anniversary)
	>
>;

export type Presets = Readonly<Record<`y${number}`, Preset>>;
