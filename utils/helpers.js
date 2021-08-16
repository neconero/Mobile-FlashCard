import React from 'react'
import AsyncStorage  from '@react-native-async-storage/async-storage'
import { Notifications, Permissions } from 'expo'

const NOTIFICATION_KEY = 'MobileFlashcards: notifications'

export function getDailyReminderValue(){
    return{
        today: "👋🏿 don't forget to complete quiz today!"
    }
}

export function clearLocalNotification(){
    return AsyncStorage.removeItem(NOTIFICATION_KEY)
        .then(Notifications.cancelAllScheduledNotificationAsync)
}

function createNotification(){
    return{
        title: 'Complete Quiz!',
        body: "👋🏿 don't forget to complete quiz today!",
        ios: {
            sound: true,
        },
        android: {
            sound: true,
            priority: 'high',
            sticky: false,
            vibrate: true,
        }
    }
}

export function setLocalNotification(){
    AsyncStorage.getItem(NOTIFICATION_KEY)
        .then(JSON.parse)
        .then( data => {
            if(data === null){
                Permissions.async(Permissions.NOTIFICATIONS)
                    .then(({status}) => {
                        if(status === 'granted'){
                            Notifications.cancelAllScheduledNotificationsAsync()

                            let tomorrow = new Date()
                            tomorrow.setDate(tomorrow.getDate() + 1)
                            tomorrow.setHours(15)
                            tomorrow.setMinutes(0)

                            Notifications.scheduledNotificationsAsync(
                                createNotification(),
                                {
                                    time: tomorrow,
                                    repeat: 'day'
                                }
                            )

                            AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
                        }
                    })
            }
        })
}