/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSessionStorage } from '@remix-run/node'
import { SESSION_COOKIE_NAME } from './constants'
import * as db from '~/db'

export type QuinPatientSessionData = {
  user: {
    idToken: string
    accessToken: {
      value: string
      expires: number
    }
    refreshToken?: {
      value: string
      expires: number
    }
  }
}

// export the whole sessionStorage object
export const sessionStorage = createSessionStorage<QuinPatientSessionData>({
  cookie: {
    name: SESSION_COOKIE_NAME,
    secrets: [process.env.SESSION_COOKIE_SECRET as string],
    sameSite: 'lax',
  },
  async createData(data, _expires) {
    const id = await db.insert(JSON.stringify(data))
    return id
  },
  async readData(id) {
    const data = await db.get(id)
    if (!data) return undefined
    return JSON.parse(data)
  },
  async updateData(id, data, _expires) {
    console.log('update data ', id, data)
    await db.update(id, JSON.stringify(data))
  },
  async deleteData(id) {
    await db.remove(id)
  },
})

export const { getSession, commitSession, destroySession } = sessionStorage
