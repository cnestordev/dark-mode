import { useLocalStorage } from './useLocalStroage'

export const useDarkMode = (initialValue) => {
    const [value, setValue] = useLocalStorage('darkmode', initialValue)
    return [value, setValue]
}