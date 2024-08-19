export type InpType = 'text'
    | 'number'
    | 'tel'
    | 'email'
    | 'password'
    | 'date'
    | 'file'
    | 'radio'
    | 'checkbox'
    | 'search'
    | 'select'
    ;

export interface MainForm {
    key: string,
    label: string,
    type: InpType,
    list?: {
        id: number,
        name: string
    }[]
}
