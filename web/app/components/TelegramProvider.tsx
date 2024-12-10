import * as TelegramUI from "@telegram-apps/telegram-ui"
const { AppRoot } = TelegramUI

import "@telegram-apps/telegram-ui/dist/styles.css"
import { PropsWithChildren, useEffect } from "react"

import "@telegram-apps/telegram-ui/dist/styles.css"

// mock environment in case, we are outside Telegram
import {
  initData,
  postEvent,
  retrieveLaunchParams,
} from "@telegram-apps/sdk-react"
import { init } from "~/lib/tma/init"
import "~/lib/tma/mock-env"

function TelegramProvider({ children }: PropsWithChildren) {
  init(retrieveLaunchParams().startParam === "debug" || import.meta.env.DEV)
  useEffect(() => {
    try {
      if (initData) {
        postEvent("web_app_request_fullscreen")
        postEvent("web_app_setup_swipe_behavior", {
          allow_vertical_swipe: false,
        })
      }
    } catch (e) {
      console.log("The app runs outside of the telegram")
    }
  }, [])
  return (
    <AppRoot appearance={"dark"} platform={"base"}>
      {children}
    </AppRoot>
  )
}

export default TelegramProvider
