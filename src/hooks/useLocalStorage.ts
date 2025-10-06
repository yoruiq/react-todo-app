import {useState, useEffect } from 'react'

export  function useLocatStorage<T>(key: string, initialValue: T) {

    const [value, setValue] = useState<T> (() => {
        try {
            const item = window.localStorage.getItem(key)
            console.log(`🔄 Загрузка ${key} из localStorage:`, item)
            return item ? JSON.parse(item) : initialValue
        } catch (error) {
            console.log(`❌ Ошибка загрузки ${key}:`, error)
            return initialValue
        }
    })

    useEffect(() => {
        try {
            console.log(`💾 Сохранение ${key} в localStorage:`, value)
            window.localStorage.setItem(key, JSON.stringify(value))
        } catch (error) {
            console.log(`❌ Ошибка сохранения ${key}: ${error}`)
            console.log(`Ошибка сохранения в localStorage: ${error}`)
        }
    }, [key, value])

    return [value, setValue] as const
}

