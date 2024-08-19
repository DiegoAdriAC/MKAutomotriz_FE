type ColType = 'text' | 'number' | 'money' | 'money_decimal' | 'count' | 'combobox'
export interface Columns {
    key: string;
    label: string;
    type: ColType;
    status: boolean;
    total?: boolean;
}