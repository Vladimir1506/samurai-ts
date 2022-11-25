export type StateType = {
    posts: Array<PostType>
    contacts: Array<ContactType>
    messages: Array<string>
}
export type PostType = {
    id: number,
    postText: string,
    likesCount: number
}
export type ContactType = {
    id: number,
    name: string,
}
export const state: StateType = {
    posts: [
        {id: 1, postText: 'POST1', likesCount: 4},
        {id: 2, postText: 'POST2', likesCount: 2},
        {id: 3, postText: 'POST3', likesCount: 6},
        {id: 4, postText: 'POST4', likesCount: 1},
    ],
    contacts: [
        {id: 1, name: 'Misha'},
        {id: 2, name: 'Peter'},
        {id: 3, name: 'Alex'},
        {id: 4, name: 'Victor'},
        {id: 5, name: 'Liza'},
    ],
    messages: [
        'Hello!',
        'How are you?',
        'Fine!',
    ]
}