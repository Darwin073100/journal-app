export const initialState = {
    status: 'checking', //'checking', 'not-authenticated', authenticated
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null
}

export const authenticatedState = {
    status: 'authenticated', //'checking', 'not-authenticated', authenticated
    uid: '9b8rht9',
    email: 'test@domain.com',
    displayName: 'React Typescript Next',
    photoURL: 'https://demo.jpg',
    errorMessage: null
}

export const notAuthenticatedState = {
    status: 'not-authenticated', //'checking', 'not-authenticated', authenticated
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null
}

export const demoUser = {
    uid: '9b8rht9',
    email: 'test@domain.com',
    displayName: 'React Typescript Next',
    photoURL: 'https://demo.jpg',
}