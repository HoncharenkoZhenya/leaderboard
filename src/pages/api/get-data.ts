import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import fs from 'fs'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<string>,
) {
    try {
        const fileData = fs.readFileSync('/tmp/leaderboard.json', 'utf8')

        const data = JSON.parse(fileData)

        const createdTS = data.createdTS
        const currentTS = new Date().getTime()

        const diffTS = currentTS - createdTS

        if (diffTS < 1000 * 60 * 20) {
            return res.status(200).json(data.response)
        }
    } catch {
    }

    const response = await axios.get('https://adventofcode.com/2024/leaderboard/private/view/4491394.json', {
        headers: {
            Cookie: 'session=53616c7465645f5f00a41718755edf706c0586e8384d83d05c0c3822617ddab342179ef0a8ffcb25678b66de0cffadbbe894704288f5f74573d7658c9466d486;',
        },
    })

    fs.writeFileSync('/tmp/leaderboard.json', JSON.stringify({
        response: response.data,
        createdTS: new Date().getTime(),
    }))

    res.status(200).json(response.data)
}
