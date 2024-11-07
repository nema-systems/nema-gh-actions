import * as core from '@actions/core'
import * as fs from 'fs'
import { wait } from './wait'

/**
 * The main function for the action.
 * @returns {Promise<void>} Resolves when the action is complete.
 */
export async function run(): Promise<void> {
  try {
    const filePath = core.getInput('file', { required: true })
    const projectUrl = core.getInput('project', { required: true })
    const globalId = core.getInput('id', { required: true })

    const [tenant, workspace, project] = projectUrl.split('/')

    // Check if the file exists
    if (!fs.existsSync(filePath)) {
      core.setFailed(`File not found: ${filePath}`)
      return
    }

    const idToken = await core.getIDToken()

    // submit file to nemasystems
    const response = await fetch(
      `https://api.nemasystems.com/api/${tenant}/${workspace}/${project}/artifacts/apps/${globalId}`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${idToken}`
        }
      }
    )

    console.log({ response })

    console.log({ filePath, projectUrl, globalId, idToken })
  } catch (error) {
    // Fail the workflow run if an error occurs
    if (error instanceof Error) core.setFailed(error.message)
  }
}
