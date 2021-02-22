// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fetch from 'node-fetch'
import { NowRequest, NowResponse } from '@vercel/node'

export default async (req: NowRequest, res: NowResponse) => {
  const result = await fetch(
    'https://wakatime.com/oauth/authorize?client_id=fPNJMUJ6C4ZJE1JBU2LM33Pu&response_type=token&redirect_uri=https://dashboard.rosnovsky.us&scope=read_logged_time&force_approve=true'
  )

  res.status(200).send({ codingTime: 8154833.837884 })
}
